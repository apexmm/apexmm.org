var apsApp = angular.module('myApp', ['ngRoute']);
apsApp.config(function($routeProvider,$locationProvider){
    $locationProvider.html5Mode(true);
	$routeProvider
    .when("/", {
        templateUrl : "page/home.html"
    }).when("/about-us", {
        templateUrl : "page/about-us.html"
    }).when("/admission", {
        templateUrl : "page/admission.html"
    }).when("/contact-us", {
        templateUrl : "page/contact-us.html"
    }).when("/download", {
        templateUrl : "page/download.html"
    }).when("/faq", {
        templateUrl : "page/faq.html"
    }).when("/apex-fiesta", {
        templateUrl : "page/apex-fiesta.html"
    }).when("/picture-gallery", {
        templateUrl : "page/picture-gallery.html"
    }).when("/video-gallery", {
        templateUrl : "page/video-gallery.html"
    }).when("/media-corner", {
        templateUrl : "page/media-corner.html"
    }).when("/aps-family", {
        templateUrl : "page/aps-family.html"
    }).when("/events-and-activities", {
        templateUrl : "page/events-and-activities.html"
    }).when("/apex-interschool-carnival", {
        templateUrl : "page/apex-interschool-carnival.html"
    }).otherwise({
		redirectTo:"/"
	});
	
});
apsApp.run(function($rootScope,$location){
	$rootScope.$on('$routeChangeSuccess', function(next,current) { 
		if($location.path()=='/events-and-activities')
			{
			
			}
		 });
});
apsApp.controller('myController',function($scope, $http){
	
	/* School Notice Bord */
	$scope.notice=['Regular classes for the session 2017-2018 has started.',
		       'Admissions open for the session 2017-2018.',
                   'Required english & Science teacher.'];
	
	/* End School Notice Bord */
	
	/* School Gallary */
	$scope.imgContainer=[
        {imgno:12,text:''},
        {imgno:11,text:''},
        {imgno:10,text:''},
        {imgno:9,text:''},
        {imgno:8,text:''},
        {imgno:7,text:''},
        {imgno:6,text:''},
        {imgno:5,text:''},
        {imgno:4,text:''},
        {imgno:3,text:''},
        {imgno:2,text:''},
        {imgno:1,text:''}
    ];
	
	$scope.videoContainer=[
		{sn:8,vs:'PhZUG1AmH_s',text:''},
		{sn:7,vs:'H7_51P6yjvc',text:''},
		{sn:6,vs:'pNa_HS-KcKw',text:''},
		{sn:5,vs:'R23Hsn20s_8',text:''},
		{sn:4,vs:'AvqdKz5FNww',text:''},
		{sn:3,vs:'K4QmuuWHIGE',text:''},
		{sn:2,vs:'4tfR54JXz9Q',text:''},
		{sn:1,vs:'lEBOY31yuw8',text:''}
	];
	/* End School Gallary */
    
    /* APS Family details */
    $http.get("data/aps-bod-details.json")
    .then(function(response) {
        $scope.apsFamilyDetails = response.data;
    },function(response) {
        $scope.content = "Something went wrong in in APS family data!!!";
        alert($scope.content);
    });
    /* End APS Family details */
    
    /* APS Event details */
    $http.get("data/aps-event-2016-17.json")
    .then(function(response) {
        $scope.eventList2016 = response.data;
    },function(response) {
        $scope.error = "Something went wrong in Event section !!!";
        alert($scope.content);
    });
    /* End APS Event details */
});
