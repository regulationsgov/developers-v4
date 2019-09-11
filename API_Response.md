---
layout: default
title: API Response Models
nav: response
permalink: /response/
---

All responses from Regulations.gov are formatted with [JSON:API](https://jsonapi.org/) conventions and require the use of the corresponding media type, `application/vnd.api+json`.

The descriptions below focus specifically on the `attributes` section of the `data` response object and indicate values that may be returned for both queries and detailed requests.  Note that not every response is guaranteed to contain each item.

The only field not found below is `highlightedContent`, which is specifically returned for queries that filter on a search term.  The value will contain content highlights that match the search term with all sections concatenated and each matched text surrounded by HTML tags for emphasis (`<em>`) and marking/highlighting (`<mark>`).

Please see the [API]({{ site.baseurl }}/api/) documentation to learn how to make requests and [Sample Responses]({{ site.baseurl }}/sample/) for examples.

---

# Dockets

| Property | Type | Description |
| --- | --- | --- |
| agencyId | String | The acronym used to abbreviate the name of the agency associated with the docket. |
| category | String | An agency-specific docket category providing regulatory action details, status, and the agency program and/or office. |
| displayProperties | Collection of Objects | See <a href="#display_properties">Display Properties</a> for further details. |
| dkAbstract | String | The detailed description of the docket. |
| docketType | String | The docket type.<br/><br/>The value will be `Rulemaking` or `Nonrulemaking`. |
| effectiveDate | String | The date the docket is put into effect.<br/><br/>The date is formatted as ISO 8601 with an offset such as `2019-01-20T13:15:45+01:00`. |
| field1 | String | An agency-specific field used for storing additional data with the docket. |
| field2 | String | An agency-specific field used for storing additional data with the docket. |
| generic | String | An agency-specific field used for storing additional data with the docket. |
| objectId | String | The unique Regulations.gov ID associated with the docket.  This value is often expected for internal use only. |
| keywords | Collection of Strings | Agency-selected keywords associated with a docket to improve its searchability by the public. |
| legacyId | String | The agency-specific identifier that was given to the docket in the legacy system. |
| modifyDate | String | The date when the docket was last modified.<br/><br/>The date is formatted as ISO 8601 with an offset such as `2019-01-20T13:15:45+01:00`. |
| organization | String | Identifies the docket's originating agency and/or department. |
| petitionNbr | String | A unique ID assigned by the agency to a petition-related docket. |
| program | String | The name of the program aligned with the agency to which the docket relates.|
| regulatoryActionInfo | Object | See <a href="#regulatory_actions">Regulatory Actions</a> for further details. |
| rin | String | The Regulatory Information Number for the docket as related to the Unified Agenda of Federal Regulatory and Deregulatory Actions.  If a RIN is present, further information should be available with the `regulatoryActionInfo` object. |
| shortTitle | String | A shortened version of the `title` or sometimes a combination of letters and/or numbers assigned to the docket for the purpose of brevity. |
| subType | String | An agency-specific attribute to further categorize a docket beyond the type (`docketType`). |
| subType2 | String | An agency-specific attribute to further categorize a docket beyond the subtype (`subType`). |
| title | String | The formal title of the docket. |

<a name="regulatory_actions"></a>
### Regulatory Actions

This data conveys information of the docket as related to the Unified Agenda of Federal Regulatory and Deregulatory Actions.

More information may be obtained at [Reginfo.gov](https://www.reginfo.gov/public/).

| Property | Type | Description |
| --- | --- | --- |
| rin | String | The Regulatory Information Number. |
| cfr | Collection of Strings | The sections of the Code of Federal Regulations (CFR) that are affected by the action. |
| contact | Collection of Objects | See <a href="#regulatory_actions_contact">Contact Information</a> for further details. |
| abstractText | String | A descriptive overview of the regulatory action. |
| energyAffected | String | An indication of whether or not the agency has prepared or plans to prepare a Statement of Energy Effects for the action, as required by Executive Order 13211 "Actions Concerning Regulations That Significantly Affect Energy Supply, Distribution, or Use," signed May 18, 2001 (66 FR 28355). |
| execOrder13771Designation | String | The preliminary EO 13771 designation as defined by guidance.<br/><br/>Possible values are `Deregulatory`, `Regulatory`, `Exempt`, `Waived`, and `Other`. |
| federalism | String | An indication of whether or not the action has "federalism implications" as defined in Executive Order 13132. This term refers to actions "that have substantial direct effects on the States, on the relationship between the national government and the States, or on the distribution of power and responsibilities among the various levels of government." |
| govtLevel | Collection of Strings | An indication of whether or not the action is expected to affect levels of government and, if so, whether the governments are `State`, `Local`, `Tribal`, or `Federal`. |
| internationalInterest | String | An indication of whether or not the regulation is expected to have international trade and investment effects, or otherwise may be of interest to the Nation's international trading partners. |
| legalAuthority | Collection of Strings | The sections of the United States Code (U.S.C.), Public Law (Pub. L.), or the Executive Order (E.O.) that authorize the regulatory action. |
| legalDeadline | Collection of Objects | See <a href="#regulatory_actions_legal_deadlines">Legal Deadlines</a> for further details. |
| major | String | An indication of whether or not the rule is "major" under 5 U.S.C. 801 (Pub. L. 104-121) because it has resulted or is likely to result in an annual effect on the economy of $100 million or more, or meets other criteria specified in the Act. The Act provides that the Administrator of the Office of Information and Regulatory Affairs will make the final determination as to whether a rule is major. |
| priorityCategory | String | An indication of the significance of the regulation.<br/><br/>Possible values are `Economically Significant`, `Other Significant`, `Substantive/Nonsignificant`, `Routine and Frequent`, and `Informational/Administrative/Other`. |
| publicationPeriod | String | Specific month and year that the rulemaking action is published in the Unified Agenda. |
| relatedRin | Collection of Strings | One or more past or current RIN(s) associated with activity related to the action, such as merged RINs, split RINs, new activity for previously completed RINs, or duplicate RINs. |
| regulatoryPlan | String | An indication of whether or not the rulemaking was included in the agency's current regulatory plan published in the Fall of any given year. |
| rfaRequired | String | An indication of whether or not an analysis is required by the Regulatory Flexibility Act (5 U.S.C. 601 et seq.) because the rulemaking action is likely to have a significant economic impact on a substantial number of small entities as defined by the Act. |
| ruleStage | String | Each entry in the Unified Agenda is associated with one of the following, five rulemaking stages:<br/><br/>`Prerule Stage`, `Proposed Rule Stage`, `Final Rule Stage`, `Long-Term Actions`, `Completed Actions` |
| ruleTitle | String | The title of the regulatory action. |
| smallEntity | Collection of Strings | The types of small entities (businesses, governmental jurisdictions, or organizations) on which the rulemaking action is likely to have an impact as defined by the Regulatory Flexibility Act. Some agencies have chosen to indicate likely effects on small entities even though they believe that a Regulatory Flexibility Analysis will not be required. |
| timeTable | Collection of Objects | See <a href="#regulatory_actions_timetables">Timetables</a> for further details. |
| unfundedMandate | Collection of Strings | An indication of whether or not the rule is covered by section 202 of the Unfunded Mandates Reform Act of 1995 (Pub. L. 104-4). |

<a name="regulatory_actions_contact"></a>
#### Regulatory Actions: Contact Information

The contact object contains information that is necessary to communicate with a point of contact regarding a regulatory action.

| Property | Type | Description |
| --- | --- | --- |
| firstName | String | First name of the contact. |
| lastName | String | Last name of the contact. |
| middleName | String | Middle name of the contact. |
| prefix | String | Prefix to the contact's name, which is usually a title such as `Mr.`, `Ms.`, `Dr.`, military rank, executive position, etc. |
| suffix | String | The suffix to the contact's name, providing additional information such as academic degrees like `Ph.D.` generational titles like `Jr.`, or professional titles like `R.N.` |
| title | String | Usually the professional title of the contact. |
| phone | String | A phone number that can reach the contact. |
| phoneExt | String | An extension required to route the call to the contact after dialing the phone number. |
| tddPhone | String | The phone number for reaching the contact when utilizing a teleprinter for persons with hearing or speech difficulties. |
| fax | String | The phone number where a fax may be sent to the contact. |
| email | String | An e-mail address that can be used to communicate with the contact. |
| mailingAddress | Object | See <a href="#regulatory_actions_contact_address">Contact Mailing Address</a> for further details. |

<a name="regulatory_actions_contact_address"></a>
#### Regulatory Actions: Contact Mailing Address

The address structure is comprised of the elements required to make a United States mailing address.

| Property | Type | Description |
| --- | --- | --- |
| streetAddress | String | The building number and street or P.O. box of the contact's address. |
| city | String | The city for the contact's address. |
| state | String | The state for the contact's address. |
| zip | String | The zip code of the contact's address. |

<a name="regulatory_actions_legal_deadlines"></a>
#### Regulatory Actions: Legal Deadlines

The legal deadlines provide an indication of whether or not the action is subject to a statutory or judicial deadline.

| Property | Type | Description |
| --- | --- | --- |
| action | String | The required action, which can be a notice of proposed rulemaking (`NPRM`), a `Final` action, or some other action. |
| source | String | The origination of the deadline, either `Statutory` or `Judicial`. |
| description | String | The explanation or additional information of the action. |
| date | String | The required resolution date for the action. |

<a name="regulatory_actions_timetables"></a>
#### Regulatory Actions: Timetables

The timetables contain all of the previous steps and a projected date for at least the next step of the regulatory action.

| Property | Type | Description |
| --- | --- | --- |
| action | String | The action for the entry in the timetable. |
| date | String | The date the action occurred or is projected to occur for the timetable entry. |
| frCitation | String | A Federal Register citation for the timetable entry, if one exists. |

---

# Documents

| Property | Type | Description |
| --- | --- | --- |
| additionalRins | Collection of Strings | One or more Regulatory Information Numbers (RINs) to which the document relates. |
| address1 | String | The first line of the submitter's address. |
| address2 | String | The second line of the submitter's address. |
| agencyId | String | The acronym used to abbreviate the name of the agency associated with the document. |
| allowLateComments | Boolean | Indicates whether the owning agency will accept comments on the document after the due date. |
| attachments | Collection of Objects | See <a href="#document_attachments">Attachments</a> for further details. |
| authorDate | String | The date that the authors wrote or published the document.<br/><br/>The date is formatted as ISO 8601 with an offset such as `2019-01-20T13:15:45+01:00`. |
| authors | Collection of Strings | The individual, organization, or group of collaborators that contributed to the creation of the document. |
| cfrPart | String | The Code of Federal Regulations (CFR) Citation applicable to the document. |
| city | String | The city associated with the submitter's address. |
| comment | String | The body of a submitted comment. |
| commentCategory | String | An agency-specific category allowing agencies to group comments according to their type. |
| commentEndDate | String | The date that closes the period when public comments may be submitted on the document.<br/><br/>The date is formatted as ISO 8601 with an offset such as `2019-01-20T13:15:45+01:00`. |
| commentOn | String | The unique Regulations.gov ID of the document on which the comment has been made.  This value is often expected for internal use only.  |
| commentOnDocumentId | String | The ID of the document on which the comment has been made. |
| commentStartDate | String | The date that begins the period when public comments may be submitted on the document.<br/><br/>The date is formatted as ISO 8601 with an offset such as `2019-01-20T13:15:45+01:00`. |
| content | String | The content of a document that has originated from the [Federal Register](https://www.federalregister.gov/). |
| country | String | The country associated with the submitter's address. |
| displayProperties | Collection of Objects | See <a href="#display_properties">Display Properties</a> for further details. |
| docAbstract | String | The detailed description of the document. |
| docketId | String | The ID of the docket to which the document corresponds. |
| documentType | String | The document type.<br/><br/>Possible values are `Notice`, `Rule`, `Proposed Rule`, `Supporting & Related Material`, `Public Submission`, and `Other`. |
| duplicateComments | Integer | The number of duplicate or significantly similar comments made on the associated document. |
| effectiveDate | String | The date the document is put into effect.<br/><br/>The date is formatted as ISO 8601 with an offset such as `2019-01-20T13:15:45+01:00`. |
| email | String | The submitter's e-mail address. |
| exhibitLocation | String | The physical location of an exhibit to which a document refers. |
| exhibitType | String | The type of exhibit to which a document refers. |
| fax | String | The submitter's fax number. |
| field1 | String | An agency-specific field used for storing additional data with the document. |
| field2 | String | An agency-specific field used for storing additional data with the document. |
| fileFormats | Collection of Objects | See <a href="#document_file_formats">File Formats</a> for further details. |
| firstName | String | The submitter's first name. |
| frDocNum | String | The unique identifier of a document originating in the [Federal Register](https://www.federalregister.gov/). |
| frVolNum | String | The [Federal Register](https://www.federalregister.gov/) volume number where the document was published. |
| govAgency | String | The name of the government agency that the submitter represents. |
| govAgencyType | String | The type of government agency that the submitter represents. |
| objectId | String | The unique Regulations.gov ID associated with the document.  This value is often expected for internal use only. |
| implementationDate | String | The date the document is to be implemented.<br/><br/>The date is formatted as ISO 8601 with an offset such as `2019-01-20T13:15:45+01:00`. |
| lastName | String | The submitter's last name.  |
| legacyId | String | An agency-specific identifier that was given to the document in the legacy system. |
| media | String | The media in which the document is stored. |
| modifyDate | String | The date when the document was last modified.<br/><br/>The date is formatted as ISO 8601 with an offset such as `2019-01-20T13:15:45+01:00`. |
| ombApproval | String | The control number assigned when approval is given by the Office of Management and Budget (OMB) in accordance with the Paperwork Reduction Act (PRA).  |
| organization | String | The organization that the submitter represents. |
| originalDocumentId | String | The document ID that was assigned when first entered into the system should a change occur that requires a new document ID to be assigned. |
| pageCount | Integer | Conveys the number of pages contained in the document. |
| paperLength | Integer | When the document is in paper format, indicates the length of the paper. |
| paperWidth | Integer | When the document is in paper format, indicates the width of the paper. |
| phone | String | The submitter's phone number. |
| postedDate | String | The date that the document was posted by the agency to the system.<br/><br/>The date is formatted as ISO 8601 with an offset such as `2019-01-20T13:15:45+01:00`. |
| postmarkDate | String | The postmark date of a document that was sent by mail.<br/><br/>The date is formatted as ISO 8601 with an offset such as `2019-01-20T13:15:45+01:00`. |
| reasonWithdrawn | String | If the document is withdrawn, this field will state the reason. |
| receiveDate | String | The date that the agency received or created the document.<br/><br/>The date is formatted as ISO 8601 with an offset such as `2019-01-20T13:15:45+01:00`. |
| regWriterInstruction | String | Additional instructions provided by the writer of the regulation. |
| restrictReason | String | Additional information about the restriction of a document when the `restrictReasonType` is `Other`. |
| restrictReasonType | String | Indicates the type of restriction placed on the document.  For the type, `Other`, additional information can be found with the `restrictReason`. |
| sourceCitation | String | The citation for the source that published the document. |
| startEndPage | String | The starting and ending pages where the document was published. |
| stateProvince | String | The state or province of the submitter's address. |
| subject | String | The subject of the document. |
| submitterRep | String | The name of the representative that has made a submission on behalf of the submitter. |
| submitterRepAddress | String | The submitter representative's address. |
| submitterRepCityState | String | The city and state associated with the submitter representative's location. |
| subtype | String | An agency-specific attribute to further categorize a document beyond the type (`documentType`). |
| title | String | The formal title of the document. |
| topics | Collection of Strings | The principal topics to which the document pertains. |
| trackingNbr | String | The identifier assigned to the document that may be used to track its lifecycle within the system and is often used when interacting with the help desk. |
| withdrawn | Boolean | Conveys if the document is withdrawn. |
| zip | String | The zip code associated with the submitter's address. |
| openForComment | Boolean | Indicates if the current date is between the comment start date and comment end date.  If the value is `true`, comments are being accepted for the document. |


<a name="document_attachments"></a>
### Attachments

Information pertaining to any additional files associated with the document can be found with the attachment object.

| Property | Type | Description |
| --- | --- | --- |
| agencyNote | String | A generic field to hold agency-specific information about the attachment. |
| authors | Collection of Strings | The individual, organization, or group of collaborators that contributed to the creation of the file. |
| docAbstract | String | A description of the contents or purpose of the attached file. |
| docOrder | Integer | The numerical value indicating the placement of the attachment in an ordered list of attachments. |
| fileFormats | Collection of Objects | See <a href="#document_file_formats">File Formats</a> for further details. |
| modifyDate | String | The date when the file was last modified.<br/><br/>The date is formatted as ISO 8601 with an offset such as `2019-01-20T13:15:45+01:00`. |
| publication | String | A bibliographic listing of the attachment if it was published in a book, journal, etc. |
| restrictReason | String | Additional information about the restriction of the attachment when the `restrictReasonType` is `Other`. |
| restrictReasonType | String | Indicates the type of restriction placed on the attachment. For the type, `Other`, additional information can be found with the `restrictReason`. |
| title | String | The title of the attachment. |

<a name="document_file_formats"></a>
### File Formats

The file format object contains information about a content file and its properties.

| Property | Type | Description |
| --- | --- | --- |
| fileUrl | String | The URL where the file is hosted. |
| format | String | The type of file. |
| size | Integer | The size of the file represented as bytes. |

---

# Comments

| Property | Type | Description |
| --- | --- | --- |
| documentType | String | The type of document.  For a comment, this value should always be `Public Submission`. |
| withdrawn | Boolean | Conveys if the comment is withdrawn. |
| agencyId | String | The acronym used to abbreviate the name of the agency associated with the comment. |
| title | String | The title of the comment. |
| postedDate | String | The date that the comment was posted to the system.<br/><br/>The date is formatted as ISO 8601 with an offset such as `2019-01-20T13:15:45+01:00`. |

---

# Common

<a name="display_properties"></a>
### Display Properties

Display properties are a mechanism for agencies to define property labels, descriptions, and mouseover tooltips that are displayed with overview pages.

| Property | Type | Description |
| --- | --- | --- |
| name | String | The name of the property. |
| label | String | The label that should be shown when displaying the property. |
| tooltip | String | A mouseover tooltip that should be displayed about the property. |

