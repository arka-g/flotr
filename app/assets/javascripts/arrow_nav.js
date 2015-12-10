var total_num_pages = 1;
$(".pagination").hide();

$(document).bind('keyup', function(e){

  var cyclePage = !(window.location.href.indexOf("/images/") >= 0);
  if((e.which==39 || e.which==37) && cyclePage) {
    var value = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    if(value.indexOf('images?page=') >= 0){
      if(e.which==37){
        value = parseInt(value.substring(value.lastIndexOf('=') + 1))-1;
      }
      else{
        value = parseInt(value.substring(value.lastIndexOf('=') + 1))+1;
      }
    }
    else{
      value = 2;
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
