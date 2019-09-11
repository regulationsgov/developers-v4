---
layout: default
title: API Sample Responses
nav: sample
permalink: /sample/
---

The following examples demonstrate how responses may appear after sending requests to API endpoints.  Please be aware that  actual responses may not contain all of the same fields, however, most should be present.  Furthermore, these samples highlight the responses of detailed requests, whereas queries may return multiple items with subsets of the fields found in these examples.

Please see the [API]({{ site.baseurl }}/api/) documentation to learn how to make requests and [Response Models]({{ site.baseurl }}/response/) to understand more about the fields contained within responses.

---

# Dockets

```
{
  "data": {
    "id": "SAJ-XD1-014-005",
    "type": "docketdetails",
    "attributes": {
      "displayProperties": [
        {
          "name": "generic",
          "label": "Classification",
          "tooltip": "Agency-specific classification for the docket (regulatory action)."
        }
      ],
      "regulatoryActionInfo": {
        "rin": "0Y2C-FL52",
        "cfr": [
          "55 CFR 515"
        ],
        "contact": [
          {
            "firstName": "Bob",
            "lastName": "Smith",
            "phone": "555-867-5309",
            "email": "bob.smith@saj.gfc",
            "mailingAddress": {
              "streetAddress": "33 Constellation Way",
              "city": "Orlando",
              "state": "FL",
              "zip": "32827"
            }
          }
        ],
        "abstractText": "The agency has created a policy to provide their interpretation of the phrase \"abundance determination\" in the Calamity Prevention Act's definitions. The phrase is ambiguous and is not currently defined and its interpretation and application have been subject to litigation. The purpose of this policy is to provide an interpretation and application of \"abundance determination\" that reflects a permissible reading of the law and its legislative history and minimizes undesirable policy outcomes.",
        "energyAffected": "No",
        "execOrder13771Designation": null,
        "federalism": "No",
        "govtLevel": [
          "None"
        ],
        "internationalInterest": "No",
        "legalAuthority": [
          "Pub. L. 141 - 22"
        ],
        "legalDeadline": null,
        "major": "No",
        "priorityCategory": "Other Significant",
        "publicationPeriod": "201810",
        "relatedRin": null,
        "regulatoryPlan": "No",
        "rfaRequired": "No",
        "ruleStage": "Final Rule Stage",
        "ruleTitle": "Policy on Interpretation of the Phrase \"Abundance Determination\" in the Calamity Prevention Act's Definitions",
        "smallEntity": [
          "No"
        ],
        "timeTable": [
          {
            "action": "Notice--Draft Policy",
            "date": "03/01/2016",
            "frCitation": "94 FR 67034"
          },
          {
            "action": "Notice--Draft Policy Comment Period End",
            "date": "06/01/2016"
          },
          {
            "action": "Final Action",
            "date": "04/30/2017",
            "frCitation": "94 FR 69046"
          },
          {
            "action": "Final Action Effective",
            "date": "05/01/2017"
          }
        ],
        "unfundedMandate": [
          "No"
        ]
      },
      "keywords": [
        "Environmental protection"
      ],
      "modifyDate": "2018-07-08T14:31:30Z",
      "dkAbstract": "Policy on Interpretation of the Phrase \"Abundance Determination\" in the Calamity Prevention Act's Definitions",
      "agencyId": "SAJ",
      "program": null,
      "shortTitle": null,
      "subType2": null,
      "title": "Policy on Interpretation of the Phrase \"Abundance Determination\"",
      "generic": "RN-42A",
      "field1": null,
      "docketType": "Rulemaking",
      "petitionNbr": null,
      "rin": "0Y2C-FL52",
      "organization": null,
      "legacyId": null,
      "subType": null,
      "category": null,
      "field2": null,
      "effectiveDate": null,
      "objectId": "de341ad20b59ee1f"
    }
  }
}
```

---

# Documents

```
{
  "data": {
    "id": "SAJ-020-007-0001",
    "type": "documentdetails",
    "attributes": {
      "displayProperties": [
        {
          "name": "pageCount",
          "label": "Page Count",
          "tooltip": "Number of pages in the content file"
        }
      ],
      "cfrPart": null,
      "country": null,
      "subject": null,
      "ombApproval": null,
      "frDocNum": null,
      "withdrawn": false,
      "agencyId": "SAJ",
      "allowLateComments": false,
      "fileFormats": [
        {
          "fileUrl": "https://downloads.regulations.gov/SAJ-020-007-0001/content.pdf",
          "format": "pdf",
          "size": 161343
        }
      ],
      "docketId": "SAJ-020-007",
      "originalDocumentId": null,
      "exhibitLocation": null,
      "restrictReason": null,
      "fax": null,
      "sourceCitation": null,
      "zip": null,
      "authorDate": null,
      "govAgency": null,
      "modifyDate": "2019-01-10T18:10:21Z",
      "receiveDate": "2018-03-01T04:00:00Z",
      "stateProvince": null,
      "commentEndDate": "2018-11-01T03:59:59Z",
      "submitterRep": null,
      "paperLength": 0,
      "postmarkDate": null,
      "firstName": null,
      "docAbstract": "This memorandum opens this docket for comments through October 31, 2018.",
      "phone": null,
      "authors": null,
      "reasonWithdrawn": null,
      "regWriterInstruction": null,
      "lastName": null,
      "attachments": [],
      "city": null,
      "documentType": "Other",
      "media": null,
      "title": "Memorandum to Open Docket for Comments on Nebulous Collection of Data",
      "content": "",
      "postedDate": "2018-03-15T04:00:00Z",
      "govAgencyType": null,
      "frVolNum": null,
      "restrictReasonType": null,
      "subtype": "Memorandum",
      "submitterRepCityState": null,
      "exhibitType": null,
      "legacyId": null,
      "email": null,
      "objectId": "02de1ad447b9ee8f",
      "pageCount": 0,
      "address2": null,
      "startEndPage": null,
      "address1": null,
      "topics": null,
      "commentCategory": null,
      "additionalRins": null,
      "commentOnDocumentId": null,
      "field1": null,
      "implementationDate": null,
      "commentStartDate": "2018-04-01T04:00:00Z",
      "paperWidth": 0,
      "organization": null,
      "duplicateComments": 0,
      "trackingNbr": "2ds3-bz41-5w30",
      "commentOn": null,
      "field2": null,
      "submitterRepAddress": null,
      "openForComment": false,
      "effectiveDate": null
    }
  }
}
```

---

# Comments

_**Notice:** Comment search results will always be brief. In order to view more details for the comment, a request for a single document should be made using the comment's ID as described in the [API]({{ site.baseurl }}/api/)._

```
{
  "data": [
    {
      "id": "SAJ-020-007-0999",
      "type": "comments",
      "attributes": {
        "documentType": "Public Submission",
        "withdrawn": false,
        "agencyId": "SAJ",
        "title": "Comment Submitted by Rebecca Jones",
        "postedDate": "2018-10-20T14:25:33Z"
      }
    }
  ]
}
```
