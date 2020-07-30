library OpioidCDSCommon version '2.0.0'

using FHIR version '4.0.0'

include FHIRHelpers version '4.0.0' called FHIRHelpers
include OMTKLogicMK2020 version '2.0.0' called OMTKLogic

codesystem "LOINC": 'http://loinc.org'
codesystem "SNOMED": 'http://snomed.info/sct'
codesystem "Medication Request Category Codes": 'http://terminology.hl7.org/CodeSystem/medicationrequest-category'
codesystem "Condition Clinical Status Codes": 'http://terminology.hl7.org/CodeSystem/condition-clinical'

// Expression-based
valueset "Opioid analgesics with ambulatory misuse potential": 'http://fhir.org/guides/cdc/opioid-cds/ValueSet/opioid-analgesics-with-ambulatory-misuse-potential'
valueset "Extended release opioid with ambulatory misuse potential": 'http://fhir.org/guides/cdc/opioid-cds/ValueSet/extended-release-opioid-with-ambulatory-misuse-potential'
valueset "Buprenorphine and methadone medications": 'http://fhir.org/guides/cdc/opioid-cds/ValueSet/buprenorphine-and-methadone-medications'

valueset "Limited life expectancy conditions": 'http://fhir.org/guides/cdc/opioid-cds/ValueSet/limited-life-expectancy-conditions'
valueset "Therapies indicating end of life care": 'http://fhir.org/guides/cdc/opioid-cds/ValueSet/therapies-indicating-end-of-life-care'
valueset "Conditions likely terminal for opioid prescribing": 'http://fhir.org/guides/cdc/opioid-cds/ValueSet/conditions-likely-terminal-for-opioid-prescribing'
valueset "CDC malignant cancer conditions": 'http://fhir.org/guides/cdc/opioid-cds/ValueSet/cdc-malignant-cancer-conditions'
valueset "Oncology specialty designations (NUCC)": 'http://fhir.org/guides/cdc/opioid-cds/ValueSet/oncology-specialty-designations'
valueset "Opioid misuse disorders": 'http://fhir.org/guides/cdc/opioid-cds/ValueSet/opioid-misuse-disorders'
valueset "Substance misuse behavioral counseling": 'http://fhir.org/guides/cdc/opioid-cds/ValueSet/substance-misuse-behavioral-counseling'
valueset "Conditions documenting substance misuse": 'http://fhir.org/guides/cdc/opioid-cds/ValueSet/conditions-documenting-substance-misuse'
// Harvested from VSAC - OID: 2.16.840.1.113883.3.464.1003.101.12.1001
// Reviewed with Terminology, 2020-02-05 - Value set name in VSAC is "Office Visit", need to verify suitability
valueset "Office Visit": 'http://fhir.org/guides/cdc/opioid-cds/ValueSet/office-visit'
valueset "Opioid counseling procedure": 'http://fhir.org/guides/cdc/opioid-cds/ValueSet/opioid-counseling-procedure'

/* Existing sets for first six recs */
valueset "Benzodiazepine medications": 'http://fhir.org/guides/cdc/opioid-cds/ValueSet/benzodiazepine-medications'
valueset "Non-opioid drug urine screening": 'http://fhir.org/guides/cdc/opioid-cds/ValueSet/non-opioid-drug-urine-screening'
valueset "Naloxone medications": 'http://fhir.org/guides/cdc/opioid-cds/ValueSet/naloxone-medications'
valueset "Opioid misuse assessment procedure": 'http://fhir.org/guides/cdc/opioid-cds/ValueSet/opioid-misuse-assessment-procedure'
valueset "Opioid drug urine screening": 'http://fhir.org/guides/cdc/opioid-cds/ValueSet/opioid-drug-urine-screening'
valueset "Hospice Disposition": 'http://fhir.org/guides/cdc/opioid-cds/ValueSet/hospice-disposition' // Harvested from VSAC - OID: 2.16.840.1.113762.1.4.1108.15
valueset "Hospice Finding Codes": 'http://fhir.org/guides/cdc/opioid-cds/ValueSet/hospice-finding'
valueset "Hospice Procedure Codes": 'http://fhir.org/guides/cdc/opioid-cds/ValueSet/hospice-procedure'

valueset "Pain treatment plan": 'http://fhir.org/guides/cdc/opioid-cds/ValueSet/pain-treatment-plan'
valueset "Pain management procedure": 'http://fhir.org/guides/cdc/opioid-cds/ValueSet/pain-management-procedure'
valueset "PDMP review procedure": 'http://fhir.org/guides/cdc/opioid-cds/ValueSet/pdmp-review-procedure'
valueset "PDMP data reviewed finding": 'http://fhir.org/guides/cdc/opioid-cds/ValueSet/pdmp-data-reviewed-finding'

code "Outpatient": 'outpatient' from "Medication Request Category Codes"
code "Active Condition": 'active' from "Condition Clinical Status Codes"

// TODO: code "Nonpharmacologic therapy and nonopioid pharmocologic": 'TODO' from "TODO"

// TODO: Capture process decisions for long-term opioid use
define IsForChronicPain: true

define "Active Ambulatory Opioid Rx":
  (
    "Get Active Ambulatory Medication Requests"([MedicationRequest: "Opioid analgesics with ambulatory misuse potential"])
  )
    union
    (
        ("Get Active Ambulatory Medication Requests"([MedicationRequest])) Rx
          let Med: [Medication: id in (Last(Split((Rx.medication as FHIR.Reference).reference, '/')))]
          where Med.code in "Opioid analgesics with ambulatory misuse potential"
          return
            MedicationRequest {
              id: Rx.id,
              status: Rx.status,
              intent: Rx.intent,
              category: Rx.category,
              medication: First(Med.code),
              subject: Rx.subject,
              recorder: Rx.recorder,
              dosageInstruction: Rx.dosageInstruction,
              dispenseRequest: Rx.dispenseRequest
            }
    )


define "Active Ambulatory Benzodiazepine Rx":
  (
    "Get Active Ambulatory Medication Requests"([MedicationRequest: "Benzodiazepine medications"])
  )
    union
    (
        ("Get Active Ambulatory Medication Requests"([MedicationRequest])) Rx
          let Med: [Medication: id in (Last(Split((Rx.medication as FHIR.Reference).reference, '/')))]
          where Med.code in "Benzodiazepine medications"
          return
            MedicationRequest {
              id: Rx.id,
              status: Rx.status,
              intent: Rx.intent,
              category: Rx.category,
              medication: First(Med.code),
              subject: Rx.subject,
              recorder: Rx.recorder,
              dosageInstruction: Rx.dosageInstruction,
              dispenseRequest: Rx.dispenseRequest
            }
    )

define "Active Ambulatory Naloxone Rx":
  (
    "Get Active Ambulatory Medication Requests"([MedicationRequest: "Naloxone medications"])
  )
    union
    (
        ("Get Active Ambulatory Medication Requests"([MedicationRequest])) Rx
          let Med: [Medication: id in (Last(Split((Rx.medication as FHIR.Reference).reference, '/')))]
          where Med.code in "Naloxone medications"
          return
            MedicationRequest {
              id: Rx.id,
              status: Rx.status,
              intent: Rx.intent,
              category: Rx.category,
              medication: First(Med.code),
              subject: Rx.subject,
              recorder: Rx.recorder,
              dosageInstruction: Rx.dosageInstruction,
              dispenseRequest: Rx.dispenseRequest
            }
    )

define "Ambulatory Opioid Rx":
  (
    "Get Active Ambulatory Medication Requests"([MedicationRequest: "Opioid analgesics with ambulatory misuse potential"])
  )
    union
    (
        ("Get Active Ambulatory Medication Requests"([MedicationRequest])) Rx
          let Med: [Medication: id in (Last(Split((Rx.medication as FHIR.Reference).reference, '/')))]
          where Med.code in "Opioid analgesics with ambulatory misuse potential"
          return
            MedicationRequest {
              id: Rx.id,
              status: Rx.status,
              intent: Rx.intent,
              category: Rx.category,
              medication: First(Med.code),
              subject: Rx.subject,
              recorder: Rx.recorder,
              dosageInstruction: Rx.dosageInstruction,
              dispenseRequest: Rx.dispenseRequest
            }
    )

define function "Get Active Ambulatory Medication Requests" (value List<MedicationRequest>) returns List<MedicationRequest>:
  value Rx
    where Rx.status.value = 'active'
      and exists (
        Rx.category RxCategory
          where FHIRHelpers.ToConcept(RxCategory) ~ "Outpatient"
      )

define function "Is Ambulatory Medication Request?" (value List<MedicationRequest>) returns List<MedicationRequest>:
  value Rx
    where exists (
        Rx.category RxCategory
          where FHIRHelpers.ToConcept(RxCategory) ~ "Outpatient"
      )

define function "Is Opioid Analgesic with Ambulatory Misuse Potential?"(value List<MedicationRequest>):
  value Rx
    let MedRef: if (Rx.medication is FHIR.Reference) then (Rx.medication as FHIR.Reference).reference else null,
      Med: if MedRef is null then (Rx.medication as FHIR.CodeableConcept).coding else SingletonFrom([Medication: id in (Last(Split(MedRef, '/')))] Med return Med.code.coding)
    where Med.code in "Opioid analgesics with ambulatory misuse potential"
      and exists (
        Rx.category RxCategory
          where FHIRHelpers.ToConcept(RxCategory) ~ "Outpatient"
      )
    return
          MedicationRequest {
            id: Rx.id,
            status: Rx.status,
            intent: Rx.intent,
            category: Rx.category,
            medication: FHIR.CodeableConcept{ coding: Med },
            subject: Rx.subject,
            authoredOn: Rx.authoredOn,
            recorder: Rx.recorder,
            dosageInstruction: Rx.dosageInstruction,
            dispenseRequest: Rx.dispenseRequest
          }

define function "Is Benzodiazepine?"(value List<MedicationRequest>):
  value Rx
    let MedRef: if (Rx.medication is FHIR.Reference) then (Rx.medication as FHIR.Reference).reference else null,
      Med: if MedRef is null then (Rx.medication as FHIR.CodeableConcept).coding else SingletonFrom([Medication: id in (Last(Split(MedRef, '/')))] Med return Med.code.coding)
    where Med.code in "Benzodiazepine medications"
      and exists (
        Rx.category RxCategory
          where FHIRHelpers.ToConcept(RxCategory) ~ "Outpatient"
      )
    return
          MedicationRequest {
            id: Rx.id,
            status: Rx.status,
            intent: Rx.intent,
            category: Rx.category,
            medication: FHIR.CodeableConcept{ coding: Med },
            subject: Rx.subject,
            authoredOn: Rx.authoredOn,
            recorder: Rx.recorder,
            dosageInstruction: Rx.dosageInstruction,
            dispenseRequest: Rx.dispenseRequest
          }

define "End of Life Assessment":
    // 1. Conditions indicating end of life or with limited life expectancy
    exists (
      "Conditions Indicating End of Life or With Limited Life Expectancy"
    )
    // 2. Admitted/referred/discharged to hospice care
    or exists (
      "Admitted/Referred/Discharged to Hospice Care"
    )
    // 3. Medications indicating end of life
    /* or exists (
      "Medications Indicating End of Life"
    ) */

define "Conditions Indicating End of Life or With Limited Life Expectancy":
  (
    [Condition: "Conditions likely terminal for opioid prescribing"] C
      where exists (
        C.clinicalStatus.coding Coding
          where FHIRHelpers.ToCode(Coding) ~ "Active Condition"
      )
  )
  union
  (
    [Condition: code in "Limited life expectancy conditions"] C
      where exists (
        C.clinicalStatus.coding Coding
          where FHIRHelpers.ToCode(Coding) ~ "Active Condition"
      )
  )

define "Admitted/Referred/Discharged to Hospice Care":
  (
    [Procedure: code in "Hospice Procedure Codes"] P
      where P.status.value in { 'in-progress', 'completed' }
  )
  union
  (
    [ServiceRequest: code in "Hospice Procedure Codes"] E
      where E.status.value in { 'planned', 'arrived', 'in-progress', 'finished', 'onleave' }
  )
  union
  (
    [Observation: code in "Hospice Finding Codes"] O
      where not (O.status.value in { 'unknown', 'entered-in-error', 'cancelled' })
  )
  union
  (
    [Encounter] E
      where
        (
          if E.hospitalization.dischargeDisposition.coding is null
              or not exists (E.hospitalization.dischargeDisposition.coding)
            then false
          else E.hospitalization.dischargeDisposition in "Hospice Disposition"
        )
        and E.status.value in { 'planned', 'arrived', 'in-progress', 'finished', 'onleave' }
  )

/*

define "Medications Indicating End of Life":
  (
    [MedicationAdministration: "End Of Life Opioids"] MA
      where MA.status.value in { 'in-progress', 'on-hold', 'completed' }
  )
  union
  (
    [MedicationDispense: "End Of Life Opioids"] MD
      where MD.status.value in { 'preparation', 'in-progress', 'on-hold', 'completed' }
  )
  union
  (
    [MedicationRequest: "End Of Life Opioids"] MR
      where MR.status.value in { 'active', 'completed' }
  )
  union
  (
    [MedicationStatement: "End Of Life Opioids"] MS
      where MS.status.value in { 'active', 'completed', 'intended' }
  )

*/


define function Prescriptions(Orders List<MedicationRequest>):
  Orders O
    let
      // NOTE: Assuming medication is specified as a CodeableConcept with a single RxNorm code
      rxNormCode: FHIRHelpers.ToCode((O.medication as FHIR.CodeableConcept).coding[0]),
      medicationName: OMTKLogic.GetMedicationName(rxNormCode),
      // NOTE: Assuming a single dosage instruction element
      dosageInstruction: O.dosageInstruction[0],
      // NOTE: Assuming a single dose and rate element
      doseAndRate: dosageInstruction.doseAndRate[0],
      repeat: dosageInstruction.timing.repeat,
      frequency: Coalesce(repeat.frequencyMax.value, repeat.frequency.value),
      period: System.Quantity { value: repeat.period.value, unit: repeat.periodUnit.value },
      doseDescription:
        Coalesce(
          // There should be a conversion from FHIR.SimpleQuantity to System.Quantity
          if doseAndRate.dose is FHIR.Range
            then ToString((doseAndRate.dose as FHIR.Range).low)
                + '-' + ToString((doseAndRate.dose as FHIR.Range).high)
                + (doseAndRate.dose as FHIR.Range).high.unit.value
            else ToString(FHIRHelpers.ToQuantity(doseAndRate.dose)),
            ''
        ),
      frequencyDescription:
        ToString(dosageInstruction.timing.repeat.frequency.value) +
          Coalesce(
            '-' + ToString(dosageInstruction.timing.repeat.frequencyMax.value),
            ''
          )
    return {
      rxNormCode: rxNormCode,
      isDraft: O.status.value = 'draft',
      // NOTE: Assuming asNeeded is expressed as a boolean
      isPRN: dosageInstruction.asNeeded,
      prescription:
        if dosageInstruction.text is not null then
          medicationName + ' ' + dosageInstruction.text.value
        else
          // TODO: Shouldn't need the .value here on asNeededBoolean
          medicationName + ' ' + doseDescription + ' q' + frequencyDescription + (if dosageInstruction.asNeeded then ' PRN' else ''),
      dose: if doseAndRate.dose is FHIR.Range
            then (doseAndRate.dose as FHIR.Range).high
            else FHIRHelpers.ToQuantity(doseAndRate.dose),
      dosesPerDay: Coalesce(OMTKLogic.ToDaily(frequency, period), 1.0)
    }

define function MME(prescriptions List<MedicationRequest>):
  (Prescriptions(prescriptions)) P
    let mme: SingletonFrom(OMTKLogic.CalculateMMEs({ { rxNormCode: P.rxNormCode, doseQuantity: P.dose, dosesPerDay: P.dosesPerDay } }))
    return {
      rxNormCode: P.rxNormCode,
      isDraft: P.isDraft,
      isPRN: P.isPRN,
      prescription: P.prescription,
      dailyDose: mme.dailyDoseDescription,
      conversionFactor: mme.conversionFactor,
      mme: mme.mme
    }

define function TotalMME(prescriptions List<MedicationRequest>):
  System.Quantity {
    value: Sum((MME(prescriptions)) M return M.mme.value),
    unit: 'mg/d'
  }

define function ProbableDaysInRange(Orders List<MedicationRequest>, daysPast Integer, numDaysInDaysPast Integer):
  Orders orders
    let
      frequency: orders.dosageInstruction[0].timing.repeat.frequency.value,
      period: orders.dosageInstruction[0].timing.repeat.period.value,
      periodDays: GetPeriodDays(orders.dosageInstruction[0].timing.repeat.periodUnit.value),
      dosesPerDay:
        if (frequency / (period * periodDays)) >= 1.0
        then 1.0
        else frequency / (period * periodDays),
      repeat: orders.dispenseRequest.numberOfRepeatsAllowed.value,
      supplyDuration: GetDurationInDays(orders.dispenseRequest.expectedSupplyDuration),
      validityPeriod: days between orders.dispenseRequest.validityPeriod."start".value and Today(),
      endDifference:
        if orders.dispenseRequest.validityPeriod."end".value < Today()
        then days between orders.dispenseRequest.validityPeriod."end".value and Today()
        else 0
    return
      if (repeat * supplyDuration) < numDaysInDaysPast then false
      else
        (dosesPerDay * ((repeat * supplyDuration) / validityPeriod) * (daysPast - endDifference)) >= numDaysInDaysPast

define function GetPeriodDays(value System.String): // returns Decimal:
  case
    when value = 'a' then 365.0
    when value = 'mo' then 30.0
    when value = 'h' then 1.0/24.0
    when value = 'min' then 1.0/24.0*60.0
    when value = 's' then 1.0/24.0*60.0*60.0
    when value = 'ms' then 1.0/24.0*60.0*60.0*1000.0
    else 1.0
  end

define function GetDurationInDays(value FHIR.Duration): // returns Decimal:
    case
      when StartsWith(value.unit.value, 'a') then value.value.value * 365.0
      when StartsWith(value.unit.value, 'mo') then value.value.value * 30.0
      when StartsWith(value.unit.value, 'wk') then value.value.value * 7.0
      when StartsWith(value.unit.value, 'd') then value.value.value
      when StartsWith(value.unit.value, 'h') then value.value.value / 24.0
      when StartsWith(value.unit.value, 'min') then value.value.value / 60.0 / 24.0
      when StartsWith(value.unit.value, 's') then value.value.value / 60.0 / 60.0 / 24.0
      when StartsWith(value.unit.value, 'ms') then value.value.value / 60.0 / 60.0 / 24.0 / 1000.0
      else Message(1000, true, 'Undefined', 'Error', 'Unsupported duration unit')
    end

define function GetIngredient(rxNormCode Code):
  OMTKLogic.GetIngredients(rxNormCode).ingredientName

define function GetIngredients(rxNormCodes List<Code>):
  rxNormCodes rnc return GetIngredient(rnc)

define function GetMedicationNames(medications List<MedicationRequest>):
  medications M
    return OMTKLogic.GetIngredients(ToRxNormCode((M.medication as FHIR.CodeableConcept).coding)).rxNormCode.display

/*
*  Conversion Functions
*/
define function CodeableConceptsToString(concepts List<FHIR.CodeableConcept>):
  concepts c return CodeableConceptToString(c)


define function CodingToString(coding FHIR.Coding):
  if (coding is null)
  then null
  else
    'Code {' &
      'code: ' & coding.code &
      'system: ' & coding.system &
      'version: ' & coding.version &
      'display: ' & coding.display &
    '}'

define function CodeableConceptToString(concept FHIR.CodeableConcept):
  if (concept is null or concept.coding is null)
  then null
  else
    'CodeableConcept {' &
      'Coding: [' &
        Combine(concept.coding Coding return CodingToString(Coding), ',')
      & ']'
    & '}'

define function ToCodes(coding List<FHIR.Coding>):
  coding c return FHIRHelpers.ToCode(c)

define function ToRxNormCode(coding List<FHIR.Coding>):
  singleton from (
    coding C where C.system = 'http://www.nlm.nih.gov/research/umls/rxnorm'
  )
