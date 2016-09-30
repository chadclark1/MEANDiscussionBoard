console.log("messagesController loaded");

app.controller('messagesController', ['$scope','messageFactory', '$location', '$cookies', function($scope, messageFactory, $location, $cookies) {


var index = function(){

                      $scope.cookieVal = $cookies.get("userCookie");
                      console.log($scope.cookieVal);

                      if($scope.cookieVal == null){
                        console.log($scope.cookieVal);
                        $location.url('/');
                      } else {
                        messageFactory.index(function(returnedData){
                          $scope.posts = returnedData;
                          // console.log($scope.posts);
                        });
                      }
            };
index();


  $scope.postMessage = function(){
    console.log($scope.message);
    messageFactory.postMessage($scope.message, function(returnedData){
      console.log(returnedData);
    })
  }

  $scope.postComment = function(){
    console.log($scope);
    // messageFactory.postMessage($scope.message, function(returnedData){
    //   console.log(returnedData);
    // })
  }


  $scope.getCookies = function(){

    console.log("cookies");

    var cookies = $cookies.getAll();
    // var cookieValue = $cookies.get('userCookie');

    $scope.cookieVal = $cookies.get("userCookie");

    console.log(cookies);
    console.log($scope.cookieVal);

  }

  $scope.signOut = function (){
    $cookies.remove('userCookie');
    $location.url('/');
    var cookies = $cookies.getAll();
    console.log(cookies);

  }




}]);