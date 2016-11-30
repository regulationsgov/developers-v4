---
layout: default
title: API Key
nav: key
permalink: '/key/'
---

{% raw %}
<div id="apidatagov_signup">Loading signup form...</div>
<script type="text/javascript">
  /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
  var apiUmbrellaSignupOptions = {
    registrationSource: 'regulations',
    apiKey: 'sxPWKJYXAGaMKMYLU0sAg0wAz4N0PkWxjNj84fAK',
    exampleApiUrl: 'https://api.data.gov/regulations/v3/documents?api_key={{api_key}}&rpp=25&po=0&dct=PR%252BFR&pd=09%257C01%257C14-09%257C30%257C14&encoded=1',
    contactUrl: 'http://www.regulations.gov/#!contactUs',
    siteName: 'Regulations.gov',
    emailFromName: 'Regulations.gov',
    verifyEmail: true,
    websiteInput: true
  };

  /* * * DON'T EDIT BELOW THIS LINE * * */
  (function() {
    var apiUmbrella = document.createElement('script'); apiUmbrella.type = 'text/javascript'; apiUmbrella.async = true;
    apiUmbrella.src = 'https://api.data.gov/static/javascripts/signup_embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(apiUmbrella);
  })();
</script>
<noscript>Please enable JavaScript to signup for an <a href="https://api.data.gov/">api.data.gov</a> API key.</noscript>
{% endraw %}
