// CDS Connect Commons for FHIRv102
//
// This library provides functions commonly used by CDS Connect CQL libraries as well as the
// CDS Connect CDS Authoring Tool.
//
// Version 2.0.0 implements several best practices prescribed by FHIR Clinical Guidelines, including:
// - Renaming library from CDS_Connect_Commons_for_FHIRv102 to CDSConnectCommonsForFHIRv102
// - Surrounding all library-level identifiers and datatypes in quotes
// - Using descriptive names (no abbreviations) for query aliases and function arguments
//
// Version 2.0.0 also introduces the following changes from the previous version of this library:
//   - Add "ActiveOrCompletedMedicationStatement", "MedicationDispenseLookBack", "NotCancelled", and
//     "EncounterLookBack"

library CDSConnectCommonsForFHIRv102 version '2.0.0'

using FHIR version '1.0.2'

// Include the FHIRHelpers library for simplifying interacton w/ the FHIR data model
include FHIRHelpers version '1.0.2' called FHIRHelpers

// -------------------------------------------------- OBSERVATIONS -----------------------------------------------------

/**
 * Filters Observations by a concept rather than by a ValueSet.  In CQL 1.3, this will be built into the retrieve,
 * but for now, we must use a query where clause.
 * @param Koncept - the concept to filter on (intentionally mispelled to avoid naming clashes)
 * @returns {List<"Observation">} a list of Observations matching the concept, or null if null was passed in
 */
define function "ObservationsByConcept"(Koncept System."Concept"):
  ["Observation"] Observation where FHIRHelpers.ToConcept(Observation.code) ~ Koncept

/**
 * Observations that are complete and verified. In FHIR DSTU2, there are two statuses that indicate this state: 'final'
 * and 'amended'.
 * @see http://hl7.org/fhir/DSTU2/valueset-observation-status.html
 * @param Observations - a list of Observations
 * @returns {List<"Observation">} a list of verified Observations, or null if null was passed in
 */
define function "Verified"(Observations List<"Observation">):
  Observations Observation where Observation.status.value in {'final', 'amended'}

/**
 * Observations that have quantity values recorded in the requested unit.
 * @param Observations - a list of Observations
 * @param Unit - the unit to require in the Observations quantity value
 * @returns {List<"Observation">} a list of Observations with the required unit, or null if null was passed in
 */
define function "WithUnit"(Observations List<"Observation">, Unit "String"):
  Observations Observation where Observation.valueQuantity.unit.value = Unit or Observation.valueQuantity.code.value = Unit

/**
 * Observations with an effective or issued date in the specified "look back" period.  For example, LDL-C Tests in the
 * last 6 years.
 * TODO: Rename to LookBack once the execution engine supports overloaded functions.
 * @param Observations - a list of Observations
 * @returns {List<"Observation">} a list of Observations with effective or issued date specified lookback period, or null
 * if null was passed in
 */
define function "ObservationLookBack"(Observations List<"Observation">, LookBack System."Quantity"):
  Observations Observation
    let LookBackInterval: Interval[Now() - LookBack, Now()]
    where Observation.effectiveDateTime.value in LookBackInterval
      or FHIRHelpers.ToInterval(Observation.effectivePeriod) overlaps LookBackInterval
      or Observation.issued in LookBackInterval

/**
 * The most recent observation.  For each Observation, this algorithm will use the Coalesce function, which uses the
 * first non-null date value from these fields: effectiveDateTime, effectivePeriod.end, effectivePeriod.start, issued.
 * The found date will be used to compare Observations and determine the most recent one.
 * NOTE: We can't use "FindDate" because it appears that the execution engine may have problems sorting by the
 * result of a function.
 * @see Coalesce("Observation")
 * @param Observations - a list of Observations
 * @returns {"Observation"} the most recent Observation from the list, or null if null was passed in
 */
define function "MostRecent"(Observations List<"Observation">):
  Last(Observations Observation sort by Coalesce(effectiveDateTime.value, effectivePeriod."end".value, effectivePeriod."start".value, issued.value))

/**
 * The First Observation.  For each Observation, this algorithm will use the "FindDate" function, which uses the
 * first non-null date value from these fields: effectiveDateTime, effectivePeriod.end, effectivePeriod.start, issued.
 * The found date will be used to compare Observations and determine the first one.
 * NOTE: We can't use "FindDate" because it appears that the execution engine may have problems sorting by the
 * result of a function.
 * @see Coalesce("Observation")
 * @param Observations - a list of Observations
 * @returns {"Observation"} the most recent Observation from the list, or null if null was passed in
 */
 define function "FirstObservation"(Observations List<"Observation">):
  First(Observations Observation sort by Coalesce(effectiveDateTime.value, effectivePeriod."start".value, effectivePeriod."end".value, issued.value))

/**
 * Extracts the quantity value from an Observation, returning it as a CQL Quantity
 * @param Observation - an observation
 * @returns {System."Quantity"} the Observation's value as a quantity, or null if there is no quantity value
 */
define function "QuantityValue"(Observation "Observation"):
  FHIRHelpers.ToQuantity(Observation.valueQuantity)

/**
 * Extracts the CodeableConcept value from an Observation, returning it as a CQL Concept
 * @param Observation - an observation
 * @returns {System."Concept"} the Observation's value as a concept, or null if there is no CodeabeConcept value
 */
define function "ConceptValue"(Observation "Observation"):
  FHIRHelpers.ToConcept(Observation.valueCodeableConcept)

/**
 * Finds the first non-null meaningful date that can be associated with this Observation.  This will look through the
 * following fields in the following order: effectiveDateTime, effectivePeriod.end, effectivePeriod.start, issued.
 * @param Observation - an Observation
 * @returns {System.DateTime} the first non-null meaningful date, or null if non is found
 */
define function "FindDate"(Observation "Observation"):
  Coalesce(Observation.effectiveDateTime.value, Observation.effectivePeriod."end".value, Observation.effectivePeriod."start".value, Observation.issued.value)

// TODO: Confirm that this works as expected
/**
 * The highest observation.
 * The value will be used to compare Observations and determine the highest one.
 * @param Observations - a list of Observations
 * @returns {System."Quantity"} the quantity with the highest value from the list, or null if null was passed in
 */
define function "HighestObservation"(Observations List<"Observation">):
  Max(Observations Observation return FHIRHelpers.ToQuantity(Observation.valueQuantity))

/**
 * The Average Observation Value.
 * The value will be used to calculate the average ValueQuantity of all non-null elements in the observation list .
 * @param Observations - a list of Observations
 * @returns {System."Quantity"} a quantity containing the average of the non-null elements of the list
 * or null if all elements are null.
 */
define function "AverageObservation"(Observations List<"Observation">):
  Avg(Observations Observation return FHIRHelpers.ToQuantity(Observation.valueQuantity))

// -------------------------------------------------- CONDITIONS -------------------------------------------------------

/**
 * Filters Conditions by a concept rather than by a ValueSet.  In CQL 1.3, this will be built into the retrieve,
 * but for now, we must use a query where clause.
 * @param Koncept - the concept to filter on (intentionally mispelled to avoid naming clashes)
 * @returns {List<"Observation">} a list of Conditions matching the concept, or null if null was passed in
 */
define function "ConditionsByConcept"(Koncept System."Concept"):
  ["Condition"] Condition where FHIRHelpers.ToConcept(Condition.code) ~ Koncept

/**
 * Conditions that are confirmed. In FHIR DSTU2, this is reflected by verificationStatus: 'confirmed'.
 * @see http://hl7.org/fhir/DSTU2/valueset-condition-ver-status.html
 * @param Conditions - a list of Conditions
 * @returns {List<"Condition">} a list of confirmed Conditions, or null if null was passed in
 */
define function "Confirmed"(Conditions List<"Condition">):
  Conditions Condition where Condition.verificationStatus.value = 'confirmed'

/**
 * Conditions that are active. In FHIR DSTU2, this is reflected by clinicalStatus: 'active' and the absence of any
 * abatement information (i.e., if it abated, it is no longer active).
 * TODO: Rename to Active once the execution engine supports overloaded functions.
 * @see http://hl7.org/fhir/DSTU2/valueset-condition-clinical.html
 * @param Conditions - a list of Conditions
 * @returns {List<"Condition">} a list of active Conditions, or null if null was passed in
 */
define function "ActiveCondition"(Conditions List<"Condition">):
  Conditions Condition
    where Condition.clinicalStatus.value = 'active'
      and Condition.abatementDateTime is null
      and Condition.abatementQuantity is null
      and Condition.abatementBoolean.value is not true
      and Condition.abatementPeriod is null
      and Condition.abatementRange is null
      and Condition.abatementString is null

/**
 * Conditions that are active or recurring. In FHIR DSTU2, this is reflected by clinicalStatus: 'active' or 'relapse'.
 * We do not check for null abatement information because it may have dates from when the now recurring condition
 * initially went into remission.
 * @see http://hl7.org/fhir/DSTU2/valueset-condition-clinical.html
 * @param Conditions - a list of Conditions
 * @returns {List<"Condition">} a list of active or recurring Conditions, or null if null was passed in
 */
define function "ActiveOrRecurring"(Conditions List<"Condition">):
  Conditions Condition where Condition.clinicalStatus.value in {'active', 'relapse'}

/**
 * Conditions with an onset or recorded date in the specified "look back" period.  For example, pregnancy in
 * the last 42 weeks.
 * TODO: Rename to LookBack once the execution engine supports overloaded functions.
 * @param Conditions - a list of Conditions
 * @returns {List<"Condition">} a list of Conditions with onset or recorded date specified lookback period, or null
 * if null was passed in
 */
define function "ConditionLookBack"(Conditions List<"Condition">, LookBack System."Quantity"):
  Conditions Condition
    let LookBackInterval: Interval[Now() - LookBack, Now()]
    where Condition.onsetDateTime.value in LookBackInterval
      or FHIRHelpers.ToInterval(Condition.onsetPeriod) overlaps LookBackInterval
      or Condition.dateRecorded.value in LookBackInterval

/**
 * The most recent condition.  For each Condition, this algorithm will use the Coalesce function, which uses the
 * first non-null result from these fields: onsetDateTime, onsetPeriod.end, onsetPeriod.start, dateRecorded.
 * The found date will be used to compare Conditions and determine the most recent one.
 * @param Conditions - a list of Conditions
 * @returns {"Condition"} the most recent Condition from the list, or null if null was passed in
 */
define function "MostRecentCondition"(Conditions List<"Condition">):
  Last(Conditions Condition sort by Coalesce(onsetDateTime.value, onsetPeriod."end".value, onsetPeriod."start".value, dateRecorded.value))

/**
 * The First condition.  For each Condition, this algorithm will use the Coalesce function, which uses the
 * first non-null result from these fields: onsetDateTime, onsetPeriod.end, onsetPeriod.start, dateRecorded.
 * The found date will be used to compare Conditions and determine the most recent one.
 * @param Conditions - a list of Conditions
 * @returns {"Condition"} the most recent Condition from the list, or null if null was passed in
 */
define function "FirstCondition"(Conditions List<"Condition">):
  First(Conditions Condition sort by Coalesce(onsetDateTime.value, onsetPeriod."start".value, onsetPeriod."end".value, dateRecorded.value))

// -------------------------------------------------- PROCEDURES -------------------------------------------------------

 /**
  * Filters Procedures by a concept rather than by a ValueSet.  In CQL 1.3, this will be built into the retrieve,
  * but for now, we must use a query where clause.
  * @param Koncept - the concept to filter on (intentionally mispelled to avoid naming clashes)
  * @returns {List<"Procedure">} a list of Procedures matching the concept, or null if null was passed in
  */
 define function "ProceduresByConcept"(Koncept System."Concept"):
   ["Procedure"] Procedure where FHIRHelpers.ToConcept(Procedure.code) ~ Koncept

/**
 * Procedures that are completed. In FHIR DSTU2, this is reflected by status: 'completed'.  In addition, the
 * notPerformed flag must be checked to ensure it is not 'true'.
 * @see http://hl7.org/fhir/DSTU2/valueset-procedure-status.html
 * @param Procedures - a list of Procedures
 * @returns {List<"Procedure">} a list of completed Procedures, or null if null was passed in
 */
define function "Completed"(Procedures List<"Procedure">):
  Procedures Procedure
    where Procedure.status.value = 'completed'
      and Procedure.notPerformed.value is not true

/**
 * Procedures that are in progress. In FHIR DSTU2, this is reflected by status: 'in-progress'.  In addition, the
 * notPerformed flag must be checked to ensure it is not 'true'.
 * @see http://hl7.org/fhir/DSTU2/valueset-procedure-status.html
 * @param Procedures - a list of Procedures
 * @returns {List<"Procedure">} a list of completed Procedures, or null if null was passed in
 */
define function "ProcedureInProgress"(Procedures List<"Procedure">):
  Procedures Procedure
    where Procedure.status.value = 'in-progress'
      and Procedure.notPerformed.value is not true

/**
 * Procedures that actually happened or are happening. In FHIR DSTU2, there are a few properties that negate the
 * procedure, most notably when status is 'entered-in-error' or notPerformed is true.
 * @see http://hl7.org/fhir/DSTU2/valueset-procedure-status.html
 * @param Procedures - a list of Procedures
 * @returns {List<"Procedure">} a list of Procedures that actually happened or are happening, or null if null was passed in
 */
define function "ProcedurePerformance"(Procedures List<"Procedure">):
  Procedures Procedure
    where Procedure.status.value != 'entered-in-error'
      and Procedure.notPerformed.value is not true

/**
 * Procedures performed in the specified "look back" period.  For example, PCIs performed in the
 * past 2 weeks.
 * TODO: Rename to LookBack once the execution engine supports overloaded functions.
 * @param Procedures - a list of Procedures
 * @param LookBack - the lookback period for when the procedure was performed
 * @returns {List<"Procedure">} a list of Procedures performed in the look back period, or null if null
 * was passed in
 */
define function "ProcedureLookBack"(Procedures List<"Procedure">, LookBack System."Quantity"):
  Procedures Procedure
    let LookBackInterval: Interval[Now() - LookBack, Now()]
    where Procedure.performedDateTime.value in LookBackInterval
      or FHIRHelpers.ToInterval(Procedure.performedPeriod) overlaps LookBackInterval

/**
 * The most recent procedure.  For each Procedure, this algorithm will use the Coalesce function, which returns the
 * first non-null result from these fields: performedDateTime, performedPeriod.end, performedPeriod.start.
 * The found date will be used to compare Procedures and determine the most recent one.
 * @param Procedures - a list of Procedures
 * @returns {"Procedure"} the most recent Procedure from the list, or null if null was passed in
 */
define function "MostRecentProcedure"(Procedures List<"Procedure">):
  Last(Procedures Procedure sort by Coalesce(performedDateTime.value, performedPeriod."end".value, performedPeriod."start".value))

/**
 * The First procedure.  For each Procedure, this algorithm will use the Coalesce function, which returns the
 * first non-null result from these fields: performedDateTime, performedPeriod.end, performedPeriod.start.
 * The found date will be used to compare Procedures and determine the first one.
 * @param Procedures - a list of Procedures
 * @returns {"Procedure"} the most recent Procedure from the list, or null if null was passed in
 */
define function "FirstProcedure"(Procedures List<"Procedure">):
  First(Procedures Procedure sort by Coalesce(performedDateTime.value, performedPeriod."start".value, performedPeriod."end".value))


// ---------------------------------------------- PROCEDUREREQUESTS ----------------------------------------------------

 /**
  * Filters ProcedureRequests by a concept rather than by a ValueSet.  In CQL 1.3, this will be built into the retrieve,
  * but for now, we must use a query where clause.
  * @param Koncept - the concept to filter on (intentionally mispelled to avoid naming clashes)
  * @returns {List<"ProcedureRequest">} a list of ProcedureRequests matching the concept, or null if null was passed in
  */
 define function "ProcedureRequestsByConcept"(Koncept System."Concept"):
   ["ProcedureRequest"] Request where FHIRHelpers.ToConcept(Request.code) ~ Koncept

/**
 * ProcedureRequests that are accepted, in progress, or completed. In FHIR DSTU2, this is reflected by the corresponding
 * status status values.
 * @see http://hl7.org/fhir/DSTU2/valueset-procedure-request-status.html
 * @param ProcedureRequests - a list of ProcedureRequests
 * @returns {List<"ProcedureRequest">} a list of accepted, in-progress, or completed ProcedureRequests,
 * or null if null was passed in
 */
define function "ProcedureRequestAcceptedOrInProgressOrCompleted"(ProcedureRequests List<"ProcedureRequest">):
  ProcedureRequests Request
    where Request.status.value in List{'accepted', 'in-progress', 'completed'}

/**
 * ProcedureRequests ordered in the specified "look back" period.  For example, PCIs ordered in the
 * past 2 weeks.
 * TODO: Rename to LookBack once the execution engine supports overloaded functions.
 * @param ProcedureRequests - a list of ProcedureRequests
 * @param LookBack - the lookback period for when the procedure was ordered
 * @returns {List<"ProcedureRequest">} a list of ProcedureRequests ordered in the look back period, or null if null
 * was passed in
 */
define function "ProcedureRequestLookBack"(ProcedureRequests List<"ProcedureRequest">, LookBack System."Quantity"):
  ProcedureRequests Request
    where Request.orderedOn.value in Interval[Now() - LookBack, Now()]

// ----------------------------------------------- REFERRALREQUESTS ----------------------------------------------------

 /**
  * Filters ReferralRequests by a concept rather than by a ValueSet.  In CQL 1.3, this will be built into the retrieve,
  * but for now, we must use a query where clause.
  * @param Koncept - the concept to filter on (intentionally mispelled to avoid naming clashes)
  * @returns {List<"ReferralRequest">} a list of ReferralRequests matching the concept, or null if null was passed in
  */
 define function "ReferralRequestsByServiceRequestedConcept"(Koncept System."Concept"):
   ["ReferralRequest"] Referral
   where exists((Referral.serviceRequested) Service where FHIRHelpers.ToConcept(Service) ~ Koncept)

/**
 * ReferralRequests that are accepted, active, or completed. In FHIR DSTU2, this is reflected by the corresponding
 * status status values.
 * @see http://hl7.org/fhir/DSTU2/valueset-referralstatus.html
 * @param Referrals - a list of ReferralRequests
 * @returns {List<"ReferralRequest">} a list of accepted, active, or completed ReferralRequests,
 * or null if null was passed in
 */
define function "ReferralRequestAcceptedOrActiveOrCompleted"(Referrals List<"ReferralRequest">):
  Referrals Referral
    where Referral.status.value in List{'accepted', 'active', 'completed'}

/**
 * ReferralRequests requested in the specified "look back" period.  For example, pace make insertions referrals sent
 * in the past 2 weeks.
 * TODO: Rename to LookBack once the execution engine supports overloaded functions.
 * @param Referrals - a list of ReferralRequests
 * @param LookBack - the lookback period for when the referral was sent
 * @returns {List<"ReferralRequest">} a list of ReferralRequests sent in the look back period, or null if null
 * was passed in
 */
define function "ReferralRequestLookBack"(Referrals List<"ReferralRequest">, LookBack System."Quantity"):
  Referrals Referral
    where Referral.dateSent.value in Interval[Now() - LookBack, Now()]

// -------------------------------------------------- MEDICATIONS ------------------------------------------------------

/**
 * Filters MedicationStatements by a concept rather than by a ValueSet.  In CQL 1.3, this will be built into the retrieve,
 * but for now, we must use a query where clause.
 * @param Koncept - the concept to filter on (intentionally mispelled to avoid naming clashes)
 * @returns {List<"MedicationStatement">} a list of MedicationStatement matching the concept, or null if null was passed in
 */
define function "MedicationStatementsByConcept"(Koncept System."Concept"):
  ["MedicationStatement"] Statement where FHIRHelpers.ToConcept(Statement.medicationCodeableConcept) ~ Koncept

/**
 * Filters MedicationOrders by a concept rather than by a ValueSet.  In CQL 1.3, this will be built into the retrieve,
 * but for now, we must use a query where clause.
 * @param Koncept - the concept to filter on (intentionally mispelled to avoid naming clashes)
 * @returns {List<"MedicationOrder">} a list of MedicationOrders matching the concept, or null if null was passed in
 */
define function "MedicationOrdersByConcept"(Koncept System."Concept"):
  ["MedicationOrder"] Order where FHIRHelpers.ToConcept(Order.medicationCodeableConcept) ~ Koncept

/**
 * Medications that are active, according to a statement, but not necessarily verified via a prescription.  For example,
 * medications that a patient has self-reported to be taking.  In FHIR DSTU2, this is reflected by MedicationStatement
 * with status 'active', no flag indicating it wasn't taken, and no end date or an end date in the future.
 * TODO: Rename to Active once the execution engine supports overloaded functions.
 * @see http://hl7.org/fhir/DSTU2/valueset-medication-statement-status.html
 * @param Statements - a list of MedicationStatements
 * @returns {List<"MedicationStatement">} a list of active medication statements, or null if null was passed in
 */
define function "ActiveMedicationStatement"(Statements List<"MedicationStatement">):
  Statements Statement
    let EffectivePeriod: FHIRHelpers.ToInterval(Statement.effectivePeriod)
    where Statement.status.value = 'active'
      and Statement.wasNotTaken.value is not true
      and (end of EffectivePeriod is null or end of EffectivePeriod after Now())

/**
 * Medications that are active or completed, according to a statement, but not necessarily verified via a prescription.
 * For example, medications that a patient has self-reported to be taking.  In FHIR DSTU2, this is reflected by
 * MedicationStatement with status 'active' or 'completed', and no flag indicating it wasn't taken.
 * TODO: Rename to ActiveOrCompleted once the execution engine supports overloaded functions.
 * @see http://hl7.org/fhir/DSTU2/valueset-medication-statement-status.html
 * @param Statements - a list of MedicationStatements
 * @returns {List<"MedicationStatement">} a list of active or completed medication statements, or null if null was passed
 *   in
 */
define function "ActiveOrCompletedMedicationStatement"(Statements List<"MedicationStatement">):
  Statements Statement
    where Statement.status.value = 'active'
      or Statement.status.value = 'completed'
      and Statement.wasNotTaken.value is not true

/**
* Medications that are active, according to a prescription.  In FHIR DSTU2, this is reflected by MedicationOrder
* with status 'active' and no dateEnded.  There is currently an open question in the FHIR chat to determine if this
* is the right approach.
* TODO: Revisit based on outcome of FHIR chat.
* TODO: Rename to Active once the execution engine supports overloaded functions.
* @see https://chat.fhir.org/#narrow/stream/implementers/topic/Meaning.20of.20.22active.22.20and.20.22completed.22.20in.20MedicationRequest
* @see http://hl7.org/fhir/DSTU2/valueset-medication-order-status.html
* @param Orders - a list of MedicationOrders
* @returns {List<"MedicationOrder">} a list of active medication orders, or null if null was passed in
*/
define function "ActiveMedicationOrder"(Orders List<"MedicationOrder">):
  Orders Order
    where Order.status.value = 'active'
      and Order.dateEnded.value is null

/**
* Medications that are active or completed, according to a prescription.  In FHIR DSTU2, this is reflected by MedicationOrder
* with status 'active' or 'completed'
* @see http://hl7.org/fhir/DSTU2/valueset-medication-order-status.html
* @param Orders - a list of MedicationOrders
* @returns {List<"MedicationOrder">} a list of active medication orders, or null if null was passed in
*/
define function "ActiveOrCompletedMedicationOrder"(Orders List<"MedicationOrder">):
  Orders Order
    where Order.status.value = 'active'
      or Order.status.value = 'completed'

/**
* Medications that are active, completed, or stopped, according to a prescription.  In FHIR DSTU2, this is reflected by
* MedicationOrder with status 'active', 'completed', or 'stopped'
* @see http://hl7.org/fhir/DSTU2/valueset-medication-order-status.html
* @param Orders - a list of MedicationOrders
* @returns {List<"MedicationOrder">} a list of active medication orders, or null if null was passed in
*/
define function "ActiveCompletedOrStoppedMedicationOrder"(Orders List<"MedicationOrder">):
  Orders Order
    where Order.status.value = 'active'
      or Order.status.value = 'completed'
      or Order.status.value = 'stopped'

/**
 * MedicationStatement with an effective date in the specified "look back" period.  For example, statements about opioid
 * use in the last 180 days.
 * TODO: Rename to LookBack once the execution engine supports overloaded functions.
 * @param Statements - a list of MedicationStatements
 * @param LookBack - a duration Quantity indicating how far back to look for MedicationStatements
 * @returns {List<"MedicationStatement">} a list of MedicationStatements with effective date in the specified lookback
 * period, or null if null was passed in
 */
define function "MedicationStatementLookBack"(Statements List<"MedicationStatement">, LookBack System."Quantity"):
  Statements Statement
    let LookBackInterval: Interval[Now() - LookBack, Now()]
    where Statement.effectiveDateTime.value in LookBackInterval
      or FHIRHelpers.ToInterval(Statement.effectivePeriod) overlaps LookBackInterval

/**
 * MedicationOrders with a written date in the specified "look back" period.  For example, opioid orders in the last
 * 180 days.
 * TODO: Rename to LookBack once the execution engine supports overloaded functions.
 * @param Orders - a list of MedicationOrders
 * @param LookBack - a duration Quantity indicating how far back to look for MedicationOrders
 * @returns {List<"MedicationOrder">} a list of MedicationOrders with written date in the specified lookback period,
 * or null if null was passed in
 */
define function "MedicationOrderLookBack"(Orders List<"MedicationOrder">, LookBack System."Quantity"):
  Orders Order where Order.dateWritten.value in Interval[Now() - LookBack, Now()]

/**
* Medication Dispenses that are handed over or prepared in the specified "look back" period.
* TODO: Rename to LookBack once the execution engine supports overloaded functions.
* @param Dispenses - a list of MedicationDispenses
* @param LookBack - the lookback period for when the medication was prescribed
* @returns {List<"MedicationStatement">} a list of MedicationDispenses handed over or prepared in the look back period,
* or null if null was passed in
*/
define function "MedicationDispenseLookBack"(Dispenses List<"MedicationDispense">, LookBack System."Quantity"):
  Dispenses Dispense
    let LookBackInterval: Interval[Now() - LookBack, Now()]
    where Dispense.whenHandedOver.value in LookBackInterval
    or Dispense.whenPrepared.value in LookBackInterval

// -------------------------------------------------- ENCOUNTERS ------------------------------------------------------

/**
 * Filters Encounters by a concept rather than by a ValueSet.  In CQL 1.3, this will be built into the retrieve,
 * but for now, we must use a query where clause.
 * @param Koncept - the concept to filter on (intentionally mispelled to avoid naming clashes)
 * @returns {List<"Encounter">} a list of Encounters matching the concept, or null if null was passed in
 */
define function "EncountersByConcept"(Koncept System."Concept"):
  ["Encounter"] Encounter where exists( (Encounter.type) Type where FHIRHelpers.ToConcept(Type) ~ Koncept )

/**
 * Encounters that are in progress. In FHIR DSTU2, this is reflected by status: 'in-progress'.
 * @see http://hl7.org/fhir/DSTU2/valueset-encounter-state.html
 * @param Encounters - a list of Encounters
 * @returns {List<"Encounter">} a list of in progress encounters, or null if null was passed in
 */
define function "InProgress"(Encounters List<"Encounter">):
  Encounters Encounter
    where Encounter.status.value = 'in-progress'

/**
 * Encounters that have not been cancelled. In FHIR DSTU2, this is reflected by  andy status other
 * than: 'cancelled'.
 * @see http://hl7.org/fhir/DSTU2/valueset-encounter-state.html
 * @param Encounters - a list of Encounters
 * @returns {List<"Encounter">} a list of in progress encounters, or null if null was passed in
 */
define function "NotCancelled"(Encounters List<"Encounter">):
  Encounters Encounter
    where Encounter.status.value != 'cancelled'

/**
 * Encounters performed in the specified "look back" period.
 * TODO: Rename to LookBack once the execution engine supports overloaded functions.
 * @param Encounters - a list of Encounters
 * @param LookBack - the lookback period for when the encounter occurred
 * @returns {List<"Encounter">} a list of Encounters occurring during the look back period, or null if null
 * was passed in
 */
define function "EncounterLookBack"(Encounters List<"Encounter">, LookBack System."Quantity"):
  Encounters Encounter
    let LookBackInterval: Interval[Now() - LookBack, Now()]
    where FHIRHelpers.ToInterval(Encounter.period) overlaps LookBackInterval

// -------------------------------------------------- ALLERGY INTOLERANCES ---------------------------------------------

/**
 * Filters AllergyIntolerances by a concept rather than by a ValueSet.  In CQL 1.3, this will be built into the retrieve,
 * but for now, we must use a query where clause.
 * @param Koncept - the concept to filter on (intentionally mispelled to avoid naming clashes)
 * @returns {List<"AllergyIntolerance">} a list of Allergy Intolerances matching the concept, or null if null was passed in
 */
define function "AllergyIntolerancesByConcept"(Koncept System."Concept"):
  ["AllergyIntolerance"] Allergy where FHIRHelpers.ToConcept(Allergy.substance) ~ Koncept

/**
* AllergyIntolerances that are active or confirmed.  In FHIR DSTU2, this is reflected by AllergyIntolerance
* with status 'active' or 'confirmed'
* @see http://hl7.org/fhir/DSTU2/valueset-allergy-intolerance-status.html
* @param AllergyIntolerances - a list of AllergyIntolerances
* @returns {List<"AllergyIntolerance">} a list of active or confirmed allergy intolerances, or null if null was passed in
*/
define function "ActiveOrConfirmedAllergyIntolerance"(AllergyIntolerances List<"AllergyIntolerance">):
  AllergyIntolerances Allergy
    where Allergy.status.value = 'active'
      or Allergy.status.value = 'confirmed'

// -------------------------------------------------------- GOALS ------------------------------------------------------

/**
 * Goals with a start, target, or status date in the specified "look back" period.  For example, Pain Management Goals
 * in the last 2 years.
 * TODO: Rename to LookBack once the execution engine supports overloaded functions.
 * @param Goals - a list of Goals
 * @returns {List<"Goal">} a list of Goals with a start, target, or status date in the specified lookback period, or null
 * if null was passed in
 */
define function "GoalLookBack"(Goals List<"Goal">, LookBack System."Quantity"):
  Goals Goal
    let LookBackInterval: Interval[Now() - LookBack, Now()]
    where Goal.startDate.value in LookBackInterval
      or Goal.targetDate.value in LookBackInterval
      or (Goal.startDate.value + FHIRHelpers.ToQuantity(Goal.targetQuantity)) in LookBackInterval
      or Goal.statusDate.value in LookBackInterval

// -------------------------------------------------- Immunizations ----------------------------------------------------

 /**
  * Filters Immunizations by a concept rather than by a ValueSet.
  * @param Koncept - the concept to filter on (intentionally mispelled to avoid naming clashes)
  * @returns {List<"Immunization">} a list of Immunizations matching the concept, or null if null was passed in
  */
 define function "ImmunizationsByConcept"(Koncept System."Concept"):
   ["Immunization"] Immunization where FHIRHelpers.ToConcept(Immunization.vaccineCode) ~ Koncept

/**
 * Immunizations that are completed. In FHIR DSTU2, this is reflected by status: 'completed'.  In addition, the
 * wasNotGiven flag must be checked to ensure it is not 'true'.
 * @see http://hl7.org/fhir/DSTU2/valueset-medication-admin-status.html
 * @param Immunizations - a list of Immunizations
 * @returns {List<"Immunization">} a list of completed Immunizations, or null if null was passed in
 */
define function "CompletedImmunization"(Immunizations List<"Immunization">):
  Immunizations Immunization
    where Immunization.status.value = 'completed'
      and Immunization.wasNotGiven.value is not true

/**
 * Immunizations given in the specified "look back" period.
 * TODO: Rename to LookBack once the execution engine supports overloaded functions.
 * @param Immunizations - a list of Immunizations
 * @param LookBack - the lookback period for when the immunization was given
 * @returns {List<"Immunization">} a list of Immunizations given in the look back period, or null if null
 * was passed in
 */
define function "ImmunizationLookBack"(Immunizations List<"Immunization">, LookBack System."Quantity"):
  Immunizations Immunization
    let LookBackInterval: Interval[Now() - LookBack, Now()]
    where Immunization.date.value in LookBackInterval

/**
 * The most recent Immunization.
 * @param Immunizations - a list of Immunizations
 * @returns {"Immunization"} the most recent Immunization from the list, or null if null was passed in
 */
define function "MostRecentImmunization"(Immunizations List<"Immunization">):
  Last(Immunizations Immunization sort by date.value)

/**
 * The First Immunization.
 * @param Immunizations - a list of Immunizations
 * @returns {"Immunization"} the most recent Immunization from the list, or null if null was passed in
 */
define function "FirstImmunization"(Immunizations List<"Immunization">):
  First(Immunizations Immunization sort by date.value)


// ----------------------------------------------------- Devices -------------------------------------------------------

 /**
  * Filters Devices by a concept rather than by a ValueSet.
  * @param Koncept - the concept to filter on (intentionally mispelled to avoid naming clashes)
  * @returns {List<"Device">} a list of Devices matching the concept, or null if null was passed in
  */
 define function "DevicesByConcept"(Koncept System."Concept"):
   ["Device"] Device where FHIRHelpers.ToConcept(Device.type) ~ Koncept

/**
 * Devices that are active. In FHIR DSTU2, this is reflected by status: 'available'.
 * @see http://hl7.org/fhir/DSTU2/valueset-devicestatus.html
 * @param Devices - a list of Devices
 * @returns {List<"Device">} a list of active Devices, or null if null was passed in
 */
define function "ActiveDevice"(Devices List<"Device">):
  Devices Device
    where Device.status.value = 'available'
