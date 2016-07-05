console.clear()

$(document).ready(function() {
  function reload() {
    $.get('http://api.doughnuts.ga/doughnuts')
      .done(function(data){
        $('#main').html('');
        data.forEach( function(datum) {
          $('#main').append('<li>' + datum.flavor+ ' - ' + datum.style + ' <button id="' + datum.id + '" class="delete">DELETE</button></li>')
        });

      }).fail(function(jqXHR, textStatus, errorThrown){
        console.log(errorThrown)
      });
  }

  function relete() {
    $.delete('http://api.doughnuts.ga/doughnuts')
      .done(function(data){
        $('#main').html('');
        data.forEach( function(datum) {
          $('#main').append('<li>' + datum.flavor+ ' - ' + datum.style + ' <button class="delete">DELETE</button></li>')
        })

      }).fail(function(jqXHR, textStatus, errorThrown){
        console.log(errorThrown)
      });
  }


  $('#refresh').click(function(){
    reload();
  })

  $('.delete').click(function(){
    relete();
  })

  $("#myForm").on( "submit", function( event ) {
    event.preventDefault();//prevent refresh because we do it the ajax way
    var data = $( this ).serialize();
    console.log( data );

    $.ajax({
      type: "POST",
      url: 'http://api.doughnuts.ga/doughnuts',
      data: data
    }).done(function(response){
      //$('#main').append('<li>the best flavour is ' + $('#flavourId').val() + ' - ' + $('#styleId').val() + ' <button>DELETE</button></li>')
      // console.log(response.myInput);
      $('#main').append('<li>the best flavour is ' + response.myInput + ' - ' + response.myInput2 + ' <button>DELETE</button></li>')
      console.log(response);
    }).fail(function(jqXHR, textStatus, errorThrown){
      console.log(errorThrown)
    });

  });
})
