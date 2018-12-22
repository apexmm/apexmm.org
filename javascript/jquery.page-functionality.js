$(document).ready(function(){
    
    // Activate Carousel
    $("document#myCarousel").carousel();
       
    /* End Carousel Functionality */   
    
    
     $(document).on("click", "#closeid", function(){
        $("#popup").remove();
    });
    
	$( document ).on( 'click', '.picsCol img', function() {
		var imgPath = $(this).attr('src');
		var imgName=parseInt(imgPath.replace('images/thumbnail/', '').replace('.jpg', ''));
		$('#myPictureModal .modal-body img').attr('src',"images/gallery/"+imgName+".jpg").css({'width':'100%'}).addClass('img-thumbnail');
		$("#myPictureModal").modal();
	});
	
	$( document ).on( 'click', '.videosCol img', function() {
		var videoScript = $(this).attr('name');
		$('#myVideoModal .modal-body iframe').attr("src","https://www.youtube.com/embed/"+videoScript+"?autoplay=1");
		$("#myVideoModal").modal();
	});
    
    $( document ).on( 'click', '#myVideoModal .close', function() {
        $('#myVideoModal .modal-body iframe').attr("src","");
    });
    
    /* Menu functionlaity */ 
    $(document).on("click", "ul.navbar-nav li", function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.navbar-toggle').removeClass('collapsed').addClass('collapsed');
        $('.navbar-collapse').removeClass('in');		
    });
            
    /* Footer menu functionality */
    $(document).on("click", ".footerMenu a", function(){
       $("ul.navbar-nav li").removeClass('active');        
    });
    
    /** Google Map Functionality */
    function myMap() {
        var myCenter = new google.maps.LatLng(23.563310,85.689203);
        var mapCanvas = document.getElementById("map");
        var mapOptions = {center: myCenter, zoom: 11};
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({position:myCenter});
        marker.setMap(map);

        var infowindow = new google.maps.InfoWindow({
            content: "Apex Public School"
        });
        infowindow.open(map,marker);
    }
    
    window.onload=myMap;
    
    /** Google Map Functionality End */
    
    /**  Facebook ***/
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=1636266909988633";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    
    /**  Facebook End ***/  
    
});

/* Load popup admission open popup while user visit the site */

$(window).load(function(){     
    $('#popup').show();
});

/* End popup */