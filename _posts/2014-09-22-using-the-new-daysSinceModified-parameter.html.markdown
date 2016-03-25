---
title: Using the new daysSinceModified search parameter
date: 2014-09-22 00:00 UTC
tags:
layout: post
---

Due to popular demand, we have introduced a new parameter which can be used to filter records modified within X number of days. If a user appends daysSinceModified=X to the url where X is a number, the API will search for records modified in the last X days including today.

To get everything modified today, use the following:

> /documents.json?daysSinceModified=0

Documents modified since yesterday (including today) can be found using:

> /documents.json?daysSinceModified=1

This parameter should help API users who query our API on a daily basis to keep their data updated.  Prior to this enhancement, users had to pull all records to get data modified recently.  Now using this parameter, they will be able to filter out records they already store.
