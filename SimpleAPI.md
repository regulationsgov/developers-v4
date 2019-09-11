---
layout: default
title: API
nav: api
permalink: /api/
---

_**Notice:** Please be aware that any square brackets, `[]`, in the API calls are for visual purposes in this documentation and web formatted values of `%5B` and `%5D` should be used in their place for the actual calls.  Additionally, do not include square brackets when not utilizing one of the fields._

Please see the [Response Models]({{ site.baseurl }}/response/) to understand more about the fields contained within responses and [Sample Responses]({{ site.baseurl }}/sample/) for examples.

---

# Document Calls

**GET** `{{ page.organization-api-url }}/api/documents`

This call returns a query of all documents with the default sorting and pagination settings.

**GET** `{{ page.organization-api-url }}/api/documents?{Action}[{Parameter}][{Parameter Modifier}]={Value}`

This call is similar to the previous but allows the user to modify the results by utilizing any of the following query parameters:

| Action | Parameter| Description |
|---|---|---|
| filter | agencyId	| Filters results for the agency acronym specified in the value. |
|| commentEndDate | Filters results relative to the comment end date.  The value must be formatted as `MM-dd-yyyy`.<br/><br/> Omission of a parameter modifier will match results to the exact date provided, otherwise, one of the parameter modifiers below may be used: <br/> `ge` - greater than or equal <br/> `le` - less than or equal |
|| docketId | Filters results on the specified docket ID. |
|| documentType | Filters results on the specified document type. |
|| searchTerm | Filters results on the given term. |
|| postedDate | Filters results relative to the posted date.  The value must be formatted as `MM-dd-yyyy`.<br/><br/> Omission of a parameter modifier will match results to the exact date provided, otherwise, one of the parameter modifiers below may be used: <br/> `ge` - greater than or equal <br/> `le` - less than or equal |
|| subtype | Filters results on the supplied document subtype |
|| withinCommentPeriod | Filters results for documents that are open for comment by setting the value to `true`. <br/><br/> _`False` is not an acceptable value for this parameter, hence it should be removed when not being used._ |
| sort | (none) | Sorts the results on the field specified in the value.  The default behavior will sort the results in ascending order; to sort in descending order, prepend a minus sign to the value. <br/><br/> Supported values are `commentEndDate`, `postedDate`, and `title`. |
| page | number | Specifies the number for the page of results that will be returned from the query. <br/><br/> Acceptable values are numerical between, and including, 1 and 20. |
|| size | Specifies the size per page of results that will be returned from the query. <br/><br/> Acceptable values are numerical between, and including, 5 and 250. |

Complex queries can be made by combining multiple actions and/or parameters.  However, only one sort will be applied and a page number and size should each only be provided once per query.

### Examples
* <span id="documentExample1">{{ page.organization-api-url }}/api/documents?filter[agencyId]=EPA</span> <button onclick="copyTextFunction('documentExample1')">Copy</button>
* <span id="documentExample2">{{ page.organization-api-url }}/api/documents?filter[searchTerm]=Water</span> <button onclick="copyTextFunction('documentExample2')">Copy</button>
* <span id="documentExample3">{{ page.organization-api-url }}/api/documents?filter[searchTerm]=Air&filter[searchTerm]=Pollution</span> <button onclick="copyTextFunction('documentExample3')">Copy</button>
* <span id="documentExample4">{{ page.organization-api-url }}/api/documents?filter[withinCommentPeriod]=true&filter[documentType]=Notice&sort=-postedDate&page[size]=50&page[number]=10</span> <button onclick="copyTextFunction('documentExample4')">Copy</button>

**GET** `{{ page.organization-api-url }}/api/documentdetails/{Document ID}`

Obtains the information for the document with the given Document ID.

---

# Docket Calls

**GET** `{{ page.organization-api-url }}/api/dockets`

This call returns a query of dockets with the default sorting and pagination settings.

**GET** `{{ page.organization-api-url }}/api/dockets?{Action}[{Parameter}]={Value}`

This call is similar to the previous but allows the user to modify the results by utilizing any of the following query parameters:

| Action | Parameter| Description |
|---|---|---|
| filter | agencyId	| Filters results for the agency acronym specified in the value. |
|| docketType | Filters results on the specified docket type. |
|| searchTerm | The term by which to filter the dockets. |
| sort | (none) | Sorts the results on the field specified in the value.  The default behavior will sort the results in ascending order; to sort in descending order, prepend a minus sign to the value. <br/><br/> Currently, the only supported value is `title`. |
| page | number | Specifies the number for the page of results that will be returned from the query. <br/><br/> Acceptable values are numerical between, and including, 1 and 20. |
|| size | Specifies the size per page of results that will be returned from the query. <br/><br/> Acceptable values are numerical between, and including, 5 and 250. |

Complex queries can be made by combining multiple actions and/or parameters. However, only one sort will be applied and a page number and size should each only be provided once per query.

### Examples
* <span id="docketExample1">{{ page.organization-api-url }}/api/dockets?filter[agencyId]=EPA</span> <button onclick="copyTextFunction('docketExample1')">Copy</button>
* <span id="docketExample2">{{ page.organization-api-url }}/api/dockets?filter[searchTerm]=Water</span> <button onclick="copyTextFunction('docketExample2')">Copy</button>
* <span id="docketExample3">{{ page.organization-api-url }}/api/dockets?filter[searchTerm]=Air&filter[searchTerm]=Pollution</span> <button onclick="copyTextFunction('docketExample3')">Copy</button>
* <span id="docketExample4">{{ page.organization-api-url }}/api/dockets?filter[searchTerm]=Farming&filter[docketType]=Nonrulemaking&sort=title&page[size]=50&page[number]=10</span> <button onclick="copyTextFunction('docketExample4')">Copy</button>

**GET** `{{ page.organization-api- url }}/api/docketdetails/{Docket ID}`

Obtains the information for the docket with the given docket ID.
<body id="api"></body>

<script type="text/javascript">
function copyTextFunction( id ) {
	var selectText = document.getElementById(id);
	var range = document.createRange();
	range.selectNode(selectText);
	window.getSelection().addRange(range);
	document.execCommand('Copy');
	window.getSelection().removeAllRanges();
}
</script>
