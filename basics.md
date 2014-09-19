---
layout: default
title: API Basics
nav: basics
---

# API basics
The Regulations.gov API is a GET API which has three main operations. A good place to start is with a call to the Search operation, it's endpoint is https://api.data.gov/regultions/v3/documents .  A search will return a list of Documents based on the criteria passed.  The Search operation supports keyword searches as well as navigation-style searching based on a number of available parameters.

Each document returned from the search has more available details, which can be accessed by the Document API at the following endpoint: https://api.data.gov/regultions/v3/document .  Your eyes don't deceive you, that's the same as the search API, only singular form.

Documents are organized into folder-like entities called Dockets.  There's an API for that too, the endpoint is: https://api.data.gov/regultions/v3/docket .

## About a Document
A Document could be a Comment, Proposed Rule, Rule, Supporting & Related, or an Other type.  Each type has it's own set of attributes, and those attributes can vary based on the Agency posting the Document, as well as if it's a Rulemaking or Non-Rulemaking Docket.


## Rate limits
Regulations.gov relies on api.data.gov's services for rate limiting and metrics tracking.  The default rate limit of 1,000 requests per hour applies to all Regulations.gov API users.  You may contact us if you require a higher request rate.


## Examples

Return a list of all Rules and Proposed rules posted in the month of September 2014.
http://api.data.gov/regulations/v3/documents.json?rpp=25&po=0&dct=PR%252BFR&pd=09%257C01%257C14-09%257C30%257C14&encoded=1&api_key=DEMO_KEY

##### Putting it all together
Every year, the Federal Reserve finds interesting trends in HMDA data and publishes them in a report. Let's say you want to replicate some of their [2012 highlights](http://www.consumerfinance.gov/hmda/learn-more#highlights) in JSON. 

To compare refinances and home purchases in 2012, you would send the following query to the API:
<pre>https://api.consumerfinance.gov/data/hmda/slice/hmda_lar.json?#!/property_type=1,2&amp;action_taken=1&amp;select=as_of_year,loan_purpose_name,count&amp;section=summary</pre>
<a href="https://api.consumerfinance.gov/data/hmda/slice/hmda_lar.json?#!/property_type=1,2&amp;action_taken=1&amp;select=as_of_year,loan_purpose_name,count&amp;section=summary" class="action-arrow"> Try it out <i class="icon-right"> </i></a>

To see changes in the FHA loan market for 2012, you would send the following query to the API:
<pre>https://api.consumerfinance.gov/data/hmda/slice/hmda_lar.json?#!/lien_status=1&amp;loan_purpose=1&amp;action_taken=1&amp;select=as_of_year,loan_type_name,count&amp;section=summary</pre>
<a href="https://api.consumerfinance.gov/data/hmda/slice/hmda_lar.json?#!/lien_status=1&amp;loan_purpose=1&amp;action_taken=1&amp;select=as_of_year,loan_type_name,count&amp;section=summary" class="action-arrow"> Try it out <i class="icon-right"> </i></a>

<body id="basics"></body>