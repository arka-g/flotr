var total_num_pages = 1;

$(document).bind('keyup', function(e){
  if(e.which==39 || e.which==37) {
    var url = window.location.href;
    var value = url.substring(url.lastIndexOf('/') + 1);
    if(value.indexOf('images?page=') >= 0){
      if(e.which==37){
        value = parseInt(value.substring(value.lastIndexOf('=') + 1))-1;
      }
      else{
        value = parseInt(value.substring(value.lastIndexOf('=') + 1))+1;
      }
    }
    else{
      value = 1;
    }
    if(value <= total_num_pages && value > 0 && (window.location.href.indexOf('/images') >= 0)){
      location.href = "images?page="+value;
    }
  }
});

function setPageLimit(size){
  total_num_pages = size;
}

function gotoImages(){
  window.location.href = "/images";
}
