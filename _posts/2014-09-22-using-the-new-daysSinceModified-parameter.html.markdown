---
title: Using the new daysSinceModified search parameter
date: 2014-09-22 00:00 UTC
tags:
layout: post
---

Due to popular demand, we have introduced a new parameter which can be used to filter records modified within X number of days. The new daysSinceModified parameter works for both a simple days value as well as date range, depening on the value passed to the parameter.

If a user appends daysSinceModified=X to the url where x is a number, API will search for records modified in last X days including today.

To get everything modified today, use the following:
> /documents.json?daysSinceModified=0

Documents modified since yesterday (including today) can be found using:
> /documents.json?daysSinceModified=1

Similarly, if a user appends daysSinceModified=x-y to the url,  our API will run a search for records modified between X and Y.

If you want to get everything that was modified last week (September 14-20, 2014), not inclusive of any modifcations after:
> /documents.json?daysSinceModified=2014-09-14-2014-09-20

This parameter should help API users who query our API on the daily basis to keep their data updated. Before they had to go through all records in our system to get to the data modified recently, using this parameter should help them filter out unnecessary records.