var searchTerm = "";
var results = [];
var search = function(searchTerm){
  if(searchTerm)
  $.ajax({
      dataType: "jsonp",
      url: "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + searchTerm,
      type: "GET",
      success: function(json) {
        populate(json);
	}
}); 
};

var populate = function(json){
   $(".results").html("");
  for(i=0; i<10; i++){
    $(".results").append("<li><a target='_blank' href='"+ json[3][i] +"'><h3>" + json[1][i] + "</h3><hr><p>" + json[2][i] + "</p></a></li>");
  };      
};

$(function(){  
  $( ".wiki-form" ).submit(function( event ) {
      searchTerm = $( "input:first" ).val();
      search(searchTerm);
      event.preventDefault();
  });
});