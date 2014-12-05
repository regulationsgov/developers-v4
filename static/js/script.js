$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  
  addCodeTable('static/document-fields.json','document-fields');
  addCodeTable('static/docket-fields.json','docket-fields');

});

// jsonUrl: URL to the JSON-formatted metadata
// tableId: The table to populate
// orderAndDesc: An array of objects with keys { key: k, header: h }
//   k maps to the key to pull from the JSON
//   h is the text for the header at the top of the table
function addCodeTable(jsonUrl, tableId, orderAndDesc) {
	var $tbody = $('#' + tableId + ' tbody');
	
	var ajax = $.ajax({
		url: jsonUrl,
		dataType: "json"
	});
	var data = null;
    ajax.done(function (data) {
        var fields = data['fields'];
        var fieldNames = _(fields).keys().sort();

        _(fieldNames).each(function (fieldName) {
          var info = fields[fieldName];
          var example = "";
          if(info['could_be'] != null) {
          	example = "<p><p><em>Ex. </em><code>" + info['could_be'] + "</code>";
          }
  		var description = "<td>" + info['description'] + example;
  		if (info['url'] != null) {
  			description += "<p><a href='" + info['url'] + "'>More Info</a>";
  		}
  		description += "</td>";
          var $row = $("<tr></tr>");
          $row.
            append("<td><code>" + fieldName + "</code></td>").
  					append(description).
  					append("<td>" + info['type'] + "</td>");
  					//append("<td>" + info['could_be'] + "</td>");
            //append("<td>" + (info['indexed'] ? "true" : "false") + "</td>");
          $tbody.append($row);
        });
    });
}