
$(document).ready(function(){
  $('#click-me').click(function() {
    reload();
  })

  function reload() {
  $.getJSON("https://api.doughnuts.ga/doughnuts")
    .done(function(data) {
    // console.log(data)
      $('#main').html('<p>he best flavor is ' + data[0].flavor + '</p>')
  }).fail(function(jqXHR, textStatus, errorThrown){
    // console.log(errorThrown)
  })
  }
  console.log("Jquery installed");
})
