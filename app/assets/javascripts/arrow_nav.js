var total_num_pages;
var value;
var cyclePage;
var partial_url;
var p_path;

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
  p_path = path;
}

function setValue(){
  value = window.location.href.substring(window.location.href.lastIndexOf('=') + 1);
}

function nextPage(){
  setValue();
  if(parseInt(value) >= 1){
    value = parseInt(value.substring(value.lastIndexOf('=') + 1))+1;
  }
  else{
    value = 2;
  }
  if(value <= total_num_pages && (p_path == "/images" || p_path.indexOf('/tags/') >= 0)){
    location.href = p_path + "?page=" + value;
  }
}

function prevPage(){
  setValue();
  if(parseInt(value) >= 1){
    value = parseInt(value.substring(value.lastIndexOf('=') + 1))-1;
  }
  if(value > 0 && (p_path == "/images" || p_path.indexOf('/tags/') >= 0)){
    location.href = p_path+"?page="+value;
  }
}
