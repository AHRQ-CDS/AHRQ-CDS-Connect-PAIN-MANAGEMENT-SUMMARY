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
    "HighRiskConditionsForOpioidTherapy": [
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
    ]
  },
  "RiskFactorsAndAssessments": {
    "PainManagementRiskScreenings": [
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
  },
  "MiscellaneousItems": {
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
  }
};

// no stool softeners, no benzo, no naloxone, has opioids, MME >= 50
const mockSummaryB = {
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
    "HighRiskConditionsForOpioidTherapy": [
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
    ]
  },
  "RiskFactorsAndAssessments": {
    "PainManagementRiskScreenings": [
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
      "Result": "60 {MME}/d",
      "Date": "2018-04-30T00:00:00.000+00:00"
    }
  },
  "MiscellaneousItems": {
    "StoolSoftenersAndLaxatives": []
  }
};

// has stool softeners, has benzo, no naloxone, no opioids, MME >= 50
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
    "HighRiskConditionsForOpioidTherapy": [
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
    ]
  },
  "RiskFactorsAndAssessments": {
    "PainManagementRiskScreenings": [
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
  },
  "MiscellaneousItems": {
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
  }
};

// no opioids, no nalox, no benzo, no non-opioid, no non-pharma, MME < 50
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
    "HighRiskConditionsForOpioidTherapy": [
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
    "NonPharmacologicTreatments": []
  },
  "RiskFactorsAndAssessments": {
    "PainManagementRiskScreenings": [
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
  },
  "MiscellaneousItems": {
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
    "HighRiskConditionsForOpioidTherapy": [
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
    ]
  },
  "RiskFactorsAndAssessments": {
    "PainManagementRiskScreenings": [
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
  },
  "MiscellaneousItems": {
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
  }
};

const mockSectionFlags = {
  "PertinentMedicalHistory": {
    "ConditionsAssociatedWithChronicPain": [],
    "HighRiskConditionsForOpioidTherapy": [
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
  "RiskFactorsAndAssessments": {
    "PainManagementRiskScreenings": [],
    "BenzodiazepineMedications": [
      16,
      17
    ],
    "NaloxoneMedications": [],
    "UrineDrugScreens": [],
    "MostRecentMME": []
  }
};

export {
  mockSummaryA,
  mockSummaryB,
  mockSummaryC,
  mockSummaryD,
  mockSummaryE,
  mockSectionFlags
};
