---
layout: default
title: API Basics
nav: basics
permalink: /basics/
---
Regulations.gov offers a GET API with three main operations: Document, Documents, and Docket. These operations can be used to search for a single document, a list of documents, or dockets. To begin, you must obtain an [API Key]({{site.baseurl}}/key/).

#### Searching for documents
You can search for a list of documents based on the criteria passed by using the endpoint ```https://api.data.gov/regulations/v3/documents```. The search operation supports keyword searches as well as navigation-style searching based on a number of available parameters. 

#### Searching for a document
In order to obtain more details about a single document, you can use the endpoint ```https://api.data.gov/regulations/v3/document```. A document is defined by one of the following types: Comment, Proposed Rule, Rule, Supporting & Related, or Other. Each document type has its own set of attributes, which vary based on the Agency posting the document. Another defining characteristic is if the document is part of a Rulemaking or Nonrulemaking Docket. 

#### Searching for a docket
A docket is an organizational folder containing multiple documents. Dockets can be searched using the endpoint: https://api.data.gov/regulations/v3/docket.

#### Rate limits
Regulations.gov relies on api.data.gov's services for rate limiting and metrics tracking. The default rate limit of 1,000 requests per hour applies to all Regulations.gov API users. You may contact us if you require a higher request rate.

#### Examples
Return a list of all Rules and Proposed Rules posted in the month of September 2014 using this example [API Call](http://api.data.gov/regulations/v3/documents.json?rpp=25&po=0&dct=PR%252BFR&pd=09%257C01%257C14-09%257C30%257C14&encoded=1&api_key=DEMO_KEY).

An example regulation showcasing various different fields:

{% highlight json %}
{
  "allowLateComment": false,
  "commentDueDate": "2014-12-01T23:59:59-05:00",
  "commentStartDate": "2014-06-18T00:00:00-04:00",
  "openForComment": true,
  "postedDate": "2014-06-18T00:00:00-04:00",
  "receivedDate": "2014-06-18T00:00:00-04:00",
  "status": "Posted",
  "topics": [
    "Administrative Practices and Procedures",
    "Air Pollution Control",
    "Environmental Protection",
    "Intergovernmental Relations",
    "Reporting and Recordkeeping Requirements"
  ],
  "docketTitle": {
    "label": "Docket Title",
    "value": "Standards of Performance for Greenhouse Gas Emissions from Existing Sources: Electric Utility Generating Units"
  },
  "abstract": {
    "label": "Abstract",
    "value": "Federal Register of June 18, 2014 (79 FR 34830) (FRL-9911-86-OAR)"
  },
  "pageCount": {
    "label": "Page Count",
    "value": "130"
  },
  "docketType": {
    "label": "Docket Type",
    "value": "Rulemaking"
  },
  "documentType": {
    "label": "Document Type",
    "value": "Proposed Rules"
  },
  "frCitation": {
    "label": "FR Citation",
    "value": "79"
  },
  "docSubType": {
    "label": "Document SubType",
    "value": "Notice of Proposed Rulemaking (NPRM)"
  },
  "federalRegisterNumber": {
    "label": "Federal Register Number",
    "value": "2014-13726"
  },
  "attachmentCount": {
    "label": "Attachment Count",
    "value": "0"
  },
  "agencyName": {
    "label": "Agency Name",
    "value": "Environmental Protection Agency"
  },
  "rin": {
    "label": "RIN",
    "value": "2060-AR33"
  },
  "title": {
    "label": "Document Title",
    "value": "Carbon Pollution Emission Guidelines for Existing Stationary Sources: Electric Utility Generating Units"
  },
  "startEndPage": {
    "label": "Start End Page",
    "value": "34829 - 34958"
  },
  "docketId": {
    "label": "Docket ID",
    "value": "EPA-HQ-OAR-2013-0602"
  },
  "documentId": {
    "label": "Document ID",
    "value": "EPA-HQ-OAR-2013-0602-0001"
  },
  "agencyAcronym": {
    "label": "Agency",
    "value": "EPA"
  },
  "cfrPart": {
    "label": "CFR Part",
    "value": "40 CFR Part 60"
  },
  "numItemsRecieved": {
    "label": "Number of Comments Received",
    "value": "1207401"
  }
}
{% endhighlight %}

<body id="basics"></body>
