import flagit from '../../helpers/flagit';
import summaryMap from '../../components/summary.json';
import {
  mockSummaryA, mockSummaryB, mockSummaryC, mockSummaryD, mockSummaryE, mockSummaryF, mockSummaryG
} from '../../utils/testFixtures';

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

it('flags "Risk Factors for Opioid-related Harms" entries correctly', () => {
  const subSection = summaryMap['PertinentMedicalHistory'][1];
  const mockEntry = {
    "Name": "Agoraphobia with panic attacks (disorder)",
    "Status": "active",
    "Onset": "2014-09-05T00:00:00.000+00:00",
    "Abatement": null,
    "Visit": null
  };
  const mockFlag = "Factor that may place the patient at risk for an opioid-related harm";
  expect(flagit(mockEntry, subSection, mockSummaryA)).toEqual(mockFlag);
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
        "Name": "Pain",
        "Score": "7"
      },
      {
        "Name": "Enjoyment of life",
        "Score": "5"
      },
      {
        "Name": "General activity",
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
  const mockFlag = "Opioid medication";
  expect(flagit(mockEntry, subSection, mockSummaryA)).toEqual(mockFlag);
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
  const mockFlag = "Absence of non-opioid medications";
  expect(flagit(null, subSection, mockSummaryD)).toEqual(mockFlag);
  expect(flagit(mockEntry, subSection, mockSummaryA)).toEqual(false);
});

it('flags "Non-Pharmacologic Treatments" entries correctly', () => {
  const subSection = summaryMap['NonPharmacologicTreatments'][0];
  const mockEntry = {
    "Type": "Procedure",
    "Name": "Chiropraxy (regime/therapy)",
    "Date": "2018-04-05T00:00:00.000+00:00"
  };
  const mockFlag = "Absence of non-pharmacologic treatments";
  expect(flagit(null, subSection, mockSummaryD)).toEqual(mockFlag);
  expect(flagit(mockEntry, subSection, mockSummaryA)).toEqual(false);
});

it('flags "Stool Softeners and Laxatives" entries correctly', () => {
  const subSection = summaryMap['HistoricalTreatments'][2];
  const mockEntry = {
    "Type": "Statement",
    "Name": "POLYETHYLENE GLYCOL 3350 17000 MG Powder for Oral Solution",
    "Start": "2018-04-05T00:00:00.000+00:00",
    "End": null
  };
  const mockFlag = "Absence of stool softeners/laxative with presence of at least one opioid medication";
  // no stool softeners (true) AND one or more opioids (true) => mockFlag
  expect(flagit(null, subSection, mockSummaryB)).toEqual(mockFlag);
  // stool softeners (false) AND one or more opioids (true) => false
  expect(flagit(mockEntry, subSection, mockSummaryA)).toEqual(false);
  // stool softeners (false) AND no opioids (false) => false
  expect(flagit(mockEntry, subSection, mockSummaryC)).toEqual(false);
});

it('flags "Most Recent MME" entries correctly', () => {
  const subSection = summaryMap['RiskConsiderations'][0];
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
  const mockFlag = "Most recent MME assessment is 50+ MME/day";
  expect(flagit(mockEntryB, subSection, mockSummaryA)).toEqual(mockFlag);
  expect(flagit(mockEntryA, subSection, mockSummaryA)).toEqual(false);
  expect(flagit(null, subSection, mockSummaryA)).toEqual(false);
});

it('flags "Urine Drug Screens" entries correctly', () => {
  const subSection = summaryMap['RiskConsiderations'][1];
  const mockEntry = {
    "Name": "Opiates [Presence] in Urine by Screen method",
    "Result": "2300 ng/mL",
    "Interpretation": "Negative",
    "Date": "2017-10-20T00:00:00.000+00:00"
  };
  const mockFlag = "Absence of urine drug screen and at least one opioid medication";
  // no urine drug screen (true) AND at least one opioid (true) => mockFlag
  expect(flagit(null, subSection, mockSummaryB)).toEqual(mockFlag);
  // no urine drug screen (true) AND no opioids (false) => false
  expect(flagit(null, subSection, mockSummaryC)).toEqual(false);
  // urine drug screen (false) AND at least one opioid (true) => false
  expect(flagit(mockEntry, subSection, mockSummaryA)).toEqual(false);
  // urine drug screen (false) AND no opioids (false) => false
  expect(flagit(mockEntry, subSection, mockSummaryD)).toEqual(false);
});

it('flags "Benzodiazepine Medications" entries correctly', () => {
  const subSection = summaryMap['RiskConsiderations'][2];
  const mockEntry = {
    "Type": "Statement",
    "Name": "Diazepam 5 MG Oral Tablet",
    "Start": "2018-04-30T00:00:00.000+00:00",
    "End": null
  };
  const mockFlagA = "Benzodiazepine medication and at least one opioid medication";
  const mockFlagB = "Evidence of Benzodiazepine medication";
  // one or more benzo (true) AND one or more opioids (true) => mockFlagA
  expect(flagit(mockEntry, subSection, mockSummaryA)).toEqual(mockFlagA);
  // no benzo (false) AND one or more opioids (true) => false
  expect(flagit(null, subSection, mockSummaryB)).toEqual(false);
  // one or more benzo (true) AND no opioids (false) => mockFlagB
  expect(flagit(mockEntry, subSection, mockSummaryC)).toEqual(mockFlagB);
});

it('flags "Naloxone Medications" entries correctly', () => {
  const subSection = summaryMap['RiskConsiderations'][3];
  const mockEntry = {
    "Type": "Order",
    "Name": "Naloxone Hydrochloride 40 MG/ML Nasal Spray",
    "Start": "2018-04-20T00:00:00.000+00:00",
    "End": null
  };
  const mockFlagA = "Absence of Naloxone medication and most recent MME assessment is 50+ MME/day";
  // no naloxone (true) AND MME >= 50 (true) => mockFlag
  expect(flagit(null, subSection, mockSummaryG)).toEqual(mockFlagA);
  // no naloxone (true) AND MME < 50 (false)] => false
  expect(flagit(null, subSection, mockSummaryE)).toEqual(false);

  const mockFlagB = "Evidence of Naloxone medication";
  // naloxone (true) => mockFlag
  expect(flagit(mockEntry, subSection, mockSummaryF)).toEqual(mockFlagB);
});

it('flags "Pain Management Risk Screenings" entries correctly', () => {
  const subSection = summaryMap['RiskConsiderations'][4];
  const mockEntry = {
    "Name": "Patient Health Questionnaire 9 item (PHQ-9) total score [Reported]",
    "Score": "7",
    "Interpretation": "Mild depression",
    "Date": "2017-10-20T00:00:00.000+00:00"
  };
  expect(flagit(mockEntry, subSection, mockSummaryA)).toEqual(false);
  expect(flagit(null, subSection, mockSummaryA)).toEqual(false);
});
