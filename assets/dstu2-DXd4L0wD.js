var i=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function m(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function l(e){if(e.__esModule)return e;var a=e.default;if(typeof a=="function"){var n=function t(){return this instanceof t?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};n.prototype=a.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(t){var p=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,p.get?p:{enumerable:!0,get:function(){return e[t]}})}),n}var y=`<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ns4:modelInfo name="FHIR" version="1.0.2" url="http://hl7.org/fhir" targetQualifier="fhir" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:ns4="urn:hl7-org:elm-modelinfo:r1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" patientClassName="FHIR.Patient" patientBirthDatePropertyName="birthDate.value">
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.uuid" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Count" retrievable="false" baseType="FHIR.Quantity">
        <ns4:element name="id" type="System.String"/>
        <ns4:element name="extension" type="list&lt;FHIR.Extension&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.NamingSystem.UniqueId" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.NamingSystemIdentifierType"/>
        <ns4:element name="value" type="FHIR.string"/>
        <ns4:element name="preferred" type="FHIR.boolean"/>
        <ns4:element name="period" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.date" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.Date"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DetectedIssue.Mitigation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="action" type="FHIR.CodeableConcept"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="author" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ImplementationGuide.Resource" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="purpose" type="FHIR.GuideResourcePurpose"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="acronym" type="FHIR.string"/>
        <ns4:element name="sourceUri" type="FHIR.uri"/>
        <ns4:element name="sourceReference" type="FHIR.Reference"/>
        <ns4:element name="exampleFor" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.MedicationAdministration.Dosage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="text" type="FHIR.string"/>
        <ns4:element name="siteCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="siteReference" type="FHIR.Reference"/>
        <ns4:element name="route" type="FHIR.CodeableConcept"/>
        <ns4:element name="method" type="FHIR.CodeableConcept"/>
        <ns4:element name="quantity" type="FHIR.SimpleQuantity"/>
        <ns4:element name="rateRatio" type="FHIR.Ratio"/>
        <ns4:element name="rateRange" type="FHIR.Range"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ClinicalImpression.Finding" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="item" type="FHIR.CodeableConcept"/>
        <ns4:element name="cause" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ImagingObjectSelection.Frames" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="frameNumbers" type="list&lt;FHIR.unsignedInt&gt;"/>
        <ns4:element name="url" type="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.TestScript" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.code"/>
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="contact" type="list&lt;FHIR.TestScript.Contact&gt;"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="useContext" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="requirements" type="FHIR.string"/>
        <ns4:element name="copyright" type="FHIR.string"/>
        <ns4:element name="metadata" type="FHIR.TestScript.Metadata"/>
        <ns4:element name="multiserver" type="FHIR.boolean"/>
        <ns4:element name="fixture" type="list&lt;FHIR.TestScript.Fixture&gt;"/>
        <ns4:element name="profile" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="variable" type="list&lt;FHIR.TestScript.Variable&gt;"/>
        <ns4:element name="setup" type="FHIR.TestScript.Setup"/>
        <ns4:element name="test" type="list&lt;FHIR.TestScript.Test&gt;"/>
        <ns4:element name="teardown" type="FHIR.TestScript.Teardown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Conformance.Contact" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="telecom" type="list&lt;FHIR.ContactPoint&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Attachment" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="contentType" type="FHIR.code"/>
        <ns4:element name="language" type="FHIR.code"/>
        <ns4:element name="data" type="FHIR.base64Binary"/>
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="size" type="FHIR.unsignedInt"/>
        <ns4:element name="hash" type="FHIR.base64Binary"/>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="creation" type="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ProvenanceEntityRole" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.UnitsOfTime" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ImagingObjectSelection.Study" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="uid" type="FHIR.oid"/>
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="imagingStudy" type="FHIR.Reference"/>
        <ns4:element name="series" type="list&lt;FHIR.ImagingObjectSelection.Series&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AddressType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Bundle.Link" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="relation" type="FHIR.string"/>
        <ns4:element name="url" type="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ClaimResponse" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="request" type="FHIR.Reference"/>
        <ns4:element name="ruleset" type="FHIR.Coding"/>
        <ns4:element name="originalRuleset" type="FHIR.Coding"/>
        <ns4:element name="created" type="FHIR.dateTime"/>
        <ns4:element name="organization" type="FHIR.Reference"/>
        <ns4:element name="requestProvider" type="FHIR.Reference"/>
        <ns4:element name="requestOrganization" type="FHIR.Reference"/>
        <ns4:element name="outcome" type="FHIR.code"/>
        <ns4:element name="disposition" type="FHIR.string"/>
        <ns4:element name="payeeType" type="FHIR.Coding"/>
        <ns4:element name="item" type="list&lt;FHIR.ClaimResponse.Item&gt;"/>
        <ns4:element name="addItem" type="list&lt;FHIR.ClaimResponse.AddItem&gt;"/>
        <ns4:element name="error" type="list&lt;FHIR.ClaimResponse.Error&gt;"/>
        <ns4:element name="totalCost" type="FHIR.Money"/>
        <ns4:element name="unallocDeductable" type="FHIR.Money"/>
        <ns4:element name="totalBenefit" type="FHIR.Money"/>
        <ns4:element name="paymentAdjustment" type="FHIR.Money"/>
        <ns4:element name="paymentAdjustmentReason" type="FHIR.Coding"/>
        <ns4:element name="paymentDate" type="FHIR.date"/>
        <ns4:element name="paymentAmount" type="FHIR.Money"/>
        <ns4:element name="paymentRef" type="FHIR.Identifier"/>
        <ns4:element name="reserved" type="FHIR.Coding"/>
        <ns4:element name="form" type="FHIR.Coding"/>
        <ns4:element name="note" type="list&lt;FHIR.ClaimResponse.Note&gt;"/>
        <ns4:element name="coverage" type="list&lt;FHIR.ClaimResponse.Coverage&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ClaimResponse.SubDetail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequenceLinkId" type="FHIR.positiveInt"/>
        <ns4:element name="adjudication" type="list&lt;FHIR.ClaimResponse.Adjudication2&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Practitioner.PractitionerRole" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="managingOrganization" type="FHIR.Reference"/>
        <ns4:element name="role" type="FHIR.CodeableConcept"/>
        <ns4:element name="specialty" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="location" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="healthcareService" type="list&lt;FHIR.Reference&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.StructureDefinition" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="display" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.code"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="contact" type="list&lt;FHIR.StructureDefinition.Contact&gt;"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="useContext" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="requirements" type="FHIR.string"/>
        <ns4:element name="copyright" type="FHIR.string"/>
        <ns4:element name="code" type="list&lt;FHIR.Coding&gt;"/>
        <ns4:element name="fhirVersion" type="FHIR.id"/>
        <ns4:element name="mapping" type="list&lt;FHIR.StructureDefinition.Mapping&gt;"/>
        <ns4:element name="kind" type="FHIR.StructureDefinitionKind"/>
        <ns4:element name="constrainedType" type="FHIR.code"/>
        <ns4:element name="abstract" type="FHIR.boolean"/>
        <ns4:element name="contextType" type="FHIR.ExtensionContext"/>
        <ns4:element name="context" type="list&lt;FHIR.string&gt;"/>
        <ns4:element name="base" type="FHIR.uri"/>
        <ns4:element name="snapshot" type="FHIR.StructureDefinition.Snapshot"/>
        <ns4:element name="differential" type="FHIR.StructureDefinition.Differential"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AllergyIntoleranceCategory" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ValueSet.Filter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="property" type="FHIR.code"/>
        <ns4:element name="op" type="FHIR.FilterOperator"/>
        <ns4:element name="value" type="FHIR.code"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.HealthcareService.NotAvailable" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="during" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Immunization.VaccinationProtocol" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="doseSequence" type="FHIR.positiveInt"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="authority" type="FHIR.Reference"/>
        <ns4:element name="series" type="FHIR.string"/>
        <ns4:element name="seriesDoses" type="FHIR.positiveInt"/>
        <ns4:element name="targetDisease" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="doseStatus" type="FHIR.CodeableConcept"/>
        <ns4:element name="doseStatusReason" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Conformance.Event" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.Coding"/>
        <ns4:element name="category" type="FHIR.MessageSignificanceCategory"/>
        <ns4:element name="mode" type="FHIR.ConformanceEventMode"/>
        <ns4:element name="focus" type="FHIR.code"/>
        <ns4:element name="request" type="FHIR.Reference"/>
        <ns4:element name="response" type="FHIR.Reference"/>
        <ns4:element name="documentation" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Medication.Package" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="container" type="FHIR.CodeableConcept"/>
        <ns4:element name="content" type="list&lt;FHIR.Medication.Content&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.SpecimenStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DeviceUseStatement" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="bodySiteCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="bodySiteReference" type="FHIR.Reference"/>
        <ns4:element name="whenUsed" type="FHIR.Period"/>
        <ns4:element name="device" type="FHIR.Reference"/>
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="indication" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="notes" type="list&lt;FHIR.string&gt;"/>
        <ns4:element name="recordedOn" type="FHIR.dateTime"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="timingTiming" type="FHIR.Timing"/>
        <ns4:element name="timingPeriod" type="FHIR.Period"/>
        <ns4:element name="timingDateTime" type="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Procedure" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="code">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="status" type="FHIR.ProcedureStatus"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="notPerformed" type="FHIR.boolean"/>
        <ns4:element name="reasonNotPerformed" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="bodySite" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="reasonCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="reasonReference" type="FHIR.Reference"/>
        <ns4:element name="performer" type="list&lt;FHIR.Procedure.Performer&gt;"/>
        <ns4:element name="performedDateTime" type="FHIR.dateTime"/>
        <ns4:element name="performedPeriod" type="FHIR.Period"/>
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="location" type="FHIR.Reference"/>
        <ns4:element name="outcome" type="FHIR.CodeableConcept"/>
        <ns4:element name="report" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="complication" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="followUp" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="request" type="FHIR.Reference"/>
        <ns4:element name="notes" type="list&lt;FHIR.Annotation&gt;"/>
        <ns4:element name="focalDevice" type="list&lt;FHIR.Procedure.FocalDevice&gt;"/>
        <ns4:element name="used" type="list&lt;FHIR.Reference&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DetectedIssueSeverity" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.EligibilityResponse" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="request" type="FHIR.Reference"/>
        <ns4:element name="outcome" type="FHIR.code"/>
        <ns4:element name="disposition" type="FHIR.string"/>
        <ns4:element name="ruleset" type="FHIR.Coding"/>
        <ns4:element name="originalRuleset" type="FHIR.Coding"/>
        <ns4:element name="created" type="FHIR.dateTime"/>
        <ns4:element name="organization" type="FHIR.Reference"/>
        <ns4:element name="requestProvider" type="FHIR.Reference"/>
        <ns4:element name="requestOrganization" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ValueSet.CodeSystem" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="system" type="FHIR.uri"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="caseSensitive" type="FHIR.boolean"/>
        <ns4:element name="concept" type="list&lt;FHIR.ValueSet.Concept&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Claim.SubDetail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" type="FHIR.positiveInt"/>
        <ns4:element name="type" type="FHIR.Coding"/>
        <ns4:element name="service" type="FHIR.Coding"/>
        <ns4:element name="quantity" type="FHIR.SimpleQuantity"/>
        <ns4:element name="unitPrice" type="FHIR.Money"/>
        <ns4:element name="factor" type="FHIR.decimal"/>
        <ns4:element name="points" type="FHIR.decimal"/>
        <ns4:element name="net" type="FHIR.Money"/>
        <ns4:element name="udi" type="FHIR.Coding"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.SearchParameter" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.code"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="contact" type="list&lt;FHIR.SearchParameter.Contact&gt;"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="requirements" type="FHIR.string"/>
        <ns4:element name="code" type="FHIR.code"/>
        <ns4:element name="base" type="FHIR.code"/>
        <ns4:element name="type" type="FHIR.code"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="xpath" type="FHIR.string"/>
        <ns4:element name="xpathUsage" type="FHIR.XPathUsageType"/>
        <ns4:element name="target" type="list&lt;FHIR.code&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.IssueSeverity" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DataElementStringency" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Appointment" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="status" type="FHIR.AppointmentStatus"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="reason" type="FHIR.CodeableConcept"/>
        <ns4:element name="priority" type="FHIR.unsignedInt"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="start" type="FHIR.instant"/>
        <ns4:element name="end" type="FHIR.instant"/>
        <ns4:element name="minutesDuration" type="FHIR.positiveInt"/>
        <ns4:element name="slot" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="comment" type="FHIR.string"/>
        <ns4:element name="participant" type="list&lt;FHIR.Appointment.Participant&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.TestScript.Assert" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="label" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="direction" type="FHIR.AssertionDirectionType"/>
        <ns4:element name="compareToSourceId" type="FHIR.string"/>
        <ns4:element name="compareToSourcePath" type="FHIR.string"/>
        <ns4:element name="contentType" type="FHIR.ContentType"/>
        <ns4:element name="headerField" type="FHIR.string"/>
        <ns4:element name="minimumId" type="FHIR.string"/>
        <ns4:element name="navigationLinks" type="FHIR.boolean"/>
        <ns4:element name="operator" type="FHIR.AssertionOperatorType"/>
        <ns4:element name="path" type="FHIR.string"/>
        <ns4:element name="resource" type="FHIR.code"/>
        <ns4:element name="response" type="FHIR.AssertionResponseTypes"/>
        <ns4:element name="responseCode" type="FHIR.string"/>
        <ns4:element name="sourceId" type="FHIR.id"/>
        <ns4:element name="validateProfileId" type="FHIR.id"/>
        <ns4:element name="value" type="FHIR.string"/>
        <ns4:element name="warningOnly" type="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Conformance.Certificate" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.code"/>
        <ns4:element name="blob" type="FHIR.base64Binary"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Contract.ValuedItem" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="entityCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="entityReference" type="FHIR.Reference"/>
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="effectiveTime" type="FHIR.dateTime"/>
        <ns4:element name="quantity" type="FHIR.SimpleQuantity"/>
        <ns4:element name="unitPrice" type="FHIR.Money"/>
        <ns4:element name="factor" type="FHIR.decimal"/>
        <ns4:element name="points" type="FHIR.decimal"/>
        <ns4:element name="net" type="FHIR.Money"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.VisionEyes" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ElementDefinition.Binding" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="strength" type="FHIR.BindingStrength"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="valueSetUri" type="FHIR.uri"/>
        <ns4:element name="valueSetReference" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.OperationDefinition.Contact" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="telecom" type="list&lt;FHIR.ContactPoint&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.StructureDefinitionKind" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Contract.Actor1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="entity" type="FHIR.Reference"/>
        <ns4:element name="role" type="list&lt;FHIR.CodeableConcept&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ElementDefinition" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="path" type="FHIR.string"/>
        <ns4:element name="representation" type="list&lt;FHIR.PropertyRepresentation&gt;"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="label" type="FHIR.string"/>
        <ns4:element name="code" type="list&lt;FHIR.Coding&gt;"/>
        <ns4:element name="slicing" type="FHIR.ElementDefinition.Slicing"/>
        <ns4:element name="short" type="FHIR.string"/>
        <ns4:element name="definition" type="FHIR.markdown"/>
        <ns4:element name="comments" type="FHIR.markdown"/>
        <ns4:element name="requirements" type="FHIR.markdown"/>
        <ns4:element name="alias" type="list&lt;FHIR.string&gt;"/>
        <ns4:element name="min" type="FHIR.integer"/>
        <ns4:element name="max" type="FHIR.string"/>
        <ns4:element name="base" type="FHIR.ElementDefinition.Base"/>
        <ns4:element name="type" type="list&lt;FHIR.ElementDefinition.Type&gt;"/>
        <ns4:element name="nameReference" type="FHIR.string"/>
        <ns4:element name="defaultValueBoolean" type="FHIR.boolean"/>
        <ns4:element name="defaultValueInteger" type="FHIR.integer"/>
        <ns4:element name="defaultValueDecimal" type="FHIR.decimal"/>
        <ns4:element name="defaultValueBase64Binary" type="FHIR.base64Binary"/>
        <ns4:element name="defaultValueInstant" type="FHIR.instant"/>
        <ns4:element name="defaultValueString" type="FHIR.string"/>
        <ns4:element name="defaultValueUri" type="FHIR.uri"/>
        <ns4:element name="defaultValueDate" type="FHIR.date"/>
        <ns4:element name="defaultValueDateTime" type="FHIR.dateTime"/>
        <ns4:element name="defaultValueTime" type="FHIR.time"/>
        <ns4:element name="defaultValueCode" type="FHIR.code"/>
        <ns4:element name="defaultValueOid" type="FHIR.oid"/>
        <ns4:element name="defaultValueUuid" type="FHIR.uuid"/>
        <ns4:element name="defaultValueId" type="FHIR.id"/>
        <ns4:element name="defaultValueUnsignedInt" type="FHIR.unsignedInt"/>
        <ns4:element name="defaultValuePositiveInt" type="FHIR.positiveInt"/>
        <ns4:element name="defaultValueMarkdown" type="FHIR.markdown"/>
        <ns4:element name="defaultValueAnnotation" type="FHIR.Annotation"/>
        <ns4:element name="defaultValueAttachment" type="FHIR.Attachment"/>
        <ns4:element name="defaultValueIdentifier" type="FHIR.Identifier"/>
        <ns4:element name="defaultValueCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="defaultValueCoding" type="FHIR.Coding"/>
        <ns4:element name="defaultValueQuantity" type="FHIR.Quantity"/>
        <ns4:element name="defaultValueRange" type="FHIR.Range"/>
        <ns4:element name="defaultValuePeriod" type="FHIR.Period"/>
        <ns4:element name="defaultValueRatio" type="FHIR.Ratio"/>
        <ns4:element name="defaultValueReference" type="FHIR.Reference"/>
        <ns4:element name="defaultValueSampledData" type="FHIR.SampledData"/>
        <ns4:element name="defaultValueSignature" type="FHIR.Signature"/>
        <ns4:element name="defaultValueHumanName" type="FHIR.HumanName"/>
        <ns4:element name="defaultValueAddress" type="FHIR.Address"/>
        <ns4:element name="defaultValueContactPoint" type="FHIR.ContactPoint"/>
        <ns4:element name="defaultValueTiming" type="FHIR.Timing"/>
        <ns4:element name="defaultValueMeta" type="FHIR.Meta"/>
        <ns4:element name="meaningWhenMissing" type="FHIR.markdown"/>
        <ns4:element name="fixedBoolean" type="FHIR.boolean"/>
        <ns4:element name="fixedInteger" type="FHIR.integer"/>
        <ns4:element name="fixedDecimal" type="FHIR.decimal"/>
        <ns4:element name="fixedBase64Binary" type="FHIR.base64Binary"/>
        <ns4:element name="fixedInstant" type="FHIR.instant"/>
        <ns4:element name="fixedString" type="FHIR.string"/>
        <ns4:element name="fixedUri" type="FHIR.uri"/>
        <ns4:element name="fixedDate" type="FHIR.date"/>
        <ns4:element name="fixedDateTime" type="FHIR.dateTime"/>
        <ns4:element name="fixedTime" type="FHIR.time"/>
        <ns4:element name="fixedCode" type="FHIR.code"/>
        <ns4:element name="fixedOid" type="FHIR.oid"/>
        <ns4:element name="fixedUuid" type="FHIR.uuid"/>
        <ns4:element name="fixedId" type="FHIR.id"/>
        <ns4:element name="fixedUnsignedInt" type="FHIR.unsignedInt"/>
        <ns4:element name="fixedPositiveInt" type="FHIR.positiveInt"/>
        <ns4:element name="fixedMarkdown" type="FHIR.markdown"/>
        <ns4:element name="fixedAnnotation" type="FHIR.Annotation"/>
        <ns4:element name="fixedAttachment" type="FHIR.Attachment"/>
        <ns4:element name="fixedIdentifier" type="FHIR.Identifier"/>
        <ns4:element name="fixedCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="fixedCoding" type="FHIR.Coding"/>
        <ns4:element name="fixedQuantity" type="FHIR.Quantity"/>
        <ns4:element name="fixedRange" type="FHIR.Range"/>
        <ns4:element name="fixedPeriod" type="FHIR.Period"/>
        <ns4:element name="fixedRatio" type="FHIR.Ratio"/>
        <ns4:element name="fixedReference" type="FHIR.Reference"/>
        <ns4:element name="fixedSampledData" type="FHIR.SampledData"/>
        <ns4:element name="fixedSignature" type="FHIR.Signature"/>
        <ns4:element name="fixedHumanName" type="FHIR.HumanName"/>
        <ns4:element name="fixedAddress" type="FHIR.Address"/>
        <ns4:element name="fixedContactPoint" type="FHIR.ContactPoint"/>
        <ns4:element name="fixedTiming" type="FHIR.Timing"/>
        <ns4:element name="fixedMeta" type="FHIR.Meta"/>
        <ns4:element name="patternBoolean" type="FHIR.boolean"/>
        <ns4:element name="patternInteger" type="FHIR.integer"/>
        <ns4:element name="patternDecimal" type="FHIR.decimal"/>
        <ns4:element name="patternBase64Binary" type="FHIR.base64Binary"/>
        <ns4:element name="patternInstant" type="FHIR.instant"/>
        <ns4:element name="patternString" type="FHIR.string"/>
        <ns4:element name="patternUri" type="FHIR.uri"/>
        <ns4:element name="patternDate" type="FHIR.date"/>
        <ns4:element name="patternDateTime" type="FHIR.dateTime"/>
        <ns4:element name="patternTime" type="FHIR.time"/>
        <ns4:element name="patternCode" type="FHIR.code"/>
        <ns4:element name="patternOid" type="FHIR.oid"/>
        <ns4:element name="patternUuid" type="FHIR.uuid"/>
        <ns4:element name="patternId" type="FHIR.id"/>
        <ns4:element name="patternUnsignedInt" type="FHIR.unsignedInt"/>
        <ns4:element name="patternPositiveInt" type="FHIR.positiveInt"/>
        <ns4:element name="patternMarkdown" type="FHIR.markdown"/>
        <ns4:element name="patternAnnotation" type="FHIR.Annotation"/>
        <ns4:element name="patternAttachment" type="FHIR.Attachment"/>
        <ns4:element name="patternIdentifier" type="FHIR.Identifier"/>
        <ns4:element name="patternCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="patternCoding" type="FHIR.Coding"/>
        <ns4:element name="patternQuantity" type="FHIR.Quantity"/>
        <ns4:element name="patternRange" type="FHIR.Range"/>
        <ns4:element name="patternPeriod" type="FHIR.Period"/>
        <ns4:element name="patternRatio" type="FHIR.Ratio"/>
        <ns4:element name="patternReference" type="FHIR.Reference"/>
        <ns4:element name="patternSampledData" type="FHIR.SampledData"/>
        <ns4:element name="patternSignature" type="FHIR.Signature"/>
        <ns4:element name="patternHumanName" type="FHIR.HumanName"/>
        <ns4:element name="patternAddress" type="FHIR.Address"/>
        <ns4:element name="patternContactPoint" type="FHIR.ContactPoint"/>
        <ns4:element name="patternTiming" type="FHIR.Timing"/>
        <ns4:element name="patternMeta" type="FHIR.Meta"/>
        <ns4:element name="exampleBoolean" type="FHIR.boolean"/>
        <ns4:element name="exampleInteger" type="FHIR.integer"/>
        <ns4:element name="exampleDecimal" type="FHIR.decimal"/>
        <ns4:element name="exampleBase64Binary" type="FHIR.base64Binary"/>
        <ns4:element name="exampleInstant" type="FHIR.instant"/>
        <ns4:element name="exampleString" type="FHIR.string"/>
        <ns4:element name="exampleUri" type="FHIR.uri"/>
        <ns4:element name="exampleDate" type="FHIR.date"/>
        <ns4:element name="exampleDateTime" type="FHIR.dateTime"/>
        <ns4:element name="exampleTime" type="FHIR.time"/>
        <ns4:element name="exampleCode" type="FHIR.code"/>
        <ns4:element name="exampleOid" type="FHIR.oid"/>
        <ns4:element name="exampleUuid" type="FHIR.uuid"/>
        <ns4:element name="exampleId" type="FHIR.id"/>
        <ns4:element name="exampleUnsignedInt" type="FHIR.unsignedInt"/>
        <ns4:element name="examplePositiveInt" type="FHIR.positiveInt"/>
        <ns4:element name="exampleMarkdown" type="FHIR.markdown"/>
        <ns4:element name="exampleAnnotation" type="FHIR.Annotation"/>
        <ns4:element name="exampleAttachment" type="FHIR.Attachment"/>
        <ns4:element name="exampleIdentifier" type="FHIR.Identifier"/>
        <ns4:element name="exampleCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="exampleCoding" type="FHIR.Coding"/>
        <ns4:element name="exampleQuantity" type="FHIR.Quantity"/>
        <ns4:element name="exampleRange" type="FHIR.Range"/>
        <ns4:element name="examplePeriod" type="FHIR.Period"/>
        <ns4:element name="exampleRatio" type="FHIR.Ratio"/>
        <ns4:element name="exampleReference" type="FHIR.Reference"/>
        <ns4:element name="exampleSampledData" type="FHIR.SampledData"/>
        <ns4:element name="exampleSignature" type="FHIR.Signature"/>
        <ns4:element name="exampleHumanName" type="FHIR.HumanName"/>
        <ns4:element name="exampleAddress" type="FHIR.Address"/>
        <ns4:element name="exampleContactPoint" type="FHIR.ContactPoint"/>
        <ns4:element name="exampleTiming" type="FHIR.Timing"/>
        <ns4:element name="exampleMeta" type="FHIR.Meta"/>
        <ns4:element name="minValueBoolean" type="FHIR.boolean"/>
        <ns4:element name="minValueInteger" type="FHIR.integer"/>
        <ns4:element name="minValueDecimal" type="FHIR.decimal"/>
        <ns4:element name="minValueBase64Binary" type="FHIR.base64Binary"/>
        <ns4:element name="minValueInstant" type="FHIR.instant"/>
        <ns4:element name="minValueString" type="FHIR.string"/>
        <ns4:element name="minValueUri" type="FHIR.uri"/>
        <ns4:element name="minValueDate" type="FHIR.date"/>
        <ns4:element name="minValueDateTime" type="FHIR.dateTime"/>
        <ns4:element name="minValueTime" type="FHIR.time"/>
        <ns4:element name="minValueCode" type="FHIR.code"/>
        <ns4:element name="minValueOid" type="FHIR.oid"/>
        <ns4:element name="minValueUuid" type="FHIR.uuid"/>
        <ns4:element name="minValueId" type="FHIR.id"/>
        <ns4:element name="minValueUnsignedInt" type="FHIR.unsignedInt"/>
        <ns4:element name="minValuePositiveInt" type="FHIR.positiveInt"/>
        <ns4:element name="minValueMarkdown" type="FHIR.markdown"/>
        <ns4:element name="minValueAnnotation" type="FHIR.Annotation"/>
        <ns4:element name="minValueAttachment" type="FHIR.Attachment"/>
        <ns4:element name="minValueIdentifier" type="FHIR.Identifier"/>
        <ns4:element name="minValueCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="minValueCoding" type="FHIR.Coding"/>
        <ns4:element name="minValueQuantity" type="FHIR.Quantity"/>
        <ns4:element name="minValueRange" type="FHIR.Range"/>
        <ns4:element name="minValuePeriod" type="FHIR.Period"/>
        <ns4:element name="minValueRatio" type="FHIR.Ratio"/>
        <ns4:element name="minValueReference" type="FHIR.Reference"/>
        <ns4:element name="minValueSampledData" type="FHIR.SampledData"/>
        <ns4:element name="minValueSignature" type="FHIR.Signature"/>
        <ns4:element name="minValueHumanName" type="FHIR.HumanName"/>
        <ns4:element name="minValueAddress" type="FHIR.Address"/>
        <ns4:element name="minValueContactPoint" type="FHIR.ContactPoint"/>
        <ns4:element name="minValueTiming" type="FHIR.Timing"/>
        <ns4:element name="minValueMeta" type="FHIR.Meta"/>
        <ns4:element name="maxValueBoolean" type="FHIR.boolean"/>
        <ns4:element name="maxValueInteger" type="FHIR.integer"/>
        <ns4:element name="maxValueDecimal" type="FHIR.decimal"/>
        <ns4:element name="maxValueBase64Binary" type="FHIR.base64Binary"/>
        <ns4:element name="maxValueInstant" type="FHIR.instant"/>
        <ns4:element name="maxValueString" type="FHIR.string"/>
        <ns4:element name="maxValueUri" type="FHIR.uri"/>
        <ns4:element name="maxValueDate" type="FHIR.date"/>
        <ns4:element name="maxValueDateTime" type="FHIR.dateTime"/>
        <ns4:element name="maxValueTime" type="FHIR.time"/>
        <ns4:element name="maxValueCode" type="FHIR.code"/>
        <ns4:element name="maxValueOid" type="FHIR.oid"/>
        <ns4:element name="maxValueUuid" type="FHIR.uuid"/>
        <ns4:element name="maxValueId" type="FHIR.id"/>
        <ns4:element name="maxValueUnsignedInt" type="FHIR.unsignedInt"/>
        <ns4:element name="maxValuePositiveInt" type="FHIR.positiveInt"/>
        <ns4:element name="maxValueMarkdown" type="FHIR.markdown"/>
        <ns4:element name="maxValueAnnotation" type="FHIR.Annotation"/>
        <ns4:element name="maxValueAttachment" type="FHIR.Attachment"/>
        <ns4:element name="maxValueIdentifier" type="FHIR.Identifier"/>
        <ns4:element name="maxValueCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="maxValueCoding" type="FHIR.Coding"/>
        <ns4:element name="maxValueQuantity" type="FHIR.Quantity"/>
        <ns4:element name="maxValueRange" type="FHIR.Range"/>
        <ns4:element name="maxValuePeriod" type="FHIR.Period"/>
        <ns4:element name="maxValueRatio" type="FHIR.Ratio"/>
        <ns4:element name="maxValueReference" type="FHIR.Reference"/>
        <ns4:element name="maxValueSampledData" type="FHIR.SampledData"/>
        <ns4:element name="maxValueSignature" type="FHIR.Signature"/>
        <ns4:element name="maxValueHumanName" type="FHIR.HumanName"/>
        <ns4:element name="maxValueAddress" type="FHIR.Address"/>
        <ns4:element name="maxValueContactPoint" type="FHIR.ContactPoint"/>
        <ns4:element name="maxValueTiming" type="FHIR.Timing"/>
        <ns4:element name="maxValueMeta" type="FHIR.Meta"/>
        <ns4:element name="maxLength" type="FHIR.integer"/>
        <ns4:element name="condition" type="list&lt;FHIR.id&gt;"/>
        <ns4:element name="constraint" type="list&lt;FHIR.ElementDefinition.Constraint&gt;"/>
        <ns4:element name="mustSupport" type="FHIR.boolean"/>
        <ns4:element name="isModifier" type="FHIR.boolean"/>
        <ns4:element name="isSummary" type="FHIR.boolean"/>
        <ns4:element name="binding" type="FHIR.ElementDefinition.Binding"/>
        <ns4:element name="mapping" type="list&lt;FHIR.ElementDefinition.Mapping&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Composition.Attester" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="mode" type="list&lt;FHIR.CompositionAttestationMode&gt;"/>
        <ns4:element name="time" type="FHIR.dateTime"/>
        <ns4:element name="party" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Device" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="type">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="note" type="list&lt;FHIR.Annotation&gt;"/>
        <ns4:element name="status" type="FHIR.DeviceStatus"/>
        <ns4:element name="manufacturer" type="FHIR.string"/>
        <ns4:element name="model" type="FHIR.string"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="manufactureDate" type="FHIR.dateTime"/>
        <ns4:element name="expiry" type="FHIR.dateTime"/>
        <ns4:element name="udi" type="FHIR.string"/>
        <ns4:element name="lotNumber" type="FHIR.string"/>
        <ns4:element name="owner" type="FHIR.Reference"/>
        <ns4:element name="location" type="FHIR.Reference"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="contact" type="list&lt;FHIR.ContactPoint&gt;"/>
        <ns4:element name="url" type="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ProcedureRequest" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="code">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="bodySite" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="reasonCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="reasonReference" type="FHIR.Reference"/>
        <ns4:element name="scheduledDateTime" type="FHIR.dateTime"/>
        <ns4:element name="scheduledPeriod" type="FHIR.Period"/>
        <ns4:element name="scheduledTiming" type="FHIR.Timing"/>
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="performer" type="FHIR.Reference"/>
        <ns4:element name="status" type="FHIR.ProcedureRequestStatus"/>
        <ns4:element name="notes" type="list&lt;FHIR.Annotation&gt;"/>
        <ns4:element name="asNeededBoolean" type="FHIR.boolean"/>
        <ns4:element name="asNeededCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="orderedOn" type="FHIR.dateTime"/>
        <ns4:element name="orderer" type="FHIR.Reference"/>
        <ns4:element name="priority" type="FHIR.ProcedureRequestPriority"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.TestScript.Capability" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="required" type="FHIR.boolean"/>
        <ns4:element name="validated" type="FHIR.boolean"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="destination" type="FHIR.integer"/>
        <ns4:element name="link" type="list&lt;FHIR.uri&gt;"/>
        <ns4:element name="conformance" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.OperationOutcome.Issue" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="severity" type="FHIR.IssueSeverity"/>
        <ns4:element name="code" type="FHIR.IssueType"/>
        <ns4:element name="details" type="FHIR.CodeableConcept"/>
        <ns4:element name="diagnostics" type="FHIR.string"/>
        <ns4:element name="location" type="list&lt;FHIR.string&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.QuestionnaireResponseStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DeviceMetric" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="unit" type="FHIR.CodeableConcept"/>
        <ns4:element name="source" type="FHIR.Reference"/>
        <ns4:element name="parent" type="FHIR.Reference"/>
        <ns4:element name="operationalStatus" type="FHIR.DeviceMetricOperationalStatus"/>
        <ns4:element name="color" type="FHIR.DeviceMetricColor"/>
        <ns4:element name="category" type="FHIR.DeviceMetricCategory"/>
        <ns4:element name="measurementPeriod" type="FHIR.Timing"/>
        <ns4:element name="calibration" type="list&lt;FHIR.DeviceMetric.Calibration&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Conformance.Resource" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.code"/>
        <ns4:element name="profile" type="FHIR.Reference"/>
        <ns4:element name="interaction" type="list&lt;FHIR.Conformance.Interaction&gt;"/>
        <ns4:element name="versioning" type="FHIR.ResourceVersionPolicy"/>
        <ns4:element name="readHistory" type="FHIR.boolean"/>
        <ns4:element name="updateCreate" type="FHIR.boolean"/>
        <ns4:element name="conditionalCreate" type="FHIR.boolean"/>
        <ns4:element name="conditionalUpdate" type="FHIR.boolean"/>
        <ns4:element name="conditionalDelete" type="FHIR.ConditionalDeleteStatus"/>
        <ns4:element name="searchInclude" type="list&lt;FHIR.string&gt;"/>
        <ns4:element name="searchRevInclude" type="list&lt;FHIR.string&gt;"/>
        <ns4:element name="searchParam" type="list&lt;FHIR.Conformance.SearchParam&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Flag" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="category">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="status" type="FHIR.FlagStatus"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="author" type="FHIR.Reference"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Conformance.Messaging" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="endpoint" type="list&lt;FHIR.Conformance.Endpoint&gt;"/>
        <ns4:element name="reliableCache" type="FHIR.unsignedInt"/>
        <ns4:element name="documentation" type="FHIR.string"/>
        <ns4:element name="event" type="list&lt;FHIR.Conformance.Event&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.EnrollmentRequest" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="ruleset" type="FHIR.Coding"/>
        <ns4:element name="originalRuleset" type="FHIR.Coding"/>
        <ns4:element name="created" type="FHIR.dateTime"/>
        <ns4:element name="target" type="FHIR.Reference"/>
        <ns4:element name="provider" type="FHIR.Reference"/>
        <ns4:element name="organization" type="FHIR.Reference"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="coverage" type="FHIR.Reference"/>
        <ns4:element name="relationship" type="FHIR.Coding"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DataElement" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.code"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="contact" type="list&lt;FHIR.DataElement.Contact&gt;"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="useContext" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="copyright" type="FHIR.string"/>
        <ns4:element name="stringency" type="FHIR.DataElementStringency"/>
        <ns4:element name="mapping" type="list&lt;FHIR.DataElement.Mapping&gt;"/>
        <ns4:element name="element" type="list&lt;FHIR.ElementDefinition&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Substance.Ingredient" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="quantity" type="FHIR.Ratio"/>
        <ns4:element name="substance" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.TestScript.Action" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="operation" type="FHIR.TestScript.Operation"/>
        <ns4:element name="assert" type="FHIR.TestScript.Assert"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Conformance.SearchParam" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="definition" type="FHIR.uri"/>
        <ns4:element name="type" type="FHIR.code"/>
        <ns4:element name="documentation" type="FHIR.string"/>
        <ns4:element name="target" type="list&lt;FHIR.code&gt;"/>
        <ns4:element name="modifier" type="list&lt;FHIR.SearchModifierCode&gt;"/>
        <ns4:element name="chain" type="list&lt;FHIR.string&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.SearchParameter.Contact" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="telecom" type="list&lt;FHIR.ContactPoint&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.MedicationOrder.Substitution" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="reason" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AllergyIntoleranceType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ElementDefinition.Constraint" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="key" type="FHIR.id"/>
        <ns4:element name="requirements" type="FHIR.string"/>
        <ns4:element name="severity" type="FHIR.ConstraintSeverity"/>
        <ns4:element name="human" type="FHIR.string"/>
        <ns4:element name="xpath" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.TestScript.Contact" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="telecom" type="list&lt;FHIR.ContactPoint&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DocumentRelationshipType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ConformanceResourceStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ImagingObjectSelection.Instance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sopClass" type="FHIR.oid"/>
        <ns4:element name="uid" type="FHIR.oid"/>
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="frames" type="list&lt;FHIR.ImagingObjectSelection.Frames&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ClaimResponse.Detail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequenceLinkId" type="FHIR.positiveInt"/>
        <ns4:element name="adjudication" type="list&lt;FHIR.ClaimResponse.Adjudication1&gt;"/>
        <ns4:element name="subDetail" type="list&lt;FHIR.ClaimResponse.SubDetail&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ProcessRequest" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="action" type="FHIR.ActionList"/>
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="ruleset" type="FHIR.Coding"/>
        <ns4:element name="originalRuleset" type="FHIR.Coding"/>
        <ns4:element name="created" type="FHIR.dateTime"/>
        <ns4:element name="target" type="FHIR.Reference"/>
        <ns4:element name="provider" type="FHIR.Reference"/>
        <ns4:element name="organization" type="FHIR.Reference"/>
        <ns4:element name="request" type="FHIR.Reference"/>
        <ns4:element name="response" type="FHIR.Reference"/>
        <ns4:element name="nullify" type="FHIR.boolean"/>
        <ns4:element name="reference" type="FHIR.string"/>
        <ns4:element name="item" type="list&lt;FHIR.ProcessRequest.Item&gt;"/>
        <ns4:element name="include" type="list&lt;FHIR.string&gt;"/>
        <ns4:element name="exclude" type="list&lt;FHIR.string&gt;"/>
        <ns4:element name="period" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.CarePlanActivityStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AuditEvent.Detail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.string"/>
        <ns4:element name="value" type="FHIR.base64Binary"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ActionList" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.TestScript.Test" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="metadata" type="FHIR.TestScript.Metadata"/>
        <ns4:element name="action" type="list&lt;FHIR.TestScript.Action1&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.NutritionOrder.Nutrient" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="modifier" type="FHIR.CodeableConcept"/>
        <ns4:element name="amount" type="FHIR.SimpleQuantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Age" retrievable="false" baseType="FHIR.Quantity">
        <ns4:element name="id" type="System.String"/>
        <ns4:element name="extension" type="list&lt;FHIR.Extension&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ImagingStudy.Series" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="number" type="FHIR.unsignedInt"/>
        <ns4:element name="modality" type="FHIR.Coding"/>
        <ns4:element name="uid" type="FHIR.oid"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="numberOfInstances" type="FHIR.unsignedInt"/>
        <ns4:element name="availability" type="FHIR.InstanceAvailability"/>
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="bodySite" type="FHIR.Coding"/>
        <ns4:element name="laterality" type="FHIR.Coding"/>
        <ns4:element name="started" type="FHIR.dateTime"/>
        <ns4:element name="instance" type="list&lt;FHIR.ImagingStudy.Instance&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ParticipationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Composition" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="type">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="class" type="FHIR.CodeableConcept"/>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.CompositionStatus"/>
        <ns4:element name="confidentiality" type="FHIR.code"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="author" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="attester" type="list&lt;FHIR.Composition.Attester&gt;"/>
        <ns4:element name="custodian" type="FHIR.Reference"/>
        <ns4:element name="event" type="list&lt;FHIR.Composition.Event&gt;"/>
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="section" type="list&lt;FHIR.Composition.Section&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.StructureDefinition.Snapshot" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="element" type="list&lt;FHIR.ElementDefinition&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.CarePlan.RelatedPlan" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.CarePlanRelationship"/>
        <ns4:element name="plan" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ImmunizationRecommendation.DateCriterion" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="value" type="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.MedicationOrder" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="medicationCodeableConcept">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="dateWritten" type="FHIR.dateTime"/>
        <ns4:element name="status" type="FHIR.MedicationOrderStatus"/>
        <ns4:element name="dateEnded" type="FHIR.dateTime"/>
        <ns4:element name="reasonEnded" type="FHIR.CodeableConcept"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="prescriber" type="FHIR.Reference"/>
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="reasonCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="reasonReference" type="FHIR.Reference"/>
        <ns4:element name="note" type="FHIR.string"/>
        <ns4:element name="medicationCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="medicationReference" type="FHIR.Reference"/>
        <ns4:element name="dosageInstruction" type="list&lt;FHIR.MedicationOrder.DosageInstruction&gt;"/>
        <ns4:element name="dispenseRequest" type="FHIR.MedicationOrder.DispenseRequest"/>
        <ns4:element name="substitution" type="FHIR.MedicationOrder.Substitution"/>
        <ns4:element name="priorPrescription" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.instant" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.DateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Communication.Payload" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="contentString" type="FHIR.string"/>
        <ns4:element name="contentAttachment" type="FHIR.Attachment"/>
        <ns4:element name="contentReference" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DocumentMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AssertionOperatorType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.VisionPrescription.Dispense" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="product" type="FHIR.Coding"/>
        <ns4:element name="eye" type="FHIR.VisionEyes"/>
        <ns4:element name="sphere" type="FHIR.decimal"/>
        <ns4:element name="cylinder" type="FHIR.decimal"/>
        <ns4:element name="axis" type="FHIR.integer"/>
        <ns4:element name="prism" type="FHIR.decimal"/>
        <ns4:element name="base" type="FHIR.VisionBase"/>
        <ns4:element name="add" type="FHIR.decimal"/>
        <ns4:element name="power" type="FHIR.decimal"/>
        <ns4:element name="backCurve" type="FHIR.decimal"/>
        <ns4:element name="diameter" type="FHIR.decimal"/>
        <ns4:element name="duration" type="FHIR.SimpleQuantity"/>
        <ns4:element name="color" type="FHIR.string"/>
        <ns4:element name="brand" type="FHIR.string"/>
        <ns4:element name="notes" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DaysOfWeek" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ConformanceEventMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.IssueType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.TransactionMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ContentType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.QuestionnaireResponse.Group" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="linkId" type="FHIR.string"/>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="text" type="FHIR.string"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="group" type="list&lt;FHIR.QuestionnaireResponse.Group&gt;"/>
        <ns4:element name="question" type="list&lt;FHIR.QuestionnaireResponse.Question&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ImagingStudy.Instance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="number" type="FHIR.unsignedInt"/>
        <ns4:element name="uid" type="FHIR.oid"/>
        <ns4:element name="sopClass" type="FHIR.oid"/>
        <ns4:element name="type" type="FHIR.string"/>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="content" type="list&lt;FHIR.Attachment&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ValueSet.Parameter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="valueString" type="FHIR.string"/>
        <ns4:element name="valueBoolean" type="FHIR.boolean"/>
        <ns4:element name="valueInteger" type="FHIR.integer"/>
        <ns4:element name="valueDecimal" type="FHIR.decimal"/>
        <ns4:element name="valueUri" type="FHIR.uri"/>
        <ns4:element name="valueCode" type="FHIR.code"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.FamilyHistoryStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.MedicationOrder.DispenseRequest" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="medicationCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="medicationReference" type="FHIR.Reference"/>
        <ns4:element name="validityPeriod" type="FHIR.Period"/>
        <ns4:element name="numberOfRepeatsAllowed" type="FHIR.positiveInt"/>
        <ns4:element name="quantity" type="FHIR.SimpleQuantity"/>
        <ns4:element name="expectedSupplyDuration" type="FHIR.Duration"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.positiveInt" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.Integer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ValueSet" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.code"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="contact" type="list&lt;FHIR.ValueSet.Contact&gt;"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="lockedDate" type="FHIR.date"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="useContext" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="immutable" type="FHIR.boolean"/>
        <ns4:element name="requirements" type="FHIR.string"/>
        <ns4:element name="copyright" type="FHIR.string"/>
        <ns4:element name="extensible" type="FHIR.boolean"/>
        <ns4:element name="codeSystem" type="FHIR.ValueSet.CodeSystem"/>
        <ns4:element name="compose" type="FHIR.ValueSet.Compose"/>
        <ns4:element name="expansion" type="FHIR.ValueSet.Expansion"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Signature" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="type" type="list&lt;FHIR.Coding&gt;"/>
        <ns4:element name="when" type="FHIR.instant"/>
        <ns4:element name="whoUri" type="FHIR.uri"/>
        <ns4:element name="whoReference" type="FHIR.Reference"/>
        <ns4:element name="contentType" type="FHIR.code"/>
        <ns4:element name="blob" type="FHIR.base64Binary"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AuditEventParticipantNetworkType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.CommunicationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ClinicalImpressionStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AssertionResponseTypes" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DocumentReference.Context" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="event" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="facilityType" type="FHIR.CodeableConcept"/>
        <ns4:element name="practiceSetting" type="FHIR.CodeableConcept"/>
        <ns4:element name="sourcePatientInfo" type="FHIR.Reference"/>
        <ns4:element name="related" type="list&lt;FHIR.DocumentReference.Related&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ValueSet.Contact" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="telecom" type="list&lt;FHIR.ContactPoint&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.OperationOutcome" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="issue" type="list&lt;FHIR.OperationOutcome.Issue&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Practitioner.Qualification" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="issuer" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ImagingObjectSelection.Series" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="uid" type="FHIR.oid"/>
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="instance" type="list&lt;FHIR.ImagingObjectSelection.Instance&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Contract.Signer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.Coding"/>
        <ns4:element name="party" type="FHIR.Reference"/>
        <ns4:element name="signature" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DeviceUseRequestPriority" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ProcessResponse" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="request" type="FHIR.Reference"/>
        <ns4:element name="outcome" type="FHIR.Coding"/>
        <ns4:element name="disposition" type="FHIR.string"/>
        <ns4:element name="ruleset" type="FHIR.Coding"/>
        <ns4:element name="originalRuleset" type="FHIR.Coding"/>
        <ns4:element name="created" type="FHIR.dateTime"/>
        <ns4:element name="organization" type="FHIR.Reference"/>
        <ns4:element name="requestProvider" type="FHIR.Reference"/>
        <ns4:element name="requestOrganization" type="FHIR.Reference"/>
        <ns4:element name="form" type="FHIR.Coding"/>
        <ns4:element name="notes" type="list&lt;FHIR.ProcessResponse.Notes&gt;"/>
        <ns4:element name="error" type="list&lt;FHIR.Coding&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Immunization.Explanation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="reason" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="reasonNotGiven" type="list&lt;FHIR.CodeableConcept&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Narrative" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="status" type="FHIR.NarrativeStatus"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.OrderStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.NarrativeStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Contract.Friendly" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="contentAttachment" type="FHIR.Attachment"/>
        <ns4:element name="contentReference" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ClaimResponse.Adjudication" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.Coding"/>
        <ns4:element name="amount" type="FHIR.Money"/>
        <ns4:element name="value" type="FHIR.decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Specimen.Container" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="capacity" type="FHIR.SimpleQuantity"/>
        <ns4:element name="specimenQuantity" type="FHIR.SimpleQuantity"/>
        <ns4:element name="additiveCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="additiveReference" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.string" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.GuidePageKind" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.GuideDependencyType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Provenance.RelatedAgent" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="target" type="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Element" retrievable="false" baseType="System.Any">
        <ns4:element name="id" type="System.String"/>
        <ns4:element name="extension" type="list&lt;FHIR.Extension&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ExplanationOfBenefit" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="request" type="FHIR.Reference"/>
        <ns4:element name="outcome" type="FHIR.code"/>
        <ns4:element name="disposition" type="FHIR.string"/>
        <ns4:element name="ruleset" type="FHIR.Coding"/>
        <ns4:element name="originalRuleset" type="FHIR.Coding"/>
        <ns4:element name="created" type="FHIR.dateTime"/>
        <ns4:element name="organization" type="FHIR.Reference"/>
        <ns4:element name="requestProvider" type="FHIR.Reference"/>
        <ns4:element name="requestOrganization" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ResourceVersionPolicy" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.dateTime" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.DateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.MedicationAdministrationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Encounter.Location" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="location" type="FHIR.Reference"/>
        <ns4:element name="status" type="FHIR.EncounterLocationStatus"/>
        <ns4:element name="period" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Claim.Item" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" type="FHIR.positiveInt"/>
        <ns4:element name="type" type="FHIR.Coding"/>
        <ns4:element name="provider" type="FHIR.Reference"/>
        <ns4:element name="diagnosisLinkId" type="list&lt;FHIR.positiveInt&gt;"/>
        <ns4:element name="service" type="FHIR.Coding"/>
        <ns4:element name="serviceDate" type="FHIR.date"/>
        <ns4:element name="quantity" type="FHIR.SimpleQuantity"/>
        <ns4:element name="unitPrice" type="FHIR.Money"/>
        <ns4:element name="factor" type="FHIR.decimal"/>
        <ns4:element name="points" type="FHIR.decimal"/>
        <ns4:element name="net" type="FHIR.Money"/>
        <ns4:element name="udi" type="FHIR.Coding"/>
        <ns4:element name="bodySite" type="FHIR.Coding"/>
        <ns4:element name="subSite" type="list&lt;FHIR.Coding&gt;"/>
        <ns4:element name="modifier" type="list&lt;FHIR.Coding&gt;"/>
        <ns4:element name="detail" type="list&lt;FHIR.Claim.Detail&gt;"/>
        <ns4:element name="prosthesis" type="FHIR.Claim.Prosthesis"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.List.Entry" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="flag" type="FHIR.CodeableConcept"/>
        <ns4:element name="deleted" type="FHIR.boolean"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="item" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Patient.Contact" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="relationship" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="name" type="FHIR.HumanName"/>
        <ns4:element name="telecom" type="list&lt;FHIR.ContactPoint&gt;"/>
        <ns4:element name="address" type="FHIR.Address"/>
        <ns4:element name="gender" type="FHIR.code"/>
        <ns4:element name="organization" type="FHIR.Reference"/>
        <ns4:element name="period" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.RestfulConformanceMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.CarePlan" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="category">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="status" type="FHIR.CarePlanStatus"/>
        <ns4:element name="context" type="FHIR.Reference"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="author" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="modified" type="FHIR.dateTime"/>
        <ns4:element name="category" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="addresses" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="support" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="relatedPlan" type="list&lt;FHIR.CarePlan.RelatedPlan&gt;"/>
        <ns4:element name="participant" type="list&lt;FHIR.CarePlan.Participant&gt;"/>
        <ns4:element name="goal" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="activity" type="list&lt;FHIR.CarePlan.Activity&gt;"/>
        <ns4:element name="note" type="FHIR.Annotation"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Subscription" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="criteria" type="FHIR.string"/>
        <ns4:element name="contact" type="list&lt;FHIR.ContactPoint&gt;"/>
        <ns4:element name="reason" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.SubscriptionStatus"/>
        <ns4:element name="error" type="FHIR.string"/>
        <ns4:element name="channel" type="FHIR.Subscription.Channel"/>
        <ns4:element name="end" type="FHIR.instant"/>
        <ns4:element name="tag" type="list&lt;FHIR.Coding&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Person" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="name" type="list&lt;FHIR.HumanName&gt;"/>
        <ns4:element name="telecom" type="list&lt;FHIR.ContactPoint&gt;"/>
        <ns4:element name="gender" type="FHIR.code"/>
        <ns4:element name="birthDate" type="FHIR.date"/>
        <ns4:element name="address" type="list&lt;FHIR.Address&gt;"/>
        <ns4:element name="photo" type="FHIR.Attachment"/>
        <ns4:element name="managingOrganization" type="FHIR.Reference"/>
        <ns4:element name="active" type="FHIR.boolean"/>
        <ns4:element name="link" type="list&lt;FHIR.Person.Link&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Duration" retrievable="false" baseType="FHIR.Quantity">
        <ns4:element name="id" type="System.String"/>
        <ns4:element name="extension" type="list&lt;FHIR.Extension&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Questionnaire" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.QuestionnaireStatus"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="telecom" type="list&lt;FHIR.ContactPoint&gt;"/>
        <ns4:element name="subjectType" type="list&lt;FHIR.code&gt;"/>
        <ns4:element name="group" type="FHIR.Questionnaire.Group"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Bundle.Entry" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="link" type="list&lt;FHIR.Bundle.Link&gt;"/>
        <ns4:element name="fullUrl" type="FHIR.uri"/>
        <ns4:element name="resource" type="FHIR.ResourceContainer"/>
        <ns4:element name="search" type="FHIR.Bundle.Search"/>
        <ns4:element name="request" type="FHIR.Bundle.Request"/>
        <ns4:element name="response" type="FHIR.Bundle.Response"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Patient" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="active" type="FHIR.boolean"/>
        <ns4:element name="name" type="list&lt;FHIR.HumanName&gt;"/>
        <ns4:element name="telecom" type="list&lt;FHIR.ContactPoint&gt;"/>
        <ns4:element name="gender" type="FHIR.code"/>
        <ns4:element name="birthDate" type="FHIR.date"/>
        <ns4:element name="deceasedBoolean" type="FHIR.boolean"/>
        <ns4:element name="deceasedDateTime" type="FHIR.dateTime"/>
        <ns4:element name="address" type="list&lt;FHIR.Address&gt;"/>
        <ns4:element name="maritalStatus" type="FHIR.CodeableConcept"/>
        <ns4:element name="multipleBirthBoolean" type="FHIR.boolean"/>
        <ns4:element name="multipleBirthInteger" type="FHIR.integer"/>
        <ns4:element name="photo" type="list&lt;FHIR.Attachment&gt;"/>
        <ns4:element name="contact" type="list&lt;FHIR.Patient.Contact&gt;"/>
        <ns4:element name="animal" type="FHIR.Patient.Animal"/>
        <ns4:element name="communication" type="list&lt;FHIR.Patient.Communication&gt;"/>
        <ns4:element name="careProvider" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="managingOrganization" type="FHIR.Reference"/>
        <ns4:element name="link" type="list&lt;FHIR.Patient.Link&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.NamingSystemIdentifierType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.QuestionnaireResponse.Question" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="linkId" type="FHIR.string"/>
        <ns4:element name="text" type="FHIR.string"/>
        <ns4:element name="answer" type="list&lt;FHIR.QuestionnaireResponse.Answer&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.List" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="source" type="FHIR.Reference"/>
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="status" type="FHIR.ListStatus"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="orderedBy" type="FHIR.CodeableConcept"/>
        <ns4:element name="mode" type="FHIR.ListMode"/>
        <ns4:element name="note" type="FHIR.string"/>
        <ns4:element name="entry" type="list&lt;FHIR.List.Entry&gt;"/>
        <ns4:element name="emptyReason" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.RelatedPerson" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="relationship" type="FHIR.CodeableConcept"/>
        <ns4:element name="name" type="FHIR.HumanName"/>
        <ns4:element name="telecom" type="list&lt;FHIR.ContactPoint&gt;"/>
        <ns4:element name="gender" type="FHIR.code"/>
        <ns4:element name="birthDate" type="FHIR.date"/>
        <ns4:element name="address" type="list&lt;FHIR.Address&gt;"/>
        <ns4:element name="photo" type="list&lt;FHIR.Attachment&gt;"/>
        <ns4:element name="period" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AccountStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.TestScript.Link" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="description" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ProcedureRequestPriority" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.MedicationDispenseStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.FamilyMemberHistory.Condition" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="outcome" type="FHIR.CodeableConcept"/>
        <ns4:element name="onsetQuantity" type="FHIR.Age"/>
        <ns4:element name="onsetRange" type="FHIR.Range"/>
        <ns4:element name="onsetPeriod" type="FHIR.Period"/>
        <ns4:element name="onsetString" type="FHIR.string"/>
        <ns4:element name="note" type="FHIR.Annotation"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.NamingSystem" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.code"/>
        <ns4:element name="kind" type="FHIR.NamingSystemType"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="contact" type="list&lt;FHIR.NamingSystem.Contact&gt;"/>
        <ns4:element name="responsible" type="FHIR.string"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="useContext" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="usage" type="FHIR.string"/>
        <ns4:element name="uniqueId" type="list&lt;FHIR.NamingSystem.UniqueId&gt;"/>
        <ns4:element name="replacedBy" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AllergyIntolerance.Reaction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="substance" type="FHIR.CodeableConcept"/>
        <ns4:element name="certainty" type="FHIR.AllergyIntoleranceCertainty"/>
        <ns4:element name="manifestation" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="onset" type="FHIR.dateTime"/>
        <ns4:element name="severity" type="FHIR.AllergyIntoleranceSeverity"/>
        <ns4:element name="exposureRoute" type="FHIR.CodeableConcept"/>
        <ns4:element name="note" type="FHIR.Annotation"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.NutritionOrder.Texture" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="modifier" type="FHIR.CodeableConcept"/>
        <ns4:element name="foodType" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.IdentifierUse" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DigitalMediaType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Specimen.Treatment" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="procedure" type="FHIR.CodeableConcept"/>
        <ns4:element name="additive" type="list&lt;FHIR.Reference&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.HealthcareService.ServiceType" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="specialty" type="list&lt;FHIR.CodeableConcept&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Provenance.Entity" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="role" type="FHIR.ProvenanceEntityRole"/>
        <ns4:element name="type" type="FHIR.Coding"/>
        <ns4:element name="reference" type="FHIR.uri"/>
        <ns4:element name="display" type="FHIR.string"/>
        <ns4:element name="agent" type="FHIR.Provenance.Agent"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ClaimResponse.Detail1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="service" type="FHIR.Coding"/>
        <ns4:element name="fee" type="FHIR.Money"/>
        <ns4:element name="adjudication" type="list&lt;FHIR.ClaimResponse.Adjudication4&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DocumentReference" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="type">
        <ns4:element name="masterIdentifier" type="FHIR.Identifier"/>
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="class" type="FHIR.CodeableConcept"/>
        <ns4:element name="author" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="custodian" type="FHIR.Reference"/>
        <ns4:element name="authenticator" type="FHIR.Reference"/>
        <ns4:element name="created" type="FHIR.dateTime"/>
        <ns4:element name="indexed" type="FHIR.instant"/>
        <ns4:element name="status" type="FHIR.code"/>
        <ns4:element name="docStatus" type="FHIR.CodeableConcept"/>
        <ns4:element name="relatesTo" type="list&lt;FHIR.DocumentReference.RelatesTo&gt;"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="securityLabel" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="content" type="list&lt;FHIR.DocumentReference.Content&gt;"/>
        <ns4:element name="context" type="FHIR.DocumentReference.Context"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Address" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="use" type="FHIR.AddressUse"/>
        <ns4:element name="type" type="FHIR.AddressType"/>
        <ns4:element name="text" type="FHIR.string"/>
        <ns4:element name="line" type="list&lt;FHIR.string&gt;"/>
        <ns4:element name="city" type="FHIR.string"/>
        <ns4:element name="district" type="FHIR.string"/>
        <ns4:element name="state" type="FHIR.string"/>
        <ns4:element name="postalCode" type="FHIR.string"/>
        <ns4:element name="country" type="FHIR.string"/>
        <ns4:element name="period" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.CodeableConcept" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="coding" type="list&lt;FHIR.Coding&gt;"/>
        <ns4:element name="text" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.BindingStrength" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Medication.Product" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="form" type="FHIR.CodeableConcept"/>
        <ns4:element name="ingredient" type="list&lt;FHIR.Medication.Ingredient&gt;"/>
        <ns4:element name="batch" type="list&lt;FHIR.Medication.Batch&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Money" retrievable="false" baseType="FHIR.Quantity">
        <ns4:element name="id" type="System.String"/>
        <ns4:element name="extension" type="list&lt;FHIR.Extension&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.BodySite" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="code">
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="modifier" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="image" type="list&lt;FHIR.Attachment&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Claim.Coverage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" type="FHIR.positiveInt"/>
        <ns4:element name="focal" type="FHIR.boolean"/>
        <ns4:element name="coverage" type="FHIR.Reference"/>
        <ns4:element name="businessArrangement" type="FHIR.string"/>
        <ns4:element name="relationship" type="FHIR.Coding"/>
        <ns4:element name="preAuthRef" type="list&lt;FHIR.string&gt;"/>
        <ns4:element name="claimResponse" type="FHIR.Reference"/>
        <ns4:element name="originalRuleset" type="FHIR.Coding"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ImagingObjectSelection" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="uid" type="FHIR.oid"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="title" type="FHIR.CodeableConcept"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="author" type="FHIR.Reference"/>
        <ns4:element name="authoringTime" type="FHIR.dateTime"/>
        <ns4:element name="study" type="list&lt;FHIR.ImagingObjectSelection.Study&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Appointment.Participant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="actor" type="FHIR.Reference"/>
        <ns4:element name="required" type="FHIR.ParticipantRequired"/>
        <ns4:element name="status" type="FHIR.ParticipationStatus"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ValueSet.Expansion" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" type="FHIR.uri"/>
        <ns4:element name="timestamp" type="FHIR.dateTime"/>
        <ns4:element name="total" type="FHIR.integer"/>
        <ns4:element name="offset" type="FHIR.integer"/>
        <ns4:element name="parameter" type="list&lt;FHIR.ValueSet.Parameter&gt;"/>
        <ns4:element name="contains" type="list&lt;FHIR.ValueSet.Contains&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ConceptMap" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.code"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="contact" type="list&lt;FHIR.ConceptMap.Contact&gt;"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="useContext" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="requirements" type="FHIR.string"/>
        <ns4:element name="copyright" type="FHIR.string"/>
        <ns4:element name="sourceUri" type="FHIR.uri"/>
        <ns4:element name="sourceReference" type="FHIR.Reference"/>
        <ns4:element name="targetUri" type="FHIR.uri"/>
        <ns4:element name="targetReference" type="FHIR.Reference"/>
        <ns4:element name="element" type="list&lt;FHIR.ConceptMap.Element&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DataElement.Contact" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="telecom" type="list&lt;FHIR.ContactPoint&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Practitioner" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="active" type="FHIR.boolean"/>
        <ns4:element name="name" type="FHIR.HumanName"/>
        <ns4:element name="telecom" type="list&lt;FHIR.ContactPoint&gt;"/>
        <ns4:element name="address" type="list&lt;FHIR.Address&gt;"/>
        <ns4:element name="gender" type="FHIR.code"/>
        <ns4:element name="birthDate" type="FHIR.date"/>
        <ns4:element name="photo" type="list&lt;FHIR.Attachment&gt;"/>
        <ns4:element name="practitionerRole" type="list&lt;FHIR.Practitioner.PractitionerRole&gt;"/>
        <ns4:element name="qualification" type="list&lt;FHIR.Practitioner.Qualification&gt;"/>
        <ns4:element name="communication" type="list&lt;FHIR.CodeableConcept&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ParticipantRequired" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Reference" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="reference" type="FHIR.string"/>
        <ns4:element name="display" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.XPathUsageType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.VisionPrescription" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="dateWritten" type="FHIR.dateTime"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="prescriber" type="FHIR.Reference"/>
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="reasonCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="reasonReference" type="FHIR.Reference"/>
        <ns4:element name="dispense" type="list&lt;FHIR.VisionPrescription.Dispense&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.InstanceAvailability" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.id" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Encounter.Participant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="individual" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.MessageHeader" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="timestamp" type="FHIR.instant"/>
        <ns4:element name="event" type="FHIR.Coding"/>
        <ns4:element name="response" type="FHIR.MessageHeader.Response"/>
        <ns4:element name="source" type="FHIR.MessageHeader.Source"/>
        <ns4:element name="destination" type="list&lt;FHIR.MessageHeader.Destination&gt;"/>
        <ns4:element name="enterer" type="FHIR.Reference"/>
        <ns4:element name="author" type="FHIR.Reference"/>
        <ns4:element name="receiver" type="FHIR.Reference"/>
        <ns4:element name="responsible" type="FHIR.Reference"/>
        <ns4:element name="reason" type="FHIR.CodeableConcept"/>
        <ns4:element name="data" type="list&lt;FHIR.Reference&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Observation.Related" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.ObservationRelationshipType"/>
        <ns4:element name="target" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.NutritionOrder.Administration" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="schedule" type="FHIR.Timing"/>
        <ns4:element name="quantity" type="FHIR.SimpleQuantity"/>
        <ns4:element name="rateQuantity" type="FHIR.SimpleQuantity"/>
        <ns4:element name="rateRatio" type="FHIR.Ratio"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ValueSet.Contains" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="system" type="FHIR.uri"/>
        <ns4:element name="abstract" type="FHIR.boolean"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="code" type="FHIR.code"/>
        <ns4:element name="display" type="FHIR.string"/>
        <ns4:element name="contains" type="list&lt;FHIR.ValueSet.Contains&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.FilterOperator" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.NamingSystemType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.PaymentNotice" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="ruleset" type="FHIR.Coding"/>
        <ns4:element name="originalRuleset" type="FHIR.Coding"/>
        <ns4:element name="created" type="FHIR.dateTime"/>
        <ns4:element name="target" type="FHIR.Reference"/>
        <ns4:element name="provider" type="FHIR.Reference"/>
        <ns4:element name="organization" type="FHIR.Reference"/>
        <ns4:element name="request" type="FHIR.Reference"/>
        <ns4:element name="response" type="FHIR.Reference"/>
        <ns4:element name="paymentStatus" type="FHIR.Coding"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ClaimResponse.AddItem" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequenceLinkId" type="list&lt;FHIR.positiveInt&gt;"/>
        <ns4:element name="service" type="FHIR.Coding"/>
        <ns4:element name="fee" type="FHIR.Money"/>
        <ns4:element name="noteNumberLinkId" type="list&lt;FHIR.positiveInt&gt;"/>
        <ns4:element name="adjudication" type="list&lt;FHIR.ClaimResponse.Adjudication3&gt;"/>
        <ns4:element name="detail" type="list&lt;FHIR.ClaimResponse.Detail1&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Range" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="low" type="FHIR.SimpleQuantity"/>
        <ns4:element name="high" type="FHIR.SimpleQuantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ExtensionContext" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ImplementationGuide.Page" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="source" type="FHIR.uri"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="kind" type="FHIR.GuidePageKind"/>
        <ns4:element name="type" type="list&lt;FHIR.code&gt;"/>
        <ns4:element name="package" type="list&lt;FHIR.string&gt;"/>
        <ns4:element name="format" type="FHIR.code"/>
        <ns4:element name="page" type="list&lt;FHIR.ImplementationGuide.Page&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ClaimType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AuditEventOutcome" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.SimpleQuantity" retrievable="false" baseType="FHIR.Quantity">
        <ns4:element name="id" type="System.String"/>
        <ns4:element name="extension" type="list&lt;FHIR.Extension&gt;"/>
        <ns4:element name="comparator" type="FHIR.QuantityComparator" prohibited="true"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ValueSet.Compose" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="import" type="list&lt;FHIR.uri&gt;"/>
        <ns4:element name="include" type="list&lt;FHIR.ValueSet.Include&gt;"/>
        <ns4:element name="exclude" type="list&lt;FHIR.ValueSet.Include&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Contract.Rule" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="contentAttachment" type="FHIR.Attachment"/>
        <ns4:element name="contentReference" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.PaymentReconciliation.Note" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.Coding"/>
        <ns4:element name="text" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ConstraintSeverity" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DomainResource" retrievable="false" baseType="FHIR.Resource">
        <ns4:element name="text" type="FHIR.Narrative"/>
        <ns4:element name="contained" type="list&lt;FHIR.ResourceContainer&gt;"/>
        <ns4:element name="extension" type="list&lt;FHIR.Extension&gt;"/>
        <ns4:element name="modifierExtension" type="list&lt;FHIR.Extension&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AllergyIntolerance" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="substance">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="onset" type="FHIR.dateTime"/>
        <ns4:element name="recordedDate" type="FHIR.dateTime"/>
        <ns4:element name="recorder" type="FHIR.Reference"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="reporter" type="FHIR.Reference"/>
        <ns4:element name="substance" type="FHIR.CodeableConcept"/>
        <ns4:element name="status" type="FHIR.AllergyIntoleranceStatus"/>
        <ns4:element name="criticality" type="FHIR.AllergyIntoleranceCriticality"/>
        <ns4:element name="type" type="FHIR.AllergyIntoleranceType"/>
        <ns4:element name="category" type="FHIR.AllergyIntoleranceCategory"/>
        <ns4:element name="lastOccurence" type="FHIR.dateTime"/>
        <ns4:element name="note" type="FHIR.Annotation"/>
        <ns4:element name="reaction" type="list&lt;FHIR.AllergyIntolerance.Reaction&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Encounter" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="type">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="status" type="FHIR.EncounterState"/>
        <ns4:element name="statusHistory" type="list&lt;FHIR.Encounter.StatusHistory&gt;"/>
        <ns4:element name="class" type="FHIR.EncounterClass"/>
        <ns4:element name="type" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="priority" type="FHIR.CodeableConcept"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="episodeOfCare" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="incomingReferral" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="participant" type="list&lt;FHIR.Encounter.Participant&gt;"/>
        <ns4:element name="appointment" type="FHIR.Reference"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="length" type="FHIR.Duration"/>
        <ns4:element name="reason" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="indication" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="hospitalization" type="FHIR.Encounter.Hospitalization"/>
        <ns4:element name="location" type="list&lt;FHIR.Encounter.Location&gt;"/>
        <ns4:element name="serviceProvider" type="FHIR.Reference"/>
        <ns4:element name="partOf" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.GuideResourcePurpose" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Procedure.FocalDevice" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="action" type="FHIR.CodeableConcept"/>
        <ns4:element name="manipulated" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DocumentReference.Related" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="ref" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Contract.ValuedItem1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="entityCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="entityReference" type="FHIR.Reference"/>
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="effectiveTime" type="FHIR.dateTime"/>
        <ns4:element name="quantity" type="FHIR.SimpleQuantity"/>
        <ns4:element name="unitPrice" type="FHIR.Money"/>
        <ns4:element name="factor" type="FHIR.decimal"/>
        <ns4:element name="points" type="FHIR.decimal"/>
        <ns4:element name="net" type="FHIR.Money"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ProcedureStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Claim.Diagnosis" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" type="FHIR.positiveInt"/>
        <ns4:element name="diagnosis" type="FHIR.Coding"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Timing" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="event" type="list&lt;FHIR.dateTime&gt;"/>
        <ns4:element name="repeat" type="FHIR.Timing.Repeat"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.QuestionnaireResponse" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="questionnaire" type="FHIR.Reference"/>
        <ns4:element name="status" type="FHIR.QuestionnaireResponseStatus"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="author" type="FHIR.Reference"/>
        <ns4:element name="authored" type="FHIR.dateTime"/>
        <ns4:element name="source" type="FHIR.Reference"/>
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="group" type="FHIR.QuestionnaireResponse.Group"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ImagingStudy" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="started" type="FHIR.dateTime"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="uid" type="FHIR.oid"/>
        <ns4:element name="accession" type="FHIR.Identifier"/>
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="order" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="modalityList" type="list&lt;FHIR.Coding&gt;"/>
        <ns4:element name="referrer" type="FHIR.Reference"/>
        <ns4:element name="availability" type="FHIR.InstanceAvailability"/>
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="numberOfSeries" type="FHIR.unsignedInt"/>
        <ns4:element name="numberOfInstances" type="FHIR.unsignedInt"/>
        <ns4:element name="procedure" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="interpreter" type="FHIR.Reference"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="series" type="list&lt;FHIR.ImagingStudy.Series&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Account" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="status" type="FHIR.AccountStatus"/>
        <ns4:element name="activePeriod" type="FHIR.Period"/>
        <ns4:element name="currency" type="FHIR.Coding"/>
        <ns4:element name="balance" type="FHIR.Money"/>
        <ns4:element name="coveragePeriod" type="FHIR.Period"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="owner" type="FHIR.Reference"/>
        <ns4:element name="description" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AuditEvent.Network" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="address" type="FHIR.string"/>
        <ns4:element name="type" type="FHIR.AuditEventParticipantNetworkType"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.StructureDefinition.Mapping" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identity" type="FHIR.id"/>
        <ns4:element name="uri" type="FHIR.uri"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="comments" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ContactPoint" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="system" type="FHIR.ContactPointSystem"/>
        <ns4:element name="value" type="FHIR.string"/>
        <ns4:element name="use" type="FHIR.ContactPointUse"/>
        <ns4:element name="rank" type="FHIR.positiveInt"/>
        <ns4:element name="period" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.MedicationDispense.Substitution" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="reason" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="responsibleParty" type="list&lt;FHIR.Reference&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Extension" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="valueBoolean" type="FHIR.boolean"/>
        <ns4:element name="valueInteger" type="FHIR.integer"/>
        <ns4:element name="valueDecimal" type="FHIR.decimal"/>
        <ns4:element name="valueBase64Binary" type="FHIR.base64Binary"/>
        <ns4:element name="valueInstant" type="FHIR.instant"/>
        <ns4:element name="valueString" type="FHIR.string"/>
        <ns4:element name="valueUri" type="FHIR.uri"/>
        <ns4:element name="valueDate" type="FHIR.date"/>
        <ns4:element name="valueDateTime" type="FHIR.dateTime"/>
        <ns4:element name="valueTime" type="FHIR.time"/>
        <ns4:element name="valueCode" type="FHIR.code"/>
        <ns4:element name="valueOid" type="FHIR.oid"/>
        <ns4:element name="valueUuid" type="FHIR.uuid"/>
        <ns4:element name="valueId" type="FHIR.id"/>
        <ns4:element name="valueUnsignedInt" type="FHIR.unsignedInt"/>
        <ns4:element name="valuePositiveInt" type="FHIR.positiveInt"/>
        <ns4:element name="valueMarkdown" type="FHIR.markdown"/>
        <ns4:element name="valueAnnotation" type="FHIR.Annotation"/>
        <ns4:element name="valueAttachment" type="FHIR.Attachment"/>
        <ns4:element name="valueIdentifier" type="FHIR.Identifier"/>
        <ns4:element name="valueCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="valueCoding" type="FHIR.Coding"/>
        <ns4:element name="valueQuantity" type="FHIR.Quantity"/>
        <ns4:element name="valueRange" type="FHIR.Range"/>
        <ns4:element name="valuePeriod" type="FHIR.Period"/>
        <ns4:element name="valueRatio" type="FHIR.Ratio"/>
        <ns4:element name="valueReference" type="FHIR.Reference"/>
        <ns4:element name="valueSampledData" type="FHIR.SampledData"/>
        <ns4:element name="valueSignature" type="FHIR.Signature"/>
        <ns4:element name="valueHumanName" type="FHIR.HumanName"/>
        <ns4:element name="valueAddress" type="FHIR.Address"/>
        <ns4:element name="valueContactPoint" type="FHIR.ContactPoint"/>
        <ns4:element name="valueTiming" type="FHIR.Timing"/>
        <ns4:element name="valueMeta" type="FHIR.Meta"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Group.Characteristic" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="valueCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="valueBoolean" type="FHIR.boolean"/>
        <ns4:element name="valueQuantity" type="FHIR.Quantity"/>
        <ns4:element name="valueRange" type="FHIR.Range"/>
        <ns4:element name="exclude" type="FHIR.boolean"/>
        <ns4:element name="period" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ValueSet.Concept1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.code"/>
        <ns4:element name="display" type="FHIR.string"/>
        <ns4:element name="designation" type="list&lt;FHIR.ValueSet.Designation&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.NutritionOrder.Supplement" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="productName" type="FHIR.string"/>
        <ns4:element name="schedule" type="list&lt;FHIR.Timing&gt;"/>
        <ns4:element name="quantity" type="FHIR.SimpleQuantity"/>
        <ns4:element name="instruction" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.NutritionOrder.EnteralFormula" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="baseFormulaType" type="FHIR.CodeableConcept"/>
        <ns4:element name="baseFormulaProductName" type="FHIR.string"/>
        <ns4:element name="additiveType" type="FHIR.CodeableConcept"/>
        <ns4:element name="additiveProductName" type="FHIR.string"/>
        <ns4:element name="caloricDensity" type="FHIR.SimpleQuantity"/>
        <ns4:element name="routeofAdministration" type="FHIR.CodeableConcept"/>
        <ns4:element name="administration" type="list&lt;FHIR.NutritionOrder.Administration&gt;"/>
        <ns4:element name="maxVolumeToDeliver" type="FHIR.SimpleQuantity"/>
        <ns4:element name="administrationInstruction" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Composition.Section" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="text" type="FHIR.Narrative"/>
        <ns4:element name="mode" type="FHIR.code"/>
        <ns4:element name="orderedBy" type="FHIR.CodeableConcept"/>
        <ns4:element name="entry" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="emptyReason" type="FHIR.CodeableConcept"/>
        <ns4:element name="section" type="list&lt;FHIR.Composition.Section&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DeviceMetricCategory" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Immunization" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="vaccineCode">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="status" type="FHIR.code"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="vaccineCode" type="FHIR.CodeableConcept"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="wasNotGiven" type="FHIR.boolean"/>
        <ns4:element name="reported" type="FHIR.boolean"/>
        <ns4:element name="performer" type="FHIR.Reference"/>
        <ns4:element name="requester" type="FHIR.Reference"/>
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="manufacturer" type="FHIR.Reference"/>
        <ns4:element name="location" type="FHIR.Reference"/>
        <ns4:element name="lotNumber" type="FHIR.string"/>
        <ns4:element name="expirationDate" type="FHIR.date"/>
        <ns4:element name="site" type="FHIR.CodeableConcept"/>
        <ns4:element name="route" type="FHIR.CodeableConcept"/>
        <ns4:element name="doseQuantity" type="FHIR.SimpleQuantity"/>
        <ns4:element name="note" type="list&lt;FHIR.Annotation&gt;"/>
        <ns4:element name="explanation" type="FHIR.Immunization.Explanation"/>
        <ns4:element name="reaction" type="list&lt;FHIR.Immunization.Reaction&gt;"/>
        <ns4:element name="vaccinationProtocol" type="list&lt;FHIR.Immunization.VaccinationProtocol&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.QuestionnaireStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Specimen.Collection" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="collector" type="FHIR.Reference"/>
        <ns4:element name="comment" type="list&lt;FHIR.string&gt;"/>
        <ns4:element name="collectedDateTime" type="FHIR.dateTime"/>
        <ns4:element name="collectedPeriod" type="FHIR.Period"/>
        <ns4:element name="quantity" type="FHIR.SimpleQuantity"/>
        <ns4:element name="method" type="FHIR.CodeableConcept"/>
        <ns4:element name="bodySite" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ResponseType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.decimal" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.Decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Bundle.Request" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="method" type="FHIR.HTTPVerb"/>
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="ifNoneMatch" type="FHIR.string"/>
        <ns4:element name="ifModifiedSince" type="FHIR.instant"/>
        <ns4:element name="ifMatch" type="FHIR.string"/>
        <ns4:element name="ifNoneExist" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AggregationMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Person.Link" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="target" type="FHIR.Reference"/>
        <ns4:element name="assurance" type="FHIR.IdentityAssuranceLevel"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ClaimResponse.Item" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequenceLinkId" type="FHIR.positiveInt"/>
        <ns4:element name="noteNumber" type="list&lt;FHIR.positiveInt&gt;"/>
        <ns4:element name="adjudication" type="list&lt;FHIR.ClaimResponse.Adjudication&gt;"/>
        <ns4:element name="detail" type="list&lt;FHIR.ClaimResponse.Detail&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.PaymentReconciliation.Detail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.Coding"/>
        <ns4:element name="request" type="FHIR.Reference"/>
        <ns4:element name="responce" type="FHIR.Reference"/>
        <ns4:element name="submitter" type="FHIR.Reference"/>
        <ns4:element name="payee" type="FHIR.Reference"/>
        <ns4:element name="date" type="FHIR.date"/>
        <ns4:element name="amount" type="FHIR.Money"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ReferralRequest" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="type">
        <ns4:element name="status" type="FHIR.ReferralStatus"/>
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="specialty" type="FHIR.CodeableConcept"/>
        <ns4:element name="priority" type="FHIR.CodeableConcept"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="requester" type="FHIR.Reference"/>
        <ns4:element name="recipient" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="dateSent" type="FHIR.dateTime"/>
        <ns4:element name="reason" type="FHIR.CodeableConcept"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="serviceRequested" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="supportingInformation" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="fulfillmentTime" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.CarePlan.Detail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="reasonCode" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="reasonReference" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="goal" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="status" type="FHIR.CarePlanActivityStatus"/>
        <ns4:element name="statusReason" type="FHIR.CodeableConcept"/>
        <ns4:element name="prohibited" type="FHIR.boolean"/>
        <ns4:element name="scheduledTiming" type="FHIR.Timing"/>
        <ns4:element name="scheduledPeriod" type="FHIR.Period"/>
        <ns4:element name="scheduledString" type="FHIR.string"/>
        <ns4:element name="location" type="FHIR.Reference"/>
        <ns4:element name="performer" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="productCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="productReference" type="FHIR.Reference"/>
        <ns4:element name="dailyAmount" type="FHIR.SimpleQuantity"/>
        <ns4:element name="quantity" type="FHIR.SimpleQuantity"/>
        <ns4:element name="description" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ImmunizationRecommendation.Protocol" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="doseSequence" type="FHIR.integer"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="authority" type="FHIR.Reference"/>
        <ns4:element name="series" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AuditEvent.Event" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.Coding"/>
        <ns4:element name="subtype" type="list&lt;FHIR.Coding&gt;"/>
        <ns4:element name="action" type="FHIR.AuditEventAction"/>
        <ns4:element name="dateTime" type="FHIR.instant"/>
        <ns4:element name="outcome" type="FHIR.AuditEventOutcome"/>
        <ns4:element name="outcomeDesc" type="FHIR.string"/>
        <ns4:element name="purposeOfEvent" type="list&lt;FHIR.Coding&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.EventTiming" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Condition.Stage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="summary" type="FHIR.CodeableConcept"/>
        <ns4:element name="assessment" type="list&lt;FHIR.Reference&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AuditEvent" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="event" type="FHIR.AuditEvent.Event"/>
        <ns4:element name="participant" type="list&lt;FHIR.AuditEvent.Participant&gt;"/>
        <ns4:element name="source" type="FHIR.AuditEvent.Source"/>
        <ns4:element name="object" type="list&lt;FHIR.AuditEvent.Object&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.GoalStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.OrderResponse" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="request" type="FHIR.Reference"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="who" type="FHIR.Reference"/>
        <ns4:element name="orderStatus" type="FHIR.OrderStatus"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="fulfillment" type="list&lt;FHIR.Reference&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.SearchParamType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.SystemRestfulInteraction" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.OperationDefinition" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.code"/>
        <ns4:element name="kind" type="FHIR.OperationKind"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="contact" type="list&lt;FHIR.OperationDefinition.Contact&gt;"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="requirements" type="FHIR.string"/>
        <ns4:element name="idempotent" type="FHIR.boolean"/>
        <ns4:element name="code" type="FHIR.code"/>
        <ns4:element name="notes" type="FHIR.string"/>
        <ns4:element name="base" type="FHIR.Reference"/>
        <ns4:element name="system" type="FHIR.boolean"/>
        <ns4:element name="type" type="list&lt;FHIR.code&gt;"/>
        <ns4:element name="instance" type="FHIR.boolean"/>
        <ns4:element name="parameter" type="list&lt;FHIR.OperationDefinition.Parameter&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.SupplyDelivery" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="type">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="status" type="FHIR.SupplyDeliveryStatus"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="quantity" type="FHIR.SimpleQuantity"/>
        <ns4:element name="suppliedItem" type="FHIR.Reference"/>
        <ns4:element name="supplier" type="FHIR.Reference"/>
        <ns4:element name="whenPrepared" type="FHIR.Period"/>
        <ns4:element name="time" type="FHIR.dateTime"/>
        <ns4:element name="destination" type="FHIR.Reference"/>
        <ns4:element name="receiver" type="list&lt;FHIR.Reference&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DiagnosticOrder.Event" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="status" type="FHIR.DiagnosticOrderStatus"/>
        <ns4:element name="description" type="FHIR.CodeableConcept"/>
        <ns4:element name="dateTime" type="FHIR.dateTime"/>
        <ns4:element name="actor" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Conformance.Rest" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="mode" type="FHIR.RestfulConformanceMode"/>
        <ns4:element name="documentation" type="FHIR.string"/>
        <ns4:element name="security" type="FHIR.Conformance.Security"/>
        <ns4:element name="resource" type="list&lt;FHIR.Conformance.Resource&gt;"/>
        <ns4:element name="interaction" type="list&lt;FHIR.Conformance.Interaction1&gt;"/>
        <ns4:element name="transactionMode" type="FHIR.TransactionMode"/>
        <ns4:element name="searchParam" type="list&lt;FHIR.Conformance.SearchParam&gt;"/>
        <ns4:element name="operation" type="list&lt;FHIR.Conformance.Operation&gt;"/>
        <ns4:element name="compartment" type="list&lt;FHIR.uri&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.HealthcareService.AvailableTime" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="daysOfWeek" type="list&lt;FHIR.DaysOfWeek&gt;"/>
        <ns4:element name="allDay" type="FHIR.boolean"/>
        <ns4:element name="availableStartTime" type="FHIR.time"/>
        <ns4:element name="availableEndTime" type="FHIR.time"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.SubscriptionChannelType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.EligibilityRequest" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="ruleset" type="FHIR.Coding"/>
        <ns4:element name="originalRuleset" type="FHIR.Coding"/>
        <ns4:element name="created" type="FHIR.dateTime"/>
        <ns4:element name="target" type="FHIR.Reference"/>
        <ns4:element name="provider" type="FHIR.Reference"/>
        <ns4:element name="organization" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Parameters.Parameter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="valueBoolean" type="FHIR.boolean"/>
        <ns4:element name="valueInteger" type="FHIR.integer"/>
        <ns4:element name="valueDecimal" type="FHIR.decimal"/>
        <ns4:element name="valueBase64Binary" type="FHIR.base64Binary"/>
        <ns4:element name="valueInstant" type="FHIR.instant"/>
        <ns4:element name="valueString" type="FHIR.string"/>
        <ns4:element name="valueUri" type="FHIR.uri"/>
        <ns4:element name="valueDate" type="FHIR.date"/>
        <ns4:element name="valueDateTime" type="FHIR.dateTime"/>
        <ns4:element name="valueTime" type="FHIR.time"/>
        <ns4:element name="valueCode" type="FHIR.code"/>
        <ns4:element name="valueOid" type="FHIR.oid"/>
        <ns4:element name="valueUuid" type="FHIR.uuid"/>
        <ns4:element name="valueId" type="FHIR.id"/>
        <ns4:element name="valueUnsignedInt" type="FHIR.unsignedInt"/>
        <ns4:element name="valuePositiveInt" type="FHIR.positiveInt"/>
        <ns4:element name="valueMarkdown" type="FHIR.markdown"/>
        <ns4:element name="valueAnnotation" type="FHIR.Annotation"/>
        <ns4:element name="valueAttachment" type="FHIR.Attachment"/>
        <ns4:element name="valueIdentifier" type="FHIR.Identifier"/>
        <ns4:element name="valueCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="valueCoding" type="FHIR.Coding"/>
        <ns4:element name="valueQuantity" type="FHIR.Quantity"/>
        <ns4:element name="valueRange" type="FHIR.Range"/>
        <ns4:element name="valuePeriod" type="FHIR.Period"/>
        <ns4:element name="valueRatio" type="FHIR.Ratio"/>
        <ns4:element name="valueReference" type="FHIR.Reference"/>
        <ns4:element name="valueSampledData" type="FHIR.SampledData"/>
        <ns4:element name="valueSignature" type="FHIR.Signature"/>
        <ns4:element name="valueHumanName" type="FHIR.HumanName"/>
        <ns4:element name="valueAddress" type="FHIR.Address"/>
        <ns4:element name="valueContactPoint" type="FHIR.ContactPoint"/>
        <ns4:element name="valueTiming" type="FHIR.Timing"/>
        <ns4:element name="valueMeta" type="FHIR.Meta"/>
        <ns4:element name="valueElementDefinition" type="FHIR.ElementDefinition"/>
        <ns4:element name="resource" type="FHIR.ResourceContainer"/>
        <ns4:element name="part" type="list&lt;FHIR.Parameters.Parameter&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Claim.Payee" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.Coding"/>
        <ns4:element name="provider" type="FHIR.Reference"/>
        <ns4:element name="organization" type="FHIR.Reference"/>
        <ns4:element name="person" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.MedicationDispense" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="medicationCodeableConcept">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="status" type="FHIR.MedicationDispenseStatus"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="dispenser" type="FHIR.Reference"/>
        <ns4:element name="authorizingPrescription" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="quantity" type="FHIR.SimpleQuantity"/>
        <ns4:element name="daysSupply" type="FHIR.SimpleQuantity"/>
        <ns4:element name="medicationCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="medicationReference" type="FHIR.Reference"/>
        <ns4:element name="whenPrepared" type="FHIR.dateTime"/>
        <ns4:element name="whenHandedOver" type="FHIR.dateTime"/>
        <ns4:element name="destination" type="FHIR.Reference"/>
        <ns4:element name="receiver" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="note" type="FHIR.string"/>
        <ns4:element name="dosageInstruction" type="list&lt;FHIR.MedicationDispense.DosageInstruction&gt;"/>
        <ns4:element name="substitution" type="FHIR.MedicationDispense.Substitution"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ProcedureRequestStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Substance" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="code">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="category" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="instance" type="list&lt;FHIR.Substance.Instance&gt;"/>
        <ns4:element name="ingredient" type="list&lt;FHIR.Substance.Ingredient&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.NamingSystem.Contact" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="telecom" type="list&lt;FHIR.ContactPoint&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Contract.Legal" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="contentAttachment" type="FHIR.Attachment"/>
        <ns4:element name="contentReference" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DocumentReference.Content" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="attachment" type="FHIR.Attachment"/>
        <ns4:element name="format" type="list&lt;FHIR.Coding&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ConceptMap.Target" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="codeSystem" type="FHIR.uri"/>
        <ns4:element name="code" type="FHIR.code"/>
        <ns4:element name="equivalence" type="FHIR.code"/>
        <ns4:element name="comments" type="FHIR.string"/>
        <ns4:element name="dependsOn" type="list&lt;FHIR.ConceptMap.DependsOn&gt;"/>
        <ns4:element name="product" type="list&lt;FHIR.ConceptMap.DependsOn&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ReferralStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.TestScript.Teardown" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="action" type="list&lt;FHIR.TestScript.Action2&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ValueSet.Designation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="language" type="FHIR.code"/>
        <ns4:element name="use" type="FHIR.Coding"/>
        <ns4:element name="value" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AssertionDirectionType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ImmunizationRecommendation.Recommendation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="vaccineCode" type="FHIR.CodeableConcept"/>
        <ns4:element name="doseNumber" type="FHIR.positiveInt"/>
        <ns4:element name="forecastStatus" type="FHIR.CodeableConcept"/>
        <ns4:element name="dateCriterion" type="list&lt;FHIR.ImmunizationRecommendation.DateCriterion&gt;"/>
        <ns4:element name="protocol" type="FHIR.ImmunizationRecommendation.Protocol"/>
        <ns4:element name="supportingImmunization" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="supportingPatientInformation" type="list&lt;FHIR.Reference&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AppointmentResponse" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="appointment" type="FHIR.Reference"/>
        <ns4:element name="start" type="FHIR.instant"/>
        <ns4:element name="end" type="FHIR.instant"/>
        <ns4:element name="participantType" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="actor" type="FHIR.Reference"/>
        <ns4:element name="participantStatus" type="FHIR.ParticipantStatus"/>
        <ns4:element name="comment" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.SlicingRules" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Communication" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="category">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="sender" type="FHIR.Reference"/>
        <ns4:element name="recipient" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="payload" type="list&lt;FHIR.Communication.Payload&gt;"/>
        <ns4:element name="medium" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="status" type="FHIR.CommunicationStatus"/>
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="sent" type="FHIR.dateTime"/>
        <ns4:element name="received" type="FHIR.dateTime"/>
        <ns4:element name="reason" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="requestDetail" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Contract.Term" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="issued" type="FHIR.dateTime"/>
        <ns4:element name="applies" type="FHIR.Period"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="subType" type="FHIR.CodeableConcept"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="action" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="actionReason" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="actor" type="list&lt;FHIR.Contract.Actor1&gt;"/>
        <ns4:element name="text" type="FHIR.string"/>
        <ns4:element name="valuedItem" type="list&lt;FHIR.Contract.ValuedItem1&gt;"/>
        <ns4:element name="group" type="list&lt;FHIR.Contract.Term&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Conformance.Operation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="definition" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Patient.Animal" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="species" type="FHIR.CodeableConcept"/>
        <ns4:element name="breed" type="FHIR.CodeableConcept"/>
        <ns4:element name="genderStatus" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Substance.Instance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="expiry" type="FHIR.dateTime"/>
        <ns4:element name="quantity" type="FHIR.SimpleQuantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Encounter.StatusHistory" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="status" type="FHIR.EncounterState"/>
        <ns4:element name="period" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DiagnosticOrder.Item" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="specimen" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="bodySite" type="FHIR.CodeableConcept"/>
        <ns4:element name="status" type="FHIR.DiagnosticOrderStatus"/>
        <ns4:element name="event" type="list&lt;FHIR.DiagnosticOrder.Event&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.LinkType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ImplementationGuide.Package" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="resource" type="list&lt;FHIR.ImplementationGuide.Resource&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AllergyIntoleranceCriticality" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.CarePlan.Participant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="role" type="FHIR.CodeableConcept"/>
        <ns4:element name="member" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ConceptMapEquivalence" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ImmunizationRecommendation" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="recommendation" type="list&lt;FHIR.ImmunizationRecommendation.Recommendation&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.PropertyRepresentation" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AuditEventAction" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DeviceMetric.Calibration" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.DeviceMetricCalibrationType"/>
        <ns4:element name="state" type="FHIR.DeviceMetricCalibrationState"/>
        <ns4:element name="time" type="FHIR.instant"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Questionnaire.Question" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="linkId" type="FHIR.string"/>
        <ns4:element name="concept" type="list&lt;FHIR.Coding&gt;"/>
        <ns4:element name="text" type="FHIR.string"/>
        <ns4:element name="type" type="FHIR.AnswerFormat"/>
        <ns4:element name="required" type="FHIR.boolean"/>
        <ns4:element name="repeats" type="FHIR.boolean"/>
        <ns4:element name="options" type="FHIR.Reference"/>
        <ns4:element name="option" type="list&lt;FHIR.Coding&gt;"/>
        <ns4:element name="group" type="list&lt;FHIR.Questionnaire.Group&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Goal.Outcome" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="resultCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="resultReference" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Conformance" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.code"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="contact" type="list&lt;FHIR.Conformance.Contact&gt;"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="requirements" type="FHIR.string"/>
        <ns4:element name="copyright" type="FHIR.string"/>
        <ns4:element name="kind" type="FHIR.ConformanceStatementKind"/>
        <ns4:element name="software" type="FHIR.Conformance.Software"/>
        <ns4:element name="implementation" type="FHIR.Conformance.Implementation"/>
        <ns4:element name="fhirVersion" type="FHIR.id"/>
        <ns4:element name="acceptUnknown" type="FHIR.UnknownContentCode"/>
        <ns4:element name="format" type="list&lt;FHIR.code&gt;"/>
        <ns4:element name="profile" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="rest" type="list&lt;FHIR.Conformance.Rest&gt;"/>
        <ns4:element name="messaging" type="list&lt;FHIR.Conformance.Messaging&gt;"/>
        <ns4:element name="document" type="list&lt;FHIR.Conformance.Document&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DocumentManifest" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="type">
        <ns4:element name="masterIdentifier" type="FHIR.Identifier"/>
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="recipient" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="author" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="created" type="FHIR.dateTime"/>
        <ns4:element name="source" type="FHIR.uri"/>
        <ns4:element name="status" type="FHIR.code"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="content" type="list&lt;FHIR.DocumentManifest.Content&gt;"/>
        <ns4:element name="related" type="list&lt;FHIR.DocumentManifest.Related&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.SearchModifierCode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Observation" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="code">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="status" type="FHIR.ObservationStatus"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="effectiveDateTime" type="FHIR.dateTime"/>
        <ns4:element name="effectivePeriod" type="FHIR.Period"/>
        <ns4:element name="issued" type="FHIR.instant"/>
        <ns4:element name="performer" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="valueQuantity" type="FHIR.Quantity"/>
        <ns4:element name="valueCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="valueString" type="FHIR.string"/>
        <ns4:element name="valueRange" type="FHIR.Range"/>
        <ns4:element name="valueRatio" type="FHIR.Ratio"/>
        <ns4:element name="valueSampledData" type="FHIR.SampledData"/>
        <ns4:element name="valueAttachment" type="FHIR.Attachment"/>
        <ns4:element name="valueTime" type="FHIR.time"/>
        <ns4:element name="valueDateTime" type="FHIR.dateTime"/>
        <ns4:element name="valuePeriod" type="FHIR.Period"/>
        <ns4:element name="dataAbsentReason" type="FHIR.CodeableConcept"/>
        <ns4:element name="interpretation" type="FHIR.CodeableConcept"/>
        <ns4:element name="comments" type="FHIR.string"/>
        <ns4:element name="bodySite" type="FHIR.CodeableConcept"/>
        <ns4:element name="method" type="FHIR.CodeableConcept"/>
        <ns4:element name="specimen" type="FHIR.Reference"/>
        <ns4:element name="device" type="FHIR.Reference"/>
        <ns4:element name="referenceRange" type="list&lt;FHIR.Observation.ReferenceRange&gt;"/>
        <ns4:element name="related" type="list&lt;FHIR.Observation.Related&gt;"/>
        <ns4:element name="component" type="list&lt;FHIR.Observation.Component&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Conformance.Security" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="cors" type="FHIR.boolean"/>
        <ns4:element name="service" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="certificate" type="list&lt;FHIR.Conformance.Certificate&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DeviceUseRequestStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.CompositionStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Annotation" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="authorReference" type="FHIR.Reference"/>
        <ns4:element name="authorString" type="FHIR.string"/>
        <ns4:element name="time" type="FHIR.dateTime"/>
        <ns4:element name="text" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AppointmentStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.MessageSignificanceCategory" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.OperationParameterUse" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ValueSet.Include" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="system" type="FHIR.uri"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="concept" type="list&lt;FHIR.ValueSet.Concept1&gt;"/>
        <ns4:element name="filter" type="list&lt;FHIR.ValueSet.Filter&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ListMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DeviceComponent" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="type">
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="lastSystemChange" type="FHIR.instant"/>
        <ns4:element name="source" type="FHIR.Reference"/>
        <ns4:element name="parent" type="FHIR.Reference"/>
        <ns4:element name="operationalStatus" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="parameterGroup" type="FHIR.CodeableConcept"/>
        <ns4:element name="measurementPrinciple" type="FHIR.Measmnt_Principle"/>
        <ns4:element name="productionSpecification" type="list&lt;FHIR.DeviceComponent.ProductionSpecification&gt;"/>
        <ns4:element name="languageCode" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ObservationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Meta" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="versionId" type="FHIR.id"/>
        <ns4:element name="lastUpdated" type="FHIR.instant"/>
        <ns4:element name="profile" type="list&lt;FHIR.uri&gt;"/>
        <ns4:element name="security" type="list&lt;FHIR.Coding&gt;"/>
        <ns4:element name="tag" type="list&lt;FHIR.Coding&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Conformance.Software" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="releaseDate" type="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Conformance.Implementation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="url" type="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.MessageHeader.Destination" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="target" type="FHIR.Reference"/>
        <ns4:element name="endpoint" type="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ParticipantStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AdministrativeGender" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DiagnosticReport.Image" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="comment" type="FHIR.string"/>
        <ns4:element name="link" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Slot" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="type">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="schedule" type="FHIR.Reference"/>
        <ns4:element name="freeBusyType" type="FHIR.SlotStatus"/>
        <ns4:element name="start" type="FHIR.instant"/>
        <ns4:element name="end" type="FHIR.instant"/>
        <ns4:element name="overbooked" type="FHIR.boolean"/>
        <ns4:element name="comment" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ValueSet.Concept" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.code"/>
        <ns4:element name="abstract" type="FHIR.boolean"/>
        <ns4:element name="display" type="FHIR.string"/>
        <ns4:element name="definition" type="FHIR.string"/>
        <ns4:element name="designation" type="list&lt;FHIR.ValueSet.Designation&gt;"/>
        <ns4:element name="concept" type="list&lt;FHIR.ValueSet.Concept&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ConformanceStatementKind" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.EnrollmentResponse" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="request" type="FHIR.Reference"/>
        <ns4:element name="outcome" type="FHIR.code"/>
        <ns4:element name="disposition" type="FHIR.string"/>
        <ns4:element name="ruleset" type="FHIR.Coding"/>
        <ns4:element name="originalRuleset" type="FHIR.Coding"/>
        <ns4:element name="created" type="FHIR.dateTime"/>
        <ns4:element name="organization" type="FHIR.Reference"/>
        <ns4:element name="requestProvider" type="FHIR.Reference"/>
        <ns4:element name="requestOrganization" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.EpisodeOfCare.StatusHistory" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="status" type="FHIR.EpisodeOfCareStatus"/>
        <ns4:element name="period" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Observation.ReferenceRange" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="low" type="FHIR.SimpleQuantity"/>
        <ns4:element name="high" type="FHIR.SimpleQuantity"/>
        <ns4:element name="meaning" type="FHIR.CodeableConcept"/>
        <ns4:element name="age" type="FHIR.Range"/>
        <ns4:element name="text" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Coverage" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="type">
        <ns4:element name="issuer" type="FHIR.Reference"/>
        <ns4:element name="bin" type="FHIR.Identifier"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="type" type="FHIR.Coding"/>
        <ns4:element name="subscriberId" type="FHIR.Identifier"/>
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="group" type="FHIR.string"/>
        <ns4:element name="plan" type="FHIR.string"/>
        <ns4:element name="subPlan" type="FHIR.string"/>
        <ns4:element name="dependent" type="FHIR.positiveInt"/>
        <ns4:element name="sequence" type="FHIR.positiveInt"/>
        <ns4:element name="subscriber" type="FHIR.Reference"/>
        <ns4:element name="network" type="FHIR.Identifier"/>
        <ns4:element name="contract" type="list&lt;FHIR.Reference&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Order.When" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="schedule" type="FHIR.Timing"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ResourceContainer" retrievable="false" baseType="System.Any">
        <ns4:element name="Account" type="FHIR.Account"/>
        <ns4:element name="AllergyIntolerance" type="FHIR.AllergyIntolerance"/>
        <ns4:element name="Appointment" type="FHIR.Appointment"/>
        <ns4:element name="AppointmentResponse" type="FHIR.AppointmentResponse"/>
        <ns4:element name="AuditEvent" type="FHIR.AuditEvent"/>
        <ns4:element name="Basic" type="FHIR.Basic"/>
        <ns4:element name="Binary" type="FHIR.Binary"/>
        <ns4:element name="BodySite" type="FHIR.BodySite"/>
        <ns4:element name="Bundle" type="FHIR.Bundle"/>
        <ns4:element name="CarePlan" type="FHIR.CarePlan"/>
        <ns4:element name="Claim" type="FHIR.Claim"/>
        <ns4:element name="ClaimResponse" type="FHIR.ClaimResponse"/>
        <ns4:element name="ClinicalImpression" type="FHIR.ClinicalImpression"/>
        <ns4:element name="Communication" type="FHIR.Communication"/>
        <ns4:element name="CommunicationRequest" type="FHIR.CommunicationRequest"/>
        <ns4:element name="Composition" type="FHIR.Composition"/>
        <ns4:element name="ConceptMap" type="FHIR.ConceptMap"/>
        <ns4:element name="Condition" type="FHIR.Condition"/>
        <ns4:element name="Conformance" type="FHIR.Conformance"/>
        <ns4:element name="Contract" type="FHIR.Contract"/>
        <ns4:element name="Coverage" type="FHIR.Coverage"/>
        <ns4:element name="DataElement" type="FHIR.DataElement"/>
        <ns4:element name="DetectedIssue" type="FHIR.DetectedIssue"/>
        <ns4:element name="Device" type="FHIR.Device"/>
        <ns4:element name="DeviceComponent" type="FHIR.DeviceComponent"/>
        <ns4:element name="DeviceMetric" type="FHIR.DeviceMetric"/>
        <ns4:element name="DeviceUseRequest" type="FHIR.DeviceUseRequest"/>
        <ns4:element name="DeviceUseStatement" type="FHIR.DeviceUseStatement"/>
        <ns4:element name="DiagnosticOrder" type="FHIR.DiagnosticOrder"/>
        <ns4:element name="DiagnosticReport" type="FHIR.DiagnosticReport"/>
        <ns4:element name="DocumentManifest" type="FHIR.DocumentManifest"/>
        <ns4:element name="DocumentReference" type="FHIR.DocumentReference"/>
        <ns4:element name="EligibilityRequest" type="FHIR.EligibilityRequest"/>
        <ns4:element name="EligibilityResponse" type="FHIR.EligibilityResponse"/>
        <ns4:element name="Encounter" type="FHIR.Encounter"/>
        <ns4:element name="EnrollmentRequest" type="FHIR.EnrollmentRequest"/>
        <ns4:element name="EnrollmentResponse" type="FHIR.EnrollmentResponse"/>
        <ns4:element name="EpisodeOfCare" type="FHIR.EpisodeOfCare"/>
        <ns4:element name="ExplanationOfBenefit" type="FHIR.ExplanationOfBenefit"/>
        <ns4:element name="FamilyMemberHistory" type="FHIR.FamilyMemberHistory"/>
        <ns4:element name="Flag" type="FHIR.Flag"/>
        <ns4:element name="Goal" type="FHIR.Goal"/>
        <ns4:element name="Group" type="FHIR.Group"/>
        <ns4:element name="HealthcareService" type="FHIR.HealthcareService"/>
        <ns4:element name="ImagingObjectSelection" type="FHIR.ImagingObjectSelection"/>
        <ns4:element name="ImagingStudy" type="FHIR.ImagingStudy"/>
        <ns4:element name="Immunization" type="FHIR.Immunization"/>
        <ns4:element name="ImmunizationRecommendation" type="FHIR.ImmunizationRecommendation"/>
        <ns4:element name="ImplementationGuide" type="FHIR.ImplementationGuide"/>
        <ns4:element name="List" type="FHIR.List"/>
        <ns4:element name="Location" type="FHIR.Location"/>
        <ns4:element name="Media" type="FHIR.Media"/>
        <ns4:element name="Medication" type="FHIR.Medication"/>
        <ns4:element name="MedicationAdministration" type="FHIR.MedicationAdministration"/>
        <ns4:element name="MedicationDispense" type="FHIR.MedicationDispense"/>
        <ns4:element name="MedicationOrder" type="FHIR.MedicationOrder"/>
        <ns4:element name="MedicationStatement" type="FHIR.MedicationStatement"/>
        <ns4:element name="MessageHeader" type="FHIR.MessageHeader"/>
        <ns4:element name="NamingSystem" type="FHIR.NamingSystem"/>
        <ns4:element name="NutritionOrder" type="FHIR.NutritionOrder"/>
        <ns4:element name="Observation" type="FHIR.Observation"/>
        <ns4:element name="OperationDefinition" type="FHIR.OperationDefinition"/>
        <ns4:element name="OperationOutcome" type="FHIR.OperationOutcome"/>
        <ns4:element name="Order" type="FHIR.Order"/>
        <ns4:element name="OrderResponse" type="FHIR.OrderResponse"/>
        <ns4:element name="Organization" type="FHIR.Organization"/>
        <ns4:element name="Patient" type="FHIR.Patient"/>
        <ns4:element name="PaymentNotice" type="FHIR.PaymentNotice"/>
        <ns4:element name="PaymentReconciliation" type="FHIR.PaymentReconciliation"/>
        <ns4:element name="Person" type="FHIR.Person"/>
        <ns4:element name="Practitioner" type="FHIR.Practitioner"/>
        <ns4:element name="Procedure" type="FHIR.Procedure"/>
        <ns4:element name="ProcedureRequest" type="FHIR.ProcedureRequest"/>
        <ns4:element name="ProcessRequest" type="FHIR.ProcessRequest"/>
        <ns4:element name="ProcessResponse" type="FHIR.ProcessResponse"/>
        <ns4:element name="Provenance" type="FHIR.Provenance"/>
        <ns4:element name="Questionnaire" type="FHIR.Questionnaire"/>
        <ns4:element name="QuestionnaireResponse" type="FHIR.QuestionnaireResponse"/>
        <ns4:element name="ReferralRequest" type="FHIR.ReferralRequest"/>
        <ns4:element name="RelatedPerson" type="FHIR.RelatedPerson"/>
        <ns4:element name="RiskAssessment" type="FHIR.RiskAssessment"/>
        <ns4:element name="Schedule" type="FHIR.Schedule"/>
        <ns4:element name="SearchParameter" type="FHIR.SearchParameter"/>
        <ns4:element name="Slot" type="FHIR.Slot"/>
        <ns4:element name="Specimen" type="FHIR.Specimen"/>
        <ns4:element name="StructureDefinition" type="FHIR.StructureDefinition"/>
        <ns4:element name="Subscription" type="FHIR.Subscription"/>
        <ns4:element name="Substance" type="FHIR.Substance"/>
        <ns4:element name="SupplyDelivery" type="FHIR.SupplyDelivery"/>
        <ns4:element name="SupplyRequest" type="FHIR.SupplyRequest"/>
        <ns4:element name="TestScript" type="FHIR.TestScript"/>
        <ns4:element name="ValueSet" type="FHIR.ValueSet"/>
        <ns4:element name="VisionPrescription" type="FHIR.VisionPrescription"/>
        <ns4:element name="Parameters" type="FHIR.Parameters"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DeviceComponent.ProductionSpecification" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="specType" type="FHIR.CodeableConcept"/>
        <ns4:element name="componentId" type="FHIR.Identifier"/>
        <ns4:element name="productionSpec" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DiagnosticOrderStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ClinicalImpression.Investigations" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="item" type="list&lt;FHIR.Reference&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Timing.Repeat" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="boundsQuantity" type="FHIR.Duration"/>
        <ns4:element name="boundsRange" type="FHIR.Range"/>
        <ns4:element name="boundsPeriod" type="FHIR.Period"/>
        <ns4:element name="count" type="FHIR.integer"/>
        <ns4:element name="duration" type="FHIR.decimal"/>
        <ns4:element name="durationMax" type="FHIR.decimal"/>
        <ns4:element name="durationUnits" type="FHIR.UnitsOfTime"/>
        <ns4:element name="frequency" type="FHIR.integer"/>
        <ns4:element name="frequencyMax" type="FHIR.integer"/>
        <ns4:element name="period" type="FHIR.decimal"/>
        <ns4:element name="periodMax" type="FHIR.decimal"/>
        <ns4:element name="periodUnits" type="FHIR.UnitsOfTime"/>
        <ns4:element name="when" type="FHIR.EventTiming"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Medication.Ingredient" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="item" type="FHIR.Reference"/>
        <ns4:element name="amount" type="FHIR.Ratio"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Media" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="type">
        <ns4:element name="type" type="FHIR.DigitalMediaType"/>
        <ns4:element name="subtype" type="FHIR.CodeableConcept"/>
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="operator" type="FHIR.Reference"/>
        <ns4:element name="view" type="FHIR.CodeableConcept"/>
        <ns4:element name="deviceName" type="FHIR.string"/>
        <ns4:element name="height" type="FHIR.positiveInt"/>
        <ns4:element name="width" type="FHIR.positiveInt"/>
        <ns4:element name="frames" type="FHIR.positiveInt"/>
        <ns4:element name="duration" type="FHIR.unsignedInt"/>
        <ns4:element name="content" type="FHIR.Attachment"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.boolean" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.Boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Contract" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="type">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="issued" type="FHIR.dateTime"/>
        <ns4:element name="applies" type="FHIR.Period"/>
        <ns4:element name="subject" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="authority" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="domain" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="subType" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="action" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="actionReason" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="actor" type="list&lt;FHIR.Contract.Actor&gt;"/>
        <ns4:element name="valuedItem" type="list&lt;FHIR.Contract.ValuedItem&gt;"/>
        <ns4:element name="signer" type="list&lt;FHIR.Contract.Signer&gt;"/>
        <ns4:element name="term" type="list&lt;FHIR.Contract.Term&gt;"/>
        <ns4:element name="bindingAttachment" type="FHIR.Attachment"/>
        <ns4:element name="bindingReference" type="FHIR.Reference"/>
        <ns4:element name="friendly" type="list&lt;FHIR.Contract.Friendly&gt;"/>
        <ns4:element name="legal" type="list&lt;FHIR.Contract.Legal&gt;"/>
        <ns4:element name="rule" type="list&lt;FHIR.Contract.Rule&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Location.Position" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="longitude" type="FHIR.decimal"/>
        <ns4:element name="latitude" type="FHIR.decimal"/>
        <ns4:element name="altitude" type="FHIR.decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DeviceMetricCalibrationType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DiagnosticReport" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="category">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="status" type="FHIR.DiagnosticReportStatus"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="effectiveDateTime" type="FHIR.dateTime"/>
        <ns4:element name="effectivePeriod" type="FHIR.Period"/>
        <ns4:element name="issued" type="FHIR.instant"/>
        <ns4:element name="performer" type="FHIR.Reference"/>
        <ns4:element name="request" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="specimen" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="result" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="imagingStudy" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="image" type="list&lt;FHIR.DiagnosticReport.Image&gt;"/>
        <ns4:element name="conclusion" type="FHIR.string"/>
        <ns4:element name="codedDiagnosis" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="presentedForm" type="list&lt;FHIR.Attachment&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Immunization.Reaction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="detail" type="FHIR.Reference"/>
        <ns4:element name="reported" type="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AuditEvent.Source" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="site" type="FHIR.string"/>
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="type" type="list&lt;FHIR.Coding&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ConceptMap.DependsOn" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="element" type="FHIR.uri"/>
        <ns4:element name="codeSystem" type="FHIR.uri"/>
        <ns4:element name="code" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Claim.Prosthesis" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="initial" type="FHIR.boolean"/>
        <ns4:element name="priorDate" type="FHIR.date"/>
        <ns4:element name="priorMaterial" type="FHIR.Coding"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.code" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.TestScript.Metadata" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="link" type="list&lt;FHIR.TestScript.Link&gt;"/>
        <ns4:element name="capability" type="list&lt;FHIR.TestScript.Capability&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Binary" retrievable="false" baseType="FHIR.Resource">
        <ns4:element name="contentType" type="FHIR.code"/>
        <ns4:element name="content" type="FHIR.base64Binary"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.SupplyRequestStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.EncounterLocationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.SupplyDeliveryStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Schedule" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="type">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="type" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="actor" type="FHIR.Reference"/>
        <ns4:element name="planningHorizon" type="FHIR.Period"/>
        <ns4:element name="comment" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.MedicationAdministration" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="medicationCodeableConcept">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="status" type="FHIR.MedicationAdministrationStatus"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="practitioner" type="FHIR.Reference"/>
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="prescription" type="FHIR.Reference"/>
        <ns4:element name="wasNotGiven" type="FHIR.boolean"/>
        <ns4:element name="reasonNotGiven" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="reasonGiven" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="effectiveTimeDateTime" type="FHIR.dateTime"/>
        <ns4:element name="effectiveTimePeriod" type="FHIR.Period"/>
        <ns4:element name="medicationCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="medicationReference" type="FHIR.Reference"/>
        <ns4:element name="device" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="note" type="FHIR.string"/>
        <ns4:element name="dosage" type="FHIR.MedicationAdministration.Dosage"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Ratio" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="numerator" type="FHIR.Quantity"/>
        <ns4:element name="denominator" type="FHIR.Quantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DiagnosticReportStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ClaimResponse.Note" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="number" type="FHIR.positiveInt"/>
        <ns4:element name="type" type="FHIR.Coding"/>
        <ns4:element name="text" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.TestScript.RequestHeader" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="field" type="FHIR.string"/>
        <ns4:element name="value" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ProcessResponse.Notes" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.Coding"/>
        <ns4:element name="text" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.SampledData" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="origin" type="FHIR.SimpleQuantity"/>
        <ns4:element name="period" type="FHIR.decimal"/>
        <ns4:element name="factor" type="FHIR.decimal"/>
        <ns4:element name="lowerLimit" type="FHIR.decimal"/>
        <ns4:element name="upperLimit" type="FHIR.decimal"/>
        <ns4:element name="dimensions" type="FHIR.positiveInt"/>
        <ns4:element name="data" type="FHIR.SampledDataDataType"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ClaimResponse.Coverage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" type="FHIR.positiveInt"/>
        <ns4:element name="focal" type="FHIR.boolean"/>
        <ns4:element name="coverage" type="FHIR.Reference"/>
        <ns4:element name="businessArrangement" type="FHIR.string"/>
        <ns4:element name="relationship" type="FHIR.Coding"/>
        <ns4:element name="preAuthRef" type="list&lt;FHIR.string&gt;"/>
        <ns4:element name="claimResponse" type="FHIR.Reference"/>
        <ns4:element name="originalRuleset" type="FHIR.Coding"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DiagnosticOrder" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="orderer" type="FHIR.Reference"/>
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="reason" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="supportingInformation" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="specimen" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="status" type="FHIR.DiagnosticOrderStatus"/>
        <ns4:element name="priority" type="FHIR.DiagnosticOrderPriority"/>
        <ns4:element name="event" type="list&lt;FHIR.DiagnosticOrder.Event&gt;"/>
        <ns4:element name="item" type="list&lt;FHIR.DiagnosticOrder.Item&gt;"/>
        <ns4:element name="note" type="list&lt;FHIR.Annotation&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.FlagStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Provenance" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="target" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="recorded" type="FHIR.instant"/>
        <ns4:element name="reason" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="activity" type="FHIR.CodeableConcept"/>
        <ns4:element name="location" type="FHIR.Reference"/>
        <ns4:element name="policy" type="list&lt;FHIR.uri&gt;"/>
        <ns4:element name="agent" type="list&lt;FHIR.Provenance.Agent&gt;"/>
        <ns4:element name="entity" type="list&lt;FHIR.Provenance.Entity&gt;"/>
        <ns4:element name="signature" type="list&lt;FHIR.Signature&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.TestScript.Variable" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="headerField" type="FHIR.string"/>
        <ns4:element name="path" type="FHIR.string"/>
        <ns4:element name="sourceId" type="FHIR.id"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AllergyIntoleranceCertainty" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Medication" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="code">
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="isBrand" type="FHIR.boolean"/>
        <ns4:element name="manufacturer" type="FHIR.Reference"/>
        <ns4:element name="product" type="FHIR.Medication.Product"/>
        <ns4:element name="package" type="FHIR.Medication.Package"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.CarePlan.Activity" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="actionResulting" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="progress" type="list&lt;FHIR.Annotation&gt;"/>
        <ns4:element name="reference" type="FHIR.Reference"/>
        <ns4:element name="detail" type="FHIR.CarePlan.Detail"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Distance" retrievable="false" baseType="FHIR.Quantity">
        <ns4:element name="id" type="System.String"/>
        <ns4:element name="extension" type="list&lt;FHIR.Extension&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ElementDefinition.Mapping" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="identity" type="FHIR.id"/>
        <ns4:element name="language" type="FHIR.code"/>
        <ns4:element name="map" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.TestScript.Setup" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="metadata" type="FHIR.TestScript.Metadata"/>
        <ns4:element name="action" type="list&lt;FHIR.TestScript.Action&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.CarePlanStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ListStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.base64Binary" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.HumanName" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="use" type="FHIR.NameUse"/>
        <ns4:element name="text" type="FHIR.string"/>
        <ns4:element name="family" type="list&lt;FHIR.string&gt;"/>
        <ns4:element name="given" type="list&lt;FHIR.string&gt;"/>
        <ns4:element name="prefix" type="list&lt;FHIR.string&gt;"/>
        <ns4:element name="suffix" type="list&lt;FHIR.string&gt;"/>
        <ns4:element name="period" type="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.TestScript.Operation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.Coding"/>
        <ns4:element name="resource" type="FHIR.code"/>
        <ns4:element name="label" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="accept" type="FHIR.ContentType"/>
        <ns4:element name="contentType" type="FHIR.ContentType"/>
        <ns4:element name="destination" type="FHIR.integer"/>
        <ns4:element name="encodeRequestUrl" type="FHIR.boolean"/>
        <ns4:element name="params" type="FHIR.string"/>
        <ns4:element name="requestHeader" type="list&lt;FHIR.TestScript.RequestHeader&gt;"/>
        <ns4:element name="responseId" type="FHIR.id"/>
        <ns4:element name="sourceId" type="FHIR.id"/>
        <ns4:element name="targetId" type="FHIR.id"/>
        <ns4:element name="url" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Group" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="code">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="type" type="FHIR.GroupType"/>
        <ns4:element name="actual" type="FHIR.boolean"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="quantity" type="FHIR.unsignedInt"/>
        <ns4:element name="characteristic" type="list&lt;FHIR.Group.Characteristic&gt;"/>
        <ns4:element name="member" type="list&lt;FHIR.Group.Member&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.CommunicationRequest" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="category">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="sender" type="FHIR.Reference"/>
        <ns4:element name="recipient" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="payload" type="list&lt;FHIR.CommunicationRequest.Payload&gt;"/>
        <ns4:element name="medium" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="requester" type="FHIR.Reference"/>
        <ns4:element name="status" type="FHIR.CommunicationRequestStatus"/>
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="scheduledDateTime" type="FHIR.dateTime"/>
        <ns4:element name="scheduledPeriod" type="FHIR.Period"/>
        <ns4:element name="reason" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="requestedOn" type="FHIR.dateTime"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="priority" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.RiskAssessment.Prediction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="outcome" type="FHIR.CodeableConcept"/>
        <ns4:element name="probabilityDecimal" type="FHIR.decimal"/>
        <ns4:element name="probabilityRange" type="FHIR.Range"/>
        <ns4:element name="probabilityCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="relativeRisk" type="FHIR.decimal"/>
        <ns4:element name="whenPeriod" type="FHIR.Period"/>
        <ns4:element name="whenRange" type="FHIR.Range"/>
        <ns4:element name="rationale" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DetectedIssue" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="category">
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="severity" type="FHIR.DetectedIssueSeverity"/>
        <ns4:element name="implicated" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="detail" type="FHIR.string"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="author" type="FHIR.Reference"/>
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="reference" type="FHIR.uri"/>
        <ns4:element name="mitigation" type="list&lt;FHIR.DetectedIssue.Mitigation&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Location" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="type">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="status" type="FHIR.LocationStatus"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="mode" type="FHIR.LocationMode"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="telecom" type="list&lt;FHIR.ContactPoint&gt;"/>
        <ns4:element name="address" type="FHIR.Address"/>
        <ns4:element name="physicalType" type="FHIR.CodeableConcept"/>
        <ns4:element name="position" type="FHIR.Location.Position"/>
        <ns4:element name="managingOrganization" type="FHIR.Reference"/>
        <ns4:element name="partOf" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.CommunicationRequest.Payload" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="contentString" type="FHIR.string"/>
        <ns4:element name="contentAttachment" type="FHIR.Attachment"/>
        <ns4:element name="contentReference" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.BackboneElement" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="modifierExtension" type="list&lt;FHIR.Extension&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Resource" retrievable="false" baseType="System.Any">
        <ns4:element name="id" type="FHIR.id"/>
        <ns4:element name="meta" type="FHIR.Meta"/>
        <ns4:element name="implicitRules" type="FHIR.uri"/>
        <ns4:element name="language" type="FHIR.code"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AddressUse" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DocumentReference.RelatesTo" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.DocumentRelationshipType"/>
        <ns4:element name="target" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ImplementationGuide.Dependency" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.GuideDependencyType"/>
        <ns4:element name="uri" type="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ConditionalDeleteStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.MedicationOrder.DosageInstruction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="text" type="FHIR.string"/>
        <ns4:element name="additionalInstructions" type="FHIR.CodeableConcept"/>
        <ns4:element name="timing" type="FHIR.Timing"/>
        <ns4:element name="asNeededBoolean" type="FHIR.boolean"/>
        <ns4:element name="asNeededCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="siteCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="siteReference" type="FHIR.Reference"/>
        <ns4:element name="route" type="FHIR.CodeableConcept"/>
        <ns4:element name="method" type="FHIR.CodeableConcept"/>
        <ns4:element name="doseRange" type="FHIR.Range"/>
        <ns4:element name="doseQuantity" type="FHIR.SimpleQuantity"/>
        <ns4:element name="rateRatio" type="FHIR.Ratio"/>
        <ns4:element name="rateRange" type="FHIR.Range"/>
        <ns4:element name="maxDosePerPeriod" type="FHIR.Ratio"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.NutritionOrder" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="orderer" type="FHIR.Reference"/>
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="dateTime" type="FHIR.dateTime"/>
        <ns4:element name="status" type="FHIR.NutritionOrderStatus"/>
        <ns4:element name="allergyIntolerance" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="foodPreferenceModifier" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="excludeFoodModifier" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="oralDiet" type="FHIR.NutritionOrder.OralDiet"/>
        <ns4:element name="supplement" type="list&lt;FHIR.NutritionOrder.Supplement&gt;"/>
        <ns4:element name="enteralFormula" type="FHIR.NutritionOrder.EnteralFormula"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.TestScript.Action2" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="operation" type="FHIR.TestScript.Operation"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ContactPointUse" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DeviceMetricOperationalStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.TestScript.Action1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="operation" type="FHIR.TestScript.Operation"/>
        <ns4:element name="assert" type="FHIR.TestScript.Assert"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Questionnaire.Group" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="linkId" type="FHIR.string"/>
        <ns4:element name="title" type="FHIR.string"/>
        <ns4:element name="concept" type="list&lt;FHIR.Coding&gt;"/>
        <ns4:element name="text" type="FHIR.string"/>
        <ns4:element name="required" type="FHIR.boolean"/>
        <ns4:element name="repeats" type="FHIR.boolean"/>
        <ns4:element name="group" type="list&lt;FHIR.Questionnaire.Group&gt;"/>
        <ns4:element name="question" type="list&lt;FHIR.Questionnaire.Question&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.NutritionOrderStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DiagnosticOrderPriority" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.uri" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Use" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.IdentityAssuranceLevel" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AuditEvent.Object" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="reference" type="FHIR.Reference"/>
        <ns4:element name="type" type="FHIR.Coding"/>
        <ns4:element name="role" type="FHIR.Coding"/>
        <ns4:element name="lifecycle" type="FHIR.Coding"/>
        <ns4:element name="securityLabel" type="list&lt;FHIR.Coding&gt;"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="query" type="FHIR.base64Binary"/>
        <ns4:element name="detail" type="list&lt;FHIR.AuditEvent.Detail&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.MessageHeader.Response" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" type="FHIR.id"/>
        <ns4:element name="code" type="FHIR.ResponseType"/>
        <ns4:element name="details" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ElementDefinition.Slicing" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="discriminator" type="list&lt;FHIR.string&gt;"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="ordered" type="FHIR.boolean"/>
        <ns4:element name="rules" type="FHIR.SlicingRules"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DeviceMetricColor" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.SearchEntryMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Group.Member" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="entity" type="FHIR.Reference"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="inactive" type="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.SupplyRequest" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="kind">
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="source" type="FHIR.Reference"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="status" type="FHIR.SupplyRequestStatus"/>
        <ns4:element name="kind" type="FHIR.CodeableConcept"/>
        <ns4:element name="orderedItem" type="FHIR.Reference"/>
        <ns4:element name="supplier" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="reasonCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="reasonReference" type="FHIR.Reference"/>
        <ns4:element name="when" type="FHIR.SupplyRequest.When"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.time" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.Time"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.StructureDefinition.Differential" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="element" type="list&lt;FHIR.ElementDefinition&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Condition.Evidence" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="detail" type="list&lt;FHIR.Reference&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Conformance.Interaction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.TypeRestfulInteraction"/>
        <ns4:element name="documentation" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ConditionVerificationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.PaymentReconciliation" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="request" type="FHIR.Reference"/>
        <ns4:element name="outcome" type="FHIR.code"/>
        <ns4:element name="disposition" type="FHIR.string"/>
        <ns4:element name="ruleset" type="FHIR.Coding"/>
        <ns4:element name="originalRuleset" type="FHIR.Coding"/>
        <ns4:element name="created" type="FHIR.dateTime"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="organization" type="FHIR.Reference"/>
        <ns4:element name="requestProvider" type="FHIR.Reference"/>
        <ns4:element name="requestOrganization" type="FHIR.Reference"/>
        <ns4:element name="detail" type="list&lt;FHIR.PaymentReconciliation.Detail&gt;"/>
        <ns4:element name="form" type="FHIR.Coding"/>
        <ns4:element name="total" type="FHIR.Money"/>
        <ns4:element name="note" type="list&lt;FHIR.PaymentReconciliation.Note&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AllergyIntoleranceSeverity" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Conformance.Document" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="mode" type="FHIR.DocumentMode"/>
        <ns4:element name="documentation" type="FHIR.string"/>
        <ns4:element name="profile" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Identifier" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="use" type="FHIR.IdentifierUse"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="system" type="FHIR.uri"/>
        <ns4:element name="value" type="FHIR.string"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="assigner" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.EpisodeOfCare" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="type">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="status" type="FHIR.EpisodeOfCareStatus"/>
        <ns4:element name="statusHistory" type="list&lt;FHIR.EpisodeOfCare.StatusHistory&gt;"/>
        <ns4:element name="type" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="condition" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="managingOrganization" type="FHIR.Reference"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="referralRequest" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="careManager" type="FHIR.Reference"/>
        <ns4:element name="careTeam" type="list&lt;FHIR.EpisodeOfCare.CareTeam&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Patient.Communication" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="language" type="FHIR.CodeableConcept"/>
        <ns4:element name="preferred" type="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.OperationKind" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DataElement.Mapping" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identity" type="FHIR.id"/>
        <ns4:element name="uri" type="FHIR.uri"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="comments" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Organization" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="type">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="active" type="FHIR.boolean"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="telecom" type="list&lt;FHIR.ContactPoint&gt;"/>
        <ns4:element name="address" type="list&lt;FHIR.Address&gt;"/>
        <ns4:element name="partOf" type="FHIR.Reference"/>
        <ns4:element name="contact" type="list&lt;FHIR.Organization.Contact&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ConceptMap.Element" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="codeSystem" type="FHIR.uri"/>
        <ns4:element name="code" type="FHIR.code"/>
        <ns4:element name="target" type="list&lt;FHIR.ConceptMap.Target&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ObservationRelationshipType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.NutritionOrder.OralDiet" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="schedule" type="list&lt;FHIR.Timing&gt;"/>
        <ns4:element name="nutrient" type="list&lt;FHIR.NutritionOrder.Nutrient&gt;"/>
        <ns4:element name="texture" type="list&lt;FHIR.NutritionOrder.Texture&gt;"/>
        <ns4:element name="fluidConsistencyType" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="instruction" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.unsignedInt" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.Integer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.NameUse" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.SubscriptionStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.MedicationDispense.DosageInstruction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="text" type="FHIR.string"/>
        <ns4:element name="additionalInstructions" type="FHIR.CodeableConcept"/>
        <ns4:element name="timing" type="FHIR.Timing"/>
        <ns4:element name="asNeededBoolean" type="FHIR.boolean"/>
        <ns4:element name="asNeededCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="siteCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="siteReference" type="FHIR.Reference"/>
        <ns4:element name="route" type="FHIR.CodeableConcept"/>
        <ns4:element name="method" type="FHIR.CodeableConcept"/>
        <ns4:element name="doseRange" type="FHIR.Range"/>
        <ns4:element name="doseQuantity" type="FHIR.SimpleQuantity"/>
        <ns4:element name="rateRatio" type="FHIR.Ratio"/>
        <ns4:element name="rateRange" type="FHIR.Range"/>
        <ns4:element name="maxDosePerPeriod" type="FHIR.Ratio"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.CommunicationRequestStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DocumentReferenceStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.LocationMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.integer" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.Integer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.CarePlanRelationship" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.LocationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Basic" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="code">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="author" type="FHIR.Reference"/>
        <ns4:element name="created" type="FHIR.date"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.UnknownContentCode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ClinicalImpression" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="assessor" type="FHIR.Reference"/>
        <ns4:element name="status" type="FHIR.ClinicalImpressionStatus"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="previous" type="FHIR.Reference"/>
        <ns4:element name="problem" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="triggerCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="triggerReference" type="FHIR.Reference"/>
        <ns4:element name="investigations" type="list&lt;FHIR.ClinicalImpression.Investigations&gt;"/>
        <ns4:element name="protocol" type="FHIR.uri"/>
        <ns4:element name="summary" type="FHIR.string"/>
        <ns4:element name="finding" type="list&lt;FHIR.ClinicalImpression.Finding&gt;"/>
        <ns4:element name="resolved" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="ruledOut" type="list&lt;FHIR.ClinicalImpression.RuledOut&gt;"/>
        <ns4:element name="prognosis" type="FHIR.string"/>
        <ns4:element name="plan" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="action" type="list&lt;FHIR.Reference&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ImplementationGuide.Contact" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="telecom" type="list&lt;FHIR.ContactPoint&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.SupplyRequest.When" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="schedule" type="FHIR.Timing"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.NoteType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.TestScript.Fixture" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="autocreate" type="FHIR.boolean"/>
        <ns4:element name="autodelete" type="FHIR.boolean"/>
        <ns4:element name="resource" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Observation.Component" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="valueQuantity" type="FHIR.Quantity"/>
        <ns4:element name="valueCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="valueString" type="FHIR.string"/>
        <ns4:element name="valueRange" type="FHIR.Range"/>
        <ns4:element name="valueRatio" type="FHIR.Ratio"/>
        <ns4:element name="valueSampledData" type="FHIR.SampledData"/>
        <ns4:element name="valueAttachment" type="FHIR.Attachment"/>
        <ns4:element name="valueTime" type="FHIR.time"/>
        <ns4:element name="valueDateTime" type="FHIR.dateTime"/>
        <ns4:element name="valuePeriod" type="FHIR.Period"/>
        <ns4:element name="dataAbsentReason" type="FHIR.CodeableConcept"/>
        <ns4:element name="referenceRange" type="list&lt;FHIR.Observation.ReferenceRange&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.MedicationStatement.Dosage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="text" type="FHIR.string"/>
        <ns4:element name="timing" type="FHIR.Timing"/>
        <ns4:element name="asNeededBoolean" type="FHIR.boolean"/>
        <ns4:element name="asNeededCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="siteCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="siteReference" type="FHIR.Reference"/>
        <ns4:element name="route" type="FHIR.CodeableConcept"/>
        <ns4:element name="method" type="FHIR.CodeableConcept"/>
        <ns4:element name="quantityQuantity" type="FHIR.SimpleQuantity"/>
        <ns4:element name="quantityRange" type="FHIR.Range"/>
        <ns4:element name="rateRatio" type="FHIR.Ratio"/>
        <ns4:element name="rateRange" type="FHIR.Range"/>
        <ns4:element name="maxDosePerPeriod" type="FHIR.Ratio"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.EncounterState" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.EncounterClass" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.HTTPVerb" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.MessageHeader.Source" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="software" type="FHIR.string"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="contact" type="FHIR.ContactPoint"/>
        <ns4:element name="endpoint" type="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ClinicalImpression.RuledOut" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="item" type="FHIR.CodeableConcept"/>
        <ns4:element name="reason" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.RiskAssessment" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="method">
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="condition" type="FHIR.Reference"/>
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="performer" type="FHIR.Reference"/>
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="method" type="FHIR.CodeableConcept"/>
        <ns4:element name="basis" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="prediction" type="list&lt;FHIR.RiskAssessment.Prediction&gt;"/>
        <ns4:element name="mitigation" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Claim" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="type" type="FHIR.ClaimType"/>
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="ruleset" type="FHIR.Coding"/>
        <ns4:element name="originalRuleset" type="FHIR.Coding"/>
        <ns4:element name="created" type="FHIR.dateTime"/>
        <ns4:element name="target" type="FHIR.Reference"/>
        <ns4:element name="provider" type="FHIR.Reference"/>
        <ns4:element name="organization" type="FHIR.Reference"/>
        <ns4:element name="use" type="FHIR.Use"/>
        <ns4:element name="priority" type="FHIR.Coding"/>
        <ns4:element name="fundsReserve" type="FHIR.Coding"/>
        <ns4:element name="enterer" type="FHIR.Reference"/>
        <ns4:element name="facility" type="FHIR.Reference"/>
        <ns4:element name="prescription" type="FHIR.Reference"/>
        <ns4:element name="originalPrescription" type="FHIR.Reference"/>
        <ns4:element name="payee" type="FHIR.Claim.Payee"/>
        <ns4:element name="referral" type="FHIR.Reference"/>
        <ns4:element name="diagnosis" type="list&lt;FHIR.Claim.Diagnosis&gt;"/>
        <ns4:element name="condition" type="list&lt;FHIR.Coding&gt;"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="coverage" type="list&lt;FHIR.Claim.Coverage&gt;"/>
        <ns4:element name="exception" type="list&lt;FHIR.Coding&gt;"/>
        <ns4:element name="school" type="FHIR.string"/>
        <ns4:element name="accident" type="FHIR.date"/>
        <ns4:element name="accidentType" type="FHIR.Coding"/>
        <ns4:element name="interventionException" type="list&lt;FHIR.Coding&gt;"/>
        <ns4:element name="item" type="list&lt;FHIR.Claim.Item&gt;"/>
        <ns4:element name="additionalMaterials" type="list&lt;FHIR.Coding&gt;"/>
        <ns4:element name="missingTeeth" type="list&lt;FHIR.Claim.MissingTeeth&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.OperationDefinition.Binding" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="strength" type="FHIR.code"/>
        <ns4:element name="valueSetUri" type="FHIR.uri"/>
        <ns4:element name="valueSetReference" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.EpisodeOfCareStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.RemittanceOutcome" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ContactPointSystem" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ImplementationGuide.Global" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.code"/>
        <ns4:element name="profile" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.MedicationOrderStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.SlotStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ProcessRequest.Item" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequenceLinkId" type="FHIR.integer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ConceptMap.Contact" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="telecom" type="list&lt;FHIR.ContactPoint&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Parameters" retrievable="false" baseType="FHIR.Resource">
        <ns4:element name="parameter" type="list&lt;FHIR.Parameters.Parameter&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.HealthcareService" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="providedBy" type="FHIR.Reference"/>
        <ns4:element name="serviceCategory" type="FHIR.CodeableConcept"/>
        <ns4:element name="serviceType" type="list&lt;FHIR.HealthcareService.ServiceType&gt;"/>
        <ns4:element name="location" type="FHIR.Reference"/>
        <ns4:element name="serviceName" type="FHIR.string"/>
        <ns4:element name="comment" type="FHIR.string"/>
        <ns4:element name="extraDetails" type="FHIR.string"/>
        <ns4:element name="photo" type="FHIR.Attachment"/>
        <ns4:element name="telecom" type="list&lt;FHIR.ContactPoint&gt;"/>
        <ns4:element name="coverageArea" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="serviceProvisionCode" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="eligibility" type="FHIR.CodeableConcept"/>
        <ns4:element name="eligibilityNote" type="FHIR.string"/>
        <ns4:element name="programName" type="list&lt;FHIR.string&gt;"/>
        <ns4:element name="characteristic" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="referralMethod" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="publicKey" type="FHIR.string"/>
        <ns4:element name="appointmentRequired" type="FHIR.boolean"/>
        <ns4:element name="availableTime" type="list&lt;FHIR.HealthcareService.AvailableTime&gt;"/>
        <ns4:element name="notAvailable" type="list&lt;FHIR.HealthcareService.NotAvailable&gt;"/>
        <ns4:element name="availabilityExceptions" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Condition" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="code">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="asserter" type="FHIR.Reference"/>
        <ns4:element name="dateRecorded" type="FHIR.date"/>
        <ns4:element name="code" type="FHIR.CodeableConcept"/>
        <ns4:element name="category" type="FHIR.CodeableConcept"/>
        <ns4:element name="clinicalStatus" type="FHIR.code"/>
        <ns4:element name="verificationStatus" type="FHIR.ConditionVerificationStatus"/>
        <ns4:element name="severity" type="FHIR.CodeableConcept"/>
        <ns4:element name="onsetDateTime" type="FHIR.dateTime"/>
        <ns4:element name="onsetQuantity" type="FHIR.Age"/>
        <ns4:element name="onsetPeriod" type="FHIR.Period"/>
        <ns4:element name="onsetRange" type="FHIR.Range"/>
        <ns4:element name="onsetString" type="FHIR.string"/>
        <ns4:element name="abatementDateTime" type="FHIR.dateTime"/>
        <ns4:element name="abatementQuantity" type="FHIR.Age"/>
        <ns4:element name="abatementBoolean" type="FHIR.boolean"/>
        <ns4:element name="abatementPeriod" type="FHIR.Period"/>
        <ns4:element name="abatementRange" type="FHIR.Range"/>
        <ns4:element name="abatementString" type="FHIR.string"/>
        <ns4:element name="stage" type="FHIR.Condition.Stage"/>
        <ns4:element name="evidence" type="list&lt;FHIR.Condition.Evidence&gt;"/>
        <ns4:element name="bodySite" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="notes" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Bundle.Search" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="mode" type="FHIR.SearchEntryMode"/>
        <ns4:element name="score" type="FHIR.decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ElementDefinition.Type" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="code" type="FHIR.code"/>
        <ns4:element name="profile" type="list&lt;FHIR.uri&gt;"/>
        <ns4:element name="aggregation" type="list&lt;FHIR.AggregationMode&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.markdown" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Subscription.Channel" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" type="FHIR.SubscriptionChannelType"/>
        <ns4:element name="endpoint" type="FHIR.uri"/>
        <ns4:element name="payload" type="FHIR.string"/>
        <ns4:element name="header" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ClaimResponse.Error" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequenceLinkId" type="FHIR.positiveInt"/>
        <ns4:element name="detailSequenceLinkId" type="FHIR.positiveInt"/>
        <ns4:element name="subdetailSequenceLinkId" type="FHIR.positiveInt"/>
        <ns4:element name="code" type="FHIR.Coding"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.MedicationStatementStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Goal" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="category">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="startDate" type="FHIR.date"/>
        <ns4:element name="startCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="targetDate" type="FHIR.date"/>
        <ns4:element name="targetQuantity" type="FHIR.Duration"/>
        <ns4:element name="category" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.GoalStatus"/>
        <ns4:element name="statusDate" type="FHIR.date"/>
        <ns4:element name="statusReason" type="FHIR.CodeableConcept"/>
        <ns4:element name="author" type="FHIR.Reference"/>
        <ns4:element name="priority" type="FHIR.CodeableConcept"/>
        <ns4:element name="addresses" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="note" type="list&lt;FHIR.Annotation&gt;"/>
        <ns4:element name="outcome" type="list&lt;FHIR.Goal.Outcome&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.QuestionnaireResponse.Answer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="valueBoolean" type="FHIR.boolean"/>
        <ns4:element name="valueDecimal" type="FHIR.decimal"/>
        <ns4:element name="valueInteger" type="FHIR.integer"/>
        <ns4:element name="valueDate" type="FHIR.date"/>
        <ns4:element name="valueDateTime" type="FHIR.dateTime"/>
        <ns4:element name="valueInstant" type="FHIR.instant"/>
        <ns4:element name="valueTime" type="FHIR.time"/>
        <ns4:element name="valueString" type="FHIR.string"/>
        <ns4:element name="valueUri" type="FHIR.uri"/>
        <ns4:element name="valueAttachment" type="FHIR.Attachment"/>
        <ns4:element name="valueCoding" type="FHIR.Coding"/>
        <ns4:element name="valueQuantity" type="FHIR.Quantity"/>
        <ns4:element name="valueReference" type="FHIR.Reference"/>
        <ns4:element name="group" type="list&lt;FHIR.QuestionnaireResponse.Group&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Patient.Link" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="other" type="FHIR.Reference"/>
        <ns4:element name="type" type="FHIR.LinkType"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DeviceUseRequest" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="bodySiteCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="bodySiteReference" type="FHIR.Reference"/>
        <ns4:element name="status" type="FHIR.DeviceUseRequestStatus"/>
        <ns4:element name="device" type="FHIR.Reference"/>
        <ns4:element name="encounter" type="FHIR.Reference"/>
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="indication" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="notes" type="list&lt;FHIR.string&gt;"/>
        <ns4:element name="prnReason" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="orderedOn" type="FHIR.dateTime"/>
        <ns4:element name="recordedOn" type="FHIR.dateTime"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="timingTiming" type="FHIR.Timing"/>
        <ns4:element name="timingPeriod" type="FHIR.Period"/>
        <ns4:element name="timingDateTime" type="FHIR.dateTime"/>
        <ns4:element name="priority" type="FHIR.DeviceUseRequestPriority"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.QuantityComparator" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Procedure.Performer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="actor" type="FHIR.Reference"/>
        <ns4:element name="role" type="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.OperationDefinition.Parameter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.code"/>
        <ns4:element name="use" type="FHIR.OperationParameterUse"/>
        <ns4:element name="min" type="FHIR.integer"/>
        <ns4:element name="max" type="FHIR.string"/>
        <ns4:element name="documentation" type="FHIR.string"/>
        <ns4:element name="type" type="FHIR.code"/>
        <ns4:element name="profile" type="FHIR.Reference"/>
        <ns4:element name="binding" type="FHIR.OperationDefinition.Binding"/>
        <ns4:element name="part" type="list&lt;FHIR.OperationDefinition.Parameter&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Claim.Detail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" type="FHIR.positiveInt"/>
        <ns4:element name="type" type="FHIR.Coding"/>
        <ns4:element name="service" type="FHIR.Coding"/>
        <ns4:element name="quantity" type="FHIR.SimpleQuantity"/>
        <ns4:element name="unitPrice" type="FHIR.Money"/>
        <ns4:element name="factor" type="FHIR.decimal"/>
        <ns4:element name="points" type="FHIR.decimal"/>
        <ns4:element name="net" type="FHIR.Money"/>
        <ns4:element name="udi" type="FHIR.Coding"/>
        <ns4:element name="subDetail" type="list&lt;FHIR.Claim.SubDetail&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Contract.Actor" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="entity" type="FHIR.Reference"/>
        <ns4:element name="role" type="list&lt;FHIR.CodeableConcept&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.MedicationStatement" retrievable="true" primaryCodePath="medicationCodeableConcept" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="informationSource" type="FHIR.Reference"/>
        <ns4:element name="dateAsserted" type="FHIR.dateTime"/>
        <ns4:element name="status" type="FHIR.MedicationStatementStatus"/>
        <ns4:element name="wasNotTaken" type="FHIR.boolean"/>
        <ns4:element name="reasonNotTaken" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="reasonForUseCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="reasonForUseReference" type="FHIR.Reference"/>
        <ns4:element name="effectiveDateTime" type="FHIR.dateTime"/>
        <ns4:element name="effectivePeriod" type="FHIR.Period"/>
        <ns4:element name="note" type="FHIR.string"/>
        <ns4:element name="supportingInformation" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="medicationCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="medicationReference" type="FHIR.Reference"/>
        <ns4:element name="dosage" type="list&lt;FHIR.MedicationStatement.Dosage&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.oid" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DeviceStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Order" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="source" type="FHIR.Reference"/>
        <ns4:element name="target" type="FHIR.Reference"/>
        <ns4:element name="reasonCodeableConcept" type="FHIR.CodeableConcept"/>
        <ns4:element name="reasonReference" type="FHIR.Reference"/>
        <ns4:element name="when" type="FHIR.Order.When"/>
        <ns4:element name="detail" type="list&lt;FHIR.Reference&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Coding" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="system" type="FHIR.uri"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="code" type="FHIR.code"/>
        <ns4:element name="display" type="FHIR.string"/>
        <ns4:element name="userSelected" type="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Period" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="start" type="FHIR.dateTime"/>
        <ns4:element name="end" type="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Measmnt_Principle" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Medication.Content" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="item" type="FHIR.Reference"/>
        <ns4:element name="amount" type="FHIR.SimpleQuantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Specimen" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="status" type="FHIR.SpecimenStatus"/>
        <ns4:element name="type" type="FHIR.CodeableConcept"/>
        <ns4:element name="parent" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="subject" type="FHIR.Reference"/>
        <ns4:element name="accessionIdentifier" type="FHIR.Identifier"/>
        <ns4:element name="receivedTime" type="FHIR.dateTime"/>
        <ns4:element name="collection" type="FHIR.Specimen.Collection"/>
        <ns4:element name="treatment" type="list&lt;FHIR.Specimen.Treatment&gt;"/>
        <ns4:element name="container" type="list&lt;FHIR.Specimen.Container&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.FamilyMemberHistory" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" type="list&lt;FHIR.Identifier&gt;"/>
        <ns4:element name="patient" type="FHIR.Reference"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="status" type="FHIR.FamilyHistoryStatus"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="relationship" type="FHIR.CodeableConcept"/>
        <ns4:element name="gender" type="FHIR.code"/>
        <ns4:element name="bornPeriod" type="FHIR.Period"/>
        <ns4:element name="bornDate" type="FHIR.date"/>
        <ns4:element name="bornString" type="FHIR.string"/>
        <ns4:element name="ageQuantity" type="FHIR.Age"/>
        <ns4:element name="ageRange" type="FHIR.Range"/>
        <ns4:element name="ageString" type="FHIR.string"/>
        <ns4:element name="deceasedBoolean" type="FHIR.boolean"/>
        <ns4:element name="deceasedQuantity" type="FHIR.Age"/>
        <ns4:element name="deceasedRange" type="FHIR.Range"/>
        <ns4:element name="deceasedDate" type="FHIR.date"/>
        <ns4:element name="deceasedString" type="FHIR.string"/>
        <ns4:element name="note" type="FHIR.Annotation"/>
        <ns4:element name="condition" type="list&lt;FHIR.FamilyMemberHistory.Condition&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DocumentManifest.Content" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="pAttachment" type="FHIR.Attachment"/>
        <ns4:element name="pReference" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.StructureDefinition.Contact" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="telecom" type="list&lt;FHIR.ContactPoint&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.SampledDataDataType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AllergyIntoleranceStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Provenance.Agent" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="role" type="FHIR.Coding"/>
        <ns4:element name="actor" type="FHIR.Reference"/>
        <ns4:element name="userId" type="FHIR.Identifier"/>
        <ns4:element name="relatedAgent" type="list&lt;FHIR.Provenance.RelatedAgent&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Conformance.Interaction1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.SystemRestfulInteraction"/>
        <ns4:element name="documentation" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DocumentManifest.Related" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" type="FHIR.Identifier"/>
        <ns4:element name="ref" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Composition.Event" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="detail" type="list&lt;FHIR.Reference&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Quantity" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="FHIR.decimal"/>
        <ns4:element name="comparator" type="FHIR.QuantityComparator"/>
        <ns4:element name="unit" type="FHIR.string"/>
        <ns4:element name="system" type="FHIR.uri"/>
        <ns4:element name="code" type="FHIR.code"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.CompositionAttestationMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Conformance.Endpoint" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="protocol" type="FHIR.Coding"/>
        <ns4:element name="address" type="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.DeviceMetricCalibrationState" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ClaimResponse.Adjudication2" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.Coding"/>
        <ns4:element name="amount" type="FHIR.Money"/>
        <ns4:element name="value" type="FHIR.decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ClaimResponse.Adjudication1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.Coding"/>
        <ns4:element name="amount" type="FHIR.Money"/>
        <ns4:element name="value" type="FHIR.decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ClaimResponse.Adjudication4" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.Coding"/>
        <ns4:element name="amount" type="FHIR.Money"/>
        <ns4:element name="value" type="FHIR.decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.GroupType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ClaimResponse.Adjudication3" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" type="FHIR.Coding"/>
        <ns4:element name="amount" type="FHIR.Money"/>
        <ns4:element name="value" type="FHIR.decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.TypeRestfulInteraction" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ImplementationGuide" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" type="FHIR.uri"/>
        <ns4:element name="version" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="status" type="FHIR.code"/>
        <ns4:element name="experimental" type="FHIR.boolean"/>
        <ns4:element name="publisher" type="FHIR.string"/>
        <ns4:element name="contact" type="list&lt;FHIR.ImplementationGuide.Contact&gt;"/>
        <ns4:element name="date" type="FHIR.dateTime"/>
        <ns4:element name="description" type="FHIR.string"/>
        <ns4:element name="useContext" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="copyright" type="FHIR.string"/>
        <ns4:element name="fhirVersion" type="FHIR.id"/>
        <ns4:element name="dependency" type="list&lt;FHIR.ImplementationGuide.Dependency&gt;"/>
        <ns4:element name="package" type="list&lt;FHIR.ImplementationGuide.Package&gt;"/>
        <ns4:element name="global" type="list&lt;FHIR.ImplementationGuide.Global&gt;"/>
        <ns4:element name="binary" type="list&lt;FHIR.uri&gt;"/>
        <ns4:element name="page" type="FHIR.ImplementationGuide.Page"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.EpisodeOfCare.CareTeam" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="role" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="period" type="FHIR.Period"/>
        <ns4:element name="member" type="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Medication.Batch" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="lotNumber" type="FHIR.string"/>
        <ns4:element name="expirationDate" type="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Claim.MissingTeeth" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="tooth" type="FHIR.Coding"/>
        <ns4:element name="reason" type="FHIR.Coding"/>
        <ns4:element name="extractionDate" type="FHIR.date"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.ElementDefinition.Base" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="path" type="FHIR.string"/>
        <ns4:element name="min" type="FHIR.integer"/>
        <ns4:element name="max" type="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Bundle" retrievable="false" baseType="FHIR.Resource">
        <ns4:element name="type" type="FHIR.BundleType"/>
        <ns4:element name="total" type="FHIR.unsignedInt"/>
        <ns4:element name="link" type="list&lt;FHIR.Bundle.Link&gt;"/>
        <ns4:element name="entry" type="list&lt;FHIR.Bundle.Entry&gt;"/>
        <ns4:element name="signature" type="FHIR.Signature"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Encounter.Hospitalization" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="preAdmissionIdentifier" type="FHIR.Identifier"/>
        <ns4:element name="origin" type="FHIR.Reference"/>
        <ns4:element name="admitSource" type="FHIR.CodeableConcept"/>
        <ns4:element name="admittingDiagnosis" type="list&lt;FHIR.Reference&gt;"/>
        <ns4:element name="reAdmission" type="FHIR.CodeableConcept"/>
        <ns4:element name="dietPreference" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="specialCourtesy" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="specialArrangement" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="destination" type="FHIR.Reference"/>
        <ns4:element name="dischargeDisposition" type="FHIR.CodeableConcept"/>
        <ns4:element name="dischargeDiagnosis" type="list&lt;FHIR.Reference&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AnswerFormat" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.AuditEvent.Participant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="role" type="list&lt;FHIR.CodeableConcept&gt;"/>
        <ns4:element name="reference" type="FHIR.Reference"/>
        <ns4:element name="userId" type="FHIR.Identifier"/>
        <ns4:element name="altId" type="FHIR.string"/>
        <ns4:element name="name" type="FHIR.string"/>
        <ns4:element name="requestor" type="FHIR.boolean"/>
        <ns4:element name="location" type="FHIR.Reference"/>
        <ns4:element name="policy" type="list&lt;FHIR.uri&gt;"/>
        <ns4:element name="media" type="FHIR.Coding"/>
        <ns4:element name="network" type="FHIR.AuditEvent.Network"/>
        <ns4:element name="purposeOfUse" type="list&lt;FHIR.Coding&gt;"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Organization.Contact" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="purpose" type="FHIR.CodeableConcept"/>
        <ns4:element name="name" type="FHIR.HumanName"/>
        <ns4:element name="telecom" type="list&lt;FHIR.ContactPoint&gt;"/>
        <ns4:element name="address" type="FHIR.Address"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.VisionBase" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.BundleType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" type="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIR.Bundle.Response" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="status" type="FHIR.string"/>
        <ns4:element name="location" type="FHIR.uri"/>
        <ns4:element name="etag" type="FHIR.string"/>
        <ns4:element name="lastModified" type="FHIR.instant"/>
    </ns4:typeInfo>
    <ns4:conversionInfo fromType="FHIR.Coding" toType="System.Code" functionName="FHIRHelpers.ToCode"/>
    <ns4:conversionInfo fromType="FHIR.CodeableConcept" toType="System.Concept" functionName="FHIRHelpers.ToConcept"/>
    <ns4:conversionInfo fromType="FHIR.Quantity" toType="System.Quantity" functionName="FHIRHelpers.ToQuantity"/>
    <ns4:conversionInfo fromType="FHIR.Period" toType="Interval&lt;System.DateTime&gt;" functionName="FHIRHelpers.ToInterval"/>
    <ns4:conversionInfo fromType="FHIR.Range" toType="Interval&lt;System.Quantity&gt;" functionName="FHIRHelpers.ToInterval"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToRatio" fromType="FHIR.Ratio" toType="System.Ratio"/>
    <ns4:conversionInfo fromType="FHIR.dateTime" toType="System.DateTime" functionName="FHIRHelpers.ToDateTime"/>
    <ns4:conversionInfo fromType="FHIR.date" toType="System.Date" functionName="FHIRHelpers.ToDate"/>
    <ns4:conversionInfo fromType="FHIR.uuid" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ProvenanceEntityRole" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.UnitsOfTime" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AddressType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AllergyIntoleranceCategory" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SpecimenStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DetectedIssueSeverity" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.IssueSeverity" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DataElementStringency" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.VisionEyes" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.StructureDefinitionKind" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.QuestionnaireResponseStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AllergyIntoleranceType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DocumentRelationshipType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ConformanceResourceStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CarePlanActivityStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ActionList" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ParticipationStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.instant" toType="System.DateTime" functionName="FHIRHelpers.ToDateTime"/>
    <ns4:conversionInfo fromType="FHIR.DocumentMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AssertionOperatorType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DaysOfWeek" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ConformanceEventMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.IssueType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.TransactionMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ContentType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.FamilyHistoryStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.positiveInt" toType="System.Integer" functionName="FHIRHelpers.ToInteger"/>
    <ns4:conversionInfo fromType="FHIR.AuditEventParticipantNetworkType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CommunicationStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ClinicalImpressionStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AssertionResponseTypes" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DeviceUseRequestPriority" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.OrderStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.NarrativeStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.string" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.GuidePageKind" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.GuideDependencyType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ResourceVersionPolicy" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.MedicationAdministrationStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.RestfulConformanceMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.NamingSystemIdentifierType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AccountStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ProcedureRequestPriority" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.MedicationDispenseStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.IdentifierUse" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DigitalMediaType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.BindingStrength" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ParticipantRequired" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.XPathUsageType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.InstanceAvailability" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.id" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.FilterOperator" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.NamingSystemType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ExtensionContext" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ClaimType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AuditEventOutcome" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ConstraintSeverity" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.GuideResourcePurpose" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ProcedureStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DeviceMetricCategory" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.QuestionnaireStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ResponseType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.decimal" toType="System.Decimal" functionName="FHIRHelpers.ToDecimal"/>
    <ns4:conversionInfo fromType="FHIR.AggregationMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.EventTiming" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.GoalStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SearchParamType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SystemRestfulInteraction" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SubscriptionChannelType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ProcedureRequestStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ReferralStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AssertionDirectionType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SlicingRules" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.LinkType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AllergyIntoleranceCriticality" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ConceptMapEquivalence" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.PropertyRepresentation" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AuditEventAction" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SearchModifierCode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DeviceUseRequestStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CompositionStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AppointmentStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.MessageSignificanceCategory" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.OperationParameterUse" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ListMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ObservationStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ParticipantStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AdministrativeGender" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ConformanceStatementKind" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DiagnosticOrderStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.boolean" toType="System.Boolean" functionName="FHIRHelpers.ToBoolean"/>
    <ns4:conversionInfo fromType="FHIR.DeviceMetricCalibrationType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.code" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SupplyRequestStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.EncounterLocationStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SupplyDeliveryStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DiagnosticReportStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.FlagStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AllergyIntoleranceCertainty" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CarePlanStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ListStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.base64Binary" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AddressUse" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ConditionalDeleteStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ContactPointUse" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DeviceMetricOperationalStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.NutritionOrderStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DiagnosticOrderPriority" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.uri" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.Use" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.IdentityAssuranceLevel" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DeviceMetricColor" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SearchEntryMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.time" toType="System.Time" functionName="FHIRHelpers.ToTime"/>
    <ns4:conversionInfo fromType="FHIR.ConditionVerificationStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AllergyIntoleranceSeverity" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.OperationKind" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ObservationRelationshipType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.unsignedInt" toType="System.Integer" functionName="FHIRHelpers.ToInteger"/>
    <ns4:conversionInfo fromType="FHIR.NameUse" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SubscriptionStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CommunicationRequestStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DocumentReferenceStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.LocationMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.integer" toType="System.Integer" functionName="FHIRHelpers.ToInteger"/>
    <ns4:conversionInfo fromType="FHIR.CarePlanRelationship" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.LocationStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.UnknownContentCode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.NoteType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.EncounterState" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.EncounterClass" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.HTTPVerb" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.EpisodeOfCareStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.RemittanceOutcome" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ContactPointSystem" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.MedicationOrderStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SlotStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.markdown" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.MedicationStatementStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.QuantityComparator" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.oid" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DeviceStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.Measmnt_Principle" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SampledDataDataType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AllergyIntoleranceStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CompositionAttestationMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DeviceMetricCalibrationState" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.GroupType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.TypeRestfulInteraction" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AnswerFormat" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.VisionBase" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.BundleType" toType="System.String" functionName="FHIRHelpers.ToString"/>
</ns4:modelInfo>`;const s={annotation:[{translatorVersion:"2.9.0",translatorOptions:"",type:"CqlToElmInfo"}],identifier:{id:"FactorsToConsiderInManagingChronicPainFHIRv102",version:"3.0.0"},schemaIdentifier:{id:"urn:hl7-org:elm",version:"r1"},usings:{def:[{localIdentifier:"System",uri:"urn:hl7-org:elm-types:r1"},{localIdentifier:"FHIR",uri:"http://hl7.org/fhir",version:"1.0.2"}]},includes:{def:[{localIdentifier:"C3F",path:"CDSConnectCommonsForFHIRv102",version:"2.1.0"},{localIdentifier:"FHIRHelpers",path:"FHIRHelpers",version:"1.0.2"}]},parameters:{def:[{name:"InclusionMedicationsLookbackPeriod",accessLevel:"Public",default:{value:180,unit:"days",type:"Quantity"}}]},codeSystems:{def:[{name:"LOINC",id:"http://loinc.org",accessLevel:"Public"},{name:"SNOMED-CT",id:"http://snomed.info/sct",accessLevel:"Public"},{name:"LOCAL",id:"http://cds.ahrq.gov/cdsconnect/pms",accessLevel:"Public"}]},valueSets:{def:[{name:"Conditions associated with chronic pain",id:"2.16.840.1.113762.1.4.1021.95",accessLevel:"Public"},{name:"Opioid pain medications",id:"2.16.840.1.113762.1.4.1032.34",accessLevel:"Public"},{name:"Adjuvant pain medications",id:"2.16.840.1.113762.1.4.1032.54",accessLevel:"Public"},{name:"Major Depression",id:"2.16.840.1.113883.3.464.1003.105.12.1007",accessLevel:"Public"},{name:"Depression Diagnosis ICD9",id:"2.16.840.1.113883.3.600.143",accessLevel:"Public"},{name:"Anxiety",id:"2.16.840.1.113762.1.4.1032.52",accessLevel:"Public"},{name:"Anxiety Disorders ICD9",id:"2.16.840.1.113883.3.1240.2017.3.2.1015",accessLevel:"Public"},{name:"Substance use disorder",id:"2.16.840.1.113883.3.464.1003.106.12.1004",accessLevel:"Public"},{name:"Substance Abuse",id:"2.16.840.1.113883.3.464.1003.106.11.1010",accessLevel:"Public"},{name:"Suicide Attempt",id:"2.16.840.1.113762.1.4.1032.102",accessLevel:"Public"},{name:"Sleep-disordered breathing",id:"2.16.840.1.113762.1.4.1032.53",accessLevel:"Public"},{name:"Kidney Failure",id:"2.16.840.1.113883.3.464.1003.109.12.1028",accessLevel:"Public"},{name:"Chronic Liver Disease",id:"2.16.840.1.113883.3.464.1003.199.12.1035",accessLevel:"Public"},{name:"Liver Disease",id:"2.16.840.1.113762.1.4.1047.42",accessLevel:"Public"},{name:"CDS Pregnancy",id:"https://cts.nlm.nih.gov/fhir/ValueSet/2.16.840.1.113762.1.4.1032.264",accessLevel:"Public"},{name:"Nonopioid pain medications",id:"2.16.840.1.113762.1.4.1032.26",accessLevel:"Public"},{name:"Non pharmacologic treatments for chronic pain",id:"2.16.840.1.113762.1.4.1032.36",accessLevel:"Public"},{name:"Risk assessments relevant to pain management",id:"2.16.840.1.113762.1.4.1032.55",accessLevel:"Public"},{name:"Benzodiazepine medications",id:"2.16.840.1.113762.1.4.1032.43",accessLevel:"Public"},{name:"Naloxone medications",id:"2.16.840.1.113762.1.4.1032.42",accessLevel:"Public"},{name:"Urine drug screen for pain management",id:"2.16.840.1.113762.1.4.1032.28",accessLevel:"Public"},{name:"Stool softeners and laxatives",id:"2.16.840.1.113762.1.4.1032.44",accessLevel:"Public"}]},codes:{def:[{name:"Pregnancy status",id:"82810-3",display:"Pregnancy status",accessLevel:"Public",codeSystem:{name:"LOINC"}},{name:"Pregnant",id:"77386006",display:"Patient currently pregnant (finding)",accessLevel:"Public",codeSystem:{name:"SNOMED-CT"}},{name:"Management of opioid dosage tapering (procedure)",id:"874903005",display:"Management of opioid dosage tapering (procedure)",accessLevel:"Public",codeSystem:{name:"SNOMED-CT"}},{name:"Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]",id:"55758-7",display:"Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]",accessLevel:"Public",codeSystem:{name:"LOINC"}},{name:"Patient Health Questionnaire 9 item (PHQ-9) total score [Reported]",id:"44261-6",display:"Patient Health Questionnaire 9 item (PHQ-9) total score [Reported]",accessLevel:"Public",codeSystem:{name:"LOINC"}},{name:"Generalized anxiety disorder 7 item (GAD-7) total score [Reported.PHQ]",id:"70274-6",display:"Generalized anxiety disorder 7 item (GAD-7) total score [Reported.PHQ]",accessLevel:"Public",codeSystem:{name:"LOINC"}},{name:"Total score [AUDIT]",id:"75624-7",display:"Total score [AUDIT]",accessLevel:"Public",codeSystem:{name:"LOINC"}},{name:"Total score [AUDIT-C]",id:"75626-2",display:"Total score [AUDIT-C]",accessLevel:"Public",codeSystem:{name:"LOINC"}},{name:"Total score [DAST-10]",id:"82667-7",display:"Total score [DAST-10]",accessLevel:"Public",codeSystem:{name:"LOINC"}},{name:"Total score ORT",id:"91392-1",display:"Total score ORT",accessLevel:"Public",codeSystem:{name:"LOINC"}},{name:"Pain severity Wong-Baker FACES Scale",id:"38221-8",display:"Pain severity Wong-Baker FACES Scale",accessLevel:"Public",codeSystem:{name:"LOINC"}},{name:"Mean score [PEG]",id:"91147-9",display:"Mean score [PEG]",accessLevel:"Public",codeSystem:{name:"LOINC"}},{name:"Pain severity in the past week - 0-10 numeric rating [Reported]",id:"75893-8",display:"Pain severity in the past week - 0-10 numeric rating [Reported]",accessLevel:"Public",codeSystem:{name:"LOINC"}},{name:"What number best describes how pain has interfered with your enjoyment of life during the past week",id:"91145-3",display:"What number best describes how pain has interfered with your enjoyment of life during the past week",accessLevel:"Public",codeSystem:{name:"LOINC"}},{name:"What number best describes how pain has interfered with your general activity during the past week",id:"91146-1",display:"What number best describes how pain has interfered with your general activity during the past week",accessLevel:"Public",codeSystem:{name:"LOINC"}},{name:"Pain Enjoyment General Activity (PEG) Assessment LEGACY",id:"PEGASSESSMENT",display:"Pain Enjoyment General Activity (PEG) Assessment",accessLevel:"Public",codeSystem:{name:"LOCAL"}},{name:"Pain LEGACY",id:"PEGPAIN",display:"Pain",accessLevel:"Public",codeSystem:{name:"LOCAL"}},{name:"Enjoyment of life LEGACY",id:"PEGENJOYMENT",display:"Enjoyment of life",accessLevel:"Public",codeSystem:{name:"LOCAL"}},{name:"General activity LEGACY",id:"PEGGENERALACTIVITY",display:"General activity",accessLevel:"Public",codeSystem:{name:"LOCAL"}},{name:"Total score [STarT Back]",id:"91351-7",display:"Total score [STarT Back]",accessLevel:"Public",codeSystem:{name:"LOINC"}},{name:"STarT Back Screening Tool LEGACY",id:"STARTBACK",display:"STarT Back Screening Tool",accessLevel:"Public",codeSystem:{name:"LOCAL"}},{name:"Single question r/t ETOH use",id:"SQETOHUSE",display:"Single question r/t ETOH use",accessLevel:"Public",codeSystem:{name:"LOCAL"}},{name:"Single question r/t drug use",id:"SQDRUGUSE",display:"Single question r/t drug use",accessLevel:"Public",codeSystem:{name:"LOCAL"}},{name:"Morphine Milligram Equivalent (MME)",id:"MME",display:"Morphine Milligram Equivalent (MME)",accessLevel:"Public",codeSystem:{name:"LOCAL"}}]},contexts:{def:[{name:"Patient"}]},statements:{def:[{name:"Patient",context:"Patient",expression:{type:"SingletonFrom",operand:{dataType:"{http://hl7.org/fhir}Patient",type:"Retrieve"}}},{name:"ConceptText",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"If",condition:{type:"Or",operand:[{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{type:"ToConcept",operand:{name:"Mean score [PEG]",type:"CodeRef"}}]},{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{type:"ToConcept",operand:{name:"Pain Enjoyment General Activity (PEG) Assessment LEGACY",type:"CodeRef"}}]}]},then:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"Mean score [PEG]",type:"Literal"},else:{type:"If",condition:{type:"Or",operand:[{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{type:"ToConcept",operand:{name:"Pain severity in the past week - 0-10 numeric rating [Reported]",type:"CodeRef"}}]},{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{type:"ToConcept",operand:{name:"Pain LEGACY",type:"CodeRef"}}]}]},then:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"Pain",type:"Literal"},else:{type:"If",condition:{type:"Or",operand:[{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{type:"ToConcept",operand:{name:"What number best describes how pain has interfered with your enjoyment of life during the past week",type:"CodeRef"}}]},{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{type:"ToConcept",operand:{name:"Enjoyment of life LEGACY",type:"CodeRef"}}]}]},then:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"Enjoyment of life",type:"Literal"},else:{type:"If",condition:{type:"Or",operand:[{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{type:"ToConcept",operand:{name:"What number best describes how pain has interfered with your general activity during the past week",type:"CodeRef"}}]},{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{type:"ToConcept",operand:{name:"General activity LEGACY",type:"CodeRef"}}]}]},then:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"General activity",type:"Literal"},else:{type:"Coalesce",operand:[{path:"value",type:"Property",source:{path:"text",type:"Property",source:{name:"Koncept",type:"OperandRef"}}},{type:"Coalesce",operand:[{type:"Query",source:[{alias:"c2",expression:{path:"coding",type:"Property",source:{name:"Koncept",type:"OperandRef"}}}],relationship:[],return:{expression:{path:"value",type:"Property",source:{path:"display",scope:"c2",type:"Property"}}}}]}]}}}}},operand:[{name:"Koncept",operandTypeSpecifier:{name:"{http://hl7.org/fhir}CodeableConcept",type:"NamedTypeSpecifier"}}]},{name:"ConceptTextWithRange",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"If",condition:{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{type:"ToConcept",operand:{name:"Patient Health Questionnaire 2 item (PHQ-2) total score [Reported]",type:"CodeRef"}}]},then:{type:"Concatenate",operand:[{name:"ConceptText",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{valueType:"{urn:hl7-org:elm-types:r1}String",value:" [Range: 0-6]",type:"Literal"}]},else:{type:"If",condition:{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{type:"ToConcept",operand:{name:"Patient Health Questionnaire 9 item (PHQ-9) total score [Reported]",type:"CodeRef"}}]},then:{type:"Concatenate",operand:[{name:"ConceptText",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{valueType:"{urn:hl7-org:elm-types:r1}String",value:" [Range: 0-27]",type:"Literal"}]},else:{type:"If",condition:{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{type:"ToConcept",operand:{name:"Generalized anxiety disorder 7 item (GAD-7) total score [Reported.PHQ]",type:"CodeRef"}}]},then:{type:"Concatenate",operand:[{name:"ConceptText",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{valueType:"{urn:hl7-org:elm-types:r1}String",value:" [Range: 0-21]",type:"Literal"}]},else:{type:"If",condition:{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{type:"ToConcept",operand:{name:"Total score [AUDIT]",type:"CodeRef"}}]},then:{type:"Concatenate",operand:[{name:"ConceptText",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{valueType:"{urn:hl7-org:elm-types:r1}String",value:" [Range: 0-40]",type:"Literal"}]},else:{type:"If",condition:{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{type:"ToConcept",operand:{name:"Total score [AUDIT-C]",type:"CodeRef"}}]},then:{type:"Concatenate",operand:[{name:"ConceptText",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{valueType:"{urn:hl7-org:elm-types:r1}String",value:" [Range: 0-12]",type:"Literal"}]},else:{type:"If",condition:{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{type:"ToConcept",operand:{name:"Total score [DAST-10]",type:"CodeRef"}}]},then:{type:"Concatenate",operand:[{name:"ConceptText",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{valueType:"{urn:hl7-org:elm-types:r1}String",value:" [Range: 0-10]",type:"Literal"}]},else:{type:"If",condition:{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{type:"ToConcept",operand:{name:"Total score ORT",type:"CodeRef"}}]},then:{type:"Concatenate",operand:[{name:"ConceptText",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{valueType:"{urn:hl7-org:elm-types:r1}String",value:" [Range: 0-26]",type:"Literal"}]},else:{type:"If",condition:{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{type:"ToConcept",operand:{name:"Pain severity Wong-Baker FACES Scale",type:"CodeRef"}}]},then:{type:"Concatenate",operand:[{name:"ConceptText",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{valueType:"{urn:hl7-org:elm-types:r1}String",value:" [Range: 0-10]",type:"Literal"}]},else:{type:"If",condition:{type:"Or",operand:[{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{type:"ToConcept",operand:{name:"Mean score [PEG]",type:"CodeRef"}}]},{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{type:"ToConcept",operand:{name:"Pain Enjoyment General Activity (PEG) Assessment LEGACY",type:"CodeRef"}}]}]},then:{type:"Concatenate",operand:[{name:"ConceptText",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{valueType:"{urn:hl7-org:elm-types:r1}String",value:" [Range: 0-10]",type:"Literal"}]},else:{type:"If",condition:{type:"Or",operand:[{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{type:"ToConcept",operand:{name:"Total score [STarT Back]",type:"CodeRef"}}]},{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{type:"ToConcept",operand:{name:"STarT Back Screening Tool LEGACY",type:"CodeRef"}}]}]},then:{type:"Concatenate",operand:[{name:"ConceptText",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]},{valueType:"{urn:hl7-org:elm-types:r1}String",value:" [Range: 0-9]",type:"Literal"}]},else:{name:"ConceptText",type:"FunctionRef",operand:[{name:"Koncept",type:"OperandRef"}]}}}}}}}}}}},operand:[{name:"Koncept",operandTypeSpecifier:{name:"{http://hl7.org/fhir}CodeableConcept",type:"NamedTypeSpecifier"}}]},{name:"DateText",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"ToString",operand:{path:"value",type:"Property",source:{name:"Date",type:"OperandRef"}}},operand:[{name:"Date",operandTypeSpecifier:{name:"{http://hl7.org/fhir}date",type:"NamedTypeSpecifier"}}]},{name:"DateTimeText",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"ToString",operand:{path:"value",type:"Property",source:{name:"Date",type:"OperandRef"}}},operand:[{name:"Date",operandTypeSpecifier:{name:"{http://hl7.org/fhir}dateTime",type:"NamedTypeSpecifier"}}]},{name:"InstantText",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"ToString",operand:{path:"value",type:"Property",source:{name:"Instant",type:"OperandRef"}}},operand:[{name:"Instant",operandTypeSpecifier:{name:"{http://hl7.org/fhir}instant",type:"NamedTypeSpecifier"}}]},{name:"QuantityText",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"If",condition:{type:"IsNull",operand:{name:"Quantity",type:"OperandRef"}},then:{asType:"{urn:hl7-org:elm-types:r1}String",type:"As",operand:{type:"Null"}},else:{type:"If",condition:{type:"And",operand:[{type:"Not",operand:{type:"IsNull",operand:{path:"unit",type:"Property",source:{name:"Quantity",type:"OperandRef"}}}},{type:"Not",operand:{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"unit",type:"Property",source:{name:"Quantity",type:"OperandRef"}}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"{score}",type:"Literal"}]}}]},then:{type:"Concatenate",operand:[{type:"Concatenate",operand:[{type:"ToString",operand:{path:"value",type:"Property",source:{path:"value",type:"Property",source:{name:"Quantity",type:"OperandRef"}}}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:" ",type:"Literal"}]},{path:"value",type:"Property",source:{path:"unit",type:"Property",source:{name:"Quantity",type:"OperandRef"}}}]},else:{type:"If",condition:{type:"And",operand:[{type:"Not",operand:{type:"IsNull",operand:{path:"code",type:"Property",source:{name:"Quantity",type:"OperandRef"}}}},{type:"Not",operand:{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"code",type:"Property",source:{name:"Quantity",type:"OperandRef"}}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"{score}",type:"Literal"}]}}]},then:{type:"Concatenate",operand:[{type:"Concatenate",operand:[{type:"ToString",operand:{path:"value",type:"Property",source:{path:"value",type:"Property",source:{name:"Quantity",type:"OperandRef"}}}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:" ",type:"Literal"}]},{path:"value",type:"Property",source:{path:"code",type:"Property",source:{name:"Quantity",type:"OperandRef"}}}]},else:{type:"ToString",operand:{path:"value",type:"Property",source:{path:"value",type:"Property",source:{name:"Quantity",type:"OperandRef"}}}}}}},operand:[{name:"Quantity",operandTypeSpecifier:{name:"{http://hl7.org/fhir}Quantity",type:"NamedTypeSpecifier"}}]},{name:"PeriodObject",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"If",condition:{type:"IsNull",operand:{name:"Period",type:"OperandRef"}},then:{type:"As",operand:{type:"Null"},asTypeSpecifier:{type:"TupleTypeSpecifier",element:[{name:"Start",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"End",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}]}},else:{type:"Tuple",element:[{name:"Start",value:{name:"DateTimeText",type:"FunctionRef",operand:[{path:"start",type:"Property",source:{name:"Period",type:"OperandRef"}}]}},{name:"End",value:{name:"DateTimeText",type:"FunctionRef",operand:[{path:"end",type:"Property",source:{name:"Period",type:"OperandRef"}}]}}]}},operand:[{name:"Period",operandTypeSpecifier:{name:"{http://hl7.org/fhir}Period",type:"NamedTypeSpecifier"}}]},{name:"RangeObject",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"If",condition:{type:"IsNull",operand:{name:"Range",type:"OperandRef"}},then:{type:"As",operand:{type:"Null"},asTypeSpecifier:{type:"TupleTypeSpecifier",element:[{name:"Low",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"High",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}]}},else:{type:"Tuple",element:[{name:"Low",value:{name:"QuantityText",type:"FunctionRef",operand:[{path:"low",type:"Property",source:{name:"Range",type:"OperandRef"}}]}},{name:"High",value:{name:"QuantityText",type:"FunctionRef",operand:[{path:"high",type:"Property",source:{name:"Range",type:"OperandRef"}}]}}]}},operand:[{name:"Range",operandTypeSpecifier:{name:"{http://hl7.org/fhir}Range",type:"NamedTypeSpecifier"}}]},{name:"ObservationDate",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Coalesce",operand:[{name:"DateTimeText",type:"FunctionRef",operand:[{path:"effectiveDateTime",type:"Property",source:{name:"Observation",type:"OperandRef"}}]},{name:"DateTimeText",type:"FunctionRef",operand:[{path:"start",type:"Property",source:{path:"effectivePeriod",type:"Property",source:{name:"Observation",type:"OperandRef"}}}]},{name:"InstantText",type:"FunctionRef",operand:[{path:"issued",type:"Property",source:{name:"Observation",type:"OperandRef"}}]}]},operand:[{name:"Observation",operandTypeSpecifier:{name:"{http://hl7.org/fhir}Observation",type:"NamedTypeSpecifier"}}]},{name:"MedicationStatementDate",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Coalesce",operand:[{name:"DateTimeText",type:"FunctionRef",operand:[{path:"effectiveDateTime",type:"Property",source:{name:"Statement",type:"OperandRef"}}]},{name:"DateTimeText",type:"FunctionRef",operand:[{path:"start",type:"Property",source:{path:"effectivePeriod",type:"Property",source:{name:"Statement",type:"OperandRef"}}}]}]},operand:[{name:"Statement",operandTypeSpecifier:{name:"{http://hl7.org/fhir}MedicationStatement",type:"NamedTypeSpecifier"}}]},{name:"Onset",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Coalesce",operand:[{type:"List",element:[{name:"DateTimeText",type:"FunctionRef",operand:[{path:"onsetDateTime",type:"Property",source:{name:"Condition",type:"OperandRef"}}]},{name:"QuantityText",type:"FunctionRef",operand:[{path:"onsetQuantity",type:"Property",source:{name:"Condition",type:"OperandRef"}}]},{name:"PeriodObject",type:"FunctionRef",operand:[{path:"onsetPeriod",type:"Property",source:{name:"Condition",type:"OperandRef"}}]},{name:"RangeObject",type:"FunctionRef",operand:[{path:"onsetRange",type:"Property",source:{name:"Condition",type:"OperandRef"}}]},{path:"value",type:"Property",source:{path:"onsetString",type:"Property",source:{name:"Condition",type:"OperandRef"}}}]}]},operand:[{name:"Condition",operandTypeSpecifier:{name:"{http://hl7.org/fhir}Condition",type:"NamedTypeSpecifier"}}]},{name:"Abatement",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Coalesce",operand:[{type:"List",element:[{name:"DateTimeText",type:"FunctionRef",operand:[{path:"abatementDateTime",type:"Property",source:{name:"Condition",type:"OperandRef"}}]},{name:"QuantityText",type:"FunctionRef",operand:[{path:"abatementQuantity",type:"Property",source:{name:"Condition",type:"OperandRef"}}]},{name:"PeriodObject",type:"FunctionRef",operand:[{path:"abatementPeriod",type:"Property",source:{name:"Condition",type:"OperandRef"}}]},{name:"RangeObject",type:"FunctionRef",operand:[{path:"abatementRange",type:"Property",source:{name:"Condition",type:"OperandRef"}}]},{path:"value",type:"Property",source:{path:"abatementString",type:"Property",source:{name:"Condition",type:"OperandRef"}}},{type:"ToString",operand:{path:"value",type:"Property",source:{path:"abatementBoolean",type:"Property",source:{name:"Condition",type:"OperandRef"}}}}]}]},operand:[{name:"Condition",operandTypeSpecifier:{name:"{http://hl7.org/fhir}Condition",type:"NamedTypeSpecifier"}}]},{name:"Is18orOlder",context:"Patient",accessLevel:"Public",expression:{type:"GreaterOrEqual",operand:[{precision:"Year",type:"CalculateAge",operand:{path:"birthDate.value",type:"Property",source:{name:"Patient",type:"ExpressionRef"}}},{valueType:"{urn:hl7-org:elm-types:r1}Integer",value:"18",type:"Literal"}]}},{name:"ConditionsAssociatedWithChronicPain",context:"Patient",accessLevel:"Public",expression:{name:"Confirmed",libraryName:"C3F",type:"FunctionRef",operand:[{name:"ActiveOrRecurring",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}Condition",codeProperty:"code",codeComparator:"in",type:"Retrieve",codes:{name:"Conditions associated with chronic pain",preserve:!0,type:"ValueSetRef"}}]}]}},{name:"HasConditionAssociatedWithChronicPain",context:"Patient",accessLevel:"Public",expression:{type:"Exists",operand:{name:"ConditionsAssociatedWithChronicPain",type:"ExpressionRef"}}},{name:"HasRecentOpioidPainMedication",context:"Patient",accessLevel:"Public",expression:{type:"Or",operand:[{type:"Exists",operand:{name:"ActiveCompletedOrStoppedMedicationOrder",libraryName:"C3F",type:"FunctionRef",operand:[{name:"MedicationOrderLookBack",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}MedicationOrder",codeProperty:"medicationCodeableConcept",codeComparator:"in",type:"Retrieve",codes:{name:"Opioid pain medications",preserve:!0,type:"ValueSetRef"}},{name:"InclusionMedicationsLookbackPeriod",type:"ParameterRef"}]}]}},{type:"Exists",operand:{name:"ActiveOrCompletedMedicationStatement",libraryName:"C3F",type:"FunctionRef",operand:[{name:"MedicationStatementLookBack",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}MedicationStatement",codeProperty:"medicationCodeableConcept",codeComparator:"in",type:"Retrieve",codes:{name:"Opioid pain medications",preserve:!0,type:"ValueSetRef"}},{name:"InclusionMedicationsLookbackPeriod",type:"ParameterRef"}]}]}}]}},{name:"HasRecentNonOpioidPainMedication",context:"Patient",accessLevel:"Public",expression:{type:"Or",operand:[{type:"Exists",operand:{name:"ActiveCompletedOrStoppedMedicationOrder",libraryName:"C3F",type:"FunctionRef",operand:[{name:"MedicationOrderLookBack",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}MedicationOrder",codeProperty:"medicationCodeableConcept",codeComparator:"in",type:"Retrieve",codes:{name:"Nonopioid pain medications",preserve:!0,type:"ValueSetRef"}},{name:"InclusionMedicationsLookbackPeriod",type:"ParameterRef"}]}]}},{type:"Exists",operand:{name:"ActiveOrCompletedMedicationStatement",libraryName:"C3F",type:"FunctionRef",operand:[{name:"MedicationStatementLookBack",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}MedicationStatement",codeProperty:"medicationCodeableConcept",codeComparator:"in",type:"Retrieve",codes:{name:"Nonopioid pain medications",preserve:!0,type:"ValueSetRef"}},{name:"InclusionMedicationsLookbackPeriod",type:"ParameterRef"}]}]}}]}},{name:"MeetsInclusionCriteria",context:"Patient",accessLevel:"Public",expression:{type:"And",operand:[{name:"Is18orOlder",type:"ExpressionRef"},{type:"Or",operand:[{type:"Or",operand:[{name:"HasConditionAssociatedWithChronicPain",type:"ExpressionRef"},{name:"HasRecentOpioidPainMedication",type:"ExpressionRef"}]},{name:"HasRecentNonOpioidPainMedication",type:"ExpressionRef"}]}]}},{name:"ReportConditionsAssociatedWithChronicPain",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Condition",expression:{name:"ConditionsAssociatedWithChronicPain",type:"ExpressionRef"}}],relationship:[],return:{expression:{type:"Tuple",element:[{name:"Name",value:{name:"ConceptText",type:"FunctionRef",operand:[{path:"code",scope:"Condition",type:"Property"}]}},{name:"Status",value:{path:"value",type:"Property",source:{path:"clinicalStatus",scope:"Condition",type:"Property"}}},{name:"Onset",value:{name:"Onset",type:"FunctionRef",operand:[{name:"Condition",type:"AliasRef"}]}},{name:"DateRecorded",value:{name:"DateText",type:"FunctionRef",operand:[{path:"dateRecorded",scope:"Condition",type:"Property"}]}}]}},sort:{by:[{direction:"desc",type:"ByExpression",expression:{strict:!1,type:"As",operand:{name:"Onset",type:"IdentifierRef"},asTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}}]}}},{name:"DepressionConditions",context:"Patient",accessLevel:"Public",expression:{type:"Union",operand:[{name:"Confirmed",libraryName:"C3F",type:"FunctionRef",operand:[{name:"ActiveOrRecurring",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}Condition",codeProperty:"code",codeComparator:"in",type:"Retrieve",codes:{name:"Major Depression",preserve:!0,type:"ValueSetRef"}}]}]},{name:"Confirmed",libraryName:"C3F",type:"FunctionRef",operand:[{name:"ActiveOrRecurring",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}Condition",codeProperty:"code",codeComparator:"in",type:"Retrieve",codes:{name:"Depression Diagnosis ICD9",preserve:!0,type:"ValueSetRef"}}]}]}]}},{name:"AnxietyConditions",context:"Patient",accessLevel:"Public",expression:{type:"Union",operand:[{name:"Confirmed",libraryName:"C3F",type:"FunctionRef",operand:[{name:"ActiveOrRecurring",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}Condition",codeProperty:"code",codeComparator:"in",type:"Retrieve",codes:{name:"Anxiety",preserve:!0,type:"ValueSetRef"}}]}]},{name:"Confirmed",libraryName:"C3F",type:"FunctionRef",operand:[{name:"ActiveOrRecurring",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}Condition",codeProperty:"code",codeComparator:"in",type:"Retrieve",codes:{name:"Anxiety Disorders ICD9",preserve:!0,type:"ValueSetRef"}}]}]}]}},{name:"SubstanceUseDisorderConditions",context:"Patient",accessLevel:"Public",expression:{type:"Union",operand:[{name:"Confirmed",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}Condition",codeProperty:"code",codeComparator:"in",type:"Retrieve",codes:{name:"Substance use disorder",preserve:!0,type:"ValueSetRef"}}]},{name:"Confirmed",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}Condition",codeProperty:"code",codeComparator:"in",type:"Retrieve",codes:{name:"Substance Abuse",preserve:!0,type:"ValueSetRef"}}]}]}},{name:"SuicideAttemptConditions",context:"Patient",accessLevel:"Public",expression:{name:"Confirmed",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}Condition",codeProperty:"code",codeComparator:"in",type:"Retrieve",codes:{name:"Suicide Attempt",preserve:!0,type:"ValueSetRef"}}]}},{name:"SleepDisorderedBreathingConditions",context:"Patient",accessLevel:"Public",expression:{name:"Confirmed",libraryName:"C3F",type:"FunctionRef",operand:[{name:"ActiveOrRecurring",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}Condition",codeProperty:"code",codeComparator:"in",type:"Retrieve",codes:{name:"Sleep-disordered breathing",preserve:!0,type:"ValueSetRef"}}]}]}},{name:"RenalDysfunctionConditions",context:"Patient",accessLevel:"Public",expression:{name:"Confirmed",libraryName:"C3F",type:"FunctionRef",operand:[{name:"ActiveOrRecurring",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}Condition",codeProperty:"code",codeComparator:"in",type:"Retrieve",codes:{name:"Kidney Failure",preserve:!0,type:"ValueSetRef"}}]}]}},{name:"HepaticDysfunctionConditions",context:"Patient",accessLevel:"Public",expression:{type:"Union",operand:[{name:"Confirmed",libraryName:"C3F",type:"FunctionRef",operand:[{name:"ActiveOrRecurring",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}Condition",codeProperty:"code",codeComparator:"in",type:"Retrieve",codes:{name:"Chronic Liver Disease",preserve:!0,type:"ValueSetRef"}}]}]},{name:"Confirmed",libraryName:"C3F",type:"FunctionRef",operand:[{name:"ActiveOrRecurring",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}Condition",codeProperty:"code",codeComparator:"in",type:"Retrieve",codes:{name:"Liver Disease",preserve:!0,type:"ValueSetRef"}}]}]}]}},{name:"PregnancyConditions",context:"Patient",accessLevel:"Public",expression:{name:"Confirmed",libraryName:"C3F",type:"FunctionRef",operand:[{name:"ConditionLookBack",libraryName:"C3F",type:"FunctionRef",operand:[{name:"ActiveOrRecurring",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}Condition",codeProperty:"code",codeComparator:"in",type:"Retrieve",codes:{name:"CDS Pregnancy",preserve:!0,type:"ValueSetRef"}}]},{value:42,unit:"weeks",type:"Quantity"}]}]}},{name:"PregnancyObservations",context:"Patient",accessLevel:"Public",expression:{name:"Verified",libraryName:"C3F",type:"FunctionRef",operand:[{name:"ObservationLookBack",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}Observation",codeProperty:"code",codeComparator:"~",type:"Retrieve",codes:{type:"ToList",operand:{name:"Pregnancy status",type:"CodeRef"}}},{value:42,unit:"weeks",type:"Quantity"}]}]}},{name:"MostRecentPregnancyObservation",context:"Patient",accessLevel:"Public",expression:{name:"MostRecent",libraryName:"C3F",type:"FunctionRef",operand:[{name:"PregnancyObservations",type:"ExpressionRef"}]}},{name:"MostRecentPregnancyObservationIsPositive",context:"Patient",accessLevel:"Public",expression:{type:"Equivalent",operand:[{name:"ConceptValue",libraryName:"C3F",type:"FunctionRef",operand:[{name:"MostRecentPregnancyObservation",type:"ExpressionRef"}]},{type:"ToConcept",operand:{name:"Pregnant",type:"CodeRef"}}]}},{name:"OpioidTaperingProcedures",context:"Patient",accessLevel:"Public",expression:{name:"ProcedurePerformance",libraryName:"C3F",type:"FunctionRef",operand:[{name:"ProcedureLookBack",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}Procedure",codeProperty:"code",codeComparator:"~",type:"Retrieve",codes:{type:"ToList",operand:{name:"Management of opioid dosage tapering (procedure)",type:"CodeRef"}}},{value:2,unit:"years",type:"Quantity"}]}]}},{name:"Is65orOlder",context:"Patient",accessLevel:"Public",expression:{type:"GreaterOrEqual",operand:[{precision:"Year",type:"CalculateAge",operand:{path:"birthDate.value",type:"Property",source:{name:"Patient",type:"ExpressionRef"}}},{valueType:"{urn:hl7-org:elm-types:r1}Integer",value:"65",type:"Literal"}]}},{name:"ConditionRiskFactorsForOpioidRelatedHarms",context:"Patient",accessLevel:"Public",expression:{type:"Union",operand:[{type:"Union",operand:[{type:"Union",operand:[{type:"Union",operand:[{name:"DepressionConditions",type:"ExpressionRef"},{name:"AnxietyConditions",type:"ExpressionRef"}]},{type:"Union",operand:[{name:"SubstanceUseDisorderConditions",type:"ExpressionRef"},{name:"SuicideAttemptConditions",type:"ExpressionRef"}]}]},{type:"Union",operand:[{name:"SleepDisorderedBreathingConditions",type:"ExpressionRef"},{name:"RenalDysfunctionConditions",type:"ExpressionRef"}]}]},{type:"Union",operand:[{name:"HepaticDysfunctionConditions",type:"ExpressionRef"},{name:"PregnancyConditions",type:"ExpressionRef"}]}]}},{name:"EncounterRiskFactorsForOpioidRelatedHarms",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Encounter",expression:{dataType:"{http://hl7.org/fhir}Encounter",type:"Retrieve"}}],relationship:[],where:{type:"Exists",operand:{type:"Query",source:[{alias:"Reason",expression:{path:"reason",scope:"Encounter",type:"Property"}}],relationship:[],where:{type:"Or",operand:[{type:"Or",operand:[{type:"Or",operand:[{type:"Or",operand:[{type:"Or",operand:[{type:"Or",operand:[{type:"Or",operand:[{type:"Or",operand:[{type:"Or",operand:[{type:"Or",operand:[{type:"InValueSet",code:{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Reason",type:"AliasRef"}]},valueset:{name:"Major Depression",preserve:!0}},{type:"InValueSet",code:{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Reason",type:"AliasRef"}]},valueset:{name:"Depression Diagnosis ICD9",preserve:!0}}]},{type:"InValueSet",code:{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Reason",type:"AliasRef"}]},valueset:{name:"Anxiety",preserve:!0}}]},{type:"InValueSet",code:{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Reason",type:"AliasRef"}]},valueset:{name:"Anxiety Disorders ICD9",preserve:!0}}]},{type:"InValueSet",code:{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Reason",type:"AliasRef"}]},valueset:{name:"Substance use disorder",preserve:!0}}]},{type:"InValueSet",code:{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Reason",type:"AliasRef"}]},valueset:{name:"Substance Abuse",preserve:!0}}]},{type:"InValueSet",code:{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Reason",type:"AliasRef"}]},valueset:{name:"Suicide Attempt",preserve:!0}}]},{type:"InValueSet",code:{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Reason",type:"AliasRef"}]},valueset:{name:"Sleep-disordered breathing",preserve:!0}}]},{type:"InValueSet",code:{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Reason",type:"AliasRef"}]},valueset:{name:"Kidney Failure",preserve:!0}}]},{type:"InValueSet",code:{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Reason",type:"AliasRef"}]},valueset:{name:"Chronic Liver Disease",preserve:!0}}]},{type:"InValueSet",code:{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Reason",type:"AliasRef"}]},valueset:{name:"Liver Disease",preserve:!0}}]}}}}},{name:"ReportConditionRiskFactorsForOpioidRelatedHarms",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Condition",expression:{name:"ConditionRiskFactorsForOpioidRelatedHarms",type:"ExpressionRef"}}],relationship:[],return:{expression:{type:"Tuple",element:[{name:"Name",value:{name:"ConceptText",type:"FunctionRef",operand:[{path:"code",scope:"Condition",type:"Property"}]}},{name:"Status",value:{path:"value",type:"Property",source:{path:"clinicalStatus",scope:"Condition",type:"Property"}}},{name:"Onset",value:{name:"Onset",type:"FunctionRef",operand:[{name:"Condition",type:"AliasRef"}]}},{name:"DateRecorded",value:{name:"DateText",type:"FunctionRef",operand:[{path:"dateRecorded",scope:"Condition",type:"Property"}]}},{name:"Abatement",value:{name:"Abatement",type:"FunctionRef",operand:[{name:"Condition",type:"AliasRef"}]}},{name:"Visit",value:{strict:!1,type:"As",operand:{type:"Null"},asTypeSpecifier:{type:"TupleTypeSpecifier",element:[{name:"Start",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"End",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}]}}}]}},sort:{by:[{direction:"desc",type:"ByExpression",expression:{strict:!1,type:"As",operand:{name:"Onset",type:"IdentifierRef"},asTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}},{direction:"desc",type:"ByExpression",expression:{strict:!1,type:"As",operand:{name:"Abatement",type:"IdentifierRef"},asTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}}]}}},{name:"GetEncounterDiagnosesRiskFactorsForOpioidRelatedHarms",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Reason",expression:{path:"reason",type:"Property",source:{name:"Encounter",type:"OperandRef"}}}],relationship:[],where:{type:"Or",operand:[{type:"Or",operand:[{type:"Or",operand:[{type:"Or",operand:[{type:"Or",operand:[{type:"Or",operand:[{type:"Or",operand:[{type:"Or",operand:[{type:"Or",operand:[{type:"Or",operand:[{type:"InValueSet",code:{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Reason",type:"AliasRef"}]},valueset:{name:"Major Depression",preserve:!0}},{type:"InValueSet",code:{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Reason",type:"AliasRef"}]},valueset:{name:"Depression Diagnosis ICD9",preserve:!0}}]},{type:"InValueSet",code:{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Reason",type:"AliasRef"}]},valueset:{name:"Anxiety",preserve:!0}}]},{type:"InValueSet",code:{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Reason",type:"AliasRef"}]},valueset:{name:"Anxiety Disorders ICD9",preserve:!0}}]},{type:"InValueSet",code:{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Reason",type:"AliasRef"}]},valueset:{name:"Substance use disorder",preserve:!0}}]},{type:"InValueSet",code:{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Reason",type:"AliasRef"}]},valueset:{name:"Substance Abuse",preserve:!0}}]},{type:"InValueSet",code:{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Reason",type:"AliasRef"}]},valueset:{name:"Suicide Attempt",preserve:!0}}]},{type:"InValueSet",code:{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Reason",type:"AliasRef"}]},valueset:{name:"Sleep-disordered breathing",preserve:!0}}]},{type:"InValueSet",code:{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Reason",type:"AliasRef"}]},valueset:{name:"Kidney Failure",preserve:!0}}]},{type:"InValueSet",code:{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Reason",type:"AliasRef"}]},valueset:{name:"Chronic Liver Disease",preserve:!0}}]},{type:"InValueSet",code:{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Reason",type:"AliasRef"}]},valueset:{name:"Liver Disease",preserve:!0}}]},return:{expression:{type:"Tuple",element:[{name:"Name",value:{name:"ConceptText",type:"FunctionRef",operand:[{name:"Reason",type:"AliasRef"}]}},{name:"Status",value:{strict:!1,type:"As",operand:{type:"Null"},asTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}},{name:"Onset",value:{strict:!1,type:"As",operand:{type:"Null"},asTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}},{name:"DateRecorded",value:{strict:!1,type:"As",operand:{type:"Null"},asTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}},{name:"Abatement",value:{strict:!1,type:"As",operand:{type:"Null"},asTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}},{name:"Visit",value:{name:"PeriodObject",type:"FunctionRef",operand:[{path:"period",type:"Property",source:{name:"Encounter",type:"OperandRef"}}]}}]}}},operand:[{name:"Encounter",operandTypeSpecifier:{name:"{http://hl7.org/fhir}Encounter",type:"NamedTypeSpecifier"}}]},{name:"ReportEncounterRiskFactorsForOpioidRelatedHarms",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Reason",expression:{type:"Flatten",operand:{type:"Query",source:[{alias:"Encounter",expression:{name:"EncounterRiskFactorsForOpioidRelatedHarms",type:"ExpressionRef"}}],relationship:[],return:{expression:{name:"GetEncounterDiagnosesRiskFactorsForOpioidRelatedHarms",type:"FunctionRef",operand:[{name:"Encounter",type:"AliasRef"}]}}}}}],relationship:[],sort:{by:[{direction:"desc",type:"ByExpression",expression:{path:"Start",type:"Property",source:{name:"Visit",type:"IdentifierRef"}}},{direction:"desc",type:"ByExpression",expression:{path:"End",type:"Property",source:{name:"Visit",type:"IdentifierRef"}}}]}}},{name:"ReportOpioidTaperingProcedures",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Procedure",expression:{name:"OpioidTaperingProcedures",type:"ExpressionRef"}}],relationship:[],return:{expression:{type:"Tuple",element:[{name:"Name",value:{name:"ConceptText",type:"FunctionRef",operand:[{path:"code",scope:"Procedure",type:"Property"}]}},{name:"Status",value:{path:"value",type:"Property",source:{path:"status",scope:"Procedure",type:"Property"}}},{name:"Onset",value:{type:"Coalesce",operand:[{type:"List",element:[{name:"DateTimeText",type:"FunctionRef",operand:[{path:"performedDateTime",scope:"Procedure",type:"Property"}]},{name:"DateTimeText",type:"FunctionRef",operand:[{path:"start",type:"Property",source:{path:"performedPeriod",scope:"Procedure",type:"Property"}}]}]}]}},{name:"DateRecorded",value:{strict:!1,type:"As",operand:{type:"Null"},asTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}},{name:"Abatement",value:{name:"DateTimeText",type:"FunctionRef",operand:[{path:"end",type:"Property",source:{path:"performedPeriod",scope:"Procedure",type:"Property"}}]}},{name:"Visit",value:{strict:!1,type:"As",operand:{type:"Null"},asTypeSpecifier:{type:"TupleTypeSpecifier",element:[{name:"Start",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"End",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}]}}}]}},sort:{by:[{direction:"desc",type:"ByExpression",expression:{strict:!1,type:"As",operand:{name:"Onset",type:"IdentifierRef"},asTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}},{direction:"desc",type:"ByExpression",expression:{strict:!1,type:"As",operand:{name:"Abatement",type:"IdentifierRef"},asTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}}]}}},{name:"ReportMostRecentPositivePregnancyObservation",context:"Patient",accessLevel:"Public",expression:{type:"If",condition:{name:"MostRecentPregnancyObservationIsPositive",type:"ExpressionRef"},then:{type:"Tuple",element:[{name:"Name",value:{name:"ConceptText",type:"FunctionRef",operand:[{path:"code",type:"Property",source:{name:"MostRecentPregnancyObservation",type:"ExpressionRef"}}]}},{name:"Status",value:{name:"ConceptText",type:"FunctionRef",operand:[{path:"valueCodeableConcept",type:"Property",source:{name:"MostRecentPregnancyObservation",type:"ExpressionRef"}}]}},{name:"Onset",value:{type:"ToString",operand:{type:"Coalesce",operand:[{path:"value",type:"Property",source:{path:"effectiveDateTime",type:"Property",source:{name:"MostRecentPregnancyObservation",type:"ExpressionRef"}}},{name:"ToDateTime",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"start",type:"Property",source:{path:"effectivePeriod",type:"Property",source:{name:"MostRecentPregnancyObservation",type:"ExpressionRef"}}}]}]}}},{name:"DateRecorded",value:{type:"ToString",operand:{name:"ToDateTime",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"issued",type:"Property",source:{name:"MostRecentPregnancyObservation",type:"ExpressionRef"}}]}}},{name:"Abatement",value:{strict:!1,type:"As",operand:{type:"Null"},asTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}},{name:"Visit",value:{strict:!1,type:"As",operand:{type:"Null"},asTypeSpecifier:{type:"TupleTypeSpecifier",element:[{name:"Start",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"End",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}]}}}]},else:{type:"As",operand:{type:"Null"},asTypeSpecifier:{type:"TupleTypeSpecifier",element:[{name:"Name",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"Status",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"Onset",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"DateRecorded",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"Abatement",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"Visit",elementType:{type:"TupleTypeSpecifier",element:[{name:"Start",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"End",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}]}}]}}}},{name:"ReportOlderThan65",context:"Patient",accessLevel:"Public",expression:{type:"If",condition:{name:"Is65orOlder",type:"ExpressionRef"},then:{type:"Tuple",element:[{name:"Name",value:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"65 years or older",type:"Literal"}},{name:"Status",value:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"active",type:"Literal"}},{name:"Onset",value:{strict:!1,type:"As",operand:{type:"Null"},asTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}},{name:"DateRecorded",value:{strict:!1,type:"As",operand:{type:"Null"},asTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}},{name:"Abatement",value:{strict:!1,type:"As",operand:{type:"Null"},asTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}},{name:"Visit",value:{strict:!1,type:"As",operand:{type:"Null"},asTypeSpecifier:{type:"TupleTypeSpecifier",element:[{name:"Start",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"End",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}]}}}]},else:{type:"As",operand:{type:"Null"},asTypeSpecifier:{type:"TupleTypeSpecifier",element:[{name:"Name",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"Status",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"Onset",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"DateRecorded",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"Abatement",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"Visit",elementType:{type:"TupleTypeSpecifier",element:[{name:"Start",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"End",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}]}}]}}}},{name:"ReportRiskFactorsForOpioidRelatedHarms",context:"Patient",accessLevel:"Public",expression:{type:"If",condition:{type:"Exists",operand:{name:"PregnancyConditions",type:"ExpressionRef"}},then:{type:"Query",source:[{alias:"Condition",expression:{type:"Union",operand:[{type:"Union",operand:[{name:"ReportConditionRiskFactorsForOpioidRelatedHarms",type:"ExpressionRef"},{name:"ReportEncounterRiskFactorsForOpioidRelatedHarms",type:"ExpressionRef"}]},{type:"Union",operand:[{name:"ReportOpioidTaperingProcedures",type:"ExpressionRef"},{type:"If",condition:{type:"IsNull",operand:{name:"ReportOlderThan65",type:"ExpressionRef"}},then:{type:"As",operand:{type:"Null"},asTypeSpecifier:{type:"ListTypeSpecifier",elementType:{type:"TupleTypeSpecifier",element:[{name:"Name",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"Status",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"Onset",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"DateRecorded",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"Abatement",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"Visit",elementType:{type:"TupleTypeSpecifier",element:[{name:"Start",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"End",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}]}}]}}},else:{type:"List",element:[{name:"ReportOlderThan65",type:"ExpressionRef"}]}}]}]}}],relationship:[]},else:{type:"Query",source:[{alias:"Condition",expression:{type:"Union",operand:[{type:"Union",operand:[{type:"Union",operand:[{name:"ReportConditionRiskFactorsForOpioidRelatedHarms",type:"ExpressionRef"},{name:"ReportEncounterRiskFactorsForOpioidRelatedHarms",type:"ExpressionRef"}]},{type:"Union",operand:[{name:"ReportOpioidTaperingProcedures",type:"ExpressionRef"},{type:"If",condition:{type:"IsNull",operand:{name:"ReportOlderThan65",type:"ExpressionRef"}},then:{type:"As",operand:{type:"Null"},asTypeSpecifier:{type:"ListTypeSpecifier",elementType:{type:"TupleTypeSpecifier",element:[{name:"Name",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"Status",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"Onset",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"DateRecorded",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"Abatement",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"Visit",elementType:{type:"TupleTypeSpecifier",element:[{name:"Start",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"End",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}]}}]}}},else:{type:"List",element:[{name:"ReportOlderThan65",type:"ExpressionRef"}]}}]}]},{type:"If",condition:{type:"IsNull",operand:{name:"ReportMostRecentPositivePregnancyObservation",type:"ExpressionRef"}},then:{type:"As",operand:{type:"Null"},asTypeSpecifier:{type:"ListTypeSpecifier",elementType:{type:"TupleTypeSpecifier",element:[{name:"Name",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"Status",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"Onset",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"DateRecorded",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"Abatement",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"Visit",elementType:{type:"TupleTypeSpecifier",element:[{name:"Start",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"End",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}]}}]}}},else:{type:"List",element:[{name:"ReportMostRecentPositivePregnancyObservation",type:"ExpressionRef"}]}}]}}],relationship:[],sort:{by:[{direction:"desc",type:"ByExpression",expression:{type:"If",condition:{type:"Not",operand:{type:"IsNull",operand:{name:"Onset",type:"IdentifierRef"}}},then:{strict:!1,type:"As",operand:{name:"Onset",type:"IdentifierRef"},asTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},else:{path:"Start",type:"Property",source:{name:"Visit",type:"IdentifierRef"}}}},{direction:"desc",type:"ByExpression",expression:{path:"End",type:"Property",source:{name:"Visit",type:"IdentifierRef"}}},{direction:"desc",type:"ByExpression",expression:{strict:!1,type:"As",operand:{name:"Abatement",type:"IdentifierRef"},asTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}}]}}}},{name:"NumericPainIntensityAssessments",context:"Patient",accessLevel:"Public",expression:{name:"Verified",libraryName:"C3F",type:"FunctionRef",operand:[{name:"ObservationLookBack",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}Observation",codeProperty:"code",codeComparator:"~",type:"Retrieve",codes:{type:"ToList",operand:{name:"Pain severity Wong-Baker FACES Scale",type:"CodeRef"}}},{value:2,unit:"years",type:"Quantity"}]}]}},{name:"ReportNumericPainIntensityAssessments",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Assessment",expression:{name:"NumericPainIntensityAssessments",type:"ExpressionRef"}}],relationship:[],return:{expression:{type:"Tuple",element:[{name:"Name",value:{name:"ConceptTextWithRange",type:"FunctionRef",operand:[{path:"code",scope:"Assessment",type:"Property"}]}},{name:"Score",value:{name:"QuantityText",type:"FunctionRef",operand:[{path:"valueQuantity",scope:"Assessment",type:"Property"}]}},{name:"Interpretation",value:{type:"Coalesce",operand:[{name:"ConceptText",type:"FunctionRef",operand:[{path:"interpretation",scope:"Assessment",type:"Property"}]},{name:"ConceptText",type:"FunctionRef",operand:[{path:"valueCodeableConcept",scope:"Assessment",type:"Property"}]}]}},{name:"Date",value:{name:"ObservationDate",type:"FunctionRef",operand:[{name:"Assessment",type:"AliasRef"}]}}]}},sort:{by:[{direction:"desc",path:"Date",type:"ByColumn"}]}}},{name:"PainEnjoymentGeneralActivityAssessments",context:"Patient",accessLevel:"Public",expression:{name:"Verified",libraryName:"C3F",type:"FunctionRef",operand:[{name:"ObservationLookBack",libraryName:"C3F",type:"FunctionRef",operand:[{type:"Union",operand:[{dataType:"{http://hl7.org/fhir}Observation",codeProperty:"code",codeComparator:"~",type:"Retrieve",codes:{type:"ToList",operand:{name:"Mean score [PEG]",type:"CodeRef"}}},{dataType:"{http://hl7.org/fhir}Observation",codeProperty:"code",codeComparator:"~",type:"Retrieve",codes:{type:"ToList",operand:{name:"Pain Enjoyment General Activity (PEG) Assessment LEGACY",type:"CodeRef"}}}]},{value:2,unit:"years",type:"Quantity"}]}]}},{name:"ReportPainEnjoymentGeneralActivityAssessments",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Assessment",expression:{name:"PainEnjoymentGeneralActivityAssessments",type:"ExpressionRef"}}],let:[{identifier:"Pain",expression:{type:"Query",source:[{alias:"Component",expression:{path:"component",scope:"Assessment",type:"Property"}}],relationship:[],where:{type:"Or",operand:[{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"code",scope:"Component",type:"Property"}]},{type:"ToConcept",operand:{name:"Pain severity in the past week - 0-10 numeric rating [Reported]",type:"CodeRef"}}]},{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"code",scope:"Component",type:"Property"}]},{type:"ToConcept",operand:{name:"Pain LEGACY",type:"CodeRef"}}]}]}}},{identifier:"Enjoyment",expression:{type:"Query",source:[{alias:"Component",expression:{path:"component",scope:"Assessment",type:"Property"}}],relationship:[],where:{type:"Or",operand:[{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"code",scope:"Component",type:"Property"}]},{type:"ToConcept",operand:{name:"What number best describes how pain has interfered with your enjoyment of life during the past week",type:"CodeRef"}}]},{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"code",scope:"Component",type:"Property"}]},{type:"ToConcept",operand:{name:"Enjoyment of life LEGACY",type:"CodeRef"}}]}]}}},{identifier:"GeneralActivity",expression:{type:"Query",source:[{alias:"Component",expression:{path:"component",scope:"Assessment",type:"Property"}}],relationship:[],where:{type:"Or",operand:[{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"code",scope:"Component",type:"Property"}]},{type:"ToConcept",operand:{name:"What number best describes how pain has interfered with your general activity during the past week",type:"CodeRef"}}]},{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"code",scope:"Component",type:"Property"}]},{type:"ToConcept",operand:{name:"General activity LEGACY",type:"CodeRef"}}]}]}}}],relationship:[],where:{valueType:"{urn:hl7-org:elm-types:r1}Boolean",value:"true",type:"Literal"},return:{expression:{type:"Tuple",element:[{name:"Name",value:{name:"ConceptTextWithRange",type:"FunctionRef",operand:[{path:"code",scope:"Assessment",type:"Property"}]}},{name:"Score",value:{name:"QuantityText",type:"FunctionRef",operand:[{path:"valueQuantity",scope:"Assessment",type:"Property"}]}},{name:"Interpretation",value:{type:"Coalesce",operand:[{name:"ConceptText",type:"FunctionRef",operand:[{path:"interpretation",scope:"Assessment",type:"Property"}]},{name:"ConceptText",type:"FunctionRef",operand:[{path:"valueCodeableConcept",scope:"Assessment",type:"Property"}]}]}},{name:"Questions",value:{type:"Query",source:[{alias:"Component",expression:{type:"List",element:[{type:"First",source:{name:"Pain",type:"QueryLetRef"}},{type:"First",source:{name:"Enjoyment",type:"QueryLetRef"}},{type:"First",source:{name:"GeneralActivity",type:"QueryLetRef"}}]}}],relationship:[],where:{type:"Not",operand:{type:"IsNull",operand:{name:"Component",type:"AliasRef"}}},return:{expression:{type:"Tuple",element:[{name:"Name",value:{name:"ConceptText",type:"FunctionRef",operand:[{path:"code",scope:"Component",type:"Property"}]}},{name:"Score",value:{name:"QuantityText",type:"FunctionRef",operand:[{path:"valueQuantity",scope:"Component",type:"Property"}]}}]}}}},{name:"Date",value:{name:"ObservationDate",type:"FunctionRef",operand:[{name:"Assessment",type:"AliasRef"}]}}]}},sort:{by:[{direction:"desc",path:"Date",type:"ByColumn"}]}}},{name:"STarTBackAssessments",context:"Patient",accessLevel:"Public",expression:{name:"Verified",libraryName:"C3F",type:"FunctionRef",operand:[{name:"ObservationLookBack",libraryName:"C3F",type:"FunctionRef",operand:[{type:"Union",operand:[{dataType:"{http://hl7.org/fhir}Observation",codeProperty:"code",codeComparator:"~",type:"Retrieve",codes:{type:"ToList",operand:{name:"Total score [STarT Back]",type:"CodeRef"}}},{dataType:"{http://hl7.org/fhir}Observation",codeProperty:"code",codeComparator:"~",type:"Retrieve",codes:{type:"ToList",operand:{name:"STarT Back Screening Tool LEGACY",type:"CodeRef"}}}]},{value:2,unit:"years",type:"Quantity"}]}]}},{name:"ReportSTarTBackAssessments",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Assessment",expression:{name:"STarTBackAssessments",type:"ExpressionRef"}}],relationship:[],return:{expression:{type:"Tuple",element:[{name:"Name",value:{name:"ConceptTextWithRange",type:"FunctionRef",operand:[{path:"code",scope:"Assessment",type:"Property"}]}},{name:"Score",value:{name:"QuantityText",type:"FunctionRef",operand:[{path:"valueQuantity",scope:"Assessment",type:"Property"}]}},{name:"Interpretation",value:{type:"Coalesce",operand:[{name:"ConceptText",type:"FunctionRef",operand:[{path:"interpretation",scope:"Assessment",type:"Property"}]},{name:"ConceptText",type:"FunctionRef",operand:[{path:"valueCodeableConcept",scope:"Assessment",type:"Property"}]}]}},{name:"Date",value:{name:"ObservationDate",type:"FunctionRef",operand:[{name:"Assessment",type:"AliasRef"}]}}]}},sort:{by:[{direction:"desc",path:"Date",type:"ByColumn"}]}}},{name:"OpioidMedicationOrders",context:"Patient",accessLevel:"Public",expression:{name:"ActiveCompletedOrStoppedMedicationOrder",libraryName:"C3F",type:"FunctionRef",operand:[{name:"MedicationOrderLookBack",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}MedicationOrder",codeProperty:"medicationCodeableConcept",codeComparator:"in",type:"Retrieve",codes:{name:"Opioid pain medications",preserve:!0,type:"ValueSetRef"}},{value:2,unit:"years",type:"Quantity"}]}]}},{name:"OpioidMedicationStatements",context:"Patient",accessLevel:"Public",expression:{name:"ActiveOrCompletedMedicationStatement",libraryName:"C3F",type:"FunctionRef",operand:[{name:"MedicationStatementLookBack",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}MedicationStatement",codeProperty:"medicationCodeableConcept",codeComparator:"in",type:"Retrieve",codes:{name:"Opioid pain medications",preserve:!0,type:"ValueSetRef"}},{value:2,unit:"years",type:"Quantity"}]}]}},{name:"ReportOpioidMedicationOrders",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Order",expression:{name:"OpioidMedicationOrders",type:"ExpressionRef"}}],relationship:[],return:{expression:{type:"Tuple",element:[{name:"Type",value:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"Order",type:"Literal"}},{name:"Name",value:{name:"ConceptText",type:"FunctionRef",operand:[{path:"medicationCodeableConcept",scope:"Order",type:"Property"}]}},{name:"Start",value:{name:"DateTimeText",type:"FunctionRef",operand:[{path:"dateWritten",scope:"Order",type:"Property"}]}},{name:"End",value:{name:"DateTimeText",type:"FunctionRef",operand:[{path:"dateEnded",scope:"Order",type:"Property"}]}},{name:"Status",value:{path:"value",type:"Property",source:{path:"status",scope:"Order",type:"Property"}}}]}},sort:{by:[{direction:"desc",path:"Start",type:"ByColumn"},{direction:"desc",path:"End",type:"ByColumn"}]}}},{name:"ReportOpioidMedicationStatements",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Statement",expression:{name:"OpioidMedicationStatements",type:"ExpressionRef"}}],relationship:[],return:{expression:{type:"Tuple",element:[{name:"Type",value:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"Statement",type:"Literal"}},{name:"Name",value:{name:"ConceptText",type:"FunctionRef",operand:[{path:"medicationCodeableConcept",scope:"Statement",type:"Property"}]}},{name:"Start",value:{name:"MedicationStatementDate",type:"FunctionRef",operand:[{name:"Statement",type:"AliasRef"}]}},{name:"End",value:{name:"DateTimeText",type:"FunctionRef",operand:[{path:"end",type:"Property",source:{path:"effectivePeriod",scope:"Statement",type:"Property"}}]}},{name:"Status",value:{path:"value",type:"Property",source:{path:"status",scope:"Statement",type:"Property"}}}]}},sort:{by:[{direction:"desc",path:"Start",type:"ByColumn"},{direction:"desc",path:"End",type:"ByColumn"}]}}},{name:"ReportOpioidMedications",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Medication",expression:{type:"Union",operand:[{name:"ReportOpioidMedicationOrders",type:"ExpressionRef"},{name:"ReportOpioidMedicationStatements",type:"ExpressionRef"}]}}],relationship:[],sort:{by:[{direction:"desc",path:"Start",type:"ByColumn"},{direction:"desc",path:"End",type:"ByColumn"}]}}},{name:"NonOpioidMedicationOrders",context:"Patient",accessLevel:"Public",expression:{name:"ActiveCompletedOrStoppedMedicationOrder",libraryName:"C3F",type:"FunctionRef",operand:[{name:"MedicationOrderLookBack",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}MedicationOrder",codeProperty:"medicationCodeableConcept",codeComparator:"in",type:"Retrieve",codes:{name:"Nonopioid pain medications",preserve:!0,type:"ValueSetRef"}},{value:2,unit:"years",type:"Quantity"}]}]}},{name:"NonOpioidMedicationStatements",context:"Patient",accessLevel:"Public",expression:{name:"ActiveOrCompletedMedicationStatement",libraryName:"C3F",type:"FunctionRef",operand:[{name:"MedicationStatementLookBack",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}MedicationStatement",codeProperty:"medicationCodeableConcept",codeComparator:"in",type:"Retrieve",codes:{name:"Nonopioid pain medications",preserve:!0,type:"ValueSetRef"}},{value:2,unit:"years",type:"Quantity"}]}]}},{name:"ReportNonOpioidMedicationOrders",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Order",expression:{name:"NonOpioidMedicationOrders",type:"ExpressionRef"}}],relationship:[],return:{expression:{type:"Tuple",element:[{name:"Type",value:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"Order",type:"Literal"}},{name:"Name",value:{name:"ConceptText",type:"FunctionRef",operand:[{path:"medicationCodeableConcept",scope:"Order",type:"Property"}]}},{name:"Start",value:{name:"DateTimeText",type:"FunctionRef",operand:[{path:"dateWritten",scope:"Order",type:"Property"}]}},{name:"End",value:{name:"DateTimeText",type:"FunctionRef",operand:[{path:"dateEnded",scope:"Order",type:"Property"}]}},{name:"Status",value:{path:"value",type:"Property",source:{path:"status",scope:"Order",type:"Property"}}}]}},sort:{by:[{direction:"desc",path:"Start",type:"ByColumn"},{direction:"desc",path:"End",type:"ByColumn"}]}}},{name:"ReportNonOpioidMedicationStatements",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Statement",expression:{name:"NonOpioidMedicationStatements",type:"ExpressionRef"}}],relationship:[],return:{expression:{type:"Tuple",element:[{name:"Type",value:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"Statement",type:"Literal"}},{name:"Name",value:{name:"ConceptText",type:"FunctionRef",operand:[{path:"medicationCodeableConcept",scope:"Statement",type:"Property"}]}},{name:"Start",value:{name:"MedicationStatementDate",type:"FunctionRef",operand:[{name:"Statement",type:"AliasRef"}]}},{name:"End",value:{name:"DateTimeText",type:"FunctionRef",operand:[{path:"end",type:"Property",source:{path:"effectivePeriod",scope:"Statement",type:"Property"}}]}},{name:"Status",value:{path:"value",type:"Property",source:{path:"status",scope:"Statement",type:"Property"}}}]}},sort:{by:[{direction:"desc",path:"Start",type:"ByColumn"},{direction:"desc",path:"End",type:"ByColumn"}]}}},{name:"ReportNonOpioidMedications",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Medication",expression:{type:"Union",operand:[{name:"ReportNonOpioidMedicationOrders",type:"ExpressionRef"},{name:"ReportNonOpioidMedicationStatements",type:"ExpressionRef"}]}}],relationship:[],sort:{by:[{direction:"desc",path:"Start",type:"ByColumn"},{direction:"desc",path:"End",type:"ByColumn"}]}}},{name:"AdjuvantPainMedicationOrders",context:"Patient",accessLevel:"Public",expression:{name:"ActiveCompletedOrStoppedMedicationOrder",libraryName:"C3F",type:"FunctionRef",operand:[{name:"MedicationOrderLookBack",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}MedicationOrder",codeProperty:"medicationCodeableConcept",codeComparator:"in",type:"Retrieve",codes:{name:"Adjuvant pain medications",preserve:!0,type:"ValueSetRef"}},{value:2,unit:"years",type:"Quantity"}]}]}},{name:"AdjuvantPainMedicationStatements",context:"Patient",accessLevel:"Public",expression:{name:"ActiveOrCompletedMedicationStatement",libraryName:"C3F",type:"FunctionRef",operand:[{name:"MedicationStatementLookBack",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}MedicationStatement",codeProperty:"medicationCodeableConcept",codeComparator:"in",type:"Retrieve",codes:{name:"Adjuvant pain medications",preserve:!0,type:"ValueSetRef"}},{value:2,unit:"years",type:"Quantity"}]}]}},{name:"ReportAdjuvantPainMedicationOrders",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Order",expression:{name:"AdjuvantPainMedicationOrders",type:"ExpressionRef"}}],relationship:[],return:{expression:{type:"Tuple",element:[{name:"Type",value:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"Order",type:"Literal"}},{name:"Name",value:{name:"ConceptText",type:"FunctionRef",operand:[{path:"medicationCodeableConcept",scope:"Order",type:"Property"}]}},{name:"Start",value:{name:"DateTimeText",type:"FunctionRef",operand:[{path:"dateWritten",scope:"Order",type:"Property"}]}},{name:"End",value:{name:"DateTimeText",type:"FunctionRef",operand:[{path:"dateEnded",scope:"Order",type:"Property"}]}},{name:"Status",value:{path:"value",type:"Property",source:{path:"status",scope:"Order",type:"Property"}}}]}},sort:{by:[{direction:"desc",path:"Start",type:"ByColumn"},{direction:"desc",path:"End",type:"ByColumn"}]}}},{name:"ReportAdjuvantPainMedicationStatements",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Statement",expression:{name:"AdjuvantPainMedicationStatements",type:"ExpressionRef"}}],relationship:[],return:{expression:{type:"Tuple",element:[{name:"Type",value:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"Statement",type:"Literal"}},{name:"Name",value:{name:"ConceptText",type:"FunctionRef",operand:[{path:"medicationCodeableConcept",scope:"Statement",type:"Property"}]}},{name:"Start",value:{name:"MedicationStatementDate",type:"FunctionRef",operand:[{name:"Statement",type:"AliasRef"}]}},{name:"End",value:{name:"DateTimeText",type:"FunctionRef",operand:[{path:"end",type:"Property",source:{path:"effectivePeriod",scope:"Statement",type:"Property"}}]}},{name:"Status",value:{path:"value",type:"Property",source:{path:"status",scope:"Statement",type:"Property"}}}]}},sort:{by:[{direction:"desc",path:"Start",type:"ByColumn"},{direction:"desc",path:"End",type:"ByColumn"}]}}},{name:"ReportAdjuvantPainMedications",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Medication",expression:{type:"Union",operand:[{name:"ReportAdjuvantPainMedicationOrders",type:"ExpressionRef"},{name:"ReportAdjuvantPainMedicationStatements",type:"ExpressionRef"}]}}],relationship:[],sort:{by:[{direction:"desc",path:"Start",type:"ByColumn"},{direction:"desc",path:"End",type:"ByColumn"}]}}},{name:"NonPharmacologicTreatmentProcedures",context:"Patient",accessLevel:"Public",expression:{name:"ProcedurePerformance",libraryName:"C3F",type:"FunctionRef",operand:[{name:"ProcedureLookBack",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}Procedure",codeProperty:"code",codeComparator:"in",type:"Retrieve",codes:{name:"Non pharmacologic treatments for chronic pain",preserve:!0,type:"ValueSetRef"}},{value:2,unit:"years",type:"Quantity"}]}]}},{name:"ReportNonPharmacologicTreatmentProcedures",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Procedure",expression:{name:"NonPharmacologicTreatmentProcedures",type:"ExpressionRef"}}],relationship:[],return:{expression:{type:"Tuple",element:[{name:"Type",value:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"Procedure",type:"Literal"}},{name:"Name",value:{name:"ConceptText",type:"FunctionRef",operand:[{path:"code",scope:"Procedure",type:"Property"}]}},{name:"Date",value:{type:"Coalesce",operand:[{name:"DateTimeText",type:"FunctionRef",operand:[{path:"performedDateTime",scope:"Procedure",type:"Property"}]},{name:"DateTimeText",type:"FunctionRef",operand:[{path:"start",type:"Property",source:{path:"performedPeriod",scope:"Procedure",type:"Property"}}]}]}}]}},sort:{by:[{direction:"desc",path:"Date",type:"ByColumn"}]}}},{name:"NonPharmacologicTreatmentProcedureRequests",context:"Patient",accessLevel:"Public",expression:{name:"ProcedureRequestAcceptedOrInProgressOrCompleted",libraryName:"C3F",type:"FunctionRef",operand:[{name:"ProcedureRequestLookBack",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}ProcedureRequest",codeProperty:"code",codeComparator:"in",type:"Retrieve",codes:{name:"Non pharmacologic treatments for chronic pain",preserve:!0,type:"ValueSetRef"}},{value:2,unit:"years",type:"Quantity"}]}]}},{name:"ReportNonPharmacologicTreatmentProcedureRequests",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Request",expression:{name:"NonPharmacologicTreatmentProcedureRequests",type:"ExpressionRef"}}],relationship:[],return:{expression:{type:"Tuple",element:[{name:"Type",value:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"ProcedureRequest",type:"Literal"}},{name:"Name",value:{name:"ConceptText",type:"FunctionRef",operand:[{path:"code",scope:"Request",type:"Property"}]}},{name:"Date",value:{name:"DateTimeText",type:"FunctionRef",operand:[{path:"orderedOn",scope:"Request",type:"Property"}]}}]}},sort:{by:[{direction:"desc",path:"Date",type:"ByColumn"}]}}},{name:"NonPharmacologicTreatmentReferralRequests",context:"Patient",accessLevel:"Public",expression:{name:"ReferralRequestAcceptedOrActiveOrCompleted",libraryName:"C3F",type:"FunctionRef",operand:[{name:"ReferralRequestLookBack",libraryName:"C3F",type:"FunctionRef",operand:[{type:"Query",source:[{alias:"Referral",expression:{dataType:"{http://hl7.org/fhir}ReferralRequest",type:"Retrieve"}}],relationship:[],where:{type:"Exists",operand:{type:"Query",source:[{alias:"Service",expression:{path:"serviceRequested",scope:"Referral",type:"Property"}}],relationship:[],where:{type:"InValueSet",code:{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Service",type:"AliasRef"}]},valueset:{name:"Non pharmacologic treatments for chronic pain",preserve:!0}}}}},{value:2,unit:"years",type:"Quantity"}]}]}},{name:"ReportNonPharmacologicTreatmentReferralRequests",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Referral",expression:{name:"NonPharmacologicTreatmentReferralRequests",type:"ExpressionRef"}}],relationship:[],return:{expression:{type:"Tuple",element:[{name:"Type",value:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"Referral",type:"Literal"}},{name:"Name",value:{type:"Coalesce",operand:[{type:"Query",source:[{alias:"Service",expression:{path:"serviceRequested",scope:"Referral",type:"Property"}}],relationship:[],return:{expression:{name:"ConceptText",type:"FunctionRef",operand:[{name:"Service",type:"AliasRef"}]}}}]}},{name:"Date",value:{name:"DateTimeText",type:"FunctionRef",operand:[{path:"dateSent",scope:"Referral",type:"Property"}]}}]}},sort:{by:[{direction:"desc",path:"Date",type:"ByColumn"}]}}},{name:"ReportNonPharmacologicTreatments",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"TreatmentOrRequest",expression:{type:"Union",operand:[{type:"Union",operand:[{name:"ReportNonPharmacologicTreatmentProcedures",type:"ExpressionRef"},{name:"ReportNonPharmacologicTreatmentProcedureRequests",type:"ExpressionRef"}]},{name:"ReportNonPharmacologicTreatmentReferralRequests",type:"ExpressionRef"}]}}],relationship:[],sort:{by:[{direction:"desc",path:"Date",type:"ByColumn"}]}}},{name:"StoolSoftenersAndLaxativesOrders",context:"Patient",accessLevel:"Public",expression:{name:"ActiveCompletedOrStoppedMedicationOrder",libraryName:"C3F",type:"FunctionRef",operand:[{name:"MedicationOrderLookBack",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}MedicationOrder",codeProperty:"medicationCodeableConcept",codeComparator:"in",type:"Retrieve",codes:{name:"Stool softeners and laxatives",preserve:!0,type:"ValueSetRef"}},{value:6,unit:"months",type:"Quantity"}]}]}},{name:"StoolSoftenersAndLaxativesStatements",context:"Patient",accessLevel:"Public",expression:{name:"ActiveOrCompletedMedicationStatement",libraryName:"C3F",type:"FunctionRef",operand:[{name:"MedicationStatementLookBack",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}MedicationStatement",codeProperty:"medicationCodeableConcept",codeComparator:"in",type:"Retrieve",codes:{name:"Stool softeners and laxatives",preserve:!0,type:"ValueSetRef"}},{value:6,unit:"months",type:"Quantity"}]}]}},{name:"ReportStoolSoftenersAndLaxativesOrders",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Order",expression:{name:"StoolSoftenersAndLaxativesOrders",type:"ExpressionRef"}}],relationship:[],return:{expression:{type:"Tuple",element:[{name:"Type",value:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"Order",type:"Literal"}},{name:"Name",value:{name:"ConceptText",type:"FunctionRef",operand:[{path:"medicationCodeableConcept",scope:"Order",type:"Property"}]}},{name:"Start",value:{name:"DateTimeText",type:"FunctionRef",operand:[{path:"dateWritten",scope:"Order",type:"Property"}]}},{name:"End",value:{name:"DateTimeText",type:"FunctionRef",operand:[{path:"dateEnded",scope:"Order",type:"Property"}]}},{name:"Status",value:{path:"value",type:"Property",source:{path:"status",scope:"Order",type:"Property"}}}]}},sort:{by:[{direction:"desc",path:"Start",type:"ByColumn"},{direction:"desc",path:"End",type:"ByColumn"}]}}},{name:"ReportStoolSoftenersAndLaxativesStatements",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Statement",expression:{name:"StoolSoftenersAndLaxativesStatements",type:"ExpressionRef"}}],relationship:[],return:{expression:{type:"Tuple",element:[{name:"Type",value:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"Statement",type:"Literal"}},{name:"Name",value:{name:"ConceptText",type:"FunctionRef",operand:[{path:"medicationCodeableConcept",scope:"Statement",type:"Property"}]}},{name:"Start",value:{name:"MedicationStatementDate",type:"FunctionRef",operand:[{name:"Statement",type:"AliasRef"}]}},{name:"End",value:{name:"DateTimeText",type:"FunctionRef",operand:[{path:"end",type:"Property",source:{path:"effectivePeriod",scope:"Statement",type:"Property"}}]}},{name:"Status",value:{path:"value",type:"Property",source:{path:"status",scope:"Statement",type:"Property"}}}]}},sort:{by:[{direction:"desc",path:"Start",type:"ByColumn"},{direction:"desc",path:"End",type:"ByColumn"}]}}},{name:"ReportStoolSoftenersAndLaxatives",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Laxative",expression:{type:"Union",operand:[{name:"ReportStoolSoftenersAndLaxativesOrders",type:"ExpressionRef"},{name:"ReportStoolSoftenersAndLaxativesStatements",type:"ExpressionRef"}]}}],relationship:[],sort:{by:[{direction:"desc",path:"Start",type:"ByColumn"},{direction:"desc",path:"End",type:"ByColumn"}]}}},{name:"MostRecentMME",context:"Patient",accessLevel:"Public",expression:{name:"MostRecent",libraryName:"C3F",type:"FunctionRef",operand:[{name:"Verified",libraryName:"C3F",type:"FunctionRef",operand:[{name:"ObservationLookBack",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}Observation",codeProperty:"code",codeComparator:"~",type:"Retrieve",codes:{type:"ToList",operand:{name:"Morphine Milligram Equivalent (MME)",type:"CodeRef"}}},{value:6,unit:"months",type:"Quantity"}]}]}]}},{name:"ReportMostRecentMME",context:"Patient",accessLevel:"Public",expression:{type:"If",condition:{type:"IsNull",operand:{name:"MostRecentMME",type:"ExpressionRef"}},then:{type:"As",operand:{type:"Null"},asTypeSpecifier:{type:"TupleTypeSpecifier",element:[{name:"Name",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"Result",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}},{name:"Date",elementType:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}]}},else:{type:"Query",source:[{alias:"MME",expression:{name:"MostRecentMME",type:"ExpressionRef"}}],relationship:[],return:{expression:{type:"Tuple",element:[{name:"Name",value:{name:"ConceptText",type:"FunctionRef",operand:[{path:"code",scope:"MME",type:"Property"}]}},{name:"Result",value:{name:"QuantityText",type:"FunctionRef",operand:[{path:"valueQuantity",scope:"MME",type:"Property"}]}},{name:"Date",value:{name:"ObservationDate",type:"FunctionRef",operand:[{name:"MME",type:"AliasRef"}]}}]}}}}},{name:"UrineDrugScreens",context:"Patient",accessLevel:"Public",expression:{name:"Verified",libraryName:"C3F",type:"FunctionRef",operand:[{name:"ObservationLookBack",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}Observation",codeProperty:"code",codeComparator:"in",type:"Retrieve",codes:{name:"Urine drug screen for pain management",preserve:!0,type:"ValueSetRef"}},{value:1,unit:"year",type:"Quantity"}]}]}},{name:"ReportUrineDrugScreens",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Screening",expression:{name:"UrineDrugScreens",type:"ExpressionRef"}}],relationship:[],return:{expression:{type:"Tuple",element:[{name:"Name",value:{name:"ConceptText",type:"FunctionRef",operand:[{path:"code",scope:"Screening",type:"Property"}]}},{name:"Result",value:{type:"Coalesce",operand:[{name:"QuantityText",type:"FunctionRef",operand:[{path:"valueQuantity",scope:"Screening",type:"Property"}]},{path:"value",type:"Property",source:{path:"valueString",scope:"Screening",type:"Property"}},{name:"ConceptText",type:"FunctionRef",operand:[{path:"valueCodeableConcept",scope:"Screening",type:"Property"}]}]}},{name:"Interpretation",value:{name:"ConceptText",type:"FunctionRef",operand:[{path:"interpretation",scope:"Screening",type:"Property"}]}},{name:"Date",value:{name:"ObservationDate",type:"FunctionRef",operand:[{name:"Screening",type:"AliasRef"}]}}]}},sort:{by:[{direction:"desc",path:"Date",type:"ByColumn"}]}}},{name:"BenzodiazepineMedicationOrders",context:"Patient",accessLevel:"Public",expression:{name:"ActiveCompletedOrStoppedMedicationOrder",libraryName:"C3F",type:"FunctionRef",operand:[{name:"MedicationOrderLookBack",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}MedicationOrder",codeProperty:"medicationCodeableConcept",codeComparator:"in",type:"Retrieve",codes:{name:"Benzodiazepine medications",preserve:!0,type:"ValueSetRef"}},{value:2,unit:"years",type:"Quantity"}]}]}},{name:"BenzodiazepineMedicationStatements",context:"Patient",accessLevel:"Public",expression:{name:"ActiveOrCompletedMedicationStatement",libraryName:"C3F",type:"FunctionRef",operand:[{name:"MedicationStatementLookBack",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}MedicationStatement",codeProperty:"medicationCodeableConcept",codeComparator:"in",type:"Retrieve",codes:{name:"Benzodiazepine medications",preserve:!0,type:"ValueSetRef"}},{value:2,unit:"years",type:"Quantity"}]}]}},{name:"ReportBenzodiazepineMedicationOrders",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Order",expression:{name:"BenzodiazepineMedicationOrders",type:"ExpressionRef"}}],relationship:[],return:{expression:{type:"Tuple",element:[{name:"Type",value:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"Order",type:"Literal"}},{name:"Name",value:{name:"ConceptText",type:"FunctionRef",operand:[{path:"medicationCodeableConcept",scope:"Order",type:"Property"}]}},{name:"Start",value:{name:"DateTimeText",type:"FunctionRef",operand:[{path:"dateWritten",scope:"Order",type:"Property"}]}},{name:"End",value:{name:"DateTimeText",type:"FunctionRef",operand:[{path:"dateEnded",scope:"Order",type:"Property"}]}},{name:"Status",value:{path:"value",type:"Property",source:{path:"status",scope:"Order",type:"Property"}}}]}},sort:{by:[{direction:"desc",path:"Start",type:"ByColumn"},{direction:"desc",path:"End",type:"ByColumn"}]}}},{name:"ReportBenzodiazepineMedicationStatements",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Statement",expression:{name:"BenzodiazepineMedicationStatements",type:"ExpressionRef"}}],relationship:[],return:{expression:{type:"Tuple",element:[{name:"Type",value:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"Statement",type:"Literal"}},{name:"Name",value:{name:"ConceptText",type:"FunctionRef",operand:[{path:"medicationCodeableConcept",scope:"Statement",type:"Property"}]}},{name:"Start",value:{name:"MedicationStatementDate",type:"FunctionRef",operand:[{name:"Statement",type:"AliasRef"}]}},{name:"End",value:{name:"DateTimeText",type:"FunctionRef",operand:[{path:"end",type:"Property",source:{path:"effectivePeriod",scope:"Statement",type:"Property"}}]}},{name:"Status",value:{path:"value",type:"Property",source:{path:"status",scope:"Statement",type:"Property"}}}]}},sort:{by:[{direction:"desc",path:"Start",type:"ByColumn"},{direction:"desc",path:"End",type:"ByColumn"}]}}},{name:"ReportBenzodiazepineMedications",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Medication",expression:{type:"Union",operand:[{name:"ReportBenzodiazepineMedicationOrders",type:"ExpressionRef"},{name:"ReportBenzodiazepineMedicationStatements",type:"ExpressionRef"}]}}],relationship:[],sort:{by:[{direction:"desc",path:"Start",type:"ByColumn"},{direction:"desc",path:"End",type:"ByColumn"}]}}},{name:"NaloxoneMedicationOrders",context:"Patient",accessLevel:"Public",expression:{name:"ActiveCompletedOrStoppedMedicationOrder",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}MedicationOrder",codeProperty:"medicationCodeableConcept",codeComparator:"in",type:"Retrieve",codes:{name:"Naloxone medications",preserve:!0,type:"ValueSetRef"}}]}},{name:"NaloxoneMedicationStatements",context:"Patient",accessLevel:"Public",expression:{name:"ActiveOrCompletedMedicationStatement",libraryName:"C3F",type:"FunctionRef",operand:[{dataType:"{http://hl7.org/fhir}MedicationStatement",codeProperty:"medicationCodeableConcept",codeComparator:"in",type:"Retrieve",codes:{name:"Naloxone medications",preserve:!0,type:"ValueSetRef"}}]}},{name:"ReportNaloxoneMedicationOrders",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Order",expression:{name:"NaloxoneMedicationOrders",type:"ExpressionRef"}}],relationship:[],return:{expression:{type:"Tuple",element:[{name:"Type",value:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"Order",type:"Literal"}},{name:"Name",value:{name:"ConceptText",type:"FunctionRef",operand:[{path:"medicationCodeableConcept",scope:"Order",type:"Property"}]}},{name:"Start",value:{name:"DateTimeText",type:"FunctionRef",operand:[{path:"dateWritten",scope:"Order",type:"Property"}]}},{name:"End",value:{name:"DateTimeText",type:"FunctionRef",operand:[{path:"dateEnded",scope:"Order",type:"Property"}]}},{name:"Status",value:{path:"value",type:"Property",source:{path:"status",scope:"Order",type:"Property"}}}]}},sort:{by:[{direction:"desc",path:"Start",type:"ByColumn"},{direction:"desc",path:"End",type:"ByColumn"}]}}},{name:"ReportNaloxoneMedicationStatements",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Statement",expression:{name:"NaloxoneMedicationStatements",type:"ExpressionRef"}}],relationship:[],return:{expression:{type:"Tuple",element:[{name:"Type",value:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"Statement",type:"Literal"}},{name:"Name",value:{name:"ConceptText",type:"FunctionRef",operand:[{path:"medicationCodeableConcept",scope:"Statement",type:"Property"}]}},{name:"Start",value:{name:"MedicationStatementDate",type:"FunctionRef",operand:[{name:"Statement",type:"AliasRef"}]}},{name:"End",value:{name:"DateTimeText",type:"FunctionRef",operand:[{path:"end",type:"Property",source:{path:"effectivePeriod",scope:"Statement",type:"Property"}}]}},{name:"Status",value:{path:"value",type:"Property",source:{path:"status",scope:"Statement",type:"Property"}}}]}},sort:{by:[{direction:"desc",path:"Start",type:"ByColumn"},{direction:"desc",path:"End",type:"ByColumn"}]}}},{name:"ReportNaloxoneMedications",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Medication",expression:{type:"Union",operand:[{name:"ReportNaloxoneMedicationOrders",type:"ExpressionRef"},{name:"ReportNaloxoneMedicationStatements",type:"ExpressionRef"}]}}],relationship:[],sort:{by:[{direction:"desc",path:"Start",type:"ByColumn"},{direction:"desc",path:"End",type:"ByColumn"}]}}},{name:"RiskScreeningsRelevantToPainManagement",context:"Patient",accessLevel:"Public",expression:{name:"Verified",libraryName:"C3F",type:"FunctionRef",operand:[{name:"ObservationLookBack",libraryName:"C3F",type:"FunctionRef",operand:[{type:"Union",operand:[{type:"Union",operand:[{dataType:"{http://hl7.org/fhir}Observation",codeProperty:"code",codeComparator:"in",type:"Retrieve",codes:{name:"Risk assessments relevant to pain management",preserve:!0,type:"ValueSetRef"}},{dataType:"{http://hl7.org/fhir}Observation",codeProperty:"code",codeComparator:"~",type:"Retrieve",codes:{type:"ToList",operand:{name:"Single question r/t ETOH use",type:"CodeRef"}}}]},{dataType:"{http://hl7.org/fhir}Observation",codeProperty:"code",codeComparator:"~",type:"Retrieve",codes:{type:"ToList",operand:{name:"Single question r/t drug use",type:"CodeRef"}}}]},{value:1,unit:"year",type:"Quantity"}]}]}},{name:"ReportRiskScreeningsRelevantToPainManagement",context:"Patient",accessLevel:"Public",expression:{type:"Query",source:[{alias:"Screening",expression:{name:"RiskScreeningsRelevantToPainManagement",type:"ExpressionRef"}}],relationship:[],return:{expression:{type:"Tuple",element:[{name:"Name",value:{name:"ConceptTextWithRange",type:"FunctionRef",operand:[{path:"code",scope:"Screening",type:"Property"}]}},{name:"Score",value:{type:"Coalesce",operand:[{name:"QuantityText",type:"FunctionRef",operand:[{path:"valueQuantity",scope:"Screening",type:"Property"}]},{path:"value",type:"Property",source:{path:"valueString",scope:"Screening",type:"Property"}}]}},{name:"Interpretation",value:{type:"Coalesce",operand:[{name:"ConceptText",type:"FunctionRef",operand:[{path:"interpretation",scope:"Screening",type:"Property"}]},{name:"ConceptText",type:"FunctionRef",operand:[{path:"valueCodeableConcept",scope:"Screening",type:"Property"}]}]}},{name:"Date",value:{name:"ObservationDate",type:"FunctionRef",operand:[{name:"Screening",type:"AliasRef"}]}}]}},sort:{by:[{direction:"desc",path:"Date",type:"ByColumn"}]}}},{name:"Summary",context:"Patient",accessLevel:"Public",expression:{type:"Tuple",element:[{name:"Patient",value:{type:"Tuple",element:[{name:"Name",value:{type:"Concatenate",operand:[{type:"Concatenate",operand:[{type:"Combine",source:{type:"Query",source:[{alias:"Given",expression:{type:"Flatten",operand:{type:"Query",source:[{alias:"$this",expression:{path:"name",type:"Property",source:{name:"Patient",type:"ExpressionRef"}}}],where:{type:"Not",operand:{type:"IsNull",operand:{path:"given",type:"Property",source:{name:"$this",type:"AliasRef"}}}},return:{distinct:!1,expression:{path:"given",type:"Property",source:{name:"$this",type:"AliasRef"}}}}}}],relationship:[],return:{expression:{path:"value",scope:"Given",type:"Property"}}},separator:{valueType:"{urn:hl7-org:elm-types:r1}String",value:" ",type:"Literal"}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:" ",type:"Literal"}]},{type:"Combine",source:{type:"Query",source:[{alias:"Family",expression:{type:"Flatten",operand:{type:"Query",source:[{alias:"$this",expression:{path:"name",type:"Property",source:{name:"Patient",type:"ExpressionRef"}}}],where:{type:"Not",operand:{type:"IsNull",operand:{path:"family",type:"Property",source:{name:"$this",type:"AliasRef"}}}},return:{distinct:!1,expression:{path:"family",type:"Property",source:{name:"$this",type:"AliasRef"}}}}}}],relationship:[],return:{expression:{path:"value",scope:"Family",type:"Property"}}},separator:{valueType:"{urn:hl7-org:elm-types:r1}String",value:" ",type:"Literal"}}]}},{name:"Gender",value:{path:"value",type:"Property",source:{path:"gender",type:"Property",source:{name:"Patient",type:"ExpressionRef"}}}},{name:"Age",value:{precision:"Year",type:"CalculateAge",operand:{path:"birthDate.value",type:"Property",source:{name:"Patient",type:"ExpressionRef"}}}},{name:"MeetsInclusionCriteria",value:{name:"MeetsInclusionCriteria",type:"ExpressionRef"}}]}},{name:"PertinentMedicalHistory",value:{type:"Tuple",element:[{name:"ConditionsAssociatedWithChronicPain",value:{name:"ReportConditionsAssociatedWithChronicPain",type:"ExpressionRef"}},{name:"RiskFactorsForOpioidRelatedHarms",value:{name:"ReportRiskFactorsForOpioidRelatedHarms",type:"ExpressionRef"}}]}},{name:"PainAssessments",value:{type:"Tuple",element:[{name:"NumericPainIntensityAssessments",value:{name:"ReportNumericPainIntensityAssessments",type:"ExpressionRef"}},{name:"PainEnjoymentGeneralActivityAssessments",value:{name:"ReportPainEnjoymentGeneralActivityAssessments",type:"ExpressionRef"}},{name:"STarTBackAssessments",value:{name:"ReportSTarTBackAssessments",type:"ExpressionRef"}}]}},{name:"HistoricalTreatments",value:{type:"Tuple",element:[{name:"OpioidMedications",value:{name:"ReportOpioidMedications",type:"ExpressionRef"}},{name:"NonOpioidMedications",value:{name:"ReportNonOpioidMedications",type:"ExpressionRef"}},{name:"AdjuvantPainMedications",value:{name:"ReportAdjuvantPainMedications",type:"ExpressionRef"}},{name:"NonPharmacologicTreatments",value:{name:"ReportNonPharmacologicTreatments",type:"ExpressionRef"}},{name:"StoolSoftenersAndLaxatives",value:{name:"ReportStoolSoftenersAndLaxatives",type:"ExpressionRef"}}]}},{name:"RiskConsiderations",value:{type:"Tuple",element:[{name:"MostRecentMME",value:{name:"ReportMostRecentMME",type:"ExpressionRef"}},{name:"UrineDrugScreens",value:{name:"ReportUrineDrugScreens",type:"ExpressionRef"}},{name:"BenzodiazepineMedications",value:{name:"ReportBenzodiazepineMedications",type:"ExpressionRef"}},{name:"NaloxoneMedications",value:{name:"ReportNaloxoneMedications",type:"ExpressionRef"}},{name:"RiskScreeningsRelevantToPainManagement",value:{name:"ReportRiskScreeningsRelevantToPainManagement",type:"ExpressionRef"}}]}}]}}]}},c={library:s},r={annotation:[{translatorVersion:"2.9.0",translatorOptions:"",type:"CqlToElmInfo"}],identifier:{id:"CDSConnectCommonsForFHIRv102",version:"2.1.0"},schemaIdentifier:{id:"urn:hl7-org:elm",version:"r1"},usings:{def:[{localIdentifier:"System",uri:"urn:hl7-org:elm-types:r1"},{localIdentifier:"FHIR",uri:"http://hl7.org/fhir",version:"1.0.2"}]},includes:{def:[{localIdentifier:"FHIRHelpers",path:"FHIRHelpers",version:"1.0.2"}]},statements:{def:[{name:"ObservationsByConcept",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Observation",expression:{dataType:"{http://hl7.org/fhir}Observation",type:"Retrieve"}}],relationship:[],where:{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"code",scope:"Observation",type:"Property"}]},{name:"Koncept",type:"OperandRef"}]}},operand:[{name:"Koncept",operandTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}Concept",type:"NamedTypeSpecifier"}}]},{name:"Verified",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Observation",expression:{name:"Observations",type:"OperandRef"}}],relationship:[],where:{type:"In",operand:[{path:"value",type:"Property",source:{path:"status",scope:"Observation",type:"Property"}},{type:"List",element:[{valueType:"{urn:hl7-org:elm-types:r1}String",value:"final",type:"Literal"},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"amended",type:"Literal"}]}]}},operand:[{name:"Observations",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Observation",type:"NamedTypeSpecifier"}}}]},{name:"WithUnit",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Observation",expression:{name:"Observations",type:"OperandRef"}}],relationship:[],where:{type:"Or",operand:[{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"unit",type:"Property",source:{path:"valueQuantity",scope:"Observation",type:"Property"}}},{name:"Unit",type:"OperandRef"}]},{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"code",type:"Property",source:{path:"valueQuantity",scope:"Observation",type:"Property"}}},{name:"Unit",type:"OperandRef"}]}]}},operand:[{name:"Observations",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Observation",type:"NamedTypeSpecifier"}}},{name:"Unit",operandTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}]},{name:"ObservationLookBack",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Observation",expression:{name:"Observations",type:"OperandRef"}}],let:[{identifier:"LookBackInterval",expression:{lowClosed:!0,highClosed:!0,type:"Interval",low:{type:"Subtract",operand:[{type:"Now"},{name:"LookBack",type:"OperandRef"}]},high:{type:"Now"}}}],relationship:[],where:{type:"Or",operand:[{type:"Or",operand:[{type:"In",operand:[{path:"value",type:"Property",source:{path:"effectiveDateTime",scope:"Observation",type:"Property"}},{name:"LookBackInterval",type:"QueryLetRef"}]},{type:"Overlaps",operand:[{name:"ToInterval",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"effectivePeriod",scope:"Observation",type:"Property"}]},{name:"LookBackInterval",type:"QueryLetRef"}]}]},{type:"In",operand:[{name:"ToDateTime",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"issued",scope:"Observation",type:"Property"}]},{name:"LookBackInterval",type:"QueryLetRef"}]}]}},operand:[{name:"Observations",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Observation",type:"NamedTypeSpecifier"}}},{name:"LookBack",operandTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}Quantity",type:"NamedTypeSpecifier"}}]},{name:"MostRecent",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Last",source:{type:"Query",source:[{alias:"Observation",expression:{name:"Observations",type:"OperandRef"}}],relationship:[],sort:{by:[{direction:"asc",type:"ByExpression",expression:{type:"Coalesce",operand:[{path:"value",type:"Property",source:{name:"effectiveDateTime",type:"IdentifierRef"}},{path:"value",type:"Property",source:{path:"end",type:"Property",source:{name:"effectivePeriod",type:"IdentifierRef"}}},{path:"value",type:"Property",source:{path:"start",type:"Property",source:{name:"effectivePeriod",type:"IdentifierRef"}}},{path:"value",type:"Property",source:{name:"issued",type:"IdentifierRef"}}]}}]}}},operand:[{name:"Observations",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Observation",type:"NamedTypeSpecifier"}}}]},{name:"FirstObservation",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"First",source:{type:"Query",source:[{alias:"Observation",expression:{name:"Observations",type:"OperandRef"}}],relationship:[],sort:{by:[{direction:"asc",type:"ByExpression",expression:{type:"Coalesce",operand:[{path:"value",type:"Property",source:{name:"effectiveDateTime",type:"IdentifierRef"}},{path:"value",type:"Property",source:{path:"start",type:"Property",source:{name:"effectivePeriod",type:"IdentifierRef"}}},{path:"value",type:"Property",source:{path:"end",type:"Property",source:{name:"effectivePeriod",type:"IdentifierRef"}}},{path:"value",type:"Property",source:{name:"issued",type:"IdentifierRef"}}]}}]}}},operand:[{name:"Observations",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Observation",type:"NamedTypeSpecifier"}}}]},{name:"QuantityValue",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{name:"ToQuantity",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"valueQuantity",type:"Property",source:{name:"Observation",type:"OperandRef"}}]},operand:[{name:"Observation",operandTypeSpecifier:{name:"{http://hl7.org/fhir}Observation",type:"NamedTypeSpecifier"}}]},{name:"ConceptValue",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"valueCodeableConcept",type:"Property",source:{name:"Observation",type:"OperandRef"}}]},operand:[{name:"Observation",operandTypeSpecifier:{name:"{http://hl7.org/fhir}Observation",type:"NamedTypeSpecifier"}}]},{name:"FindDate",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Coalesce",operand:[{path:"value",type:"Property",source:{path:"effectiveDateTime",type:"Property",source:{name:"Observation",type:"OperandRef"}}},{path:"value",type:"Property",source:{path:"end",type:"Property",source:{path:"effectivePeriod",type:"Property",source:{name:"Observation",type:"OperandRef"}}}},{path:"value",type:"Property",source:{path:"start",type:"Property",source:{path:"effectivePeriod",type:"Property",source:{name:"Observation",type:"OperandRef"}}}},{path:"value",type:"Property",source:{path:"issued",type:"Property",source:{name:"Observation",type:"OperandRef"}}}]},operand:[{name:"Observation",operandTypeSpecifier:{name:"{http://hl7.org/fhir}Observation",type:"NamedTypeSpecifier"}}]},{name:"HighestObservation",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Max",source:{type:"Query",source:[{alias:"Observation",expression:{name:"Observations",type:"OperandRef"}}],relationship:[],return:{expression:{name:"ToQuantity",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"valueQuantity",scope:"Observation",type:"Property"}]}}}},operand:[{name:"Observations",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Observation",type:"NamedTypeSpecifier"}}}]},{name:"AverageObservation",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Avg",source:{type:"Query",source:[{alias:"Observation",expression:{name:"Observations",type:"OperandRef"}}],relationship:[],return:{expression:{name:"ToQuantity",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"valueQuantity",scope:"Observation",type:"Property"}]}}}},operand:[{name:"Observations",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Observation",type:"NamedTypeSpecifier"}}}]},{name:"ConditionsByConcept",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Condition",expression:{dataType:"{http://hl7.org/fhir}Condition",type:"Retrieve"}}],relationship:[],where:{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"code",scope:"Condition",type:"Property"}]},{name:"Koncept",type:"OperandRef"}]}},operand:[{name:"Koncept",operandTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}Concept",type:"NamedTypeSpecifier"}}]},{name:"Confirmed",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Condition",expression:{name:"Conditions",type:"OperandRef"}}],relationship:[],where:{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"verificationStatus",scope:"Condition",type:"Property"}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"confirmed",type:"Literal"}]}},operand:[{name:"Conditions",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Condition",type:"NamedTypeSpecifier"}}}]},{name:"ActiveCondition",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Condition",expression:{name:"Conditions",type:"OperandRef"}}],relationship:[],where:{type:"And",operand:[{type:"And",operand:[{type:"And",operand:[{type:"And",operand:[{type:"And",operand:[{type:"And",operand:[{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"clinicalStatus",scope:"Condition",type:"Property"}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"active",type:"Literal"}]},{type:"IsNull",operand:{path:"abatementDateTime",scope:"Condition",type:"Property"}}]},{type:"IsNull",operand:{path:"abatementQuantity",scope:"Condition",type:"Property"}}]},{type:"Not",operand:{type:"IsTrue",operand:{path:"value",type:"Property",source:{path:"abatementBoolean",scope:"Condition",type:"Property"}}}}]},{type:"IsNull",operand:{path:"abatementPeriod",scope:"Condition",type:"Property"}}]},{type:"IsNull",operand:{path:"abatementRange",scope:"Condition",type:"Property"}}]},{type:"IsNull",operand:{path:"abatementString",scope:"Condition",type:"Property"}}]}},operand:[{name:"Conditions",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Condition",type:"NamedTypeSpecifier"}}}]},{name:"ActiveOrRecurring",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Condition",expression:{name:"Conditions",type:"OperandRef"}}],relationship:[],where:{type:"In",operand:[{path:"value",type:"Property",source:{path:"clinicalStatus",scope:"Condition",type:"Property"}},{type:"List",element:[{valueType:"{urn:hl7-org:elm-types:r1}String",value:"active",type:"Literal"},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"relapse",type:"Literal"}]}]}},operand:[{name:"Conditions",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Condition",type:"NamedTypeSpecifier"}}}]},{name:"ConditionLookBack",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Condition",expression:{name:"Conditions",type:"OperandRef"}}],let:[{identifier:"LookBackInterval",expression:{lowClosed:!0,highClosed:!0,type:"Interval",low:{type:"Subtract",operand:[{type:"Now"},{name:"LookBack",type:"OperandRef"}]},high:{type:"Now"}}}],relationship:[],where:{type:"Or",operand:[{type:"Or",operand:[{type:"In",operand:[{path:"value",type:"Property",source:{path:"onsetDateTime",scope:"Condition",type:"Property"}},{name:"LookBackInterval",type:"QueryLetRef"}]},{type:"Overlaps",operand:[{name:"ToInterval",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"onsetPeriod",scope:"Condition",type:"Property"}]},{name:"LookBackInterval",type:"QueryLetRef"}]}]},{type:"In",operand:[{type:"ToDateTime",operand:{path:"value",type:"Property",source:{path:"dateRecorded",scope:"Condition",type:"Property"}}},{name:"LookBackInterval",type:"QueryLetRef"}]}]}},operand:[{name:"Conditions",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Condition",type:"NamedTypeSpecifier"}}},{name:"LookBack",operandTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}Quantity",type:"NamedTypeSpecifier"}}]},{name:"MostRecentCondition",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Last",source:{type:"Query",source:[{alias:"Condition",expression:{name:"Conditions",type:"OperandRef"}}],relationship:[],sort:{by:[{direction:"asc",type:"ByExpression",expression:{type:"Coalesce",operand:[{path:"value",type:"Property",source:{name:"onsetDateTime",type:"IdentifierRef"}},{path:"value",type:"Property",source:{path:"end",type:"Property",source:{name:"onsetPeriod",type:"IdentifierRef"}}},{path:"value",type:"Property",source:{path:"start",type:"Property",source:{name:"onsetPeriod",type:"IdentifierRef"}}},{type:"ToDateTime",operand:{path:"value",type:"Property",source:{name:"dateRecorded",type:"IdentifierRef"}}}]}}]}}},operand:[{name:"Conditions",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Condition",type:"NamedTypeSpecifier"}}}]},{name:"FirstCondition",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"First",source:{type:"Query",source:[{alias:"Condition",expression:{name:"Conditions",type:"OperandRef"}}],relationship:[],sort:{by:[{direction:"asc",type:"ByExpression",expression:{type:"Coalesce",operand:[{path:"value",type:"Property",source:{name:"onsetDateTime",type:"IdentifierRef"}},{path:"value",type:"Property",source:{path:"start",type:"Property",source:{name:"onsetPeriod",type:"IdentifierRef"}}},{path:"value",type:"Property",source:{path:"end",type:"Property",source:{name:"onsetPeriod",type:"IdentifierRef"}}},{type:"ToDateTime",operand:{path:"value",type:"Property",source:{name:"dateRecorded",type:"IdentifierRef"}}}]}}]}}},operand:[{name:"Conditions",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Condition",type:"NamedTypeSpecifier"}}}]},{name:"ProceduresByConcept",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Procedure",expression:{dataType:"{http://hl7.org/fhir}Procedure",type:"Retrieve"}}],relationship:[],where:{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"code",scope:"Procedure",type:"Property"}]},{name:"Koncept",type:"OperandRef"}]}},operand:[{name:"Koncept",operandTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}Concept",type:"NamedTypeSpecifier"}}]},{name:"Completed",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Procedure",expression:{name:"Procedures",type:"OperandRef"}}],relationship:[],where:{type:"And",operand:[{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"status",scope:"Procedure",type:"Property"}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"completed",type:"Literal"}]},{type:"Not",operand:{type:"IsTrue",operand:{path:"value",type:"Property",source:{path:"notPerformed",scope:"Procedure",type:"Property"}}}}]}},operand:[{name:"Procedures",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Procedure",type:"NamedTypeSpecifier"}}}]},{name:"ProcedureInProgress",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Procedure",expression:{name:"Procedures",type:"OperandRef"}}],relationship:[],where:{type:"And",operand:[{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"status",scope:"Procedure",type:"Property"}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"in-progress",type:"Literal"}]},{type:"Not",operand:{type:"IsTrue",operand:{path:"value",type:"Property",source:{path:"notPerformed",scope:"Procedure",type:"Property"}}}}]}},operand:[{name:"Procedures",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Procedure",type:"NamedTypeSpecifier"}}}]},{name:"ProcedurePerformance",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Procedure",expression:{name:"Procedures",type:"OperandRef"}}],relationship:[],where:{type:"And",operand:[{type:"Not",operand:{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"status",scope:"Procedure",type:"Property"}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"entered-in-error",type:"Literal"}]}},{type:"Not",operand:{type:"IsTrue",operand:{path:"value",type:"Property",source:{path:"notPerformed",scope:"Procedure",type:"Property"}}}}]}},operand:[{name:"Procedures",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Procedure",type:"NamedTypeSpecifier"}}}]},{name:"ProcedureLookBack",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Procedure",expression:{name:"Procedures",type:"OperandRef"}}],let:[{identifier:"LookBackInterval",expression:{lowClosed:!0,highClosed:!0,type:"Interval",low:{type:"Subtract",operand:[{type:"Now"},{name:"LookBack",type:"OperandRef"}]},high:{type:"Now"}}}],relationship:[],where:{type:"Or",operand:[{type:"In",operand:[{path:"value",type:"Property",source:{path:"performedDateTime",scope:"Procedure",type:"Property"}},{name:"LookBackInterval",type:"QueryLetRef"}]},{type:"Overlaps",operand:[{name:"ToInterval",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"performedPeriod",scope:"Procedure",type:"Property"}]},{name:"LookBackInterval",type:"QueryLetRef"}]}]}},operand:[{name:"Procedures",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Procedure",type:"NamedTypeSpecifier"}}},{name:"LookBack",operandTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}Quantity",type:"NamedTypeSpecifier"}}]},{name:"MostRecentProcedure",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Last",source:{type:"Query",source:[{alias:"Procedure",expression:{name:"Procedures",type:"OperandRef"}}],relationship:[],sort:{by:[{direction:"asc",type:"ByExpression",expression:{type:"Coalesce",operand:[{path:"value",type:"Property",source:{name:"performedDateTime",type:"IdentifierRef"}},{path:"value",type:"Property",source:{path:"end",type:"Property",source:{name:"performedPeriod",type:"IdentifierRef"}}},{path:"value",type:"Property",source:{path:"start",type:"Property",source:{name:"performedPeriod",type:"IdentifierRef"}}}]}}]}}},operand:[{name:"Procedures",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Procedure",type:"NamedTypeSpecifier"}}}]},{name:"FirstProcedure",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"First",source:{type:"Query",source:[{alias:"Procedure",expression:{name:"Procedures",type:"OperandRef"}}],relationship:[],sort:{by:[{direction:"asc",type:"ByExpression",expression:{type:"Coalesce",operand:[{path:"value",type:"Property",source:{name:"performedDateTime",type:"IdentifierRef"}},{path:"value",type:"Property",source:{path:"start",type:"Property",source:{name:"performedPeriod",type:"IdentifierRef"}}},{path:"value",type:"Property",source:{path:"end",type:"Property",source:{name:"performedPeriod",type:"IdentifierRef"}}}]}}]}}},operand:[{name:"Procedures",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Procedure",type:"NamedTypeSpecifier"}}}]},{name:"ProcedureRequestsByConcept",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Request",expression:{dataType:"{http://hl7.org/fhir}ProcedureRequest",type:"Retrieve"}}],relationship:[],where:{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"code",scope:"Request",type:"Property"}]},{name:"Koncept",type:"OperandRef"}]}},operand:[{name:"Koncept",operandTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}Concept",type:"NamedTypeSpecifier"}}]},{name:"ProcedureRequestAcceptedOrInProgressOrCompleted",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Request",expression:{name:"ProcedureRequests",type:"OperandRef"}}],relationship:[],where:{type:"In",operand:[{path:"value",type:"Property",source:{path:"status",scope:"Request",type:"Property"}},{type:"List",element:[{valueType:"{urn:hl7-org:elm-types:r1}String",value:"accepted",type:"Literal"},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"in-progress",type:"Literal"},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"completed",type:"Literal"}]}]}},operand:[{name:"ProcedureRequests",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}ProcedureRequest",type:"NamedTypeSpecifier"}}}]},{name:"ProcedureRequestLookBack",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Request",expression:{name:"ProcedureRequests",type:"OperandRef"}}],relationship:[],where:{type:"In",operand:[{path:"value",type:"Property",source:{path:"orderedOn",scope:"Request",type:"Property"}},{lowClosed:!0,highClosed:!0,type:"Interval",low:{type:"Subtract",operand:[{type:"Now"},{name:"LookBack",type:"OperandRef"}]},high:{type:"Now"}}]}},operand:[{name:"ProcedureRequests",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}ProcedureRequest",type:"NamedTypeSpecifier"}}},{name:"LookBack",operandTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}Quantity",type:"NamedTypeSpecifier"}}]},{name:"ReferralRequestsByServiceRequestedConcept",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Referral",expression:{dataType:"{http://hl7.org/fhir}ReferralRequest",type:"Retrieve"}}],relationship:[],where:{type:"Exists",operand:{type:"Query",source:[{alias:"Service",expression:{path:"serviceRequested",scope:"Referral",type:"Property"}}],relationship:[],where:{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Service",type:"AliasRef"}]},{name:"Koncept",type:"OperandRef"}]}}}},operand:[{name:"Koncept",operandTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}Concept",type:"NamedTypeSpecifier"}}]},{name:"ReferralRequestAcceptedOrActiveOrCompleted",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Referral",expression:{name:"Referrals",type:"OperandRef"}}],relationship:[],where:{type:"In",operand:[{path:"value",type:"Property",source:{path:"status",scope:"Referral",type:"Property"}},{type:"List",element:[{valueType:"{urn:hl7-org:elm-types:r1}String",value:"accepted",type:"Literal"},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"active",type:"Literal"},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"completed",type:"Literal"}]}]}},operand:[{name:"Referrals",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}ReferralRequest",type:"NamedTypeSpecifier"}}}]},{name:"ReferralRequestLookBack",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Referral",expression:{name:"Referrals",type:"OperandRef"}}],relationship:[],where:{type:"In",operand:[{path:"value",type:"Property",source:{path:"dateSent",scope:"Referral",type:"Property"}},{lowClosed:!0,highClosed:!0,type:"Interval",low:{type:"Subtract",operand:[{type:"Now"},{name:"LookBack",type:"OperandRef"}]},high:{type:"Now"}}]}},operand:[{name:"Referrals",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}ReferralRequest",type:"NamedTypeSpecifier"}}},{name:"LookBack",operandTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}Quantity",type:"NamedTypeSpecifier"}}]},{name:"MedicationStatementsByConcept",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Statement",expression:{dataType:"{http://hl7.org/fhir}MedicationStatement",type:"Retrieve"}}],relationship:[],where:{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"medicationCodeableConcept",scope:"Statement",type:"Property"}]},{name:"Koncept",type:"OperandRef"}]}},operand:[{name:"Koncept",operandTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}Concept",type:"NamedTypeSpecifier"}}]},{name:"MedicationOrdersByConcept",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Order",expression:{dataType:"{http://hl7.org/fhir}MedicationOrder",type:"Retrieve"}}],relationship:[],where:{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"medicationCodeableConcept",scope:"Order",type:"Property"}]},{name:"Koncept",type:"OperandRef"}]}},operand:[{name:"Koncept",operandTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}Concept",type:"NamedTypeSpecifier"}}]},{name:"ActiveMedicationStatement",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Statement",expression:{name:"Statements",type:"OperandRef"}}],let:[{identifier:"EffectivePeriod",expression:{name:"ToInterval",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"effectivePeriod",scope:"Statement",type:"Property"}]}}],relationship:[],where:{type:"And",operand:[{type:"And",operand:[{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"status",scope:"Statement",type:"Property"}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"active",type:"Literal"}]},{type:"Not",operand:{type:"IsTrue",operand:{path:"value",type:"Property",source:{path:"wasNotTaken",scope:"Statement",type:"Property"}}}}]},{type:"Or",operand:[{type:"IsNull",operand:{type:"End",operand:{name:"EffectivePeriod",type:"QueryLetRef"}}},{type:"After",operand:[{type:"End",operand:{name:"EffectivePeriod",type:"QueryLetRef"}},{type:"Now"}]}]}]}},operand:[{name:"Statements",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}MedicationStatement",type:"NamedTypeSpecifier"}}}]},{name:"ActiveOrCompletedMedicationStatement",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Statement",expression:{name:"Statements",type:"OperandRef"}}],relationship:[],where:{type:"Or",operand:[{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"status",scope:"Statement",type:"Property"}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"active",type:"Literal"}]},{type:"And",operand:[{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"status",scope:"Statement",type:"Property"}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"completed",type:"Literal"}]},{type:"Not",operand:{type:"IsTrue",operand:{path:"value",type:"Property",source:{path:"wasNotTaken",scope:"Statement",type:"Property"}}}}]}]}},operand:[{name:"Statements",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}MedicationStatement",type:"NamedTypeSpecifier"}}}]},{name:"ActiveMedicationOrder",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Order",expression:{name:"Orders",type:"OperandRef"}}],relationship:[],where:{type:"And",operand:[{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"status",scope:"Order",type:"Property"}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"active",type:"Literal"}]},{type:"IsNull",operand:{path:"value",type:"Property",source:{path:"dateEnded",scope:"Order",type:"Property"}}}]}},operand:[{name:"Orders",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}MedicationOrder",type:"NamedTypeSpecifier"}}}]},{name:"ActiveOrCompletedMedicationOrder",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Order",expression:{name:"Orders",type:"OperandRef"}}],relationship:[],where:{type:"Or",operand:[{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"status",scope:"Order",type:"Property"}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"active",type:"Literal"}]},{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"status",scope:"Order",type:"Property"}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"completed",type:"Literal"}]}]}},operand:[{name:"Orders",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}MedicationOrder",type:"NamedTypeSpecifier"}}}]},{name:"ActiveCompletedOrStoppedMedicationOrder",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Order",expression:{name:"Orders",type:"OperandRef"}}],relationship:[],where:{type:"Or",operand:[{type:"Or",operand:[{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"status",scope:"Order",type:"Property"}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"active",type:"Literal"}]},{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"status",scope:"Order",type:"Property"}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"completed",type:"Literal"}]}]},{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"status",scope:"Order",type:"Property"}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"stopped",type:"Literal"}]}]}},operand:[{name:"Orders",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}MedicationOrder",type:"NamedTypeSpecifier"}}}]},{name:"MedicationStatementLookBack",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Statement",expression:{name:"Statements",type:"OperandRef"}}],let:[{identifier:"LookBackInterval",expression:{lowClosed:!0,highClosed:!0,type:"Interval",low:{type:"Subtract",operand:[{type:"Now"},{name:"LookBack",type:"OperandRef"}]},high:{type:"Now"}}}],relationship:[],where:{type:"Or",operand:[{type:"In",operand:[{path:"value",type:"Property",source:{path:"effectiveDateTime",scope:"Statement",type:"Property"}},{name:"LookBackInterval",type:"QueryLetRef"}]},{type:"Overlaps",operand:[{name:"ToInterval",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"effectivePeriod",scope:"Statement",type:"Property"}]},{name:"LookBackInterval",type:"QueryLetRef"}]}]}},operand:[{name:"Statements",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}MedicationStatement",type:"NamedTypeSpecifier"}}},{name:"LookBack",operandTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}Quantity",type:"NamedTypeSpecifier"}}]},{name:"MedicationOrderLookBack",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Order",expression:{name:"Orders",type:"OperandRef"}}],relationship:[],where:{type:"In",operand:[{path:"value",type:"Property",source:{path:"dateWritten",scope:"Order",type:"Property"}},{lowClosed:!0,highClosed:!0,type:"Interval",low:{type:"Subtract",operand:[{type:"Now"},{name:"LookBack",type:"OperandRef"}]},high:{type:"Now"}}]}},operand:[{name:"Orders",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}MedicationOrder",type:"NamedTypeSpecifier"}}},{name:"LookBack",operandTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}Quantity",type:"NamedTypeSpecifier"}}]},{name:"MedicationDispenseLookBack",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Dispense",expression:{name:"Dispenses",type:"OperandRef"}}],let:[{identifier:"LookBackInterval",expression:{lowClosed:!0,highClosed:!0,type:"Interval",low:{type:"Subtract",operand:[{type:"Now"},{name:"LookBack",type:"OperandRef"}]},high:{type:"Now"}}}],relationship:[],where:{type:"Or",operand:[{type:"In",operand:[{path:"value",type:"Property",source:{path:"whenHandedOver",scope:"Dispense",type:"Property"}},{name:"LookBackInterval",type:"QueryLetRef"}]},{type:"In",operand:[{path:"value",type:"Property",source:{path:"whenPrepared",scope:"Dispense",type:"Property"}},{name:"LookBackInterval",type:"QueryLetRef"}]}]}},operand:[{name:"Dispenses",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}MedicationDispense",type:"NamedTypeSpecifier"}}},{name:"LookBack",operandTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}Quantity",type:"NamedTypeSpecifier"}}]},{name:"EncountersByConcept",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Encounter",expression:{dataType:"{http://hl7.org/fhir}Encounter",type:"Retrieve"}}],relationship:[],where:{type:"Exists",operand:{type:"Query",source:[{alias:"Type",expression:{path:"type",scope:"Encounter",type:"Property"}}],relationship:[],where:{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{name:"Type",type:"AliasRef"}]},{name:"Koncept",type:"OperandRef"}]}}}},operand:[{name:"Koncept",operandTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}Concept",type:"NamedTypeSpecifier"}}]},{name:"InProgress",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Encounter",expression:{name:"Encounters",type:"OperandRef"}}],relationship:[],where:{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"status",scope:"Encounter",type:"Property"}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"in-progress",type:"Literal"}]}},operand:[{name:"Encounters",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Encounter",type:"NamedTypeSpecifier"}}}]},{name:"Finished",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Encounter",expression:{name:"Encounters",type:"OperandRef"}}],relationship:[],where:{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"status",scope:"Encounter",type:"Property"}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"finished",type:"Literal"}]}},operand:[{name:"Encounters",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Encounter",type:"NamedTypeSpecifier"}}}]},{name:"NotCancelled",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Encounter",expression:{name:"Encounters",type:"OperandRef"}}],relationship:[],where:{type:"Not",operand:{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"status",scope:"Encounter",type:"Property"}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"cancelled",type:"Literal"}]}}},operand:[{name:"Encounters",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Encounter",type:"NamedTypeSpecifier"}}}]},{name:"EncounterLookBack",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Encounter",expression:{name:"Encounters",type:"OperandRef"}}],let:[{identifier:"LookBackInterval",expression:{lowClosed:!0,highClosed:!0,type:"Interval",low:{type:"Subtract",operand:[{type:"Now"},{name:"LookBack",type:"OperandRef"}]},high:{type:"Now"}}}],relationship:[],where:{type:"Overlaps",operand:[{name:"ToInterval",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"period",scope:"Encounter",type:"Property"}]},{name:"LookBackInterval",type:"QueryLetRef"}]}},operand:[{name:"Encounters",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Encounter",type:"NamedTypeSpecifier"}}},{name:"LookBack",operandTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}Quantity",type:"NamedTypeSpecifier"}}]},{name:"AllergyIntolerancesByConcept",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Allergy",expression:{dataType:"{http://hl7.org/fhir}AllergyIntolerance",type:"Retrieve"}}],relationship:[],where:{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"substance",scope:"Allergy",type:"Property"}]},{name:"Koncept",type:"OperandRef"}]}},operand:[{name:"Koncept",operandTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}Concept",type:"NamedTypeSpecifier"}}]},{name:"ActiveOrConfirmedAllergyIntolerance",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Allergy",expression:{name:"AllergyIntolerances",type:"OperandRef"}}],relationship:[],where:{type:"Or",operand:[{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"status",scope:"Allergy",type:"Property"}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"active",type:"Literal"}]},{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"status",scope:"Allergy",type:"Property"}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"confirmed",type:"Literal"}]}]}},operand:[{name:"AllergyIntolerances",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}AllergyIntolerance",type:"NamedTypeSpecifier"}}}]},{name:"GoalLookBack",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Goal",expression:{name:"Goals",type:"OperandRef"}}],let:[{identifier:"LookBackInterval",expression:{lowClosed:!0,highClosed:!0,type:"Interval",low:{type:"Subtract",operand:[{type:"Now"},{name:"LookBack",type:"OperandRef"}]},high:{type:"Now"}}}],relationship:[],where:{type:"Or",operand:[{type:"Or",operand:[{type:"Or",operand:[{type:"In",operand:[{type:"ToDateTime",operand:{path:"value",type:"Property",source:{path:"startDate",scope:"Goal",type:"Property"}}},{name:"LookBackInterval",type:"QueryLetRef"}]},{type:"In",operand:[{type:"ToDateTime",operand:{path:"value",type:"Property",source:{path:"targetDate",scope:"Goal",type:"Property"}}},{name:"LookBackInterval",type:"QueryLetRef"}]}]},{type:"In",operand:[{type:"ToDateTime",operand:{type:"Add",operand:[{path:"value",type:"Property",source:{path:"startDate",scope:"Goal",type:"Property"}},{name:"ToQuantity",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"targetQuantity",scope:"Goal",type:"Property"}]}]}},{name:"LookBackInterval",type:"QueryLetRef"}]}]},{type:"In",operand:[{type:"ToDateTime",operand:{path:"value",type:"Property",source:{path:"statusDate",scope:"Goal",type:"Property"}}},{name:"LookBackInterval",type:"QueryLetRef"}]}]}},operand:[{name:"Goals",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Goal",type:"NamedTypeSpecifier"}}},{name:"LookBack",operandTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}Quantity",type:"NamedTypeSpecifier"}}]},{name:"ImmunizationsByConcept",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Immunization",expression:{dataType:"{http://hl7.org/fhir}Immunization",type:"Retrieve"}}],relationship:[],where:{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"vaccineCode",scope:"Immunization",type:"Property"}]},{name:"Koncept",type:"OperandRef"}]}},operand:[{name:"Koncept",operandTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}Concept",type:"NamedTypeSpecifier"}}]},{name:"CompletedImmunization",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Immunization",expression:{name:"Immunizations",type:"OperandRef"}}],relationship:[],where:{type:"And",operand:[{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"status",scope:"Immunization",type:"Property"}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"completed",type:"Literal"}]},{type:"Not",operand:{type:"IsTrue",operand:{path:"value",type:"Property",source:{path:"wasNotGiven",scope:"Immunization",type:"Property"}}}}]}},operand:[{name:"Immunizations",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Immunization",type:"NamedTypeSpecifier"}}}]},{name:"ImmunizationLookBack",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Immunization",expression:{name:"Immunizations",type:"OperandRef"}}],let:[{identifier:"LookBackInterval",expression:{lowClosed:!0,highClosed:!0,type:"Interval",low:{type:"Subtract",operand:[{type:"Now"},{name:"LookBack",type:"OperandRef"}]},high:{type:"Now"}}}],relationship:[],where:{type:"In",operand:[{path:"value",type:"Property",source:{path:"date",scope:"Immunization",type:"Property"}},{name:"LookBackInterval",type:"QueryLetRef"}]}},operand:[{name:"Immunizations",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Immunization",type:"NamedTypeSpecifier"}}},{name:"LookBack",operandTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}Quantity",type:"NamedTypeSpecifier"}}]},{name:"MostRecentImmunization",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Last",source:{type:"Query",source:[{alias:"Immunization",expression:{name:"Immunizations",type:"OperandRef"}}],relationship:[],sort:{by:[{direction:"asc",type:"ByExpression",expression:{path:"value",type:"Property",source:{name:"date",type:"IdentifierRef"}}}]}}},operand:[{name:"Immunizations",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Immunization",type:"NamedTypeSpecifier"}}}]},{name:"FirstImmunization",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"First",source:{type:"Query",source:[{alias:"Immunization",expression:{name:"Immunizations",type:"OperandRef"}}],relationship:[],sort:{by:[{direction:"asc",type:"ByExpression",expression:{path:"value",type:"Property",source:{name:"date",type:"IdentifierRef"}}}]}}},operand:[{name:"Immunizations",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Immunization",type:"NamedTypeSpecifier"}}}]},{name:"DevicesByConcept",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Device",expression:{dataType:"{http://hl7.org/fhir}Device",type:"Retrieve"}}],relationship:[],where:{type:"Equivalent",operand:[{name:"ToConcept",libraryName:"FHIRHelpers",type:"FunctionRef",operand:[{path:"type",scope:"Device",type:"Property"}]},{name:"Koncept",type:"OperandRef"}]}},operand:[{name:"Koncept",operandTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}Concept",type:"NamedTypeSpecifier"}}]},{name:"ActiveDevice",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Query",source:[{alias:"Device",expression:{name:"Devices",type:"OperandRef"}}],relationship:[],where:{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"status",scope:"Device",type:"Property"}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"available",type:"Literal"}]}},operand:[{name:"Devices",operandTypeSpecifier:{type:"ListTypeSpecifier",elementType:{name:"{http://hl7.org/fhir}Device",type:"NamedTypeSpecifier"}}}]}]}},I={library:r},o={annotation:[{translatorVersion:"2.9.0",translatorOptions:"",type:"CqlToElmInfo"}],identifier:{id:"FHIRHelpers",version:"1.0.2"},schemaIdentifier:{id:"urn:hl7-org:elm",version:"r1"},usings:{def:[{localIdentifier:"System",uri:"urn:hl7-org:elm-types:r1"},{localIdentifier:"FHIR",uri:"http://hl7.org/fhir",version:"1.0.2"}]},statements:{def:[{name:"ToInterval",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"If",condition:{type:"IsNull",operand:{name:"period",type:"OperandRef"}},then:{type:"As",operand:{type:"Null"},asTypeSpecifier:{type:"IntervalTypeSpecifier",pointType:{name:"{urn:hl7-org:elm-types:r1}DateTime",type:"NamedTypeSpecifier"}}},else:{type:"If",condition:{type:"IsNull",operand:{path:"start",type:"Property",source:{name:"period",type:"OperandRef"}}},then:{lowClosed:!1,highClosed:!0,type:"Interval",low:{path:"value",type:"Property",source:{path:"start",type:"Property",source:{name:"period",type:"OperandRef"}}},high:{path:"value",type:"Property",source:{path:"end",type:"Property",source:{name:"period",type:"OperandRef"}}}},else:{lowClosed:!0,highClosed:!0,type:"Interval",low:{path:"value",type:"Property",source:{path:"start",type:"Property",source:{name:"period",type:"OperandRef"}}},high:{path:"value",type:"Property",source:{path:"end",type:"Property",source:{name:"period",type:"OperandRef"}}}}}},operand:[{name:"period",operandTypeSpecifier:{name:"{http://hl7.org/fhir}Period",type:"NamedTypeSpecifier"}}]},{name:"ToCalendarUnit",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Case",comparand:{name:"unit",type:"OperandRef"},caseItem:[{when:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"ms",type:"Literal"},then:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"millisecond",type:"Literal"}},{when:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"s",type:"Literal"},then:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"second",type:"Literal"}},{when:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"min",type:"Literal"},then:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"minute",type:"Literal"}},{when:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"h",type:"Literal"},then:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"hour",type:"Literal"}},{when:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"d",type:"Literal"},then:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"day",type:"Literal"}},{when:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"wk",type:"Literal"},then:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"week",type:"Literal"}},{when:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"mo",type:"Literal"},then:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"month",type:"Literal"}},{when:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"a",type:"Literal"},then:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"year",type:"Literal"}}],else:{name:"unit",type:"OperandRef"}},operand:[{name:"unit",operandTypeSpecifier:{name:"{urn:hl7-org:elm-types:r1}String",type:"NamedTypeSpecifier"}}]},{name:"ToQuantity",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Case",caseItem:[{when:{type:"IsNull",operand:{name:"quantity",type:"OperandRef"}},then:{asType:"{urn:hl7-org:elm-types:r1}Quantity",type:"As",operand:{type:"Null"}}},{when:{type:"IsNull",operand:{path:"value",type:"Property",source:{name:"quantity",type:"OperandRef"}}},then:{asType:"{urn:hl7-org:elm-types:r1}Quantity",type:"As",operand:{type:"Null"}}},{when:{type:"Not",operand:{type:"IsNull",operand:{path:"comparator",type:"Property",source:{name:"quantity",type:"OperandRef"}}}},then:{asType:"{urn:hl7-org:elm-types:r1}Quantity",type:"As",operand:{type:"Message",source:{type:"Null"},condition:{valueType:"{urn:hl7-org:elm-types:r1}Boolean",value:"true",type:"Literal"},code:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"FHIRHelpers.ToQuantity.ComparatorQuantityNotSupported",type:"Literal"},severity:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"Error",type:"Literal"},message:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"FHIR Quantity value has a comparator and cannot be converted to a System.Quantity value.",type:"Literal"}}}},{when:{type:"Or",operand:[{type:"Or",operand:[{type:"IsNull",operand:{path:"system",type:"Property",source:{name:"quantity",type:"OperandRef"}}},{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"system",type:"Property",source:{name:"quantity",type:"OperandRef"}}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"http://unitsofmeasure.org",type:"Literal"}]}]},{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"system",type:"Property",source:{name:"quantity",type:"OperandRef"}}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"http://hl7.org/fhirpath/CodeSystem/calendar-units",type:"Literal"}]}]},then:{classType:"{urn:hl7-org:elm-types:r1}Quantity",type:"Instance",element:[{name:"value",value:{path:"value",type:"Property",source:{path:"value",type:"Property",source:{name:"quantity",type:"OperandRef"}}}},{name:"unit",value:{name:"ToCalendarUnit",type:"FunctionRef",operand:[{type:"Coalesce",operand:[{path:"value",type:"Property",source:{path:"code",type:"Property",source:{name:"quantity",type:"OperandRef"}}},{path:"value",type:"Property",source:{path:"unit",type:"Property",source:{name:"quantity",type:"OperandRef"}}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"1",type:"Literal"}]}]}}]}}],else:{asType:"{urn:hl7-org:elm-types:r1}Quantity",type:"As",operand:{type:"Message",source:{type:"Null"},condition:{valueType:"{urn:hl7-org:elm-types:r1}Boolean",value:"true",type:"Literal"},code:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"FHIRHelpers.ToQuantity.InvalidFHIRQuantity",type:"Literal"},severity:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"Error",type:"Literal"},message:{type:"Concatenate",operand:[{type:"Coalesce",operand:[{type:"Concatenate",operand:[{type:"Coalesce",operand:[{type:"Concatenate",operand:[{type:"Coalesce",operand:[{type:"Concatenate",operand:[{type:"Coalesce",operand:[{type:"Concatenate",operand:[{type:"Coalesce",operand:[{type:"Concatenate",operand:[{type:"Coalesce",operand:[{valueType:"{urn:hl7-org:elm-types:r1}String",value:"Invalid FHIR Quantity code: ",type:"Literal"},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"",type:"Literal"}]},{type:"Coalesce",operand:[{path:"value",type:"Property",source:{path:"unit",type:"Property",source:{name:"quantity",type:"OperandRef"}}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"",type:"Literal"}]}]},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"",type:"Literal"}]},{type:"Coalesce",operand:[{valueType:"{urn:hl7-org:elm-types:r1}String",value:" (",type:"Literal"},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"",type:"Literal"}]}]},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"",type:"Literal"}]},{type:"Coalesce",operand:[{path:"value",type:"Property",source:{path:"system",type:"Property",source:{name:"quantity",type:"OperandRef"}}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"",type:"Literal"}]}]},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"",type:"Literal"}]},{type:"Coalesce",operand:[{valueType:"{urn:hl7-org:elm-types:r1}String",value:"|",type:"Literal"},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"",type:"Literal"}]}]},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"",type:"Literal"}]},{type:"Coalesce",operand:[{path:"value",type:"Property",source:{path:"code",type:"Property",source:{name:"quantity",type:"OperandRef"}}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"",type:"Literal"}]}]},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"",type:"Literal"}]},{type:"Coalesce",operand:[{valueType:"{urn:hl7-org:elm-types:r1}String",value:")",type:"Literal"},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"",type:"Literal"}]}]}}}},operand:[{name:"quantity",operandTypeSpecifier:{name:"{http://hl7.org/fhir}Quantity",type:"NamedTypeSpecifier"}}]},{name:"ToQuantityIgnoringComparator",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"Case",caseItem:[{when:{type:"IsNull",operand:{name:"quantity",type:"OperandRef"}},then:{asType:"{urn:hl7-org:elm-types:r1}Quantity",type:"As",operand:{type:"Null"}}},{when:{type:"IsNull",operand:{path:"value",type:"Property",source:{name:"quantity",type:"OperandRef"}}},then:{asType:"{urn:hl7-org:elm-types:r1}Quantity",type:"As",operand:{type:"Null"}}},{when:{type:"Or",operand:[{type:"Or",operand:[{type:"IsNull",operand:{path:"system",type:"Property",source:{name:"quantity",type:"OperandRef"}}},{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"system",type:"Property",source:{name:"quantity",type:"OperandRef"}}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"http://unitsofmeasure.org",type:"Literal"}]}]},{type:"Equal",operand:[{path:"value",type:"Property",source:{path:"system",type:"Property",source:{name:"quantity",type:"OperandRef"}}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"http://hl7.org/fhirpath/CodeSystem/calendar-units",type:"Literal"}]}]},then:{classType:"{urn:hl7-org:elm-types:r1}Quantity",type:"Instance",element:[{name:"value",value:{path:"value",type:"Property",source:{path:"value",type:"Property",source:{name:"quantity",type:"OperandRef"}}}},{name:"unit",value:{name:"ToCalendarUnit",type:"FunctionRef",operand:[{type:"Coalesce",operand:[{path:"value",type:"Property",source:{path:"code",type:"Property",source:{name:"quantity",type:"OperandRef"}}},{path:"value",type:"Property",source:{path:"unit",type:"Property",source:{name:"quantity",type:"OperandRef"}}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"1",type:"Literal"}]}]}}]}}],else:{asType:"{urn:hl7-org:elm-types:r1}Quantity",type:"As",operand:{type:"Message",source:{type:"Null"},condition:{valueType:"{urn:hl7-org:elm-types:r1}Boolean",value:"true",type:"Literal"},code:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"FHIRHelpers.ToQuantity.InvalidFHIRQuantity",type:"Literal"},severity:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"Error",type:"Literal"},message:{type:"Concatenate",operand:[{type:"Coalesce",operand:[{type:"Concatenate",operand:[{type:"Coalesce",operand:[{type:"Concatenate",operand:[{type:"Coalesce",operand:[{type:"Concatenate",operand:[{type:"Coalesce",operand:[{type:"Concatenate",operand:[{type:"Coalesce",operand:[{type:"Concatenate",operand:[{type:"Coalesce",operand:[{valueType:"{urn:hl7-org:elm-types:r1}String",value:"Invalid FHIR Quantity code: ",type:"Literal"},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"",type:"Literal"}]},{type:"Coalesce",operand:[{path:"value",type:"Property",source:{path:"unit",type:"Property",source:{name:"quantity",type:"OperandRef"}}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"",type:"Literal"}]}]},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"",type:"Literal"}]},{type:"Coalesce",operand:[{valueType:"{urn:hl7-org:elm-types:r1}String",value:" (",type:"Literal"},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"",type:"Literal"}]}]},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"",type:"Literal"}]},{type:"Coalesce",operand:[{path:"value",type:"Property",source:{path:"system",type:"Property",source:{name:"quantity",type:"OperandRef"}}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"",type:"Literal"}]}]},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"",type:"Literal"}]},{type:"Coalesce",operand:[{valueType:"{urn:hl7-org:elm-types:r1}String",value:"|",type:"Literal"},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"",type:"Literal"}]}]},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"",type:"Literal"}]},{type:"Coalesce",operand:[{path:"value",type:"Property",source:{path:"code",type:"Property",source:{name:"quantity",type:"OperandRef"}}},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"",type:"Literal"}]}]},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"",type:"Literal"}]},{type:"Coalesce",operand:[{valueType:"{urn:hl7-org:elm-types:r1}String",value:")",type:"Literal"},{valueType:"{urn:hl7-org:elm-types:r1}String",value:"",type:"Literal"}]}]}}}},operand:[{name:"quantity",operandTypeSpecifier:{name:"{http://hl7.org/fhir}Quantity",type:"NamedTypeSpecifier"}}]},{name:"ToInterval",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"If",condition:{type:"IsNull",operand:{name:"quantity",type:"OperandRef"}},then:{type:"As",operand:{type:"Null"},asTypeSpecifier:{type:"IntervalTypeSpecifier",pointType:{name:"{urn:hl7-org:elm-types:r1}Quantity",type:"NamedTypeSpecifier"}}},else:{type:"Case",comparand:{path:"value",type:"Property",source:{path:"comparator",type:"Property",source:{name:"quantity",type:"OperandRef"}}},caseItem:[{when:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"<",type:"Literal"},then:{lowClosed:!0,highClosed:!1,type:"Interval",low:{asType:"{urn:hl7-org:elm-types:r1}Quantity",type:"As",operand:{type:"Null"}},high:{name:"ToQuantityIgnoringComparator",type:"FunctionRef",operand:[{name:"quantity",type:"OperandRef"}]}}},{when:{valueType:"{urn:hl7-org:elm-types:r1}String",value:"<=",type:"Literal"},then:{lowClosed:!0,highClosed:!0,type:"Interval",low:{asType:"{urn:hl7-org:elm-types:r1}Quantity",type:"As",operand:{type:"Null"}},high:{name:"ToQuantityIgnoringComparator",type:"FunctionRef",operand:[{name:"quantity",type:"OperandRef"}]}}},{when:{valueType:"{urn:hl7-org:elm-types:r1}String",value:">=",type:"Literal"},then:{lowClosed:!0,highClosed:!0,type:"Interval",low:{name:"ToQuantityIgnoringComparator",type:"FunctionRef",operand:[{name:"quantity",type:"OperandRef"}]},high:{asType:"{urn:hl7-org:elm-types:r1}Quantity",type:"As",operand:{type:"Null"}}}},{when:{valueType:"{urn:hl7-org:elm-types:r1}String",value:">",type:"Literal"},then:{lowClosed:!1,highClosed:!0,type:"Interval",low:{name:"ToQuantityIgnoringComparator",type:"FunctionRef",operand:[{name:"quantity",type:"OperandRef"}]},high:{asType:"{urn:hl7-org:elm-types:r1}Quantity",type:"As",operand:{type:"Null"}}}}],else:{lowClosed:!0,highClosed:!0,type:"Interval",low:{name:"ToQuantity",type:"FunctionRef",operand:[{name:"quantity",type:"OperandRef"}]},high:{name:"ToQuantity",type:"FunctionRef",operand:[{name:"quantity",type:"OperandRef"}]}}}},operand:[{name:"quantity",operandTypeSpecifier:{name:"{http://hl7.org/fhir}Quantity",type:"NamedTypeSpecifier"}}]},{name:"ToRatio",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"If",condition:{type:"IsNull",operand:{name:"ratio",type:"OperandRef"}},then:{asType:"{urn:hl7-org:elm-types:r1}Ratio",type:"As",operand:{type:"Null"}},else:{classType:"{urn:hl7-org:elm-types:r1}Ratio",type:"Instance",element:[{name:"numerator",value:{name:"ToQuantity",type:"FunctionRef",operand:[{path:"numerator",type:"Property",source:{name:"ratio",type:"OperandRef"}}]}},{name:"denominator",value:{name:"ToQuantity",type:"FunctionRef",operand:[{path:"denominator",type:"Property",source:{name:"ratio",type:"OperandRef"}}]}}]}},operand:[{name:"ratio",operandTypeSpecifier:{name:"{http://hl7.org/fhir}Ratio",type:"NamedTypeSpecifier"}}]},{name:"ToInterval",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"If",condition:{type:"IsNull",operand:{name:"range",type:"OperandRef"}},then:{type:"As",operand:{type:"Null"},asTypeSpecifier:{type:"IntervalTypeSpecifier",pointType:{name:"{urn:hl7-org:elm-types:r1}Quantity",type:"NamedTypeSpecifier"}}},else:{lowClosed:!0,highClosed:!0,type:"Interval",low:{name:"ToQuantity",type:"FunctionRef",operand:[{path:"low",type:"Property",source:{name:"range",type:"OperandRef"}}]},high:{name:"ToQuantity",type:"FunctionRef",operand:[{path:"high",type:"Property",source:{name:"range",type:"OperandRef"}}]}}},operand:[{name:"range",operandTypeSpecifier:{name:"{http://hl7.org/fhir}Range",type:"NamedTypeSpecifier"}}]},{name:"ToCode",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"If",condition:{type:"IsNull",operand:{name:"coding",type:"OperandRef"}},then:{asType:"{urn:hl7-org:elm-types:r1}Code",type:"As",operand:{type:"Null"}},else:{classType:"{urn:hl7-org:elm-types:r1}Code",type:"Instance",element:[{name:"code",value:{path:"value",type:"Property",source:{path:"code",type:"Property",source:{name:"coding",type:"OperandRef"}}}},{name:"system",value:{path:"value",type:"Property",source:{path:"system",type:"Property",source:{name:"coding",type:"OperandRef"}}}},{name:"version",value:{path:"value",type:"Property",source:{path:"version",type:"Property",source:{name:"coding",type:"OperandRef"}}}},{name:"display",value:{path:"value",type:"Property",source:{path:"display",type:"Property",source:{name:"coding",type:"OperandRef"}}}}]}},operand:[{name:"coding",operandTypeSpecifier:{name:"{http://hl7.org/fhir}Coding",type:"NamedTypeSpecifier"}}]},{name:"ToConcept",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{type:"If",condition:{type:"IsNull",operand:{name:"concept",type:"OperandRef"}},then:{asType:"{urn:hl7-org:elm-types:r1}Concept",type:"As",operand:{type:"Null"}},else:{classType:"{urn:hl7-org:elm-types:r1}Concept",type:"Instance",element:[{name:"codes",value:{type:"Query",source:[{alias:"C",expression:{path:"coding",type:"Property",source:{name:"concept",type:"OperandRef"}}}],relationship:[],return:{expression:{name:"ToCode",type:"FunctionRef",operand:[{name:"C",type:"AliasRef"}]}}}},{name:"display",value:{path:"value",type:"Property",source:{path:"text",type:"Property",source:{name:"concept",type:"OperandRef"}}}}]}},operand:[{name:"concept",operandTypeSpecifier:{name:"{http://hl7.org/fhir}CodeableConcept",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}uuid",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ProvenanceEntityRole",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}UnitsOfTime",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}AddressType",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}AllergyIntoleranceCategory",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}SpecimenStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}DetectedIssueSeverity",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}IssueSeverity",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}DataElementStringency",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}VisionEyes",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}StructureDefinitionKind",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}QuestionnaireResponseStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}AllergyIntoleranceType",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}DocumentRelationshipType",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ConformanceResourceStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}CarePlanActivityStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ActionList",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ParticipationStatus",type:"NamedTypeSpecifier"}}]},{name:"ToDateTime",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}instant",type:"NamedTypeSpecifier"}}]},{name:"ToDateTime",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}dateTime",type:"NamedTypeSpecifier"}}]},{name:"ToDate",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}date",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}DocumentMode",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}AssertionOperatorType",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}DaysOfWeek",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ConformanceEventMode",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}IssueType",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}TransactionMode",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ContentType",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}FamilyHistoryStatus",type:"NamedTypeSpecifier"}}]},{name:"ToInteger",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}positiveInt",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}AuditEventParticipantNetworkType",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}CommunicationStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ClinicalImpressionStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}AssertionResponseTypes",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}DeviceUseRequestPriority",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}OrderStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}NarrativeStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}string",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}GuidePageKind",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}GuideDependencyType",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ResourceVersionPolicy",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}MedicationAdministrationStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}RestfulConformanceMode",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}NamingSystemIdentifierType",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}AccountStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ProcedureRequestPriority",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}MedicationDispenseStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}IdentifierUse",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}DigitalMediaType",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}BindingStrength",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ParticipantRequired",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}XPathUsageType",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}InstanceAvailability",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}id",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}FilterOperator",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}NamingSystemType",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ExtensionContext",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ClaimType",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}AuditEventOutcome",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ConstraintSeverity",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}GuideResourcePurpose",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ProcedureStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}DeviceMetricCategory",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}QuestionnaireStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ResponseType",type:"NamedTypeSpecifier"}}]},{name:"ToDecimal",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}decimal",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}AggregationMode",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}EventTiming",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}GoalStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}SearchParamType",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}SystemRestfulInteraction",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}SubscriptionChannelType",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ProcedureRequestStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ReferralStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}AssertionDirectionType",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}SlicingRules",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}LinkType",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}AllergyIntoleranceCriticality",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ConceptMapEquivalence",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}PropertyRepresentation",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}AuditEventAction",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}SearchModifierCode",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}DeviceUseRequestStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}CompositionStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}AppointmentStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}MessageSignificanceCategory",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}OperationParameterUse",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ListMode",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ObservationStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ParticipantStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}AdministrativeGender",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ConformanceStatementKind",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}DiagnosticOrderStatus",type:"NamedTypeSpecifier"}}]},{name:"ToBoolean",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}boolean",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}DeviceMetricCalibrationType",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}code",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}SupplyRequestStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}EncounterLocationStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}SupplyDeliveryStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}DiagnosticReportStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}FlagStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}AllergyIntoleranceCertainty",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}CarePlanStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ListStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}base64Binary",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}AddressUse",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ConditionalDeleteStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ContactPointUse",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}DeviceMetricOperationalStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}NutritionOrderStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}DiagnosticOrderPriority",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}uri",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}Use",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}IdentityAssuranceLevel",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}DeviceMetricColor",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}SearchEntryMode",type:"NamedTypeSpecifier"}}]},{name:"ToTime",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}time",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ConditionVerificationStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}AllergyIntoleranceSeverity",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}OperationKind",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ObservationRelationshipType",type:"NamedTypeSpecifier"}}]},{name:"ToInteger",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}unsignedInt",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}NameUse",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}SubscriptionStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}CommunicationRequestStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}DocumentReferenceStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}LocationMode",type:"NamedTypeSpecifier"}}]},{name:"ToInteger",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}integer",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}CarePlanRelationship",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}LocationStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}UnknownContentCode",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}NoteType",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}EncounterState",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}EncounterClass",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}HTTPVerb",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}EpisodeOfCareStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}RemittanceOutcome",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}ContactPointSystem",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}MedicationOrderStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}SlotStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}markdown",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}MedicationStatementStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}QuantityComparator",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}oid",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}DeviceStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}Measmnt_Principle",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}SampledDataDataType",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}AllergyIntoleranceStatus",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}CompositionAttestationMode",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}DeviceMetricCalibrationState",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}GroupType",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}TypeRestfulInteraction",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}AnswerFormat",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}VisionBase",type:"NamedTypeSpecifier"}}]},{name:"ToString",context:"Patient",accessLevel:"Public",type:"FunctionDef",expression:{path:"value",type:"Property",source:{name:"value",type:"OperandRef"}},operand:[{name:"value",operandTypeSpecifier:{name:"{http://hl7.org/fhir}BundleType",type:"NamedTypeSpecifier"}}]}]}},u={library:o};export{l as a,I as b,i as c,c as d,u as e,y as f,m as g};
