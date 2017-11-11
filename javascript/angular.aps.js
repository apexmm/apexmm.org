var apsApp = angular.module('myApp', ["ngRoute","ngMeta"]);
apsApp.config(function($routeProvider,$locationProvider,ngMetaProvider){
    $locationProvider.html5Mode(true);
    ngMetaProvider.useTitleSuffix(true);
    ngMetaProvider.setDefaultTitle('Apex Public School, Marang Marcha');
    ngMetaProvider.setDefaultTitleSuffix(' | Apex Public School, Marang Marcha');
   
    $routeProvider
    .when("/", {
        title: 'Home',
        templateUrl : "page/home.html",
        data:{
            meta: {
                "title": "Home",
                "description": "Apex Public School, Marang Marcha was established on 3rd October 2014. The school is a co-educational English medium School. School code: 20241501103.",  
                "keywords":"home, apex, Apex Public School, Apex Public School Marang Marcha, Marang Marcha"                
            }
        }
    }).when("/about-us", {
        templateUrl : "page/about-us.html",
        data:{
            meta: {
                "title": "About Us",
                "description": "Apex Public School, Marang Marcha was established on 3rd October 2014. The school is a co-educational English medium School. School code: 20241501103.",  
                "keywords":"about, about apex public school, apex, Apex Public School, Apex Public School Marang Marcha, Marang Marcha"   				
            }
        }
    }).when("/admission", {
        templateUrl : "page/admission.html",
        data:{
            meta: {
                "title": "Admission",
                "description": "The entry level for Admission at Apex Public School is in Nursery. Parents are requested to download the admission form from school website or collect the form from school office. ",  
                "keywords":"admission, admission open at apex public school, apex, Apex Public School, Admission process of Apex Public School, Apex Public School Marang Marcha, Marang Marcha"   				
            }
        }
    }).when("/contact-us", {
        templateUrl : "page/contact-us.html",
        data:{
            meta: {
                "title": "Contact Us",
                "description": "Contact us: +91-9835726336, Address: Apex Public School NH-23, Gola Road, Marang Marcha Ramgarh, Jharkhand-829150, Official website: www.apexmm.org, e-mail: apex.tsoe@gmail.com",  
                "keywords":"contact, contact details apex public school, apex, Apex Public School, Apex Public School Marang Marcha, Marang Marcha, Apex Public School official website, Apex Public School contact number"   				
            }
        }
    }).when("/download", {
        templateUrl : "page/download.html",
        data:{
            meta: {
                "title": "Download",
                "description": "Download APEX-Student Application Form, Download the sample of APEX-Student Application Form, Download the APEX-Teachership Application Form",  
                "keywords":"download, Apex admission form, download apex public school document, apex, Apex Public School, Apex Public School Marang Marcha, Marang Marcha"   				
            }
        }
    }).when("/faq", {
        templateUrl : "page/faq.html",
        data:{
            meta: {
                "title": "Faq",
                "description": "What is the minimum age for taking admission in LKG? From where I can get admission form ? What is the cost of APEX Student admission form ? How can admission form be downloaded from school website ?",  
                "keywords":"faq, faq apex public school, apex, Apex Public School, Apex Public School Marang Marcha, Marang Marcha"   				
            }
        }
    }).when("/apex-fiesta", {
        templateUrl : "page/apex-fiesta.html",
        data:{
            meta: {
                "title": "Apex Fiesta",
                "description": "Apex fiesta is the annual function program of Apex Public School, Marang Marcha. The program is managed by students of cultural department under the guidance of Cultural dept. faculty.",  
                "keywords":"apex fiesta, apex, Apex Public School, Apex Public School Marang Marcha, Marang Marcha"   				
            }
        }
    }).when("/picture-gallery", {
        templateUrl : "page/picture-gallery.html",
        data:{
            meta: {
                "title": "Picture Gallaery",
                "description": "School buildings images, School Campus images, Apex fietsa images, Apex Interschool Carnival images.",  
                "keywords":"picture gallery, apex, Apex Public School, Apex Public School Marang Marcha, Marang Marcha"   				
            }
        }
    }).when("/video-gallery", {
        templateUrl : "page/video-gallery.html",
        data:{
            meta: {
                "title": "Video Gallaery",
                "description": "Independence day videos, Republic day videos, Apex fiesta videos.",  
                "keywords":"video gallery, apex, Apex Public School, Apex Public School Marang Marcha, Marang Marcha"   				
            }
        }
    }).when("/media-corner", {
        templateUrl : "page/media-corner.html",
        data:{
            meta: {
                "title": "Media Corner",
                "description": "Apex Public School, Apex public school in media. Apex public school achievements media coverge.",  
                "keywords":"media corner, apex media corner, Apex Public School, Apex Public School Marang Marcha, Marang Marcha"		
            }
        }
    }).when("/aps-family", {
        templateUrl : "page/aps-family.html",
        data:{
            meta: {
                "title": "APS Family",
                "description": "Apex Public School, Apex public school details, Apex public school management team, faculties and supporting staff details. ",  
                "keywords":"APS Family, apex media corner, Apex Public School, Apex Public School Marang Marcha, Marang Marcha"	
            }
        }
    }).when("/events-and-activities", {
        templateUrl : "page/events-and-activities.html",
        data:{
            meta: {
                "title": "Events & Activities",
                "description": "Events and acticities at Apex public school, Competitions conducted at apex public school. co-curricular activities at Apex public school.",  
                "keywords":"events & activities, apex media corner, Apex Public School, Apex Public School Marang Marcha, Marang Marcha"	
            }
        }
    }).when("/apex-interschool-carnival", {
        templateUrl : "page/apex-interschool-carnival.html",
        data:{
            meta: {
                "title": "Apex Interschool Carnival",
                "description": "APEX INTERSCHOOL CARNIVAL 2017 is annual competition fest organized by Apex Public School, Marang Marcha. The purpose of organizing this carnival is to promote competitative nature in between students.",           "keywords":"Apex Interschool Carnival, Apex Interschool Carnival 2017",   
                
				"og:image": "http://apexmm.org/images/social-share/apex-interschool-carnival-2017.jpg",
				"og:title": "Apex Interschool Carnival 2017",
				"og:description": "APEX INTERSCHOOL CARNIVAL 2017 is annual competition fest organized by Apex Public School, Marang Marcha. The purpose of organizing this carnival is to promote competitative nature in between students."
            }
        }
    }).when("/career", {
        title: 'Career',
        templateUrl : "page/career.html",
        data:{
            meta: {
                "title": "Career",
                "description": "Latest recruitment/vacancy at Apex public school, Career at Apex public school, APEX PUBLIC SCHOOL RECRUITMENT 2017",      
                "keywords":"APEX PUBLIC SCHOOL RECRUITMENT 2017, Required Principal, English & Sports teacher, Accountant, Salary:12,000*.",
				"og:image": "http://apexmm.org/images/social-share/Apex-Public-School-Teacher-Recruitment-2017.jpg",
				"og:title": "APEX PUBLIC SCHOOL RECRUITMENT 2017",
				"og:description": "Teaching & Non-Teaching Vacancies in Apex Public School, Marang Marcha. Applications are invited for teaching and non-teachings vacant posts in Apex Public School, Marang Marcha. Salary:12,000*."
            }
        }
    }).otherwise({
		redirectTo:"/"
	});
	
});
apsApp.run(function($rootScope,$location,ngMeta){
    ngMeta.init();
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
         $('html, body').animate({scrollTop: '0px'}, 300);
    });
});
apsApp.controller('myController',function($scope, $http){
	
	/* School Notice Board */
	$scope.notice=['Reuired principal, computer & science teacher. For more details visit career page.',
                   'Admission for class NUR. to VI for session 2018-2019 will start from 03rd January 2018. '];
	
	/* End School Notice Board */
	
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
var apsApp = angular.module('myApp', ["ngRoute","ngMeta"]);
apsApp.config(function($routeProvider,$locationProvider,ngMetaProvider){
    $locationProvider.html5Mode(true);
    ngMetaProvider.useTitleSuffix(true);
    ngMetaProvider.setDefaultTitle('Apex Public School, Marang Marcha');
    ngMetaProvider.setDefaultTitleSuffix(' | Apex Public School, Marang Marcha');
   
    $routeProvider
    .when("/", {
        templateUrl : "page/home.html",
        data:{
            meta: {
                "title": "Home",
                "description": "Apex Public School, Marang Marcha was established on 3rd October 2014. The school is a co-educational English medium School. School code: 20241501103.",  
                "keywords":"home, apex, Apex Public School, Apex Public School Marang Marcha, Marang Marcha"                
            }
        }
    }).when("/about-us", {
        templateUrl : "page/about-us.html",
        data:{
            meta: {
                "title": "About Us",
                "description": "Apex Public School, Marang Marcha was established on 3rd October 2014. The school is a co-educational English medium School. School code: 20241501103.",  
                "keywords":"about, about apex public school, apex, Apex Public School, Apex Public School Marang Marcha, Marang Marcha"   				
            }
        }
    }).when("/admission", {
        templateUrl : "page/admission.html",
        data:{
            meta: {
                "title": "Admission",
                "description": "The entry level for Admission at Apex Public School is in Nursery. Parents are requested to download the admission form from school website or collect the form from school office. ",  
                "keywords":"admission, admission open at apex public school, apex, Apex Public School, Admission process of Apex Public School, Apex Public School Marang Marcha, Marang Marcha"   				
            }
        }
    }).when("/contact-us", {
        templateUrl : "page/contact-us.html",
        data:{
            meta: {
                "title": "Contact Us",
                "description": "Contact us: +91-9835726336, Address: Apex Public School NH-23, Gola Road, Marang Marcha Ramgarh, Jharkhand-829150, Official website: www.apexmm.org, e-mail: apex.tsoe@gmail.com",  
                "keywords":"contact, contact details apex public school, apex, Apex Public School, Apex Public School Marang Marcha, Marang Marcha, Apex Public School official website, Apex Public School contact number"   				
            }
        }
    }).when("/download", {
        templateUrl : "page/download.html",
        data:{
            meta: {
                "title": "Download",
                "description": "Download APEX-Student Application Form, Download the sample of APEX-Student Application Form, Download the APEX-Teachership Application Form",  
                "keywords":"download, Apex admission form, download apex public school document, apex, Apex Public School, Apex Public School Marang Marcha, Marang Marcha"   				
            }
        }
    }).when("/faq", {
        templateUrl : "page/faq.html",
        data:{
            meta: {
                "title": "Faq",
                "description": "What is the minimum age for taking admission in LKG? From where I can get admission form ? What is the cost of APEX Student admission form ? How can admission form be downloaded from school website ?",  
                "keywords":"faq, faq apex public school, apex, Apex Public School, Apex Public School Marang Marcha, Marang Marcha"   				
            }
        }
    }).when("/apex-fiesta", {
        templateUrl : "page/apex-fiesta.html",
        data:{
            meta: {
                "title": "Apex Fiesta",
                "description": "Apex fiesta is the annual function program of Apex Public School, Marang Marcha. The program is managed by students of cultural department under the guidance of Cultural dept. faculty.",  
                "keywords":"apex fiesta, apex, Apex Public School, Apex Public School Marang Marcha, Marang Marcha"   				
            }
        }
    }).when("/picture-gallery", {
        templateUrl : "page/picture-gallery.html",
        data:{
            meta: {
                "title": "Picture Gallaery",
                "description": "School buildings images, School Campus images, Apex fietsa images, Apex Interschool Carnival images.",  
                "keywords":"picture gallery, apex, Apex Public School, Apex Public School Marang Marcha, Marang Marcha"   				
            }
        }
    }).when("/video-gallery", {
        templateUrl : "page/video-gallery.html",
        data:{
            meta: {
                "title": "Video Gallaery",
                "description": "Independence day videos, Republic day videos, Apex fiesta videos.",  
                "keywords":"video gallery, apex, Apex Public School, Apex Public School Marang Marcha, Marang Marcha"   				
            }
        }
    }).when("/media-corner", {
        templateUrl : "page/media-corner.html",
        data:{
            meta: {
                "title": "Media Corner",
                "description": "Apex Public School, Apex public school in media. Apex public school achievements media coverge.",  
                "keywords":"media corner, apex media corner, Apex Public School, Apex Public School Marang Marcha, Marang Marcha"		
            }
        }
    }).when("/aps-family", {
        templateUrl : "page/aps-family.html",
        data:{
            meta: {
                "title": "APS Family",
                "description": "Apex Public School, Apex public school details, Apex public school management team, faculties and supporting staff details. ",  
                "keywords":"APS Family, apex media corner, Apex Public School, Apex Public School Marang Marcha, Marang Marcha"	
            }
        }
    }).when("/events-and-activities", {
        templateUrl : "page/events-and-activities.html",
        data:{
            meta: {
                "title": "Events & Activities",
                "description": "Events and acticities at Apex public school, Competitions conducted at apex public school. co-curricular activities at Apex public school.",  
                "keywords":"events & activities, apex media corner, Apex Public School, Apex Public School Marang Marcha, Marang Marcha"	
            }
        }
    }).when("/apex-interschool-carnival", {
        templateUrl : "page/apex-interschool-carnival.html",
        data:{
            meta: {
                "title": "Apex Interschool Carnival",
                "description": "APEX INTERSCHOOL CARNIVAL 2017 is annual competition fest organized by Apex Public School, Marang Marcha. The purpose of organizing this carnival is to promote competitative nature in between students.",           "keywords":"Apex Interschool Carnival, Apex Interschool Carnival 2017",   
                
				"og:image": "http://apexmm.org/images/social-share/apex-interschool-carnival-2017.jpg",
				"og:title": "Apex Interschool Carnival 2017",
				"og:description": "APEX INTERSCHOOL CARNIVAL 2017 is annual competition fest organized by Apex Public School, Marang Marcha. The purpose of organizing this carnival is to promote competitative nature in between students."
            }
        }
    }).when("/career", {
        templateUrl : "page/career.html",
        data:{
            meta: {
                "title": "Career",
                "description": "Latest recruitment/vacancy at Apex public school, Career at Apex public school, APEX PUBLIC SCHOOL RECRUITMENT 2017",      
                "keywords":"APEX PUBLIC SCHOOL RECRUITMENT 2017, Required Principal, English & Sports teacher, Accountant, Salary:12,000*.",
				"og:image": "http://apexmm.org/images/social-share/Apex-Public-School-Teacher-Recruitment-2017.jpg",
				"og:title": "APEX PUBLIC SCHOOL RECRUITMENT 2017",
				"og:description": "Teaching & Non-Teaching Vacancies in Apex Public School, Marang Marcha. Applications are invited for teaching and non-teachings vacant posts in Apex Public School, Marang Marcha. Salary:12,000*."
            }
        }
    }).otherwise({
		redirectTo:"/"
	});
	
});
apsApp.run(function($rootScope,$location,ngMeta){
    ngMeta.init();
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
         $('html, body').animate({scrollTop: '0px'}, 300);
    });
});
apsApp.controller('myController',function($scope, $http){
	
	/* School Notice Board */
	$scope.notice=['Required Principal, Computer & Science teacher. For more details visit career page.' ,
                   'Admission for class NUR. to VI for session 2018-2019 will start from 3rd January 2018.'];
	
	/* End School Notice Board */
	
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