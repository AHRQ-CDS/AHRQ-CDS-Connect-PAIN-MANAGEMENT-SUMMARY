import flagit from '../../helpers/flagit';
import summaryMap from '../../components/summary.json';
import { mockSummaryA, mockSummaryB, mockSummaryC, mockSummaryD, mockSummaryE } from '../../utils/testFixtures';

it('flags "Conditions Associated with Chronic Pain" entries correctly', () => {
  const subSection = summaryMap['PertinentMedicalHistory'][0];
  const mockEntry = {
    "Name": "Fibromyalgia (disorder)",
    "Status": "active",
    "Onset": "2012-04-05T00:00:00.000+00:00"
  };
  expect(flagit(mockEntry, subSection, mockSummaryA)).toEqual(false);
  expect(flagit(null, subSection, mockSummaryA)).toEqual(false);
});

it('flags "High Risk Conditions for Opioid Therapy" entries correctly', () => {
  const subSection = summaryMap['PertinentMedicalHistory'][1];
  const mockEntry = {
    "Name": "Agoraphobia with panic attacks (disorder)",
    "Status": "active",
    "Onset": "2014-09-05T00:00:00.000+00:00",
    "Abatement": null,
    "Visit": null
  };
  expect(flagit(mockEntry, subSection, mockSummaryA)).toEqual(true);
  expect(flagit(null, subSection, mockSummaryA)).toEqual(false);
});

it('flags "Numeric Pain Intensity Assessments" entries correctly', () => {
  const subSection = summaryMap['PainAssessments'][0];
  const mockEntry = {
    "Name": "Pain severity Wong-Baker FACES Scale",
    "Score": "8",
    "Interpretation": "Hurts a whole lot",
    "Date": "2018-02-10T00:00:00.000+00:00"
  };
  expect(flagit(mockEntry, subSection, mockSummaryA)).toEqual(false);
  expect(flagit(null, subSection, mockSummaryA)).toEqual(false);
});

it('flags "Pain Enjoyment General Activity (PEG) Assessments" entries correctly', () => {
  const subSection = summaryMap['PainAssessments'][1];
  const mockEntry = {
    "Name": "Pain Enjoyment General Activity (PEG) Assessment",
    "Score": "5",
    "Interpretation": null,
    "Questions": [
      {
        "Name": "Pain (1-10)",
        "Score": "7"
      },
      {
        "Name": "Enjoyment of life (1-10)",
        "Score": "5"
      },
      {
        "Name": "General activity (1-10)",
        "Score": "4"
      }
    ],
    "Date": "2018-02-10T00:00:00.000+00:00"
  };
  expect(flagit(mockEntry, subSection, mockSummaryA)).toEqual(false);
  expect(flagit(null, subSection, mockSummaryA)).toEqual(false);
});

it('flags "STarT Back Assessments" entries correctly', () => {
  const subSection = summaryMap['PainAssessments'][2];
  const mockEntry = {
    "Name": "STarT Back Screening Tool",
    "Score": "4",
    "Interpretation": "Medium risk",
    "Date": "2018-02-10T00:00:00.000+00:00"
  };
  expect(flagit(mockEntry, subSection, mockSummaryA)).toEqual(false);
  expect(flagit(null, subSection, mockSummaryA)).toEqual(false);
});

it('flags "Opioid Medications" entries correctly', () => {
  const subSection = summaryMap['HistoricalTreatments'][0];
  const mockEntry = {
    "Type": "Statement",
    "Name": "Pentazocine 50 MG Oral Tablet",
    "Start": "2018-03-15T00:00:00.000+00:00",
    "End": null
  };
  expect(flagit(mockEntry, subSection, mockSummaryA)).toEqual(true);
  expect(flagit(null, subSection, mockSummaryA)).toEqual(false);
});

it('flags "Non-Opioid Medications" entries correctly', () => {
  const subSection = summaryMap['HistoricalTreatments'][1];
  const mockEntry = {
    "Type": "Statement",
    "Name": "Diazepam 5 MG Oral Tablet",
    "Start": "2018-04-30T00:00:00.000+00:00",
    "End": null
  };
  expect(flagit(mockEntry, subSection, mockSummaryA)).toEqual(false);
  expect(flagit(null, subSection, mockSummaryD)).toEqual(true);
});

it('flags "Non-Pharmacologic Treatments" entries correctly', () => {
  const subSection = summaryMap['HistoricalTreatments'][2];
  const mockEntry = {
    "Type": "Procedure",
    "Name": "Chiropraxy (regime/therapy)",
    "Date": "2018-04-05T00:00:00.000+00:00"
  };
  expect(flagit(mockEntry, subSection, mockSummaryA)).toEqual(false);
  expect(flagit(null, subSection, mockSummaryD)).toEqual(true);
});

it('flags "Stool Softeners and Laxatives" entries correctly', () => {
  const subSection = summaryMap['HistoricalTreatments'][3];
  const mockEntry = {
    "Type": "Statement",
    "Name": "POLYETHYLENE GLYCOL 3350 17000 MG Powder for Oral Solution",
    "Start": "2018-04-05T00:00:00.000+00:00",
    "End": null
  };
  // no stool softeners (true) AND one or more opioids (true) => true
  expect(flagit(null, subSection, mockSummaryB)).toEqual(true);
  // stool softeners (false) AND one or more opioids (true) => false
  expect(flagit(mockEntry, subSection, mockSummaryA)).toEqual(false);
  // stool softeners (false) AND no opioids (false) => false
  expect(flagit(mockEntry, subSection, mockSummaryC)).toEqual(false);
});

it('flags "Pain Management Risk Screenings" entries correctly', () => {
  const subSection = summaryMap['RiskFactorsAndAssessments'][0];
  const mockEntry = {
    "Name": "Patient Health Questionnaire 9 item (PHQ-9) total score [Reported]",
    "Score": "7",
    "Interpretation": "Mild depression",
    "Date": "2017-10-20T00:00:00.000+00:00"
  };
  expect(flagit(mockEntry, subSection, mockSummaryA)).toEqual(false);
  expect(flagit(null, subSection, mockSummaryA)).toEqual(false);
});

it('flags "Benzodiazepine Medications" entries correctly', () => {
  const subSection = summaryMap['RiskFactorsAndAssessments'][1];
  const mockEntry = {
    "Type": "Statement",
    "Name": "Diazepam 5 MG Oral Tablet",
    "Start": "2018-04-30T00:00:00.000+00:00",
    "End": null
  };
  // one or more benzo (true) AND one or more opioids (true) => true
  expect(flagit(mockEntry, subSection, mockSummaryA)).toEqual(true);
  // no benzo (false) AND one or more opioids (true) => false
  expect(flagit(null, subSection, mockSummaryB)).toEqual(false);
  // one or more benzo (true) AND no opioids (false) => false
  expect(flagit(mockEntry, subSection, mockSummaryC)).toEqual(false);
});

it('flags "Naloxone Medications" entries correctly', () => {
  const subSection = summaryMap['RiskFactorsAndAssessments'][2];
  const mockEntry = {
    "Type": "Order",
    "Name": "Naloxone Hydrochloride 40 MG/ML Nasal Spray",
    "Start": "2018-04-20T00:00:00.000+00:00",
    "End": null
  };
  // no naloxone (true) AND [one or more opioids (true) OR MME >= 50 (true)] => true
  expect(flagit(null, subSection, mockSummaryB)).toEqual(true);
  // no naloxone (true) AND [no opioids (false) OR MME >= 50 (true)] => true
  expect(flagit(null, subSection, mockSummaryC)).toEqual(true);
  // no naloxone (true) AND [one or more opioids (true) OR MME < 50 (false)] => true
  expect(flagit(null, subSection, mockSummaryE)).toEqual(true);
  // no naloxone (true) AND [no opioids (false) OR MME < 50 (false)] => false
  expect(flagit(null, subSection, mockSummaryD)).toEqual(false);
  // one or more naloxone (false) AND [one or more opioids (true) OR MME >= 50 (true)] => false
  expect(flagit(mockEntry, subSection, mockSummaryA)).toEqual(false);
});

it('flags "Urine Drug Screens" entries correctly', () => {
  const subSection = summaryMap['RiskFactorsAndAssessments'][3];
  const mockEntry = {
    "Name": "Opiates [Presence] in Urine by Screen method",
    "Result": "2300 ng/mL",
    "Interpretation": "Negative",
    "Date": "2017-10-20T00:00:00.000+00:00"
  };
  expect(flagit(mockEntry, subSection, mockSummaryA)).toEqual(false);
  expect(flagit(null, subSection, mockSummaryA)).toEqual(false);
});

it('flags "Most Recent MME" entries correctly', () => {
  const subSection = summaryMap['RiskFactorsAndAssessments'][4];
  const mockEntryA = {
    "Name": "Morphine Milligram Equivalent (MME)",
    "Result": "20 {MME}/d",
    "Date": "2018-04-30T00:00:00.000+00:00"
  };
  const mockEntryB = {
    "Name": "Morphine Milligram Equivalent (MME)",
    "Result": "50 {MME}/d",
    "Date": "2018-04-30T00:00:00.000+00:00"
  };

  expect(flagit(mockEntryB, subSection, mockSummaryA)).toEqual(true);
  expect(flagit(mockEntryA, subSection, mockSummaryA)).toEqual(false);
  expect(flagit(null, subSection, mockSummaryA)).toEqual(false);
});
