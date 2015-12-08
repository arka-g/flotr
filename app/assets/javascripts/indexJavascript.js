$(document).ready(function(){

    $(document).bind('keyup', function(e){
      if(e.which==39) {
        var url = window.location.href;
        var value = url.substring(url.lastIndexOf('/') + 1);
        if(value.indexOf('images?page=') >= 0){
          value = value.substring(value.lastIndexOf('=') + 1);
          value = parseInt(value) + 1;
        }else{
          value = 1;
        }
        window.location = "images?page="+value;
        debugger;
      };
      if(e.which==37){
        var url = window.location.href;
        var value = url.substring(url.lastIndexOf('/') + 1);
        if(value.indexOf('images?page=') >= 0){
          value = value.substring(value.lastIndexOf('=') + 1);
          value = parseInt(value) - 1;
        }else{
          value = 1;
        }
        window.location = "images?page="+value;
      };
    });
});
