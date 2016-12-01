var maxImage=12;
var videoContainer=['PhZUG1AmH_s','H7_51P6yjvc','pNa_HS-KcKw','R23Hsn20s_8','AvqdKz5FNww','K4QmuuWHIGE','4tfR54JXz9Q','lEBOY31yuw8'];
var apsApp = angular.module('myApp', ['ngRoute']);
apsApp.config(function($routeProvider,$locationProvider){
    $locationProvider.html5Mode(true);
	$routeProvider
    .when("/", {
        templateUrl : "page/home.html"
    })
    .when("/about-us", {
        templateUrl : "page/about-us.html"
    })
    .when("/admission", {
        templateUrl : "page/admission.html"
    })
    .when("/gallery", {
        templateUrl : "page/gallary.html"
    })
	.when("/contact-us", {
        templateUrl : "page/contact-us.html"
    })
	.when("/download", {
        templateUrl : "page/download.html"
    })
	.when("/faq", {
        templateUrl : "page/faq.html"
    })
	.when("/apex-fiesta", {
        templateUrl : "page/apex-fiesta.html"
    })
	.otherwise({
		redirectTo:"/"
	});
	$(document).scrollTop();
});
apsApp.controller('myController',function($scope){
	
	/* School Notice Bord */
	$scope.notice=['Admissions open for session 2017-18.',
                   'Required english & Science teacher for session 2017-18.',
				'The School timings will be 8:00 am to 1:30 pm from November 10 2016.'];
	
	/* End School Notice Bord */
	
	/* School Gallary */
	var imgContainer=[];
	for(var i=maxImage;i>0;i--){imgContainer.push(i);}
	$scope.imgContainer=imgContainer;
	
	$scope.videoContainer=[
		{sn:8,vs:'PhZUG1AmH_s'},
		{sn:7,vs:'H7_51P6yjvc'},
		{sn:6,vs:'pNa_HS-KcKw'},
		{sn:5,vs:'R23Hsn20s_8'},
		{sn:4,vs:'AvqdKz5FNww'},
		{sn:3,vs:'K4QmuuWHIGE'},
		{sn:2,vs:'4tfR54JXz9Q'},
		{sn:1,vs:'lEBOY31yuw8'}
	];
	/* End School Gallary */
});