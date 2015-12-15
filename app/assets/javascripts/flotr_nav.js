var total_num_pages;
var value;
var cyclePage;
var imgCyclePage;
var tagCyclePage;
var partial_url;
var p_path;

// bootleg way of getting access to attributes of the images outside of that ruby loop
// basically, when ruby paginates the images, I store relevant data in hidden elements on the page.
// then, when I need it I just make a jQuery call to grab it.
// currently doing this for the title, tag, buy, and comment links.
$(document).ready(function() {
  imgCyclePage = window.location.href.indexOf("/images?page") >= 0;
  tagCyclePage = window.location.href.indexOf("/tags/") >= 0;
  if (imgCyclePage) {
    $("#info-tag").text("Tag: " + $("#tag-rb").text());
  } else if (tagCyclePage) {
    $("#info-tag").text("Tag: " + window.location.pathname.split("/")[2]);
  }
  $("#info-title").text("Title: " + $("#title-rb").text());
  // session storage came to the rescue for showing that "welcome" thing on first visit
  if (!sessionStorage.seenInfo) {
    info();
    sessionStorage.seenInfo = "true";
  }

  // keyboard shortcuts
  $(document).bind('keyup', function(e) {
    imgCyclePage = window.location.href.indexOf("/images?page") >= 0;
    tagCyclePage = window.location.href.indexOf("/tags/") >= 0;
    cyclePage = (imgCyclePage || tagCyclePage);
    e.stopImmediatePropagation();
    if (e.which == 39 && cyclePage) {
      nextPage();
    } else if (e.which == 37 && cyclePage) {
      prevPage();
    } else if ((e.which == 73) && cyclePage) {
      info();
    } else if ((e.which == 76) && cyclePage) {
      toggleLike();
    } else if ((e.which == 67) && cyclePage) {
      goToComments();
    } else if ((e.which == 40) && imgCyclePage) {
      seeMore();
    } else if ((e.which == 38) && tagCyclePage) {
      goBack();
    }
  });
});

// bunch 'o toggle functions for menu, like button, etc
var toggleMenu = function () {
  $('#menu').toggleClass("activated");
};
var toggleLike = function () {
  if ($("#like-btn").hasClass("flotr-heart-o")) {
      $('#like-btn').removeClass("flotr-heart-o");
      $('#like-btn').addClass("flotr-heart");
  } else {
      $('#like-btn').removeClass("flotr-heart");
      $('#like-btn').addClass("flotr-heart-o");
  }
};
// this guy toggles the welcome screen
var info = function() {
  if ($('#bg').hasClass('blur')) {
    hideInfo();
  } else {
    showInfo();
  }
  $('#welcome').toggleClass('invisible');
};
var hideInfo = function() {
  $('#bg').removeClass('blur');
  $('.circle-icon').css('opacity','0.2');
  $('#pic-info').css('opacity','0.2');
  $('.tooltip').css('opacity','0');
};
var showInfo = function() {
  $('#bg').addClass('blur');
  $('.circle-icon').css('opacity','1');
  $('#pic-info').css('opacity','1');
  $('.tooltip').css('opacity','1');
}
// close the welcome screen on any click
$('#welcome').click(function() {
  info();
});

var goToComments = function () {
  sessionStorage.show = "comments";
  sessionStorage.previousPic = window.location.href;
  location.href = $("#link-rb").attr('href');
};

var goToBuy = function () {
  sessionStorage.show = "buy";
  sessionStorage.previousPic = window.location.href;
  location.href = $("#link-rb").attr('href');
};

var seeMore = function () {
  sessionStorage.previousPic = window.location.href;
  location.href = $("#more-rb").attr('href');
};

var goBack = function () {
  if (sessionStorage.previousPic) {
    var tmpUrl = sessionStorage.previousPic;
    sessionStorage.previousPic = "";
    location.href = tmpUrl;
  } else {
    location.href = window.location.origin;
  }
};

$(".pagination").hide();

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
  } else if (value > total_num_pages && (p_path == "/images" || p_path.indexOf('/tags/') >= 0)) {
    value = 1;
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
  } else if (value <= 0 && (p_path == "/images" || p_path.indexOf('/tags/') >= 0)) {
    value = total_num_pages;
    location.href = p_path + "?page=" + value;
  }
}
