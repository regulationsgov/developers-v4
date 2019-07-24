---
layout: default
title: Contribute
nav: contribute
permalink: /contribute/
---

_**Notice:** Please be aware that any square brackets, `[]`, in the API calls are for visual purposes in this documentation and web formatted values of `%5B` and `%5D` should be used in their place for the actual calls.  Additionally, do not include square brackets for for any items marked `(none)` within tables._

---

###Document Calls

**GET** `https://beta-api.regulations.gov/api/documents`

This call returns a query of all documents with the default sorting and pagination settings.

**GET** `https://beta-api.regulations.gov/api/documents?{Action}[{Parameter}][{Parameter Modifier}]={Expected Value}`

This call is similar to the previous but allows the user to modify the results by utilizing any of the following query parameters:

| Action | Parameter| Parameter Modifier | Expected Value |
|---|---|---|---|
| filter | agencyId	| (none) | Agency acronym |
|| commentEndDate | `ge` for greater than or equal, `le` for less than or equal, or omitted for equal to | A date in the format of `MM-dd-yyyy`|
|| docketId | (none) | Docket ID |
|| documentType | (none) | The document type |
|| searchTerm | (none) | The term by which to filter the documents |
|| postedDate | `ge` for greater than or equal, `le` for less than or equal, or omitted for equal to | A date in the format of `MM-dd-yyyy`|
|| subtype | (none) | The document subtype |
|| withinCommentPeriod | (none) | `true`. _This parameter should not be included unless searching for documents that are open for comment._ |
| sort | (none) | (none) | `commentEndDate`, `postedDate`, or `title`.  Results will be in ascending order; to sort in descending order, prepend a minus sign to the value (e.g. `-title`)|
| page | number | (none) | A numerical value between, and including, 1 and 20 |
|| size | (none) | A numerical value between, and including, 5 and 250 |

**GET** `https://beta-api.regulations.gov/api/documentdetails/{Document ID}`

Obtains the information for the document with the specidfied Document ID.

---

###Docket Calls

**GET** `https://beta-api.regulations.gov/api/dockets`

This call returns a query of dockets with the default sorting and pagination settings.

**GET** `https://beta-api.regulations.gov/api/dockets?{Action}[{Parameter}][{Parameter Modifier}]={Expected Value}`

This call is similar to the previous but allows the user to modify the results by utilizing any of the following query parameters:

| Action | Parameter| Parameter Modifier | Expected Value |
|---|---|---|---|
| filter | agencyId	| (none) | Agency acronym |
|| docketType | (none) | The docket type |
|| searchTerm | (none) | The term by which to filter the documents |
| sort | (none) | (none) | `title`.  Results will be in ascending order; to sort in descending order, prepend a minus sign to the value (e.g. `-title`)|
| page | number | (none) | A numerical value between, and including, 1 and 20 |
|| size | (none) | A numerical value between, and including, 5 and 250 |

**GET** `https://beta-api.regulations.gov/api/docketdetails/{Docket ID}`

Obtains the information for the docket with the specidfied Docket ID.