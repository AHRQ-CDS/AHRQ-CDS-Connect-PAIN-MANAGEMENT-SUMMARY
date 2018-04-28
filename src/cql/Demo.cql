library Demo version '1.0.0'
using FHIR version '1.0.2'
include FHIRHelpers version '1.0.2' called FHIRHelpers

context Patient

define Name: Combine(Patient.name.given G return G.value, ' ') + ' ' + Combine(Patient.name.family F return F.value, ' ')
define Gender: Patient.gender.value
define Age: AgeInYears()

define function ConceptText(c FHIR.CodeableConcept):
  Coalesce(c.text.value, Coalesce((c.coding) c2 return c2.display.value))

define function DateTimeText(d FHIR.dateTime):
  ToString(d.value)

define function InstantText(i FHIR.instant):
  ToString(i.value)

define function QuantityText(q FHIR.Quantity):
  if (q is null) then null
  else if (q.unit is not null) then ToString(q.value.value) + ' ' + q.unit.value
  else if (q.code is not null) then ToString(q.value.value) + ' ' + q.code.value
  else ToString(q.value.value)

define function PeriodObject(p FHIR.Period):
  if p is null then null
  else
    {
      Start: DateTimeText(p."start"),
      End: DateTimeText(p."end")
    }

define function RangeObject(r FHIR.Range):
  if r is null then null
  else
    {
      Low: QuantityText(r.low),
      High: QuantityText(r.high)
    }

define function ObservationDate(o FHIR.Observation):
  Coalesce(DateTimeText(o.effectiveDateTime), DateTimeText(o.effectivePeriod.start), InstantText(o.issued))

define function MedicationStatementDate(s FHIR.MedicationStatement):
  Coalesce(DateTimeText(s.effectiveDateTime), DateTimeText(s.effectivePeriod."start"))

define function MedicationName(code FHIR.CodeableConcept, ref FHIR.Reference):
  Coalesce(
    ConceptText(code),
    singleton from ([Medication] M where EndsWith(ref.reference.value, '/' + M.id.value) return ConceptText(M.code))
  )

define function Onset(c FHIR.Condition):
  Coalesce( List{
    DateTimeText(c.onsetDateTime),
    QuantityText(c.onsetQuantity),
    PeriodObject(c.onsetPeriod),
    RangeObject(c.onsetRange),
    c.onsetString.value
  })

define function Abatement(c FHIR.Condition):
  Coalesce( List{
    DateTimeText(c.abatementDateTime),
    QuantityText(c.abatementQuantity),
    PeriodObject(c.abatementPeriod),
    RangeObject(c.abatementRange),
    c.abatementString.value,
    c.abatementBoolean.value
  })

define Observations:
  [Observation] O
  return {
    Name:           ConceptText(O.code),
    Value:          Coalesce(QuantityText(O.valueQuantity), ConceptText(O.valueCodeableConcept)),
    Interpretation: ConceptText(O.interpretation),
    Date:           ObservationDate(O)
  }
  sort by Date descending

define Conditions:
  [Condition] C
  return {
    Name:      ConceptText(C.code),
    Status:    C.clinicalStatus.value,
    Onset:     Onset(C),
    Abatement: Abatement(C)
  }
  sort by (Onset as String) descending

define Encounters:
  [Encounter] E
  return {
    Name: E.class.value,
    Visit: PeriodObject(E.period),
    Reasons: E.reason R return ConceptText(R)
  }

define MedicationOrders:
  [MedicationOrder] O
  return {
    Type:  'Order',
    Name:  MedicationName(O.medicationCodeableConcept, O.medicationReference),
    Start: DateTimeText(O.dateWritten),
    End:   DateTimeText(O.dateEnded),
    MedType:
      if O.medicationCodeableConcept is not null then 'CodeableConcept'
      else if O.medicationReference is not null then 'Reference'
      else 'Unknown'
  }
  sort by Start, End descending

define MedicationStatements:
  [MedicationStatement] S
  return {
    Type:  'Statement',
    Name:  MedicationName(S.medicationCodeableConcept, S.medicationReference),
    Start: MedicationStatementDate(S),
    End:   DateTimeText(S.effectivePeriod."end"),
    MedType:
      if S.medicationCodeableConcept is not null then 'CodeableConcept'
      else if S.medicationReference is not null then 'Reference'
      else 'Unknown'
  }
  sort by Start, End descending

define Medications:
  (MedicationOrders union MedicationStatements) M
  sort by Start, End descending

define Procedures:
  [Procedure] P
  return {
    Name: ConceptText(P.code),
    Date: Coalesce(DateTimeText(P.performedDateTime), DateTimeText(P.performedPeriod."start"))
  }
  sort by Date descending
