library OpioidCDSRoutines version '2.0.0'

using FHIR version '4.0.0'

include FHIRHelpers version '4.0.0' called FHIRHelpers
include OpioidCDSCommon version '2.0.0' called Common
include OpioidCDSCommonConfig version '2.0.0' called Config

context Patient

/*
**  Routine #1
**  Opioid Review Useful Routine
**
**  Definition              | Answer to Proceed   | Details                                      | Data (Terminology) Requirement
**  ------------------------------------------------------------------------------------------------------------------------------------
**  Age < 18 years?         | No                  | Calculate age from date of birth; exclude    | Date of birth
**                          |                     | patients with age less than 18 years at the  |
**                          |                     | time of the prescription                     |
**  ------------------------------------------------------------------------------------------------------------------------------------
**  Limited life            | No                  | Look for documented findings consistent      | Limited life expectancy conditions
**  expectancy conditions   |                     | with those listed in the limited life        |
**  present?                |                     | expectancy value set (terminal illness, bad  |
**                          |                     | prognosis, pre-terminal)                     |
**  ------------------------------------------------------------------------------------------------------------------------------------
**  Order for therapies     | No                  | Look for patients with an existing order for | Therapies indicating end of life care
**  indicating end of life  |                     | therapies indicating end of life care        |
**  care in past 90 days?   |                     | written within past 90 days                  |
**  ------------------------------------------------------------------------------------------------------------------------------------
**  Active cancer           | No                  | See sub-routine 3                            | See sub-routine 3
**  treatment?              |                     |                                              |
**  ------------------------------------------------------------------------------------------------------------------------------------
**  Conditions Likely       | No                  | Look for patients with active conditions in  | Conditions likely terminal for opioid
**  Terminal for opioid     |                     | the value set end-of-life-conditions         | prescribing
**  prescribing present?    |                     |                                              |
**  ------------------------------------------------------------------------------------------------------------------------------------
**
*/

define "Palliative Care Lookback Period":
  Interval[Today() - 90 days, Today()]

define "Is Opioid Review Useful?":
  not "Patient Age Less Than 18"
    and not "Conditions Indicating End Of Life Present"
    and not "Order For Palliative Care In Past 90 Days"
    and not "Is Active Cancer Treatment?"
    and not "Conditions Including Cancer To Exclude Opioid Management Indicating End-Stage Disease Present"


define "Patient Age Less Than 18":
  Config."Age Less than 18 Years Is Enabled"
    and AgeInYearsAt(Today()) < 18

define "Conditions Indicating End Of Life Present":
  exists (
    [Condition: Common."Limited life expectancy conditions"] LLEC
      where exists (
        LLEC.clinicalStatus.coding Coding
          where FHIRHelpers.ToCode(Coding) ~ Common."Active Condition"
      )
  )

define "Order For Palliative Care In Past 90 Days":
  exists (
    [ServiceRequest: Common."Therapies indicating end of life care"] SR
      where SR.status in { 'active', 'completed'}
        and SR.intent != null
        and FHIRHelpers.ToDateTime(SR.authoredOn) during day of "Palliative Care Lookback Period"
  )

define "Conditions Including Cancer To Exclude Opioid Management Indicating End-Stage Disease Present":
  Config."End-Stage Disease Criteria Enabled"
    and exists (
      [Condition: Common."Conditions likely terminal for opioid prescribing"] EOLC
        where exists (
          EOLC.clinicalStatus.coding Coding
            where FHIRHelpers.ToCode(Coding) ~ Common."Active Condition"
        )
    )

// End of Opioid Review Useful Routine

/*
**  Routine #2
**  Opioid Naive Routine
**
**  Definition                    | Answer to Proceed   | Details                                           | Data (Terminology) Requirement
**  ----------------------------------------------------------------------------------------------------------------------------------------
**  Opioid analgesics with        | No                  | Look for an existing prescription (order) for     | Opioid analgesics with
**  ambulatory misuse potential   |                     | opioid that is in the value set for opioid with   | ambulatory misuse potential
**  prescription in past 90 days  |                     | ambulatory abuse potential authored               |
**  including today               |                     | within the past 90 days (including today)         |
**  ----------------------------------------------------------------------------------------------------------------------------------------
**  Opioid analgesics with        | No                  | Look for evidence of active medication on         | Opioid analgesics with
**  ambulatory misuse potential   |                     | the medication list that is in the value set      | ambulatory misuse potential
**  reported in past 90 days      |                     | for opioid with ambulatory care abuse             |
**  including today*              |                     | potential                                         |
**  ----------------------------------------------------------------------------------------------------------------------------------------
**  Opioid analgesics with        | No                  | Look for evidence of a dispensing event for       | Opioid analgesics with
**  ambulatory misuse potential   |                     | medication that is in the value set for opioid    | ambulatory misuse potential
**  dispensing event in past 90   |                     | with ambulatory use potential occurring           |
**  days including today*         |                     | within the past 90 days (including today)         |
**  ----------------------------------------------------------------------------------------------------------------------------------------
**  *Future consideration: Current algorithm addresses only orders (prescriptions).
**
**  Note – orders use RxNorm, but medication lists and dispensed medication will
**  require an NDC value set and/or local mapping of NDC to RxNorm to enable this element
**
*/

define "Prescription/Dispense Inclusion Period":
    Interval[Now() - 89 days, Now()]

define "Report Inclusion Period":
    Interval[Now() - 90 days, Now())

define "Is Opioid Naive?":
    not ("Has Opioid RX with Ambulatory Abuse Potential In Past 90 Days")
    and not ("Has Report of Opioid with Ambulatory Care Abuse Potential Reported in Past 90 Days")
    and not ("Has Opioid Dispense with Ambulatory Abuse Potential In Past 90 Days")

define "Opioid RX with Ambulatory Abuse Potential In Past 90 Days":
  Common."Active Ambulatory Opioid Rx" Rx
      where Rx.authoredOn during day of "Prescription/Dispense Inclusion Period"

define "Has Opioid RX with Ambulatory Abuse Potential In Past 90 Days":
    Config."Opioid Naive Prescription Condition Is Enabled"
        and exists ("Opioid RX with Ambulatory Abuse Potential In Past 90 Days")

// NOTE: 2020-02-05: Review direction of MedicationStatement resource (US-Core focusing on MedicationRequest i/o Statement)
define "Reports of Opioid with Ambulatory Care Abuse Potential Reported in Past 90 Days":
    [MedicationStatement: Common."Opioid analgesics with ambulatory misuse potential"] Statement
        where Statement.status in {'active', 'completed'}
            and Statement.effective during day of "Report Inclusion Period"

define "Has Report of Opioid with Ambulatory Care Abuse Potential Reported in Past 90 Days":
    Config."Opioid Naive Report Condition Is Enabled"
        and exists ("Reports of Opioid with Ambulatory Care Abuse Potential Reported in Past 90 Days")

define "Opioid Dispense with Ambulatory Abuse Potential In Past 90 Days":
    [MedicationDispense: Common."Opioid analgesics with ambulatory misuse potential"] OpioidDispense
        where OpioidDispense.whenHandedOver during day of "Prescription/Dispense Inclusion Period"
            and OpioidDispense.status = 'completed'

define "Has Opioid Dispense with Ambulatory Abuse Potential In Past 90 Days":
    Config."Opioid Naive Dispense Condition Is Enabled"
        and exists ("Opioid Dispense with Ambulatory Abuse Potential In Past 90 Days")

// End of Opioid Naive Routine

/*
**  Routine #3
**  Active Cancer Treatment Routine
**
**  Definition                    | Answer to Proceed   | Details                                    | Data (Terminology) Requirement
**  ---------------------------------------------------------------------------------------------------------------------------------
**  Two office visits within the  | No                  | Look for a minimum of two distinct         | Office Visit
**  past 12 months                |                     | encounters within 12 months of the date    |
**                                |                     | of the current visit for which each of the |
**                                |                     | following is true:                         |
**                                |                     |   - the encounter diagnosis (primary or    |
**                                |                     |     secondary or co-morbidity diagnosis)   |
**                                |                     |     is listed in the CDC Malignant Cancer  |
**                                |                     |     Conditions value set                   |
**  ---------------------------------------------------------------------------------------------------------------------------------
**  Office visits with an         | No                  | The encounter is performed by an           | Oncology specialty
**  oncology specialist           |                     | oncologist as defined in the oncology      | designations (NUCC)
**  present                       |                     | specialty designations using the           |
**                                |                     | National Uniform Claim Committee           |
**                                |                     | (NUCC) classifications                     |
**  ---------------------------------------------------------------------------------------------------------------------------------
**  Office visits including CDC   | No                  | The encounter diagnosis (primary or        | CDC malignant cancer
**  malignant cancer              |                     | secondary or co-morbidity diagnosis)       | conditions
**  condition                     |                     | is listed in the CDC Malignant Cancer      |
**                                |                     | Conditions value set                       |
**  ----------------------------------------------------------------------------------------------------------------------------------
**
*/

define "Encounter Period":
  Interval[Now() - 12 months, Now())

define "Is Active Cancer Treatment?":
  Config."Active Cancer Treatment Encounters Condition Is Enabled"
    and not "Has Two or More Encounters with Cancer Diagnosis During Encounter Period"

define "Active Cancer Diagnoses":
  [Condition: Common."CDC malignant cancer conditions"]

define "Oncologist Practitioner Roles":
  [PractitionerRole] PractitionerRole
    where exists (
      PractitionerRole.specialty Specialty
        where Specialty in Common."Oncology specialty designations (NUCC)"
    )

define "Encounters with Cancer Diagnosis During Encounter Period":
  [Encounter: Common."Office Visit"] Encounter
    where date from Encounter.period."start".value in day of "Encounter Period"
      and exists (
        Encounter.diagnosis EncounterDiagnosis
          with "Active Cancer Diagnoses" CancerDiagnosis
          such that EndsWith(EncounterDiagnosis.condition.reference, CancerDiagnosis.id)
      )
      and exists (
        Encounter.participant EncounterParticipant
          where EncounterParticipant.type in Common."Oncology specialty designations (NUCC)"
            or exists (
              "Oncologist Practitioner Roles" PractitionerRole
                where EndsWith(EncounterParticipant.individual.reference, PractitionerRole.id)
            )
      )

define "Number of Enounters with Cancer Diagnosis During Encounter Period":
  Count ("Encounters with Cancer Diagnosis During Encounter Period")

define "Has Two or More Encounters with Cancer Diagnosis During Encounter Period":
  "Number of Enounters with Cancer Diagnosis During Encounter Period" >= 2

// End of Active Cancer Treatment Routine

/*
**  Routine #4
**  For Chronic Pain Routine
**
**  Definition                  | Answer to Proceed   | Details                                        | Data (Terminology) Requirement
**  -----------------------------------------------------------------------------------------------------------------------------------
**  Order for opioid analgesic  | Yes                 | Order for opioid analgesics with ambulatory    | Opioid analgesics with
**  with expected supply        |                     | misuse potential with a supply duration of >=  | ambulatory misuse potential
**  duration >= 28 days         |                     | 28 days                                        |
**  -----------------------------------------------------------------------------------------------------------------------------------
**  Chronically on opioids      | Yes                 | Sub-routine 6 (optional)                       |
**  -----------------------------------------------------------------------------------------------------------------------------------
**
*/

define function "Is Chronic Pain Prescription?"(prescription FHIR.MedicationRequest):
  (
    prescription.dispenseRequest is not null
      and prescription.dispenseRequest.expectedSupplyDuration is not null
      and Common.GetDurationInDays( prescription.dispenseRequest.expectedSupplyDuration ) >= 28
  )
  or "Is Chronically on Opioids?"

// End of For Chronic Pain Routine

/*
**  Routine #5
**  For Acute Pain Routine
**
**  Definition                  | Answer to Proceed   | Details                                        | Data (Terminology) Requirement
**  -----------------------------------------------------------------------------------------------------------------------------------
**  Order for opioid analgesics | Yes                 | Look for an existing prescription (order) for  | Opioid analgesics with
**  with ambulatory misuse      |                     | opioid analgesics with ambulatory abuse        | ambulatory misuse potential
**  potential of duration < 28  |                     | potential of duration < 28 days                |
**  days                        |                     |                                                |
**  -----------------------------------------------------------------------------------------------------------------------------------
**
*/

define function "Is Acute Pain Prescription?"(prescription FHIR.MedicationRequest):
  prescription.dispenseRequest is not null
    and prescription.dispenseRequest.expectedSupplyDuration is not null
    and Common.GetDurationInDays( prescription.dispenseRequest.expectedSupplyDuration ) < 28

// End of For Acute Pain Routine

/*
**  Routine #6
**  Chronically on Opioids Routine
**
**  Definition                         | Answer to Proceed   | Details                                               | Data (Terminology) Requirement
**  ------------------------------------------------------------------------------------------------------------------------------------------------
**  Order for opioid analgesics with   | Yes                 | Order for opioid analgesics with ambulatory           | Opioid analgesics with
**  ambulatory misuse potential        |                     | misuse potential covering 21 of 30 days for           | ambulatory misuse potential
**  covering 21 of 30 days for each    |                     | each of the past 3 months                             |
**  of the past 3 months               |                     |                                                       |
**  ------------------------------------------------------------------------------------------------------------------------------------------------
**  Dispensed opioid analgesics with   | Yes                 | Look for evidence of a dispensing event(s) for opioid | Opioid analgesics with
**  ambulatory misuse potential        |                     | analgesics with ambulatory abuse potential covering   | ambulatory misuse potential
**  covering 21 of 30 days for each    |                     | 21 of 30 days for each of the past 3 months           |
**  of the past 3 months*              |                     |                                                       |
**  ------------------------------------------------------------------------------------------------------------------------------------------------
**  Patient-reported opioid analgesics | Yes                 | Look for evidence of patient-reported opioid          | Opioid analgesics with
**  with ambulatory misuse potential   |                     | analgesics with ambulatory abuse potential on         | ambulatory misuse potential
**  covering 21 of 30 days for each of |                     | the medication list covering 21 of 30 days for        |
**  the past 3 months*                 |                     | each of the past 3 months                             |
**  ------------------------------------------------------------------------------------------------------------------------------------------------
**  *Future consideration: Current algorithm addresses only orders (prescriptions).
**
**  Note – orders use RxNorm, but medication lists and dispensed medication will
**  require an NDC value set and/or local mapping of NDC to RxNorm to enable this element
**
*/

define "Previous 10 Days Interval":
Interval[Today() - 10 days, Today()]

define "First Month":
Interval[Today() - 3 months, Today() - 2 months]

define "Second Month":
Interval[Today() - 2 months, Today() - 1 months]

define "Third Month":
Interval[Today() - 1 months, Today()]

define "Is Chronically on Opioids?":
  Config."Chronically on Opioids Enabled"
    and "Prescribed Opioids for 21 or more of 30 Days for each of the past 3 Months"

define "Prescribed Opioids for 21 or more of 30 Days for each of the past 3 Months":
  "Days on Opioids during Period"( "First Month" ) >= 21
    and "Days on Opioids during Period"( "Second Month" ) >= 21
    and "Days on Opioids during Period"( "Third Month" ) >= 21

define function "Prescription Relevant Period"(prescription FHIR.MedicationRequest):
  if (
    prescription.authoredOn is not null and prescription.dispenseRequest is not null
      and prescription.dispenseRequest.expectedSupplyDuration is not null
  )
  then Interval[
    date from prescription.authoredOn,
    date from prescription.authoredOn + System.Quantity{ value: Common.GetDurationInDays( prescription.dispenseRequest.expectedSupplyDuration ), unit: 'd' }
  ]
  else null

define function "Days on Opioids during Period"(period Interval<Date>):
  Sum(
    (
      collapse (
        [MedicationRequest: Common."Opioid analgesics with ambulatory misuse potential"] OpioidPrescription
        return "Prescription Relevant Period"( OpioidPrescription ) intersect period
      )
    ) OpioidUseInterval
      return days between start of OpioidUseInterval and end of OpioidUseInterval
  )

// TODO: Include logic for dispensing and patient-reported events

// End of Chronically on Opioids Routine
