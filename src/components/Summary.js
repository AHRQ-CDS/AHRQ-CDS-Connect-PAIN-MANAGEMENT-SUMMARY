import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Collapsible from 'react-collapsible';
import ReactTooltip from 'react-tooltip';
import ReactTable from 'react-table';
import ReactModal from 'react-modal';

import summaryMap from './summary.json';
import * as formatit from '../helpers/formatit';
import * as sortit from '../helpers/sortit';

import MedicalHistoryIcon from '../icons/MedicalHistoryIcon';
import PainIcon from '../icons/PainIcon';
import TreatmentsIcon from '../icons/TreatmentsIcon';
import RiskIcon from '../icons/RiskIcon';

import InclusionBanner from './InclusionBanner';
import ExclusionBanner from './ExclusionBanner';
import InfoModal from './InfoModal';
import DevTools from './DevTools';
import doCDSCall from '../utils/executeCDSHooksCall';
import getDecisionType from '../utils/getDecisionType';

export default class Summary extends Component {
  constructor () {
    super(...arguments);

    this.state = {
      showModal: false,
      modalSubSection: null
    };

    this.subsectionTableProps = { id: 'react_sub-section__table'};

    ReactModal.setAppElement('body');
  }

  componentDidMount () {
    if (getDecisionType === 'externalCDS') {
      doCDSCall(this.props.collector)
          .then((result1) => {
            this.setState({result1:result1});
          });
    }
  }

  handleOpenModal = (modalSubSection,event) => {
    //only open modal   on 'enter' or click
    if(event.keyCode === 13 || event.type === "click") {
        this.setState({showModal: true, modalSubSection});
    }
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  isSectionFlagged(section) {
    const { sectionFlags } = this.props;
    const subSections = Object.keys(sectionFlags[section]);

    for (let i = 0; i < subSections.length; ++i) {
      if (this.isSubsectionFlagged(section, subSections[i])) {
        return true;
      }
    }

    return false;
  }

  isSubsectionFlagged(section, subSection) {
    const { sectionFlags } = this.props;
    if (sectionFlags[section][subSection] === true) {
      return true;
    } else if (sectionFlags[section][subSection] === false) {
      return false;
    } else {
      return sectionFlags[section][subSection].length > 0;
    }
  }

  // if flagged, returns flag text, else returns false
  isEntryFlagged(section, subSection, entry) {
    const { sectionFlags } = this.props;

    let flagged = false;
    sectionFlags[section][subSection].forEach((flag) => {
      if (flag.entryId === entry._id) {
        flagged = flag.flagText;
      }
    });

    return flagged;
  }

  renderNoEntries(section, subSection) {
    const flagged = this.isSubsectionFlagged(section, subSection.dataKey);
    const flaggedClass = flagged ? 'flagged' : '';
    const flagText = this.props.sectionFlags[section][subSection.dataKey];
    const tooltip = flagged ? flagText : '';

    return (
      <div className="table">
        <div className="no-entries">
          <FontAwesomeIcon
            className={`flag flag-no-entry ${flaggedClass}`}
            icon="exclamation-circle"
            title={`flag: ${tooltip}`}
            data-tip={tooltip}
            role="tooltip"
            tabIndex={0}
          />
          no entries found
        </div>
      </div>
    );
  }

  renderTable(table, entries, section, subSection, index) {
    // If a filter is provided, only render those things that have the filter field (or don't have it when it's negated)
    let filteredEntries = entries;
    if (table.filter && table.filter.length > 0) {
      // A filter starting with '!' is negated (looking for absence of that field)
      const negated = table.filter[0] === '!';
      const filter = negated ? table.filter.substring(1) : table.filter;
      filteredEntries = entries.filter(e => negated ? e[filter] == null : e[filter] != null);
    }
    if (filteredEntries.length === 0) return null;

    const headers = Object.keys(table.headers);

    let columns = [
      {
        id: 'flagged',
        Header: <span aria-label="flag"></span>,
        accessor: (entry) => this.isEntryFlagged(section, subSection.dataKey, entry),
        Cell: (props) =>
          <FontAwesomeIcon
            className={`flag flag-entry ${props.value ? 'flagged' : ''}`}
            icon="exclamation-circle"
            title={props.value ? `flag: ${props.value}` : 'flag'}
            data-tip={props.value ? props.value : ''}
            role="tooltip"
            tabIndex={0}
          />,
        sortable: false,
        width: 35,
        minWidth: 35
      }
    ];

    headers.forEach((header) => {
      const headerKey = table.headers[header];

      const column = {
        id: header,
        Header: () => <span className="col-header">{header}</span>,
        accessor: (entry) => {
          let value = entry[headerKey];
          if (headerKey.formatter) {
            const { result } = this.props;
            let formatterArguments = headerKey.formatterArguments || [];
            value = formatit[headerKey.formatter](result, entry[headerKey.key], ...formatterArguments);
          }

          return value;
        },
        sortable: headerKey.sortable !== false
      };

      if (column.sortable && headerKey.formatter) {
        switch(headerKey.formatter) {
          case 'dateFormat': case 'dateAgeFormat':
            column.sortMethod = sortit.dateCompare;
            break;
          case 'datishFormat': case 'datishAgeFormat':
            column.sortMethod = sortit.datishCompare;
            break;
          case 'ageFormat':
            column.sortMethod = sortit.ageCompare;
            break;
          case 'quantityFormat':
            column.sortMethod = sortit.quantityCompare;
            break;
          default:
            // do nothing, rely on built-in sort
        }
      }

      if (headerKey.minWidth != null) {
        column.minWidth = headerKey.minWidth;
      }

      if (headerKey.maxWidth != null) {
        column.maxWidth = headerKey.maxWidth;
      }

      columns.push(column);
    });

    //ReactTable needs an ID for aria-describedby
    let tableID = subSection.name.replace(/ /g,"_") + "-table";
    let customProps = {id:tableID};
    //getTheadThProps solution courtesy of:
    //https://spectrum.chat/react-table/general/is-there-a-way-to-activate-sort-via-onkeypress~66656e87-7f5c-4767-8b23-ddf35d73f8af
    return (
      <div key={index} className="table" role="table"
           aria-label={subSection.name} aria-describedby={customProps.id}>
          <ReactTable
            className="sub-section__table"
            columns={columns}
            data={filteredEntries}
            minRows={1}
            showPagination={filteredEntries.length > 10}
            pageSizeOptions={[10, 20, 50, 100]}
            defaultPageSize={10}
            resizable={false}
            getProps={() => customProps}
            getTheadThProps={(state,rowInfo,column,instance) => {
                return {
                    tabIndex: 0,
                    onKeyPress: (e, handleOriginal) => {
                        if(e.which === 13) {
                            instance.sortColumn(column);
                            e.stopPropagation();
                        }
                    }
                };
            }}
          />
      </div>
    );
  }

  renderSection(section) {
    if(section === 'CDSHooksAssessment' && this.state.result1){
      return (
        <div>
          <blockquote>
            {this.state.result1}<br />
          </blockquote>
        </div>
      )
    }

    const sectionMap = summaryMap[section];

    return sectionMap.map((subSection) => {
      const data = this.props.summary[subSection.dataKeySource][subSection.dataKey];
      const entries = (Array.isArray(data) ? data : [data]).filter(r => r != null);
      const hasEntries = entries.length !== 0;

      const flagged = this.isSubsectionFlagged(section, subSection.dataKey);
      const flaggedClass = flagged ? 'flagged' : '';

      return (
        <div key={subSection.dataKey} className="sub-section h3-wrapper">
          <h3 id={subSection.dataKey} className="sub-section__header">
            <FontAwesomeIcon
              className={`flag flag-nav ${flaggedClass}`}
              icon={flagged ? 'exclamation-circle' : 'circle'}
              title="flag"
              tabIndex={0}
            />
            {subSection.name}
            {subSection.info &&
              <div
                onClick={(event) => this.handleOpenModal(subSection,event)}
                onKeyDown={(event) => this.handleOpenModal(subSection,event)}
                role="button"
                tabIndex={0}
                aria-label={subSection.name}>
                <FontAwesomeIcon
                  className='info-icon'
                  icon="info-circle"
                  title={`more info: ${subSection.name}`}
                  data-tip="more info"
                  role="tooltip"
                  tabIndex={0}
                />
              </div>
            }
          </h3>

          {!hasEntries && this.renderNoEntries(section, subSection)}
          {hasEntries && subSection.tables.map((table, index) =>
            this.renderTable(table, entries, section, subSection, index))
          }
         </div>
      );
    });
  }

  renderSectionHeader(section) {
    const flagged = this.isSectionFlagged(section);
    const flaggedClass = flagged ? 'flagged' : '';
    const { numMedicalHistoryEntries, numPainEntries, numTreatmentsEntries, numRiskEntries } = this.props;

    let icon = '';
    let title = '';
    if (section === 'CDSHooksAssessment') {
      title = `Recommendations`;
    }else if (section === 'PertinentMedicalHistory') {
      icon = <MedicalHistoryIcon width="30" height="40" />;
      title = `Pertinent Medical History (${numMedicalHistoryEntries})`;
    } else if (section === 'PainAssessments') {
      icon = <PainIcon width="35"  height="35" />;
      title = `Pain Assessments (${numPainEntries})`
    } else if (section === 'HistoricalTreatments') {
      icon = <TreatmentsIcon width="36" height="38" />;
      title = `Historical Pain-related Treatments (${numTreatmentsEntries})`
    } else if (section === 'RiskConsiderations') {
      icon = <RiskIcon width="35" height="34" />;
      title = `Risk Considerations (${numRiskEntries})`;
     }// else if (section === 'SharedDecisionMaking') {
    //   title = `Shared Decision Making`;
    // }

    return (
      <h2 id={section} className="section__header">
        <div className="section__header-title">
          {icon}

          <span>
            {title}
            <FontAwesomeIcon className={`flag flag-header ${flaggedClass}`} icon="exclamation-circle" title="flag" />
          </span>
        </div>

        <FontAwesomeIcon className="chevron" icon="chevron-right" title="expand/collapse" />
      </h2>
    );
  };

  render() {
    const { summary, collector, qrCollector, result } = this.props;
    const meetsInclusionCriteria = summary.Patient.MeetsInclusionCriteria;
    if (!summary) { return null; }

    return (
      <div className="summary">
        <div className="summary__nav-wrapper"><nav className="summary__nav"></nav></div>

        <div className="summary__display" id="maincontent">
          <div className="summary__display-title">
            Factors to Consider in Managing Chronic Pain
          </div>

          {meetsInclusionCriteria && <ExclusionBanner />}

          {!meetsInclusionCriteria && <InclusionBanner dismissible={meetsInclusionCriteria} />}

          {meetsInclusionCriteria &&
            <main className="sections">
              <Collapsible tabIndex={0} trigger={this.renderSectionHeader("CDSHooksAssessment")} open={true}>
                {this.renderSection("CDSHooksAssessment")}
              </Collapsible>
              <Collapsible tabIndex={0} trigger={this.renderSectionHeader("PertinentMedicalHistory")} open={true}>
                {this.renderSection("PertinentMedicalHistory")}
              </Collapsible>

              <Collapsible tabIndex={0} trigger={this.renderSectionHeader("PainAssessments")} open={true}>
                {this.renderSection("PainAssessments")}
              </Collapsible>

              <Collapsible tabIndex={0} trigger={this.renderSectionHeader("HistoricalTreatments")} open={true}>
                {this.renderSection("HistoricalTreatments")}
              </Collapsible>

              <Collapsible tabIndex={0} trigger={this.renderSectionHeader("RiskConsiderations")} open={true}>
                {this.renderSection("RiskConsiderations")}
              </Collapsible>

              {/*<Collapsible tabIndex={0} trigger={this.renderSectionHeader("SharedDecisionMaking")} open={true}>*/}
              {/*  {this.renderSection("SharedDecisionMaking")}*/}
              {/*</Collapsible>*/}
            </main>
          }

          <div className="cdc-disclaimer">
            Please see the
            <a
              href="https://www.cdc.gov/mmwr/volumes/65/rr/rr6501e1.htm"
              alt="CDC Guideline for Prescribing Opioids for Chronic Pain"
              target="_blank"
              rel="noopener noreferrer">
              CDC Guideline for Prescribing Opioids for Chronic Pain
            </a>
            for additional information and prescribing guidance.
          </div>

          <DevTools
            collector={collector}
            qrCollector={qrCollector}
            result={result}
          />

          <ReactTooltip className="summary-tooltip" />

          <ReactModal
            className="modal"
            overlayClassName="overlay"
            isOpen={this.state.showModal}
            onRequestClose={this.handleCloseModal}
            contentLabel="More Info">
            <InfoModal
              closeModal={this.handleCloseModal}
              subSection={this.state.modalSubSection} />
          </ReactModal>
        </div>
      </div>
    );
  }
}

Summary.propTypes = {
  summary: PropTypes.object.isRequired,
  sectionFlags: PropTypes.object.isRequired,
  collector: PropTypes.array.isRequired,
  qrCollector: PropTypes.array.isRequired,
  result: PropTypes.object.isRequired,
  numMedicalHistoryEntries: PropTypes.number.isRequired,
  numPainEntries: PropTypes.number.isRequired,
  numTreatmentsEntries: PropTypes.number.isRequired,
  numRiskEntries: PropTypes.number.isRequired
};
