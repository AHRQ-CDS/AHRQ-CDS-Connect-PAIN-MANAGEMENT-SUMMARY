// # Introduction

// The Pain Management Summary artifact provides relevant information to consider when managing a patient’s pain.
// This CDS logic was informed by the Centers for Disease Control and Prevention (CDC) Guideline for Opioid Prescribing
// for Chronic Pain. The CDS is not a direct representation of any one recommendation statement within the guideline.
// Instead, the CDS compiles clinical concepts mentioned throughout the guideline in one consolidated summary for
// clinician review.
//
// In the process of authoring the logic, certain assumptions were made and details developed when the guideline did
// not provide enough specificity.  These decisions were made in the context of the CDS Connect Workgroup and CDC
// stakeholders, and are documented in the logic and/or in the CDS Connect artifact metadata.
//
// Version 2.0.0 implements several best practices prescribed by FHIR Clinical Guidelines, including:
// - Rename library from Factors_to_Consider_in_Managing_Chronic_Pain_FHIRv401 to FactorsToConsiderInManagingChronicPainFHIRv401
// - Update CDS Connect Commons library to CDSConnectCommonsForFHIRv401 version 2.0.0
// - Surround all library-level identifiers and datatypes in quotes
// - Use descriptive names (no abbreviations) for query aliases and function arguments
// - Fix non-standard use of Exists(...) as a function
//
// Version 2.0.0 also introduces the following changes from the previous version:
// - Replace "Conditions associated with chronic pain" 2.16.840.1.113762.1.4.1032.37 value set with 2.16.840.1.113762.1.4.1021.95
// - Replace "Pregnancy" 2.16.840.1.113883.3.526.3.378 and "Pregnancy (New ICD10 codes published in 2018 and 2019)"
//   2.16.840.1.113762.1.4.1032.80 value sets with grouping value set "CDS Pregnancy" 2.16.840.1.113762.1.4.1032.264
//
// NOTE: This version has not been piloted in a clinical setting, but has undergone logic testing and review.
//
// ##Source guideline: [CDC Guideline for Opioid Prescribing for Chronic Pain](https://www.cdc.gov/drugoverdose/prescribing/guideline.html)

library FactorsToConsiderInManagingChronicPainFHIRv401 version '2.0.0'

// # Data model #

// The FHIR R4 model is used for testing purposes only.  It has not been piloted.
using FHIR version '4.0.1'

// # Referenced libraries #

// The CDS Connect Commons for FHIRv401 library provides functions representing commonly used CDS logic and patterns.
include CDSConnectCommonsForFHIRv401 version '2.0.0' called C3F
// The FHIRHelpers library provides common functions for simplifying interaction w/ the FHIR R4 data model.
include FHIRHelpers version '4.0.1' called FHIRHelpers

// # Value sets and codes #

// ## Code Systems ##

codesystem "LOINC": 'http://loinc.org'
codesystem "SNOMED-CT": 'http://snomed.info/sct'

// Several concepts needed by the Pain Management Summary CDS do not yet have standardized codes associated with them.
// The CDS logic authors have registered new Logical Object Identifier Names and Codes (LOINC) codes, but they are
// not yet available.  Once available, the CDS will be updated.  Until then, CDS implementors will need to map to
// local codes (signified by the LOCAL code system below) or replace them with their own codes.
codesystem "LOCAL": 'http://cds.ahrq.gov/cdsconnect/pms'

// ## Value sets ##

// List value sets used by the artifact. The links to the Value Set Authority Center (VSAC) point to the latest
// expansion of each value set available.

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1021.95/expansion)
valueset "Conditions associated with chronic pain": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1021.95'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.34/expansion)
valueset "Opioid Pain Medications": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.34'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.54/expansion)
valueset "Adjuvant Analgesic Medications": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.54'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.464.1003.105.12.1007/expansion)
valueset "Major Depression": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.105.12.1007'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.600.143/expansion)
valueset "Depression Diagnosis ICD9": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.600.143'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.52/expansion)
valueset "Anxiety": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.52'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.1240.2017.3.2.1015/expansion)
valueset "Anxiety Disorders ICD9": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.1240.2017.3.2.1015'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.464.1003.106.12.1004/expansion)
valueset "Substance use disorder": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.106.12.1004'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.464.1003.106.11.1010/expansion)
valueset "Substance Abuse": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.106.11.1010'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.102/expansion)
valueset "Suicide Attempt": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.102'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.53/expansion)
valueset "Sleep-disordered breathing": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.53'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.464.1003.109.12.1028/expansion)
valueset "Kidney Failure": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.109.12.1028'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113883.3.464.1003.199.12.1035/expansion)
valueset "Chronic Liver Disease": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113883.3.464.1003.199.12.1035'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1047.42/expansion)
valueset "Liver Disease": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1047.42'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.264/expansion)
valueset "CDS Pregnancy": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.264'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.26/expansion)
valueset "Non opiod pain medications": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.26'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.36/expansion)
valueset "Non pharmacologic treatments for chronic pain": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.36'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.55/expansion)
valueset "Risk assessments relevant to pain management": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.55'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.43/expansion)
valueset "Benzodiazepine medications": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.43'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.42/expansion)
valueset "Naloxone medications": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.42'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.28/expansion)
valueset "Urine drug screen for pain management": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.28'

// [See value set in VSAC](https://vsac.nlm.nih.gov/valueset/2.16.840.1.113762.1.4.1032.44/expansion)
valueset "Stool softeners and laxatives": 'https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.44'

// ## Individual codes ##

// list individual codes from code systems used directly in the CQL logic. Individual codes are used when there is
// a single code from a particular vocabulary standard used to represent a clinical concept. It is considered
// best-practice not to create value sets containing a single code.

code "Pregnancy status": '82810-3' from "LOINC" display 'Pregnancy status'
code "Pregnant": '77386006' from "SNOMED-CT" display 'Patient currently pregnant (finding)'
code "Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]":
  '55758-7' from "LOINC" display 'Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]'
code "Patient Health Questionnaire 9 item (PHQ-9) total score [Reported]":
  '44261-6' from "LOINC" display 'Patient Health Questionnaire 9 item (PHQ-9) total score [Reported]'
code "Generalized anxiety disorder 7 item (GAD-7) total score [Reported.PHQ]":
  '70274-6' from "LOINC" display 'Generalized anxiety disorder 7 item (GAD-7) total score [Reported.PHQ]'
code "Total score [AUDIT]": '75624-7' from "LOINC" display 'Total score [AUDIT]'
code "Total score [AUDIT-C]": '75626-2' from "LOINC" display 'Total score [AUDIT-C]'
code "Total score [DAST-10]": '82667-7' from "LOINC" display 'Total score [DAST-10]'
code "Total score ORT": '91392-1' from "LOINC" display 'Total score ORT'
code "Pain severity Wong-Baker FACES Scale": '38221-8' from "LOINC" display 'Pain severity Wong-Baker FACES Scale'

// The Pain intensity, Enjoyment of life, General activity scale [PEG] now has standardized LOINC codes available.
// These LOINC codes were not available when the initial version of the Pain Management Summary was developed.
// New systems implementing the Pain Management Summary should use the standardized codes, but the legacy local codes
// are also retained in order to allow existing systems to continue to function. Existing systems, however, are
// strongly encouraged to adopt the standardized LOINC codes.

code "Mean score [PEG]": '91147-9' from "LOINC" display 'Mean score [PEG]'
code "Pain severity in the past week - 0-10 numeric rating [Reported]":
  '75893-8' from "LOINC" display 'Pain severity in the past week - 0-10 numeric rating [Reported]'
code "What number best describes how pain has interfered with your enjoyment of life during the past week":
  '91145-3' from "LOINC" display 'What number best describes how pain has interfered with your enjoyment of life during the past week'
code "What number best describes how pain has interfered with your general activity during the past week":
  '91146-1' from "LOINC" display 'What number best describes how pain has interfered with your general activity during the past week'

// Legacy local codes for the Pain intensity, Enjoyment of life, General activity scale [PEG].
// New systems should use the LOINC codes above instead.

code "Pain Enjoyment General Activity (PEG) Assessment LEGACY":
  'PEGASSESSMENT' from "LOCAL" display 'Pain Enjoyment General Activity (PEG) Assessment'
code "Pain LEGACY": 'PEGPAIN' from "LOCAL" display 'Pain'
code "Enjoyment of life LEGACY": 'PEGENJOYMENT' from "LOCAL" display 'Enjoyment of life'
code "General activity LEGACY": 'PEGGENERALACTIVITY' from "LOCAL" display 'General activity'

// The STarT Back Screening Tool now has a standardized LOINC code available. This LOINC code was not available
// when the initial version of the Pain Management Summary was developed. New systems implementing the Pain Management
// "Summary" should use the standardized code, but the legacy local code is also retained in order to allow existing
// systems to continue to function. Existing systems, however, are strongly encouraged to adopt the standardized LOINC
// code.

code "Total score [STarT Back]": '91351-7' from "LOINC" display 'Total score [STarT Back]'

// Legacy local code for the STarT Back Screening Tool. New systems should use the LOINC codes above instead.

code "STarT Back Screening Tool LEGACY": 'STARTBACK' from "LOCAL" display 'STarT Back Screening Tool'

// The following codes do not yet have standardized codes associated with them so are expressed as LOCAL codes.
// As standardized codes become available, this CDS will be updated to use standard codes rather than LOCAL codes.

code "Single question r/t ETOH use": 'SQETOHUSE' from "LOCAL" display 'Single question r/t ETOH use'
code "Single question r/t drug use": 'SQDRUGUSE' from "LOCAL" display 'Single question r/t drug use'
code "Morphine Milligram Equivalent (MME)": 'MME' from "LOCAL" display 'Morphine Milligram Equivalent (MME)'

// # Parameters #

// The InclusionMedicationsLookbackPeriod allows CDS implementors to specify how far the inclusion logic should look
// back for qualifying active medications. By default, the inclusion logic will look back 180 days.
parameter "InclusionMedicationsLookbackPeriod" default 180 days

// # CDS logic #

context Patient

// ## Re-usable functions ##

// The summary logic contains many constructs that are needed throughout the logic. Where possible, these constructs
// have been developed as re-usable functions that can be invoked wherever they are needed.

// Returns the first-found display text for a CodeableConcept, looking first at the `text` attribute, then the
// `display` on each `coding` until it finds a non-null value.  Some PEG codes are normalized due to length.
// @param Koncept - a FHIR CodeableConcept to get text from
// @returns {System."String"} the display text or null if none is found

define function "ConceptText"(Koncept FHIR."CodeableConcept"):
  if Koncept ~ "Mean score [PEG]" or Koncept ~ "Pain Enjoyment General Activity (PEG) Assessment LEGACY"
    then 'Mean score [PEG]'
  else if Koncept ~ "Pain severity in the past week - 0-10 numeric rating [Reported]" or Koncept ~ "Pain LEGACY"
    then 'Pain'
  else if Koncept ~ "What number best describes how pain has interfered with your enjoyment of life during the past week"
       or Koncept ~ "Enjoyment of life LEGACY"
    then 'Enjoyment of life'
  else if Koncept ~ "What number best describes how pain has interfered with your general activity during the past week"
       or Koncept ~ "General activity LEGACY"
    then 'General activity'
  else
    Coalesce(Koncept.text.value, Coalesce((Koncept.coding) c2 return c2.display.value))

// We do not reliably get ranges back from EHR data, but ranges are important to understanding assessment scores in
// the summary.  This function adds ranges to the name for known assessments.
// @param Koncept - a FHIR CodeableConcept to get the updated text for
// @returns {System."String"} the display text with range information appended
define function "ConceptTextWithRange"(Koncept FHIR."CodeableConcept"):
  if Koncept ~ "Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]"
    then "ConceptText"(Koncept) + ' [Range: 0-6]'
  else if Koncept ~ "Patient Health Questionnaire 9 item (PHQ-9) total score [Reported]"
    then "ConceptText"(Koncept) + ' [Range: 0-27]'
  else if Koncept ~ "Generalized anxiety disorder 7 item (GAD-7) total score [Reported.PHQ]"
    then "ConceptText"(Koncept) + ' [Range: 0-21]'
  else if Koncept ~ "Total score [AUDIT]"
    then "ConceptText"(Koncept) + ' [Range: 0-40]'
  else if Koncept ~ "Total score [AUDIT-C]"
    then "ConceptText"(Koncept) + ' [Range: 0-12]'
  else if Koncept ~ "Total score [DAST-10]"
    then "ConceptText"(Koncept) + ' [Range: 0-10]'
  else if Koncept ~ "Total score ORT"
    then "ConceptText"(Koncept) + ' [Range: 0-26]'
  else if Koncept ~ "Pain severity Wong-Baker FACES Scale"
    then "ConceptText"(Koncept) + ' [Range: 0-10]'
  else if Koncept ~ "Mean score [PEG]"
       or Koncept ~ "Pain Enjoyment General Activity (PEG) Assessment LEGACY"
    then "ConceptText"(Koncept) + ' [Range: 0-10]'
  else if Koncept ~ "Total score [STarT Back]"
       or Koncept ~ "STarT Back Screening Tool LEGACY"
    then "ConceptText"(Koncept) + ' [Range: 0-9]'
  else
    "ConceptText"(Koncept)

// Returns a text representation of a date using the CQL `ToString` function.
// @param Date - a FHIR date to get text for
// @returns {System."String"} the text representation of the date
define function "DateText"(Date FHIR."date"):
  ToString(Date.value)

// Returns a text representation of a dateTime using the CQL `ToString` function.
// @param Date - a FHIR dateTime to get text for
// @returns {System."String"} the text representation of the dateTime
define function "DateTimeText"(Date FHIR."dateTime"):
  ToString(Date.value)

// Returns a text representation of an instant using the CQL `ToString` function.
// @param Instant - a FHIR instant to get text for
// @returns {System."String"} the text representation of the instant
define function "InstantText"(Instant FHIR."instant"):
  ToString(Instant.value)

// Returns a text representation of a Quantity with the Quantity's value and unit.
// If the unit is {score}, then omit it (as it is not useful to display)
// @param Quantity - a FHIR Quantity to get text for
// @returns {System."String"} the text representation of the Quantity
define function "QuantityText"(Quantity FHIR."Quantity"):
  if (Quantity is null) then null
  else if (Quantity.unit is not null and Quantity.unit.value != '{score}') then ToString(Quantity.value.value) + ' ' + Quantity.unit.value
  else if (Quantity.code is not null and Quantity.code.value != '{score}') then ToString(Quantity.value.value) + ' ' + Quantity.code.value
  else ToString(Quantity.value.value)

// Returns a tuple containing a Period's start and end as text representations.
// @param Period - a FHIR Period to get a tuple for
// @returns {Tuple<Start System."String", End System."String">} the tuple representation of the Period
define function "PeriodObject"(Period FHIR."Period"):
  if Period is null then null
  else
    {
      Start: "DateTimeText"(Period."start"),
      End: "DateTimeText"(Period."end")
    }

// Returns a tuple containing a Range's low and high as text representations.
// @param Range - a FHIR Range to get a tuple for
// @returns {Tuple<Low System."String", High System."String">} the tuple representation of the Range
define function "RangeObject"(Range FHIR."Range"):
  if Range is null then null
  else
    {
      Low: "QuantityText"(Range.low),
      High: "QuantityText"(Range.high)
    }

// Returns a text representation of a date associated with an Observation, preferring `effectiveDateTime`, then
// `effectivePeriod.start`, then `issued`.
// @param Observation - a FHIR Observation to get the text date from
// @returns {System."String"} the text representation of a relevant date from the Observation
define function "ObservationDate"(Observation FHIR."Observation"):
  Coalesce(
    "DateTimeText"(Observation.effective as FHIR."dateTime"),
    "InstantText"(Observation.effective as FHIR."instant"),
    "DateTimeText"((Observation.effective as FHIR."Period")."start"),
    "InstantText"(Observation.issued)
  )

// Returns a text representation of a date associated with a MedicationStatement, preferring `effectiveDateTime`, then
// `.start`.
// @param Statement - a FHIR MedicationStatement to get the text date from
// @returns {System."String"} the text representation of a relevant date from the MedicationStatement
define function "MedicationStatementDate"(Statement FHIR."MedicationStatement"):
  Coalesce(
    "DateTimeText"(Statement.effective as FHIR."dateTime"),
    "DateTimeText"((Statement.effective as FHIR."Period")."start")
  )

// Returns a text representation of a Condition's onset, whether represented as a dateTime, Period, Quantity (Age),
// Range (Age), or string.
// @param Condition - a FHIR Condition to get the text representation of the onset from
// @returns {System."String"} the text representation of the Condition's onset
define function "Onset"(Condition FHIR."Condition"):
  Coalesce( List{
    "DateTimeText"(Condition.onset as FHIR."dateTime"),
    "QuantityText"(Condition.onset as FHIR."Age"),
    "PeriodObject"(Condition.onset as FHIR."Period"),
    "RangeObject"(Condition.onset as FHIR."Range"),
    (Condition.onset as FHIR."string").value
  })

// Returns a text representation of a Condition's abatement, whether represented as a dateTime, Period, Quantity (Age),
// Range (Age), string, or boolean.
// @param Condition - a FHIR Condition to get the text representation of the abatement from
// @returns {System."String"} the text representation of the Condition's abatement
define function "Abatement"(Condition FHIR."Condition"):
  Coalesce( List{
    "DateTimeText"(Condition.abatement as FHIR."dateTime"),
    "QuantityText"(Condition.abatement as FHIR."Age"),
    "PeriodObject"(Condition.abatement as FHIR."Period"),
    "RangeObject"(Condition.abatement as FHIR."Range"),
    (Condition.abatement as FHIR."string").value
  })

// ## Target population ##

// INCLUSIONS

// Determines if patient's age, in years, at the time CQL is run, is at least 18 years old
define "Is18orOlder":
  AgeInYears() >= 18

// Conditions associated with chronic pain
define "ConditionsAssociatedWithChronicPain":
  C3F."Confirmed"(C3F."ActiveOrRecurring"(["Condition": "Conditions associated with chronic pain"]))

// Determines if the patient has any of the conditions associated with chronic pain
define "HasConditionAssociatedWithChronicPain":
  exists("ConditionsAssociatedWithChronicPain")

// Determines if the patient has any record of opioid pain medications in the lookback period
//       - Medication Request within past 180 days (lookback can be made a parameter)
//       - Medication Statement by patient within past 180 days (lookback can be made a parameter)
define "HasRecentOpioidPainMedication":
  exists(C3F."ActiveCompletedOrStoppedMedicationRequest"(C3F."MedicationRequestLookBack"(
    ["MedicationRequest": "Opioid Pain Medications"],
    "InclusionMedicationsLookbackPeriod")
  ))
  or exists(C3F."ActiveOrCompletedMedicationStatement"(C3F."MedicationStatementLookBack"(
    ["MedicationStatement": "Opioid Pain Medications"],
    "InclusionMedicationsLookbackPeriod")
  ))

// Determines if the patient has any record of adjuvant analgesic medications in the lookback period
//       - Medication Request within past 180 days (lookback can be made a parameter)
//       - Medication Statement by patient within past 180 days (lookback can be made a parameter)
define "HasRecentAdjuvantAnalgesicMedication":
  exists(C3F."ActiveCompletedOrStoppedMedicationRequest"(C3F."MedicationRequestLookBack"(
    ["MedicationRequest": "Adjuvant Analgesic Medications"],
    "InclusionMedicationsLookbackPeriod")
  ))
  or exists(C3F."ActiveOrCompletedMedicationStatement"(C3F."MedicationStatementLookBack"(
    ["MedicationStatement": "Adjuvant Analgesic Medications"],
    "InclusionMedicationsLookbackPeriod")
  ))

// Determines if the patient meets the inclusion criteria for the CDS. Inclusion criteria is:
// - Age >=18 years
// - AND
//   - OR Conditions associated with chronic pain
//   - OR Opioid pain medication
//   - OR Adjuvant analgesic medication
define "MeetsInclusionCriteria":
  "Is18orOlder"
  and (
    "HasConditionAssociatedWithChronicPain"
    or "HasRecentOpioidPainMedication"
    or "HasRecentAdjuvantAnalgesicMedication"
  )

// EXCLUSIONS

// TAKE NOTICE: This CDS is not intended for patients who meet any of the following criteria:
// 1. Younger than 18 years of age
// 2. Undergoing end-of-life care (hospice or palliative)
// 3. Undergoing active cancer treatment
//
// The first exclusion is explicitly accounted for under INCLUSIONS.
// The second and third exclusions cannot be realiably detected for all patients using just EHR data. For that reason
// they are not implemented in this CDS. Care providers should use their judgement when applying this CDS to their
// patients.

// ## Intervention(s) ##

// DISPLAY and POPULATE a Pain Management Summary of the following items:

// PERTINENT MEDICAL HISTORY

// Conditions associated with chronic pain and their dates of onset

define "ReportConditionsAssociatedWithChronicPain":
  ("ConditionsAssociatedWithChronicPain") Condition
  return {
    Name:   "ConceptText"(Condition.code),
    Status: Condition.clinicalStatus.coding[0].code.value,
    Onset:  "Onset"(Condition),
    DateRecorded: "DateTimeText"(Condition.recordedDate)
  }
  sort by (Onset as "String") desc

// Conditions that are risk factors for opioid-related harms and their dates of onset
// This is a union of nine value sets (w/ different filtering criteria)

define "DepressionConditions":
  C3F."Confirmed"(C3F."ActiveOrRecurring"(["Condition": "Major Depression"]))
  union C3F."Confirmed"(C3F."ActiveOrRecurring"(["Condition": "Depression Diagnosis ICD9"]))

define "AnxietyConditions":
  C3F."Confirmed"(C3F."ActiveOrRecurring"(["Condition": "Anxiety"]))
  union C3F."Confirmed"(C3F."ActiveOrRecurring"(["Condition": "Anxiety Disorders ICD9"]))

define "SubstanceUseDisorderConditions":
  C3F."Confirmed"(["Condition": "Substance use disorder"])
  union C3F."Confirmed"(["Condition": "Substance Abuse"])

define "SuicideAttemptConditions":
  C3F."Confirmed"(["Condition": "Suicide Attempt"])

define "SleepDisorderedBreathingConditions":
  C3F."Confirmed"(C3F."ActiveOrRecurring"(["Condition": "Sleep-disordered breathing"]))

define "RenalDysfunctionConditions":
  C3F."Confirmed"(C3F."ActiveOrRecurring"(["Condition": "Kidney Failure"]))

define "HepaticDysfunctionConditions":
  C3F."Confirmed"(C3F."ActiveOrRecurring"(["Condition": "Chronic Liver Disease"]))
  union C3F."Confirmed"(C3F."ActiveOrRecurring"(["Condition": "Liver Disease"]))

define "PregnancyConditions":
  C3F."Confirmed"(C3F."ConditionLookBack"(C3F."ActiveOrRecurring"(
    ["Condition": "CDS Pregnancy"]),
    42 weeks
  ))

define "PregnancyObservations":
  C3F."Verified"(C3F."ObservationLookBack"(["Observation": "Pregnancy status"], 42 weeks))

define "MostRecentPregnancyObservation":
  C3F."MostRecent"("PregnancyObservations")

define "MostRecentPregnancyObservationIsPositive":
  C3F."ConceptValue"("MostRecentPregnancyObservation") ~ "Pregnant"

define "Is65orOlder":
  AgeInYears() >= 65

define "ConditionRiskFactorsForOpioidRelatedHarms":
  "DepressionConditions"
  union "AnxietyConditions"
  union "SubstanceUseDisorderConditions"
  union "SuicideAttemptConditions"
  union "SleepDisorderedBreathingConditions"
  union "RenalDysfunctionConditions"
  union "HepaticDysfunctionConditions"
  union "PregnancyConditions"

// Encounter diagnoses that are risk factors for opioid-related harms and their dates of onset. Some risk factors may
// not exist on the problem list, and therefore may not be represented as Conditions (depending on EHR implementation).
// For this, the logic also looks at the patient's encounters, trying to find risk factors recorded as encounter
// diagnosis codes. We do not look at the reasonReference field because the Conditions referred to would already be
// reflected in the expression that queries over Conditions.

define "EncounterRiskFactorsForOpioidRelatedHarms":
  ["Encounter"] Encounter where exists(
    Encounter.reasonCode Reason where
      FHIRHelpers.ToConcept(Reason) in "Major Depression"
      or FHIRHelpers.ToConcept(Reason) in "Depression Diagnosis ICD9"
      or FHIRHelpers.ToConcept(Reason) in "Anxiety"
      or FHIRHelpers.ToConcept(Reason) in "Anxiety Disorders ICD9"
      or FHIRHelpers.ToConcept(Reason) in "Substance use disorder"
      or FHIRHelpers.ToConcept(Reason) in "Substance Abuse"
      or FHIRHelpers.ToConcept(Reason) in "Suicide Attempt"
      or FHIRHelpers.ToConcept(Reason) in "Sleep-disordered breathing"
      or FHIRHelpers.ToConcept(Reason) in "Kidney Failure"
      or FHIRHelpers.ToConcept(Reason) in "Chronic Liver Disease"
      or FHIRHelpers.ToConcept(Reason) in "Liver Disease"
      // Pregnancy not considered in Encounter diagnoses because this is an unrestricted lookback.
  )

// NOTE: As a convention, if an expression's name starts with "Report", its purpose is to format data for the purpose
// of building the final summary object.

// Format the risk factors in a uniform way despite the different sources of the data (conditions, encounter diagnoses,
// etc.). Note that conditions do not have a "Visit" date and encounter diagnoses do not have a status, onset date,
// recorded date, or abatement date.

define "ReportConditionRiskFactorsForOpioidRelatedHarms":
  ("ConditionRiskFactorsForOpioidRelatedHarms") Condition
  return {
    Name:      "ConceptText"(Condition.code),
    Status:    Condition.clinicalStatus.coding[0].code.value,
    Onset:     "Onset"(Condition),
    DateRecorded: "DateTimeText"(Condition.recordedDate),
    Abatement: "Abatement"(Condition),
    Visit:     null as Tuple{ Start "String", End "String" }
  }
  sort by (Onset as "String") desc, (Abatement as "String") desc

define function "GetEncounterDiagnosesRiskFactorsForOpioidRelatedHarms"(Encounter "Encounter"):
  (Encounter.reasonCode) Reason
    where FHIRHelpers.ToConcept(Reason) in "Major Depression"
      or FHIRHelpers.ToConcept(Reason) in "Depression Diagnosis ICD9"
      or FHIRHelpers.ToConcept(Reason) in "Anxiety"
      or FHIRHelpers.ToConcept(Reason) in "Anxiety Disorders ICD9"
      or FHIRHelpers.ToConcept(Reason) in "Substance use disorder"
      or FHIRHelpers.ToConcept(Reason) in "Substance Abuse"
      or FHIRHelpers.ToConcept(Reason) in "Suicide Attempt"
      or FHIRHelpers.ToConcept(Reason) in "Sleep-disordered breathing"
      or FHIRHelpers.ToConcept(Reason) in "Kidney Failure"
      or FHIRHelpers.ToConcept(Reason) in "Chronic Liver Disease"
      or FHIRHelpers.ToConcept(Reason) in "Liver Disease"
      // Pregnancy not considered in Encounter diagnoses because this is an unrestricted lookback.
    return {
      Name:      "ConceptText"(Reason),
      Status:    null as "String",
      Onset:     null as "String",
      DateRecorded: null as "String",
      Abatement: null as "String",
      Visit:     "PeriodObject"(Encounter.period)
    }

define "ReportEncounterRiskFactorsForOpioidRelatedHarms":
  (flatten(("EncounterRiskFactorsForOpioidRelatedHarms") Encounter
  return "GetEncounterDiagnosesRiskFactorsForOpioidRelatedHarms"(Encounter))) Reason
  sort by Visit.Start desc, Visit.End desc

// Shape the pregnancy Observation as a Condition, since this is the backup approach for detecting a pregnancy in case
// there are no active Conditions found.
define "ReportMostRecentPositivePregnancyObservation":
  if "MostRecentPregnancyObservationIsPositive" then
    {
      Name: "ConceptText"("MostRecentPregnancyObservation".code),
      Status: "ConceptText"("MostRecentPregnancyObservation".value as FHIR."CodeableConcept"),
      Onset: ToString(Coalesce(
        ("MostRecentPregnancyObservation".effective as FHIR."dateTime").value,
        ("MostRecentPregnancyObservation".effective as FHIR."instant").value,
        ("MostRecentPregnancyObservation".effective as FHIR."Period")."start".value
      )),
      DateRecorded: ToString("MostRecentPregnancyObservation".issued.value),
      Abatement: null as "String",
      Visit: null as Tuple{ Start "String", End "String" }
    }
  else
    null

// Shape the case of being 65 or older as a Condition for the purposes of building the summary.
define "ReportOlderThan65":
  if "Is65orOlder" then
    {
      Name: '65 years or older',
      Status: 'active',
      Onset: null as "String",
      DateRecorded: null as "String",
      Abatement: null as "String",
      Visit: null as Tuple{ Start "String", End "String" }
    }
  else
    null

define "ReportRiskFactorsForOpioidRelatedHarms":
  // If a pregnancy Condition is present, use that.
  if exists "PregnancyConditions" then
    ("ReportConditionRiskFactorsForOpioidRelatedHarms"
      union "ReportEncounterRiskFactorsForOpioidRelatedHarms"
      union "ReportOlderThan65") Condition
  // Otherwise, try to find a positive pregnancy status in an Observation.
  else
    ("ReportConditionRiskFactorsForOpioidRelatedHarms"
      union "ReportEncounterRiskFactorsForOpioidRelatedHarms"
      union "ReportOlderThan65"
      union "ReportMostRecentPositivePregnancyObservation") Condition
  sort by (if Onset is not null then Onset as "String" else Visit.Start) desc, Visit.End desc, (Abatement as "String") desc

// PAIN ASSESSMENT

// Numeric pain intensity assessment - scores and dates (lookback 2 years)

define "NumericPainIntensityAssessments":
  C3F."Verified"(C3F."ObservationLookBack"(["Observation": "Pain severity Wong-Baker FACES Scale"], 2 years))

define "ReportNumericPainIntensityAssessments":
  ("NumericPainIntensityAssessments") Assessment
  return {
    Name:           "ConceptTextWithRange"(Assessment.code),
    Score:          "QuantityText"(Assessment.value as FHIR."Quantity"),
    Interpretation: Coalesce( "ConceptText"(First(Assessment.interpretation)),  "ConceptText"(Assessment.value as FHIR."CodeableConcept") ),
    Date:           "ObservationDate"(Assessment)
  }
  sort by Date desc

// Pain Enjoyment General Activity (PEG) Assessment - scores and dates (lookback 2 years)
// Note: this includes listing the response to each of the 3 questions, plus the total score.  The Pain Management
// Sumnmary currently supports both the LOINC representations and the legacy local code representations.
//
// 1. Observation w/ LOINC mean score as primary code and mean score as valueQuantity
//    * code: LOINC 91147-9 "Mean score [PEG]"
//    * valueQuantity: (mean score)
//    * component:
//      -
//        * code: LOINC 75893-8 "What number best describes your pain on average in the past week?"
//        * valueQuantity: (pain score)
//      -
//        * code: LOINC 91145-3 "What number best describes how, during the past week, pain has interfered with your enjoyment of life?"
//        * valueQuantity: (enjoyment of life score)
//      -
//        * code: LOINC 91146-1 "What number best describes how, during the past week, pain has interfered with your general activity?"
//        * valueQuantity: (general activity score)
//
// 2. LEGACY: Observation w/ LOCAL code as primary code and mean score as valueQuantity
//    * code: LOCAL PEGASSESSMENT "Pain Enjoyment General Activity (PEG) Assessment"
//    * valueQuantity: (mean score)
//    * component:
//      -
//        * code: LOCAL PEGPAIN "Pain"
//        * valueQuantity: (pain score)
//      -
//        * code: LOCAL PEGENJOYMENT "Enjoyment of life"
//        * valueQuantity: (enjoyment of life score)
//      -
//        * code: LOCAL PEGGENERALACTIVITY "General activity"
//        * valueQuantity: (general activity score)

define "PainEnjoymentGeneralActivityAssessments":
  C3F."Verified"(C3F."ObservationLookBack"(
    ["Observation": "Mean score [PEG]"]
      union ["Observation": "Pain Enjoyment General Activity (PEG) Assessment LEGACY"],
    2 years
  ))

define "ReportPainEnjoymentGeneralActivityAssessments":
  ("PainEnjoymentGeneralActivityAssessments") Assessment
  let
    Pain: (Assessment.component) Component
      where Component.code ~ "Pain severity in the past week - 0-10 numeric rating [Reported]"
      or Component.code ~ "Pain LEGACY",
    Enjoyment: (Assessment.component) Component
      where Component.code ~ "What number best describes how pain has interfered with your enjoyment of life during the past week"
      or Component.code ~ "Enjoyment of life LEGACY",
    GeneralActivity: (Assessment.component) Component
      where Component.code ~ "What number best describes how pain has interfered with your general activity during the past week"
      or Component.code ~ "General activity LEGACY"
  where true // grammar needs a where statement to separate the "let" from the "return"
  return {
    // NOTE: Hard-code in names because the real LOINC code displays are quite long
    Name:           "ConceptTextWithRange"(Assessment.code),
    Score:          "QuantityText"(Assessment.value as FHIR."Quantity"),
    Interpretation: Coalesce( "ConceptText"(First(Assessment.interpretation)),  "ConceptText"(Assessment.value as FHIR."CodeableConcept") ),
    Questions:      ({ First(Pain), First(Enjoyment), First(GeneralActivity) }) Component
                      where Component is not null
                      return { "Name": "ConceptText"(Component.code), "Score": "QuantityText"(Component.value as FHIR."Quantity") },
    Date:           "ObservationDate"(Assessment)
  }
  sort by Date desc

// STarT Back Screening Tool - Overall score and dates (lookback 2 years)

define "STarTBackAssessments":
  C3F."Verified"(C3F."ObservationLookBack"(
    ["Observation": "Total score [STarT Back]"]
      union ["Observation": "STarT Back Screening Tool LEGACY"],
    2 years
  ))

define "ReportSTarTBackAssessments":
  ("STarTBackAssessments") Assessment
  return {
    Name:           "ConceptTextWithRange"(Assessment.code),
    Score:          "QuantityText"(Assessment.value as FHIR."Quantity"),
    Interpretation: Coalesce( "ConceptText"(First(Assessment.interpretation)),  "ConceptText"(Assessment.value as FHIR."CodeableConcept") ),
    Date:           "ObservationDate"(Assessment)
  }
  sort by Date desc

// HISTORICAL TREATMENTS

// Opioid medication orders and statements with dates (lookback 2 years)

define "OpioidMedicationRequests":
  C3F."ActiveCompletedOrStoppedMedicationRequest"(C3F."MedicationRequestLookBack"(
    ["MedicationRequest": "Opioid Pain Medications"],
    2 years
  ))

define "OpioidMedicationStatements":
  C3F."ActiveOrCompletedMedicationStatement"(C3F."MedicationStatementLookBack"(
    ["MedicationStatement": "Opioid Pain Medications"],
    2 years
  ))

define "ReportOpioidMedicationRequests":
  ("OpioidMedicationRequests") Request
  return {
    Type:  'Request',
    Name:  "ConceptText"(Request.medication as FHIR."CodeableConcept"),
    Start: "DateTimeText"(Request.authoredOn),
    End:   null as "String", // MedicationRequest end date not supported in R4,
    Status: Request.status.value
  }
  sort by Start desc, End desc

define "ReportOpioidMedicationStatements":
  ("OpioidMedicationStatements") Statement
  return {
    Type:  'Statement',
    Name:  "ConceptText"(Statement.medication as FHIR."CodeableConcept"),
    Start: "MedicationStatementDate"(Statement),
    End:   "DateTimeText"((Statement.effective as FHIR."Period")."end"),
    Status: Statement.status.value
  }
  sort by Start desc, End desc

define "ReportOpioidMedications":
  ("ReportOpioidMedicationRequests" union "ReportOpioidMedicationStatements") Medication
  sort by Start desc, End desc

// Non-opioid medication orders and statements with dates (lookback 2 years)

define "NonOpioidMedicationRequests":
  C3F."ActiveCompletedOrStoppedMedicationRequest"(C3F."MedicationRequestLookBack"(
    ["MedicationRequest": "Non opiod pain medications"],
    2 years
  ))

define "NonOpioidMedicationStatements":
  C3F."ActiveOrCompletedMedicationStatement"(C3F."MedicationStatementLookBack"(
    ["MedicationStatement": "Non opiod pain medications"],
    2 years
  ))

define "ReportNonOpioidMedicationRequests":
  ("NonOpioidMedicationRequests") Request
  return {
    Type:  'Request',
    Name:  "ConceptText"(Request.medication as FHIR."CodeableConcept"),
    Start: "DateTimeText"(Request.authoredOn),
    End:   null as "String", // MedicationRequest end date not supported in R4,
    Status: Request.status.value
  }
  sort by Start desc, End desc

define "ReportNonOpioidMedicationStatements":
  ("NonOpioidMedicationStatements") Statement
  return {
    Type:  'Statement',
    Name:  "ConceptText"(Statement.medication as FHIR."CodeableConcept"),
    Start: "MedicationStatementDate"(Statement),
    End:   "DateTimeText"((Statement.effective as FHIR."Period")."end"),
    Status: Statement.status.value
  }
  sort by Start desc, End desc

define "ReportNonOpioidMedications":
  ("ReportNonOpioidMedicationRequests" union "ReportNonOpioidMedicationStatements") Medication
  sort by Start desc, End desc

// Non-pharmacologic treatments, orders, and referrals with dates (lookback 2 years)

define "NonPharmacologicTreatmentProcedures":
  C3F."ProcedurePerformance"(C3F."ProcedureLookBack"(["Procedure": "Non pharmacologic treatments for chronic pain"], 2 years))

define "ReportNonPharmacologicTreatmentProcedures":
  ("NonPharmacologicTreatmentProcedures") Procedure
  return {
    Type: 'Procedure',
    Name: "ConceptText"(Procedure.code),
    Date: Coalesce(
      "DateTimeText"(Procedure.performed as FHIR."dateTime"),
      "DateTimeText"((Procedure.performed as FHIR."Period")."start")
    )
  }
  sort by Date desc

define "NonPharmacologicTreatmentServiceRequests":
  C3F."ActiveOrCompletedServiceRequest"(
    C3F."ServiceRequestLookBack"(["ServiceRequest": "Non pharmacologic treatments for chronic pain"], 2 years)
  )

define "ReportNonPharmacologicTreatmentServiceRequests":
  ("NonPharmacologicTreatmentServiceRequests") Request
  return {
    Type: 'ServiceRequest',
    Name: "ConceptText"(Request.code),
    Date: "DateTimeText"(Request.authoredOn)
  }
  sort by Date desc

define "ReportNonPharmacologicTreatments":
  ("ReportNonPharmacologicTreatmentProcedures"
    union "ReportNonPharmacologicTreatmentServiceRequests") TreatmentOrRequest
  sort by Date desc

// Stool softeners and laxatives - orders and statements with dates (lookback 6 months)

define "StoolSoftenersAndLaxativesRequests":
  C3F."ActiveCompletedOrStoppedMedicationRequest"(C3F."MedicationRequestLookBack"(
    ["MedicationRequest": "Stool softeners and laxatives"],
    6 months
  ))

define "StoolSoftenersAndLaxativesStatements":
  C3F."ActiveOrCompletedMedicationStatement"(C3F."MedicationStatementLookBack"(
    ["MedicationStatement": "Stool softeners and laxatives"],
    6 months
  ))

define "ReportStoolSoftenersAndLaxativesRequests":
  ("StoolSoftenersAndLaxativesRequests") Request
  return {
    Type:  'Request',
    Name:  "ConceptText"(Request.medication as FHIR."CodeableConcept"),
    Start: "DateTimeText"(Request.authoredOn),
    End:   null as "String", // MedicationRequest end date not supported in R4,
    Status: Request.status.value
  }
  sort by Start desc, End desc

define "ReportStoolSoftenersAndLaxativesStatements":
  ("StoolSoftenersAndLaxativesStatements") Statement
  return {
    Type:  'Statement',
    Name:  "ConceptText"(Statement.medication as FHIR."CodeableConcept"),
    Start: "MedicationStatementDate"(Statement),
    End:   "DateTimeText"((Statement.effective as FHIR."Period")."end"),
    Status: Statement.status.value
  }
  sort by Start desc, End desc

define "ReportStoolSoftenersAndLaxatives":
  ("ReportStoolSoftenersAndLaxativesRequests" union "ReportStoolSoftenersAndLaxativesStatements") Laxative
  sort by Start desc, End desc

// RISK CONSIDERATIONS

// MME (MOST RECENT w/ lookback 6 months) - amount and date

define "MostRecentMME":
  C3F."MostRecent"(C3F."Verified"(C3F."ObservationLookBack"(["Observation": "Morphine Milligram Equivalent (MME)"], 6 months)))

define "ReportMostRecentMME":
  if "MostRecentMME" is null
  then null
  else
    ("MostRecentMME") MME
    return {
      Name:   "ConceptText"(MME.code),
      Result: "QuantityText"(MME.value as FHIR."Quantity"),
      Date:   "ObservationDate"(MME)
    }

// Urine drug screen - dates and results (all screens w/ lookback of 1 year)

define "UrineDrugScreens":
  C3F."Verified"(C3F."ObservationLookBack"(["Observation": "Urine drug screen for pain management"], 1 year))

define "ReportUrineDrugScreens":
  ("UrineDrugScreens") Screening
  return {
    Name:           "ConceptText"(Screening.code),
    Result:         Coalesce(
      "QuantityText"(Screening.value as FHIR."Quantity"),
      (Screening.value as FHIR."string").value,
      "ConceptText"(Screening.value as FHIR."CodeableConcept")
    ),
    Interpretation: "ConceptText"(First(Screening.interpretation)),
    Date:           "ObservationDate"(Screening)
  }
  sort by Date desc

// Benzodiazepine Medications (lookback of 2 years)-  orders and statements with dates

define "BenzodiazepineMedicationRequests":
  C3F."ActiveCompletedOrStoppedMedicationRequest"(C3F."MedicationRequestLookBack"(
    ["MedicationRequest": "Benzodiazepine medications"],
    2 years
  ))

define "BenzodiazepineMedicationStatements":
  C3F."ActiveOrCompletedMedicationStatement"(C3F."MedicationStatementLookBack"(
    ["MedicationStatement": "Benzodiazepine medications"],
    2 years
  ))

define "ReportBenzodiazepineMedicationRequests":
  ("BenzodiazepineMedicationRequests") Request
  return {
    Type:  'Request',
    Name:  "ConceptText"(Request.medication as FHIR."CodeableConcept"),
    Start: "DateTimeText"(Request.authoredOn),
    End:   null as "String", // MedicationRequest end date not supported in R4,
    Status: Request.status.value
  }
  sort by Start desc, End desc

define "ReportBenzodiazepineMedicationStatements":
  ("BenzodiazepineMedicationStatements") Statement
  return {
    Type:  'Statement',
    Name:  "ConceptText"(Statement.medication as FHIR."CodeableConcept"),
    Start: "MedicationStatementDate"(Statement),
    End:   "DateTimeText"((Statement.effective as FHIR."Period")."end"),
    Status: Statement.status.value
  }
  sort by Start desc, End desc

define "ReportBenzodiazepineMedications":
  ("ReportBenzodiazepineMedicationRequests" union "ReportBenzodiazepineMedicationStatements") Medication
  sort by Start desc, End desc

// Naloxone Medications (unrestricted lookback) - orders and statements with dates

define "NaloxoneMedicationRequests":
  C3F."ActiveCompletedOrStoppedMedicationRequest"(["MedicationRequest": "Naloxone medications"])

define "NaloxoneMedicationStatements":
  C3F."ActiveOrCompletedMedicationStatement"(["MedicationStatement": "Naloxone medications"])

define "ReportNaloxoneMedicationRequests":
  ("NaloxoneMedicationRequests") Request
  return {
    Type:  'Request',
    Name:  "ConceptText"(Request.medication as FHIR."CodeableConcept"),
    Start: "DateTimeText"(Request.authoredOn),
    End:   null as "String", // MedicationRequest end date not supported in R4,
    Status: Request.status.value
  }
  sort by Start desc, End desc

define "ReportNaloxoneMedicationStatements":
  ("NaloxoneMedicationStatements") Statement
  return {
    Type:  'Statement',
    Name:  "ConceptText"(Statement.medication as FHIR."CodeableConcept"),
    Start: "MedicationStatementDate"(Statement),
    End:   "DateTimeText"((Statement.effective as FHIR."Period")."end"),
    Status: Statement.status.value
  }
  sort by Start desc, End desc

define "ReportNaloxoneMedications":
  ("ReportNaloxoneMedicationRequests" union "ReportNaloxoneMedicationStatements") Medication
  sort by Start desc, End desc

// Risk screenings relevant to pain management - overall scores and dates (MOST RECENT w/ lookback 1 year)

define "RiskScreeningsRelevantToPainManagement":
  C3F."Verified"(C3F."ObservationLookBack"(
    ["Observation": "Risk assessments relevant to pain management"]
    union ["Observation": "Single question r/t ETOH use"]
    union ["Observation": "Single question r/t drug use"]
  , 1 year))

define "ReportRiskScreeningsRelevantToPainManagement":
  ("RiskScreeningsRelevantToPainManagement") Screening
  return {
    Name:           "ConceptTextWithRange"(Screening.code),
    Score:          Coalesce(
      "QuantityText"(Screening.value as FHIR."Quantity"),
      (Screening.value as FHIR."string").value
    ),
    Interpretation: Coalesce(
      "ConceptText"(First(Screening.interpretation)),
      "ConceptText"(Screening.value as FHIR."CodeableConcept")
    ),
    Date:           "ObservationDate"(Screening)
  }
  sort by Date desc

// SUMMARY

// The "Summary" object represents the full Pain Management Summary to be displayed to the clinician.  All values are
// returned as user-friendly text representations, but a robust user interface (UI) should be implemented to
// display the data to the user in a friendly manner.  See the Pain Management Summary SMART on FHIR application as
// an example of how to integrate this summary into an EHR using modern web UI technologies.

define "Summary": {
  Patient: {
    Name: Combine(Patient.name.given Given return Given.value, ' ') + ' ' + Combine(Patient.name.family Family return Family.value, ' '),
    Gender: Patient.gender.value,
    Age: AgeInYears(),
    MeetsInclusionCriteria: "MeetsInclusionCriteria"
  },
  PertinentMedicalHistory: {
    ConditionsAssociatedWithChronicPain: "ReportConditionsAssociatedWithChronicPain",
    RiskFactorsForOpioidRelatedHarms: "ReportRiskFactorsForOpioidRelatedHarms"
  },
  PainAssessments: {
    NumericPainIntensityAssessments: "ReportNumericPainIntensityAssessments",
    PainEnjoymentGeneralActivityAssessments: "ReportPainEnjoymentGeneralActivityAssessments",
    STarTBackAssessments: "ReportSTarTBackAssessments"
  },
  HistoricalTreatments: {
    OpioidMedications: "ReportOpioidMedications",
    NonOpioidMedications: "ReportNonOpioidMedications",
    NonPharmacologicTreatments: "ReportNonPharmacologicTreatments",
    StoolSoftenersAndLaxatives: "ReportStoolSoftenersAndLaxatives"
  },
  RiskConsiderations: {
    MostRecentMME: "ReportMostRecentMME",
    UrineDrugScreens: "ReportUrineDrugScreens",
    BenzodiazepineMedications: "ReportBenzodiazepineMedications",
    NaloxoneMedications: "ReportNaloxoneMedications",
    RiskScreeningsRelevantToPainManagement: "ReportRiskScreeningsRelevantToPainManagement"
  }
}
