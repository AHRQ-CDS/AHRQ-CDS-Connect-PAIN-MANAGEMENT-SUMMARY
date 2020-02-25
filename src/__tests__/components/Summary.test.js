import { shallowRender } from '../../utils/testHelpers';
import { mockSummaryA, mockSectionFlags } from '../../utils/testFixtures';
import Summary from '../../components/Summary';

const component = shallowRender(Summary, {
  summary: mockSummaryA,
  sectionFlags: mockSectionFlags,
  collector: [],
  result: {},
  numMedicalHistoryEntries: 2,
  numPainEntries: 4,
  numTreatmentsEntries: 1,
  numRiskEntries: 2,
  numNonPharTreatmentEntries: 1,
  numExternalDataEntries: 1
});

it('renders without crashing', () => {
  expect(component).toExist();
});

it('renders the scrolling nav', () => {
  expect(component.find('.summary__nav')).toExist();
});

it('renders the summary display', () => {
  expect(component.find('.summary__display')).toExist();
});

it('renders all subsection headers', () => {
  expect(component.find('.sub-section__header')).toHaveLength(5);
});

// TODO: Fix this test (it broke when React-Table was introduced)
it.skip('renders conditions and encounter diagnoses in separate tables', () => {
  const tables = component.find('#RiskFactorsForOpioidRelatedHarms ~ .table > ReactTable');
  expect(tables).toHaveLength(2);
  // This is the point where things go wrong.  Below I've done what I thought would work (but it doesn't).
  const conditionTable = tables.at(0).shallow();
  expect(conditionTable.find('.rt-tr-group')).toHaveLength(1);
  expect(conditionTable.at(0).find('.rt-td').at(1)).toHaveText('Agoraphobia with panic attacks (disorder)');
  expect(conditionTable.at(1).find('.rt-tr-group')).toHaveLength(1);
  expect(conditionTable.at(1).find('.rt-td').at(1)).toHaveText('Suicide attempt, initial encounter');
});