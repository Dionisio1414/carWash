$(function() {
	$('.main-slider').slick({
		dots: true
	});	
	
	$('.packages__slider').slick({
		slidesToShow: 5,
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		autoplay: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3
				}	
			},
			
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}	
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
				}	
			}

		]
	});
	
	 $('.popup-with-video').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',
    callbacks: {
     beforeOpen: function() {
      if($(window).width() < 700) {
       this.st.focus = false;
     } else {
       this.st.focus = '#name';
     }
   }
 }
});
	
	// Gamburger menu
	
	var $hamburger = $('.hamburger'), $popupMenu = $('.popup-menu');
	$hamburger.click(function() {
		$(this).toggleClass('open');
		$popupMenu.toggleClass('open');
		$('html').toggleClass('ov-fl');
	});
	
	
	// TABS
	
	var $tab = $('.wash__bg-left .descr-block');
	console.log($tab)
	$('.wash__bg-left .tabs li').click(function() {
		$(this).addClass('active').siblings().removeClass('active');
		$tab.removeClass('active').eq($(this).index()).addClass('active');
		return false;
	});
	
	
	// // MOVIE
	// var $mvContainer = $('.movie .movie__container');
	// var $video = $('.movie .movie__container video').get(0);
	// var $play = $('.movie .movie__container .play');
	// var $movieCaption = $('.movie__container h1');
	// var $overlay = $('.movie__container .overlay');
	// $play.click(function() {
	// 	$video.play();
	// 	$movieCaption.hide();
	// 	$(this).hide();
	// 	$overlay.fadeOut();
	// 	return false;
	// });
	
	// $mvContainer.click(function(){
	// 	$video.pause();
	// 	$movieCaption.show();
	// 	$play.show();
	// });
	
	initMap();
	
});


function initMap() {
    let uluru = {lat: 35.873267, lng: -101.959928};
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: uluru
    });
    let marker = new google.maps.Marker({
        position: uluru,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: {
            url: "images/map-marker.png",
            scaledSize: new google.maps.Size(180, 180)
        }
    });
}
$('.location li a').click(function(){
	$('.location li a img').attr('src','images/locations/marker-not-active.png');
	$(this).find('img').attr('src','images/locations/marker-active.png');
	let uluru = {lat: $(this).parent().data('lat'), lng: $(this).parent().data('lng')};
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: uluru
    });
    let marker = new google.maps.Marker({
        position: uluru,
        map: map,
        animation: google.maps.Animation.DROP,
        icon: {
            url: "images/map-marker.png",
            scaledSize: new google.maps.Size(180, 180)
        }
    });
});


$(window).scroll(function() {
if ($(this).scrollTop() > 1){
$('header').addClass("sticky");
}
else{
$('header').removeClass("sticky");
}
});



