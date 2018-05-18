/* eslint-disable max-len */

// entry for every sub-section
const mockSummaryA = {
  "Patient": {
    "Name": "Fuller Jackson",
    "Gender": "male",
    "Age": 64,
    "MeetsInclusionCriteria": true
  },
  "PertinentMedicalHistory": {
    "ConditionsAssociatedWithChronicPain": [
      {
        "Name": "Fibromyalgia (disorder)",
        "Status": "active",
        "Onset": "2012-04-05T00:00:00.000+00:00"
      }
    ],
    "RiskFactorsForOpioidRelatedHarms": [
      {
        "Name": "Agoraphobia with panic attacks (disorder)",
        "Status": "active",
        "Onset": "2014-09-05T00:00:00.000+00:00",
        "Abatement": null,
        "Visit": null
      },
      {
        "Name": "Suicide attempt, initial encounter",
        "Status": null,
        "Onset": null,
        "Abatement": null,
        "Visit": {
          "Start": "2015-02-01T00:00:00.000+00:00",
          "End": null
        }
      }
    ]
  },
  "PainAssessments": {
    "NumericPainIntensityAssessments": [
      {
        "Name": "Pain severity Wong-Baker FACES Scale",
        "Score": "8",
        "Interpretation": "Hurts a whole lot",
        "Date": "2018-02-10T00:00:00.000+00:00"
      }
    ],
    "PainEnjoymentGeneralActivityAssessments": [
      {
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
      }
    ],
    "STarTBackAssessments": [
      {
        "Name": "STarT Back Screening Tool",
        "Score": "4",
        "Interpretation": "Medium risk",
        "Date": "2018-02-10T00:00:00.000+00:00"
      }
    ]
  },
  "HistoricalTreatments": {
    "OpioidMedications": [
      {
        "Type": "Statement",
        "Name": "Pentazocine 50 MG Oral Tablet",
        "Start": "2018-03-15T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "12 HR Oxycodone Hydrochloride 160 MG Extended Release Oral Tablet",
        "Start": "2018-02-10T00:00:00.000+00:00",
        "End": null
      }
    ],
    "NonOpioidMedications": [
      {
        "Type": "Statement",
        "Name": "Diazepam 5 MG Oral Tablet",
        "Start": "2018-04-30T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "Diazepam 5 MG Oral Tablet",
        "Start": "2018-03-05T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "Aspirin 75 MG Oral Tablet",
        "Start": "2018-01-06T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Statement",
        "Name": "Ibuprofen 200 MG Oral Tablet",
        "Start": "2017-11-12T00:00:00.000+00:00",
        "End": null
      }
    ],
    "NonPharmacologicTreatments": [
      {
        "Type": "Procedure",
        "Name": "Chiropraxy (regime/therapy)",
        "Date": "2018-04-05T00:00:00.000+00:00"
      }
    ],
    "StoolSoftenersAndLaxatives": [
      {
        "Type": "Statement",
        "Name": "POLYETHYLENE GLYCOL 3350 17000 MG Powder for Oral Solution",
        "Start": "2018-04-05T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "POLYETHYLENE GLYCOL 3350 17000 MG Powder for Oral Solution",
        "Start": "2018-03-05T00:00:00.000+00:00",
        "End": null
      }
    ]
  },
  "RiskConsiderations": {
    "RiskScreeningsRelevantToPainManagement": [
      {
        "Name": "Patient Health Questionnaire 9 item (PHQ-9) total score [Reported]",
        "Score": "7",
        "Interpretation": "Mild depression",
        "Date": "2017-10-20T00:00:00.000+00:00"
      }
    ],
    "BenzodiazepineMedications": [
      {
        "Type": "Statement",
        "Name": "Diazepam 5 MG Oral Tablet",
        "Start": "2018-04-30T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "Diazepam 5 MG Oral Tablet",
        "Start": "2018-03-05T00:00:00.000+00:00",
        "End": null
      }
    ],
    "NaloxoneMedications": [
      {
        "Type": "Order",
        "Name": "Naloxone Hydrochloride 40 MG/ML Nasal Spray",
        "Start": "2018-04-20T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Statement",
        "Name": "Naloxone Hydrochloride 40 MG/ML Nasal Spray",
        "Start": "2018-04-10T00:00:00.000+00:00",
        "End": null
      }
    ],
    "UrineDrugScreens": [
      {
        "Name": "Opiates [Presence] in Urine by Screen method",
        "Result": "2300 ng/mL",
        "Interpretation": "Negative",
        "Date": "2017-10-20T00:00:00.000+00:00"
      }
    ],
    "MostRecentMME": {
      "Name": "Morphine Milligram Equivalent (MME)",
      "Result": "20 {MME}/d",
      "Date": "2018-04-30T00:00:00.000+00:00"
    }
  }
};

// no stool softeners, no benzo, no naloxone, no drug screen, has opioids, MME >= 50
const mockSummaryB = {
  "Patient": {
    "Name": "Ben Jackson",
    "Gender": "male",
    "Age": 64,
    "MeetsInclusionCriteria": true
  },
  "PertinentMedicalHistory": {
    "ConditionsAssociatedWithChronicPain": [
      {
        "Name": "Fibromyalgia (disorder)",
        "Status": "active",
        "Onset": "2012-04-05T00:00:00.000+00:00"
      }
    ],
    "RiskFactorsForOpioidRelatedHarms": [
      {
        "Name": "Agoraphobia with panic attacks (disorder)",
        "Status": "active",
        "Onset": "2014-09-05T00:00:00.000+00:00",
        "Abatement": null,
        "Visit": null
      }
    ]
  },
  "PainAssessments": {
    "NumericPainIntensityAssessments": [
      {
        "Name": "Pain severity Wong-Baker FACES Scale",
        "Score": "8",
        "Interpretation": "Hurts a whole lot",
        "Date": "2018-02-10T00:00:00.000+00:00"
      }
    ],
    "PainEnjoymentGeneralActivityAssessments": [
      {
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
      }
    ],
    "STarTBackAssessments": [
      {
        "Name": "STarT Back Screening Tool",
        "Score": "4",
        "Interpretation": "Medium risk",
        "Date": "2018-02-10T00:00:00.000+00:00"
      }
    ]
  },
  "HistoricalTreatments": {
    "OpioidMedications": [
      {
        "Type": "Statement",
        "Name": "Pentazocine 50 MG Oral Tablet",
        "Start": "2018-03-15T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "12 HR Oxycodone Hydrochloride 160 MG Extended Release Oral Tablet",
        "Start": "2018-02-10T00:00:00.000+00:00",
        "End": null
      }
    ],
    "NonOpioidMedications": [
      {
        "Type": "Statement",
        "Name": "Diazepam 5 MG Oral Tablet",
        "Start": "2018-04-30T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "Diazepam 5 MG Oral Tablet",
        "Start": "2018-03-05T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "Aspirin 75 MG Oral Tablet",
        "Start": "2018-01-06T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Statement",
        "Name": "Ibuprofen 200 MG Oral Tablet",
        "Start": "2017-11-12T00:00:00.000+00:00",
        "End": null
      }
    ],
    "NonPharmacologicTreatments": [
      {
        "Type": "Procedure",
        "Name": "Chiropraxy (regime/therapy)",
        "Date": "2018-04-05T00:00:00.000+00:00"
      }
    ],
    "StoolSoftenersAndLaxatives": []
  },
  "RiskConsiderations": {
    "RiskScreeningsRelevantToPainManagement": [
      {
        "Name": "Patient Health Questionnaire 9 item (PHQ-9) total score [Reported]",
        "Score": "7",
        "Interpretation": "Mild depression",
        "Date": "2017-10-20T00:00:00.000+00:00"
      }
    ],
    "BenzodiazepineMedications": [],
    "NaloxoneMedications": [],
    "UrineDrugScreens": [],
    "MostRecentMME": {
      "Name": "Morphine Milligram Equivalent (MME)",
      "Result": "60 {MME}/d",
      "Date": "2018-04-30T00:00:00.000+00:00"
    }
  }
};

// has stool softeners, has benzo, no naloxone, no drug screen, no opioids, MME >= 50
const mockSummaryC = {
  "Patient": {
    "Name": "Fuller Jackson",
    "Gender": "male",
    "Age": 64,
    "MeetsInclusionCriteria": true
  },
  "PertinentMedicalHistory": {
    "ConditionsAssociatedWithChronicPain": [
      {
        "Name": "Fibromyalgia (disorder)",
        "Status": "active",
        "Onset": "2012-04-05T00:00:00.000+00:00"
      }
    ],
    "RiskFactorsForOpioidRelatedHarms": [
      {
        "Name": "Agoraphobia with panic attacks (disorder)",
        "Status": "active",
        "Onset": "2014-09-05T00:00:00.000+00:00",
        "Abatement": null,
        "Visit": null
      }
    ]
  },
  "PainAssessments": {
    "NumericPainIntensityAssessments": [
      {
        "Name": "Pain severity Wong-Baker FACES Scale",
        "Score": "8",
        "Interpretation": "Hurts a whole lot",
        "Date": "2018-02-10T00:00:00.000+00:00"
      }
    ],
    "PainEnjoymentGeneralActivityAssessments": [
      {
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
      }
    ],
    "STarTBackAssessments": [
      {
        "Name": "STarT Back Screening Tool",
        "Score": "4",
        "Interpretation": "Medium risk",
        "Date": "2018-02-10T00:00:00.000+00:00"
      }
    ]
  },
  "HistoricalTreatments": {
    "OpioidMedications": [],
    "NonOpioidMedications": [
      {
        "Type": "Statement",
        "Name": "Diazepam 5 MG Oral Tablet",
        "Start": "2018-04-30T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "Diazepam 5 MG Oral Tablet",
        "Start": "2018-03-05T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "Aspirin 75 MG Oral Tablet",
        "Start": "2018-01-06T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Statement",
        "Name": "Ibuprofen 200 MG Oral Tablet",
        "Start": "2017-11-12T00:00:00.000+00:00",
        "End": null
      }
    ],
    "NonPharmacologicTreatments": [
      {
        "Type": "Procedure",
        "Name": "Chiropraxy (regime/therapy)",
        "Date": "2018-04-05T00:00:00.000+00:00"
      }
    ],
    "StoolSoftenersAndLaxatives": [
      {
        "Type": "Statement",
        "Name": "POLYETHYLENE GLYCOL 3350 17000 MG Powder for Oral Solution",
        "Start": "2018-04-05T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "POLYETHYLENE GLYCOL 3350 17000 MG Powder for Oral Solution",
        "Start": "2018-03-05T00:00:00.000+00:00",
        "End": null
      }
    ]
  },
  "RiskConsiderations": {
    "RiskScreeningsRelevantToPainManagement": [
      {
        "Name": "Patient Health Questionnaire 9 item (PHQ-9) total score [Reported]",
        "Score": "7",
        "Interpretation": "Mild depression",
        "Date": "2017-10-20T00:00:00.000+00:00"
      }
    ],
    "BenzodiazepineMedications": [
      {
        "Type": "Statement",
        "Name": "Diazepam 5 MG Oral Tablet",
        "Start": "2018-04-30T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "Diazepam 5 MG Oral Tablet",
        "Start": "2018-03-05T00:00:00.000+00:00",
        "End": null
      }
    ],
    "NaloxoneMedications": [],
    "UrineDrugScreens": [],
    "MostRecentMME": {
      "Name": "Morphine Milligram Equivalent (MME)",
      "Result": "50 {MME}/d",
      "Date": "2018-04-30T00:00:00.000+00:00"
    }
  }
};

// no opioids, no naloxone, no benzo, no non-opioid, has drug screen, no non-pharma, MME < 50
const mockSummaryD = {
  "Patient": {
    "Name": "Fuller Jackson",
    "Gender": "male",
    "Age": 64,
    "MeetsInclusionCriteria": true
  },
  "PertinentMedicalHistory": {
    "ConditionsAssociatedWithChronicPain": [
      {
        "Name": "Fibromyalgia (disorder)",
        "Status": "active",
        "Onset": "2012-04-05T00:00:00.000+00:00"
      }
    ],
    "RiskFactorsForOpioidRelatedHarms": [
      {
        "Name": "Agoraphobia with panic attacks (disorder)",
        "Status": "active",
        "Onset": "2014-09-05T00:00:00.000+00:00",
        "Abatement": null,
        "Visit": null
      }
    ]
  },
  "PainAssessments": {
    "NumericPainIntensityAssessments": [
      {
        "Name": "Pain severity Wong-Baker FACES Scale",
        "Score": "8",
        "Interpretation": "Hurts a whole lot",
        "Date": "2018-02-10T00:00:00.000+00:00"
      }
    ],
    "PainEnjoymentGeneralActivityAssessments": [
      {
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
      }
    ],
    "STarTBackAssessments": [
      {
        "Name": "STarT Back Screening Tool",
        "Score": "4",
        "Interpretation": "Medium risk",
        "Date": "2018-02-10T00:00:00.000+00:00"
      }
    ]
  },
  "HistoricalTreatments": {
    "OpioidMedications": [],
    "NonOpioidMedications": [],
    "NonPharmacologicTreatments": [],
    "StoolSoftenersAndLaxatives": [
      {
        "Type": "Statement",
        "Name": "POLYETHYLENE GLYCOL 3350 17000 MG Powder for Oral Solution",
        "Start": "2018-04-05T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "POLYETHYLENE GLYCOL 3350 17000 MG Powder for Oral Solution",
        "Start": "2018-03-05T00:00:00.000+00:00",
        "End": null
      }
    ]
  },
  "RiskConsiderations": {
    "RiskScreeningsRelevantToPainManagement": [
      {
        "Name": "Patient Health Questionnaire 9 item (PHQ-9) total score [Reported]",
        "Score": "7",
        "Interpretation": "Mild depression",
        "Date": "2017-10-20T00:00:00.000+00:00"
      }
    ],
    "BenzodiazepineMedications": [],
    "NaloxoneMedications": [],
    "UrineDrugScreens": [
      {
        "Name": "Opiates [Presence] in Urine by Screen method",
        "Result": "2300 ng/mL",
        "Interpretation": "Negative",
        "Date": "2017-10-20T00:00:00.000+00:00"
      }
    ],
    "MostRecentMME": {
      "Name": "Morphine Milligram Equivalent (MME)",
      "Result": "20 {MME}/d",
      "Date": "2018-04-30T00:00:00.000+00:00"
    }
  }
};

// no naloxone, has opioids, MME < 50
const mockSummaryE = {
  "Patient": {
    "Name": "Fuller Jackson",
    "Gender": "male",
    "Age": 64,
    "MeetsInclusionCriteria": true
  },
  "PertinentMedicalHistory": {
    "ConditionsAssociatedWithChronicPain": [
      {
        "Name": "Fibromyalgia (disorder)",
        "Status": "active",
        "Onset": "2012-04-05T00:00:00.000+00:00"
      }
    ],
    "RiskFactorsForOpioidRelatedHarms": [
      {
        "Name": "Agoraphobia with panic attacks (disorder)",
        "Status": "active",
        "Onset": "2014-09-05T00:00:00.000+00:00",
        "Abatement": null,
        "Visit": null
      }
    ]
  },
  "PainAssessments": {
    "NumericPainIntensityAssessments": [
      {
        "Name": "Pain severity Wong-Baker FACES Scale",
        "Score": "8",
        "Interpretation": "Hurts a whole lot",
        "Date": "2018-02-10T00:00:00.000+00:00"
      }
    ],
    "PainEnjoymentGeneralActivityAssessments": [
      {
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
      }
    ],
    "STarTBackAssessments": [
      {
        "Name": "STarT Back Screening Tool",
        "Score": "4",
        "Interpretation": "Medium risk",
        "Date": "2018-02-10T00:00:00.000+00:00"
      }
    ]
  },
  "HistoricalTreatments": {
    "OpioidMedications": [
      {
        "Type": "Statement",
        "Name": "Pentazocine 50 MG Oral Tablet",
        "Start": "2018-03-15T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "12 HR Oxycodone Hydrochloride 160 MG Extended Release Oral Tablet",
        "Start": "2018-02-10T00:00:00.000+00:00",
        "End": null
      }
    ],
    "NonOpioidMedications": [
      {
        "Type": "Statement",
        "Name": "Diazepam 5 MG Oral Tablet",
        "Start": "2018-04-30T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "Diazepam 5 MG Oral Tablet",
        "Start": "2018-03-05T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "Aspirin 75 MG Oral Tablet",
        "Start": "2018-01-06T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Statement",
        "Name": "Ibuprofen 200 MG Oral Tablet",
        "Start": "2017-11-12T00:00:00.000+00:00",
        "End": null
      }
    ],
    "NonPharmacologicTreatments": [
      {
        "Type": "Procedure",
        "Name": "Chiropraxy (regime/therapy)",
        "Date": "2018-04-05T00:00:00.000+00:00"
      }
    ],
    "StoolSoftenersAndLaxatives": [
      {
        "Type": "Statement",
        "Name": "POLYETHYLENE GLYCOL 3350 17000 MG Powder for Oral Solution",
        "Start": "2018-04-05T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "POLYETHYLENE GLYCOL 3350 17000 MG Powder for Oral Solution",
        "Start": "2018-03-05T00:00:00.000+00:00",
        "End": null
      }
    ]
  },
  "RiskConsiderations": {
    "RiskScreeningsRelevantToPainManagement": [
      {
        "Name": "Patient Health Questionnaire 9 item (PHQ-9) total score [Reported]",
        "Score": "7",
        "Interpretation": "Mild depression",
        "Date": "2017-10-20T00:00:00.000+00:00"
      }
    ],
    "BenzodiazepineMedications": [
      {
        "Type": "Statement",
        "Name": "Diazepam 5 MG Oral Tablet",
        "Start": "2018-04-30T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "Diazepam 5 MG Oral Tablet",
        "Start": "2018-03-05T00:00:00.000+00:00",
        "End": null
      }
    ],
    "NaloxoneMedications": [],
    "UrineDrugScreens": [
      {
        "Name": "Opiates [Presence] in Urine by Screen method",
        "Result": "2300 ng/mL",
        "Interpretation": "Negative",
        "Date": "2017-10-20T00:00:00.000+00:00"
      }
    ],
    "MostRecentMME": {
      "Name": "Morphine Milligram Equivalent (MME)",
      "Result": "20 {MME}/d",
      "Date": "2018-04-30T00:00:00.000+00:00"
    }
  }
};

// has nalox, MME >= 50
const mockSummaryF = {
  "Patient": {
    "Name": "Fuller Jackson",
    "Gender": "male",
    "Age": 64,
    "MeetsInclusionCriteria": true
  },
  "PertinentMedicalHistory": {
    "ConditionsAssociatedWithChronicPain": [
      {
        "Name": "Fibromyalgia (disorder)",
        "Status": "active",
        "Onset": "2012-04-05T00:00:00.000+00:00"
      }
    ],
    "RiskFactorsForOpioidRelatedHarms": [
      {
        "Name": "Agoraphobia with panic attacks (disorder)",
        "Status": "active",
        "Onset": "2014-09-05T00:00:00.000+00:00",
        "Abatement": null,
        "Visit": null
      }
    ]
  },
  "PainAssessments": {
    "NumericPainIntensityAssessments": [
      {
        "Name": "Pain severity Wong-Baker FACES Scale",
        "Score": "8",
        "Interpretation": "Hurts a whole lot",
        "Date": "2018-02-10T00:00:00.000+00:00"
      }
    ],
    "PainEnjoymentGeneralActivityAssessments": [
      {
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
      }
    ],
    "STarTBackAssessments": [
      {
        "Name": "STarT Back Screening Tool",
        "Score": "4",
        "Interpretation": "Medium risk",
        "Date": "2018-02-10T00:00:00.000+00:00"
      }
    ]
  },
  "HistoricalTreatments": {
    "OpioidMedications": [
      {
        "Type": "Statement",
        "Name": "Pentazocine 50 MG Oral Tablet",
        "Start": "2018-03-15T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "12 HR Oxycodone Hydrochloride 160 MG Extended Release Oral Tablet",
        "Start": "2018-02-10T00:00:00.000+00:00",
        "End": null
      }
    ],
    "NonOpioidMedications": [
      {
        "Type": "Statement",
        "Name": "Diazepam 5 MG Oral Tablet",
        "Start": "2018-04-30T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "Diazepam 5 MG Oral Tablet",
        "Start": "2018-03-05T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "Aspirin 75 MG Oral Tablet",
        "Start": "2018-01-06T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Statement",
        "Name": "Ibuprofen 200 MG Oral Tablet",
        "Start": "2017-11-12T00:00:00.000+00:00",
        "End": null
      }
    ],
    "NonPharmacologicTreatments": [
      {
        "Type": "Procedure",
        "Name": "Chiropraxy (regime/therapy)",
        "Date": "2018-04-05T00:00:00.000+00:00"
      }
    ],
    "StoolSoftenersAndLaxatives": [
      {
        "Type": "Statement",
        "Name": "POLYETHYLENE GLYCOL 3350 17000 MG Powder for Oral Solution",
        "Start": "2018-04-05T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "POLYETHYLENE GLYCOL 3350 17000 MG Powder for Oral Solution",
        "Start": "2018-03-05T00:00:00.000+00:00",
        "End": null
      }
    ]
  },
  "RiskConsiderations": {
    "RiskScreeningsRelevantToPainManagement": [
      {
        "Name": "Patient Health Questionnaire 9 item (PHQ-9) total score [Reported]",
        "Score": "7",
        "Interpretation": "Mild depression",
        "Date": "2017-10-20T00:00:00.000+00:00"
      }
    ],
    "BenzodiazepineMedications": [
      {
        "Type": "Statement",
        "Name": "Diazepam 5 MG Oral Tablet",
        "Start": "2018-04-30T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "Diazepam 5 MG Oral Tablet",
        "Start": "2018-03-05T00:00:00.000+00:00",
        "End": null
      }
    ],
    "NaloxoneMedications": [
      {
        "Type": "Order",
        "Name": "Naloxone Hydrochloride 40 MG/ML Nasal Spray",
        "Start": "2018-04-20T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Statement",
        "Name": "Naloxone Hydrochloride 40 MG/ML Nasal Spray",
        "Start": "2018-04-10T00:00:00.000+00:00",
        "End": null
      }
    ],
    "UrineDrugScreens": [
      {
        "Name": "Opiates [Presence] in Urine by Screen method",
        "Result": "2300 ng/mL",
        "Interpretation": "Negative",
        "Date": "2017-10-20T00:00:00.000+00:00"
      }
    ],
    "MostRecentMME": {
      "Name": "Morphine Milligram Equivalent (MME)",
      "Result": "50 {MME}/d",
      "Date": "2018-04-30T00:00:00.000+00:00"
    }
  }
};

// no naloxone, MME >= 50
const mockSummaryG = {
  "Patient": {
    "Name": "Fuller Jackson",
    "Gender": "male",
    "Age": 64,
    "MeetsInclusionCriteria": true
  },
  "PertinentMedicalHistory": {
    "ConditionsAssociatedWithChronicPain": [
      {
        "Name": "Fibromyalgia (disorder)",
        "Status": "active",
        "Onset": "2012-04-05T00:00:00.000+00:00"
      }
    ],
    "RiskFactorsForOpioidRelatedHarms": [
      {
        "Name": "Agoraphobia with panic attacks (disorder)",
        "Status": "active",
        "Onset": "2014-09-05T00:00:00.000+00:00",
        "Abatement": null,
        "Visit": null
      }
    ]
  },
  "PainAssessments": {
    "NumericPainIntensityAssessments": [
      {
        "Name": "Pain severity Wong-Baker FACES Scale",
        "Score": "8",
        "Interpretation": "Hurts a whole lot",
        "Date": "2018-02-10T00:00:00.000+00:00"
      }
    ],
    "PainEnjoymentGeneralActivityAssessments": [
      {
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
      }
    ],
    "STarTBackAssessments": [
      {
        "Name": "STarT Back Screening Tool",
        "Score": "4",
        "Interpretation": "Medium risk",
        "Date": "2018-02-10T00:00:00.000+00:00"
      }
    ]
  },
  "HistoricalTreatments": {
    "OpioidMedications": [
      {
        "Type": "Statement",
        "Name": "Pentazocine 50 MG Oral Tablet",
        "Start": "2018-03-15T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "12 HR Oxycodone Hydrochloride 160 MG Extended Release Oral Tablet",
        "Start": "2018-02-10T00:00:00.000+00:00",
        "End": null
      }
    ],
    "NonOpioidMedications": [
      {
        "Type": "Statement",
        "Name": "Diazepam 5 MG Oral Tablet",
        "Start": "2018-04-30T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "Diazepam 5 MG Oral Tablet",
        "Start": "2018-03-05T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "Aspirin 75 MG Oral Tablet",
        "Start": "2018-01-06T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Statement",
        "Name": "Ibuprofen 200 MG Oral Tablet",
        "Start": "2017-11-12T00:00:00.000+00:00",
        "End": null
      }
    ],
    "NonPharmacologicTreatments": [
      {
        "Type": "Procedure",
        "Name": "Chiropraxy (regime/therapy)",
        "Date": "2018-04-05T00:00:00.000+00:00"
      }
    ],
    "StoolSoftenersAndLaxatives": [
      {
        "Type": "Statement",
        "Name": "POLYETHYLENE GLYCOL 3350 17000 MG Powder for Oral Solution",
        "Start": "2018-04-05T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "POLYETHYLENE GLYCOL 3350 17000 MG Powder for Oral Solution",
        "Start": "2018-03-05T00:00:00.000+00:00",
        "End": null
      }
    ]
  },
  "RiskConsiderations": {
    "RiskScreeningsRelevantToPainManagement": [
      {
        "Name": "Patient Health Questionnaire 9 item (PHQ-9) total score [Reported]",
        "Score": "7",
        "Interpretation": "Mild depression",
        "Date": "2017-10-20T00:00:00.000+00:00"
      }
    ],
    "BenzodiazepineMedications": [
      {
        "Type": "Statement",
        "Name": "Diazepam 5 MG Oral Tablet",
        "Start": "2018-04-30T00:00:00.000+00:00",
        "End": null
      },
      {
        "Type": "Order",
        "Name": "Diazepam 5 MG Oral Tablet",
        "Start": "2018-03-05T00:00:00.000+00:00",
        "End": null
      }
    ],
    "NaloxoneMedications": [],
    "UrineDrugScreens": [
      {
        "Name": "Opiates [Presence] in Urine by Screen method",
        "Result": "2300 ng/mL",
        "Interpretation": "Negative",
        "Date": "2017-10-20T00:00:00.000+00:00"
      }
    ],
    "MostRecentMME": {
      "Name": "Morphine Milligram Equivalent (MME)",
      "Result": "50 {MME}/d",
      "Date": "2018-04-30T00:00:00.000+00:00"
    }
  }
};

const mockSectionFlags = {
  "PertinentMedicalHistory": {
    "ConditionsAssociatedWithChronicPain": [],
    "RiskFactorsForOpioidRelatedHarms": [
      2
    ]
  },
  "PainAssessments": {
    "NumericPainIntensityAssessments": [],
    "PainEnjoymentGeneralActivityAssessments": [],
    "STarTBackAssessments": []
  },
  "HistoricalTreatments": {
    "OpioidMedications": [
      6,
      7
    ],
    "NonOpioidMedications": [],
    "NonPharmacologicTreatments": [],
    "StoolSoftenersAndLaxatives": []
  },
  "RiskConsiderations": {
    "RiskScreeningsRelevantToPainManagement": [],
    "BenzodiazepineMedications": [
      16,
      17
    ],
    "NaloxoneMedications": [],
    "UrineDrugScreens": [],
    "MostRecentMME": []
  }
};

const mockSubSection = {
  "name": "Pain Enjoyment General Activity (PEG) Assessments",
  "dataKey": "PainEnjoymentGeneralActivityAssessments",
  "dataKeySource": "PainAssessments",
  "info": [
    {
      "type": "elements",
      "description": "Pain Enjoyment General Activity (PEG) Assessments queries the following elements:",
      "elements": [
        {
          "name": "Pain Enjoyment General Activity (PEG) Assessment",
          "status": "final or amended",
          "lookback": "2 years"
        }
      ]
    },
    {
      "type": "reference",
      "url": "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2686775/",
      "title": "Development and Initial Validation of the PEG, a Three-item Scale Assessing Pain Intensity and Interference",
      "details": "The PEG is freely available in the public domain. Publications and reports should cite the original publication: Krebs EE, Lorenz KA, Bair MJ, Damush TA, Wu J, Sutherland JM, Asch SM, Kroenke K. Development and initial validation of the PEG, a 3-item scale assessing pain intensity and interference. Journal of General Internal Medicine. 2009 Jun;24:733-738."
    }
  ],
  "tables": [
    {
      "headers": {
        "Name": "Name",
        "Score": "Score",
        "Question": {
          "key": "Questions",
          "formatter": "arrayFlatten",
          "formatterArguments": ["Name"],
          "sortable": false,
          "minWidth": 200
        },
        "Question Score": {
          "key": "Questions",
          "formatter": "arrayFlatten",
          "formatterArguments": ["Score"],
          "sortable": false,
          "minWidth": 150
        },
        "Date": { "key": "Date", "formatter": "datishFormat" }
      }
    }
  ]
}

export {
  mockSummaryA,
  mockSummaryB,
  mockSummaryC,
  mockSummaryD,
  mockSummaryE,
  mockSummaryF,
  mockSummaryG,
  mockSectionFlags,
  mockSubSection
};
