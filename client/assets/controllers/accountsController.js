console.log("accountsController loaded");

app.controller('accountsController', ['$scope','accountFactory', '$location', '$cookies', function($scope, accountFactory, $location, $cookies) {


// var index = function(){
//                         userFactory.index(function(returnedData){
//                           $scope.users = returnedData;
                          
//                         });
//             };
// index();

  $scope.register = function(){
    // console.log($scope.user);
  //   accountFactory.register($scope.user, function(returnedData){
  //     $scope.errors = returnedData;
  //           // console.log($scope);

  //     if(returnedData == null){
  //       console.log("no errors!");
  //       console.log($scope);
  //       // Retrieving a cookie
  //       var favoriteCookie = $cookies.get('myFavorite');
  //       // Setting a cookie
  //       $cookies.put('myFavorite', 'oatmeal');

  //       console.log(favoriteCookie);

  //       $location.url('/profile/1');
  //     } else {
  //       console.log($scope);
  //       console.log(returnedData);
  //     }

  //     // $location.url('/');
  //   })
  }

  $scope.login = function(){
     
    console.log($scope.user);
    
    accountFactory.login($scope.user, function(returnedData){
    	console.log("back in login function on accounts controller");
    	console.log(returnedData);

      if(returnedData.data == true){
              console.log(returnedData);

              // Retrieving a cookie
              var userCookie = $cookies.get('user');

              // Setting a cookie
              $cookies.put('userCookie', true);

              $location.url('/wall');
            } else {
              console.log(returnedData);
              $location.url('/');
            }



    	// $location.url('/wall');
    })


    // accountFactory.login($scope.user, function(returnedData){
    //   $scope.errors = returnedData;
    //         console.log("in returnedData function")
    //         console.log(returnedData.data);

    //         if(returnedData.data == true){
    //           console.log(returnedData);

    //           // Retrieving a cookie
    //           var favoriteCookie = $cookies.get('myFavorite');
              
    //           // Find tomorrow's date.
    //           var expireDate = new Date();
    //             expireDate.setDate(expireDate.getDate() + 1);

    //           // Setting a cookie
    //           $cookies.put('myFavorite', 'oatmeal', {
    //             expires: expireDate
    //           });

    //           $location.url('/profile/1');
    //         } else {
    //           console.log(returnedData);
    //           $location.url('/');
    //         }


    //   // $location.url('/');
    // })
  }

  $scope.getCookies = function(){

    console.log("cookies");

    // var cookies = $cookies.getAll();
    // var cookieValue = $cookies.get('userCookie');

    
      // $scope.cookieVal = "userCookie";
    

    console.log($scope.cookieVal);
    console.log($scope);
    // console.log($scope.cookies);

  }




}]);