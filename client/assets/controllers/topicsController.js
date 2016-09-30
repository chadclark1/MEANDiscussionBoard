


console.log("topicsController loaded");

app.controller('topicsController', ['$scope','topicFactory', '$location', '$cookies', function($scope, topicFactory, $location, $cookies) {


var index = function(){
                      console.log("index topicsController");
                        topicFactory.index(function(returnedData){
                          // console.log("back to index");
                          $scope.topics = returnedData;
                          // console.log($scope.topics);
                        });
            };
index();


var answer_index = function(){
                      console.log("answer_index topicsController");
                        topicFactory.show(id, function(returnedData){
                          $scope.showTopic = returnedData.data[0];                        
                        })
            };

var showTopicID = {};






  $scope.add = function(){
    console.log("in topic add function");
    console.log($scope.addTopic);
    // console.log($scope.addTopic.category);
    var user = $cookies.get('user');
    $scope.addTopic.user = user
    topicFactory.add($scope.addTopic, function(returnedData){
      console.log("in callback");
      index();
    })
  }

  $scope.showTopic = function(id, $idx){
    console.log(id);

    topicFactory.show(id, function(){
      console.log("in showTopic callback");
      console.log("showTopic");
    })
    $location.url('/topic/' + $idx);
  }

  $scope.addAnswer = function(){
    console.log("in topic postAnswer function");
    console.log($scope.postAnswer);
    // console.log($scope.addTopic.category);
    var user = $cookies.get('user');
    $scope.postAnswer.user = user
    topicFactory.add($scope.postAnswer, function(returnedData){
      console.log("in callback");
      answer_index();
    })
  }




  $scope.delete = function(id){
    console.log("delete");
    console.log(id)
    topicFactory.delete(id, function(){
      console.log("delete callback controller");
      index();
    })
  }


  $scope.getCookies = function(){
    console.log("cookies");
    var cookie = $cookies.get('user');

    console.log(cookie);

  }
  



}]);