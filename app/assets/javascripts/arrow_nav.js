var total_num_pages;
var value;
var cyclePage;
$(".pagination").hide();

$(document).bind('keyup', function(e){
  cyclePage = !(window.location.href.indexOf("/images/") >= 0);
  if(e.which == 39 && cyclePage){
    nextPage();
  }
  if(e.which==37 && cyclePage){
    prevPage();
  }
});

function setPageLimit(size, path){
  total_num_pages = size;
}

function gotoImages(){
  window.location.href = "/images";
}

function setValue(){
  value = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
}

function nextPage(){
  setValue();
  if(value.indexOf('images?page=') >= 0){
    value = parseInt(value.substring(value.lastIndexOf('=') + 1))+1;
  }
  else{
    value = 2;
  }
  if(value <= total_num_pages && (window.location.href.indexOf('/images') >= 0)){
    location.href = "images?page="+value;
  }
}

function prevPage(){
  setValue();
  if(value.indexOf('images?page=') >= 0){
    value = parseInt(value.substring(value.lastIndexOf('=') + 1))-1;
  }
  if(value > 0 && (window.location.href.indexOf('/images') >= 0)){
    location.href = "images?page="+value;
  }
}
