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
  numRiskEntries: 2
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
  expect(component.find('.sub-section__header')).toHaveLength(14);
});

it('renders conditions and encounter diagnoses in separate tables', () => {
  const tbodies = component.find('#HighRiskConditionsForOpioidTherapy ~ div > table > tbody');
  expect(tbodies).toHaveLength(2);
  expect(tbodies.at(0).find('tr')).toHaveLength(1);
  expect(tbodies.at(0).find('td').at(1)).toHaveText('Agoraphobia with panic attacks (disorder)');
  expect(tbodies.at(1).find('tr')).toHaveLength(1);
  expect(tbodies.at(1).find('td').at(1)).toHaveText('Suicide attempt, initial encounter');
});