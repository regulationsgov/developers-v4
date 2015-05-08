---
title: Document Subtypes
summary: This is a list of Document Subtypes and the appropriate encoded value to use with API requests.
layout: default
nav: fields
---

# {{ page.title }}
{{ page.data.summary }}
<p>Document Subtypes vary by Agency, each Agency having it's own set of values.  This listing is for convenience to help users get the URI Escaped value, which will be needed for your request.</p>
<table>
<thead>
<th>Subtype Name</th>
<th>Encoded Value</th>
</thead>
<tbody>
{% for subtype in site.data.documentsubtypes %}
  <tr>
  	<td>
      {{ subtype.value }}
    </td>
    <td>
	  {% highlight html %}
	  {{ subtype.value | uri_escape }}
	  {% endhighlight %}
    </td>
  </tr>
{% endfor %}
</tbody>
</table>

<body id="documentsubtypes"></body>