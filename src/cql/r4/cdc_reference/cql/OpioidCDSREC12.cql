library OpioidCDSREC12 version '2.0.0'

using FHIR version '4.0.0'

include FHIRHelpers version '4.0.0' called FHIRHelpers
include OpioidCDSCommon version '2.0.0' called Common
include OpioidCDSCommonConfig version '2.0.0' called Config

/*
**
**  Recommendation #12
**    Clinicians should offer or arrange evidence-based treatment (usually
**    medication-assisted treatment with buprenorphine or methadone in combination
**    with behavioral therapies) for patients with opioid use disorder
**    (recommendation category: A, evidence type: 2)
**
**  When
**    Patient is 18 years and older and not receiving evidence-based treatment for opioid use disorder, which may include medication treatment with buprenorphine or methadone, or opioid-specific behavioral counseling
**    Patient has a diagnosis of opioid use disorder in the past 90 days
**  Then
**    Recommend opioid agonist or partial agonist treatment with methadone maintenance therapy, buprenorphine therapy, and/or behavioral therapy. Potential actions include:
**      Order methadone or buprenorphine
**      Refer to qualified treatment provider (i.e. substance disorder specialist)
**      N/A - see comment; snooze 3 months
**
*/

// META: PlanDefinition: http://fhir.org/guides/cdc/opioid-cds-r4/PlanDefinition/opioid-cds-12

context Patient

define "Opioid Use Disorder Lookback Period":
  Interval[Today() - 90 days, Today()]

define "Is Recommendation Applicable?":
  "Inclusion Criteria"
    and not "Exclusion Criteria"

define "Inclusion Criteria":
  "Patient 18 or Older?"
    and "Not Receiving Evidence-Based Treatment for Opioid Use Disorder"
    and "Presence of Diagnosis of Opioid Use Disorder"
    and "Positive Result from Opioid Use Disorder Evaluation Tool"

define "Exclusion Criteria":
  false

define "Patient 18 or Older?":
  Config."Age Less than 18 Years Is Enabled"
    and AgeInYears() >= 18

define "Not Receiving Evidence-Based Treatment for Opioid Use Disorder":
  Config."Evidence Based Treatment Criteria For Opioid Use Disorder"
    and not (
      exists (
        [MedicationRequest: Common."Buprenorphine and methadone medications"] MR
          where MR.status in { 'active', 'completed' }
            and date from MR.authoredOn during day of "Opioid Use Disorder Lookback Period"
      )
      or exists (
        [Procedure: Common."Substance misuse behavioral counseling"] P
          where P.status ~ 'completed'
            and P.performed during day of "Opioid Use Disorder Lookback Period"
      )
    )
      
define "Presence of Diagnosis of Opioid Use Disorder":
  exists (
    [Condition: Common."Opioid misuse disorders"] C
      where exists (
        C.clinicalStatus.coding Coding
          where FHIRHelpers.ToCode(Coding) ~ Common."Active Condition"
      )
          and date from C.recordedDate during day of "Opioid Use Disorder Lookback Period"
    )

define "Positive Result from Opioid Use Disorder Evaluation Tool":
  true

define "Get Indicator":
  if "Is Recommendation Applicable?"
    then 'warning'
  else null

define "Get Summary":
  if "Is Recommendation Applicable?"
    then 'Recommend opioid agonist or partial agonist treatment with methadone maintenance therapy or buprenorphine and/or behavioral therapy'
  else null

define "Get Detail":
  if "Is Recommendation Applicable?"
    then null
  else null
