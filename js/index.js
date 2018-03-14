$("video").bind("contextmenu",function(){
        return false;
        });

// //video1
$('#play-video').click(function(){
  var video = $("#header-video").get(0);
  $('.video-header').fadeIn();
  video.play();
  $('body').addClass('noscroll');
});
$('#close-video').click(function(){
  var video = $("#header-video").get(0);
  $('.video-header').fadeOut();
  video.pause();
  $('body').removeClass('noscroll');
});
$('#header-video').click(function(){this.paused?this.play():this.pause();});
document.getElementById('header-video').addEventListener('ended',myHandler,false);
    function myHandler(e) {
        var video = $("#header-video").get(0);
  $('.video-header').fadeOut();
  video.pause();
  $('body').removeClass('noscroll');
      video.currentTime = 0;
    }


//video2
$('#play-video2').click(function(){
  var video = $("#header-video2").get(0);
  $('.video-header2').fadeIn();
  video.play();
  $('body').addClass('noscroll');
});
$('#close-video2').click(function(){
  var video = $("#header-video2").get(0);
  $('.video-header2').fadeOut();
  video.pause();
  $('body').removeClass('noscroll');
});
$('#header-video2').click(function(){this.paused?this.play():this.pause();});
document.getElementById('header-video2').addEventListener('ended',myHandler,false);
    function myHandler(e) {
        var video = $("#header-video2").get(0);
  $('.video-header2').fadeOut();
  video.pause();
  $('body').removeClass('noscroll');
      video.currentTime = 0;
    }
