---
title: Using the new searchProperty parameter
date: 2014-07-25 00:00 UTC
tags:
layout: post
---

The Regulations.gov documents API is built on the same features as the Regulations.gov WEB application. One feature that we offer through the WEB application is the "targeted search". If your search keyword matches any of our predefined patterns, then we'll enable a targeted search which limits the search to only the matched property. For example, a search for "2014-15213", will match the format of a "Federal Register Number", automatically limiting searching to the federalRegisterNumber property in our system. This means that if the same string "2014-15213" happens to be in the text of another Rule, Comment or other document, that document will not be search, nor returned.

The new 'searchProperty' parameter will allows API users to limit their search to only the field specified. This will help prevent the return of unwanted results when the keyword matches the content or another property. The following properties are currently enabled for this feature: documentId, docketId, trackingNumber, rin, and federalRegisterNumber.

In order to use this new parameter, you must also include the keyword parameter "s=" in addition to the "searchProperty" parameter.

To find a user's comment by the tracking number you would use the following:

> /documents.json?s=1jy-8dj0-4sw9&searchProperty=trackingNumber