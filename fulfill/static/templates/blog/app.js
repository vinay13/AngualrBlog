var app = angular.module('app', ['ui.router']);

app.config(function($stateProvider,$urlRouterProvider){

	$urlRouterProvider.otherwise("/homeCtrl");


	$stateProvider
	  .state('home',{
	  	url:"/home",
	  	templateUrl:"home.html",
	  	controller: "homeCtrl"
	})
	  .state('blog',{
	  	url:"/blog",
	  	templateUrl:"blog.html",
	  	controller: "SingleBlogCtrl"

	  })
	  .state('about',{
	  	url:"/about",
	  	templateUrl : "about.html"

	  })
	  .state('newblog',{

	  	url: "/newblog",
	  	templateUrl : "newblog.html"
	  })
	  .state('editblog',{

	  	url: "/editblog",
	  	templateUrl : "editBlog.html"
	  })

	  .state('register',{
	  	url : "/register",
	  	templateUrl : "register.html"
	  });


});


app.controller("homeCtrl",function($scope,$http,$rootScope,$state){

	$http.get("http://blogg4.pythonanywhere.com/blog/blogs/")
	.then(function(response) {
        $scope.records = response.data;
        console.log($scope.records);
    });

    $scope.editBlog=function(myModel){
    	$rootScope.EditID= myModel;
    	$state.go('editblog');	
    	};

    $scope.deleteBlog = function(myModel){
    	var ID = myModel;
    	$http.delete("http://blogg4.pythonanywhere.com/blog/blogs/"+ID + "/")
    	.then(function(response){
    		$scope.recordDelte=response.data ; 
    		alert(' blog deleted')
    	});
    }


    	$scope.SingleBlog = function(myModel){
			$rootScope.SID = myModel ;
			console.log("SID",$rootScope.SID);
			$state.go('blog');
		}
	});



app.controller("homeEditCtrl",function($scope,$http,$rootScope,$state){
$http.get("http://blogg4.pythonanywhere.com/blog/blogs/"+ $rootScope.EditID)
				.then(function(response) {
       			 $scope.recordDetail = response.data;
        		console.log($scope.recordDetail);
        		
    		});
    		console.log($rootScope.EditID);


});



app.controller("SingleBlogCtrl",function($scope,$http,$rootScope,$state){
	console.log("SSID",$rootScope.SID);
	
	$http.get("http://blogg4.pythonanywhere.com/blog/blogs/"+ $rootScope.SID )
				.then(function(response) {
       			 $scope.recordSingleDetail = response.data;
        		console.log($scope.recordDetail);
        		
    		});
    		console.log($rootScope.SId);
    	
});



app.controller("PutEditBlogCtrl", function ($scope, $http) {
    $scope.editBlogpost = function (p) {
        var Id = p.id;

        var request = $http({
            method: "PUT",
            url: "http://blogg4.pythonanywhere.com/blog/blogs/"+ Id +"/",
            header: "{'Content-Type':'application/json;'}",
            data: {
                
                "title": p.title,
                "content": p.content,

            }
        }).then(function (response) {
            var data1 = response.data;
            console.log('success post');
            console.log('data', response.config.data);
        }, function (error) {
            var data1 = error.data;
        });
    };
});


app.controller("PostNewBlogCtrl", function ($scope, $http) {

    $scope.submitForm = function (myModel) {
        var request = $http({
            method: "POST",
            url: "http://blogg4.pythonanywhere.com/blog/blogs/",
            header: "{'Content-Type':'application/json;'}",
            data: {
                //"customerid:window.localStorage.getItem("user_id");"
                "title" : myModel.title,
                "content": myModel.content
                
            }
        }).then(function (response) {
            var data1 = response.data;
            console.log('success post');
            console.log('data', response.data.results);
			
        }, function (error) {
            var data1 = error.data;
        });
    };
});


/*

app.controller("LoginCtrl",function($scope,$http,$localStorage){
	
	$http.get("http://blogg4.pythonanywhere.com/blog/users/"+ username+"&"+password)
				.then(function(response) {
       			 $scope.recordDetail = response.data;
       			  
        		console.log($scope.recordDetail);
        		
    		});
    		console.log($rootScope.EditID);


});
});

app.register("registerCtrl",function($scope,$http){
	$scope.submitForm = function (myModel) {
        var request = $http({
            method: "POST",
            url: "http://blogg4.pythonanywhere.com/blog/users/",
            header: "{'Content-Type':'application/json;'}",
            data: {
                
                "email" : myModel.email,
                "username": myModel.username,
                "password": myModel.password
                
            }
        }).then(function (response) {
            var data1 = response.data;
            console.log('success post');
          //  console.log('data', response.data.results);
			
        }, function (error) {
            var data1 = error.data;
        });
    };

});

*/







