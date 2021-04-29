$(document).ready(function(){
    $('#show-element').on('click', function () {
     var text=$('#show-element').val();
     if(text === "Show statistic"){
       $('#show-element').attr('value', 'Hide statistic')
     } else{
        $('#show-element').attr('value', 'Show statistic')
    }
   });
   });