$(document).ready(function(){
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
    
    $('ul.navbar-nav li').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('.navbar-toggle').removeClass('collapsed').addClass('collapsed');
        $('.navbar-collapse').removeClass('in');		
    });
});