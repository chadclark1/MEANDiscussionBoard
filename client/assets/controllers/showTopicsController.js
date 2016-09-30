

console.log("showTopicsController loaded");

app.controller('showTopicsController', ['$scope','topicFactory', '$location', '$cookies', function($scope, topicFactory, $location, $cookies) {


  // var index = function(){
  //                       console.log("index showTopicsController");
  //                         topicFactory.index(function(returnedData){
  //                           // console.log("back to index");
  //                           $scope.topics = returnedData;
  //                           // console.log($scope.topics);
  //                         });
  //             };
  // index();


  var answer_index = function(){
                        console.log("answer_index showTopicsController");
                          topicFactory.showTopicData(function(returnedData){
                            console.log(returnedData);
                            $scope.topicData = returnedData.data[0];                        
                          })
              };

  answer_index();



  $scope.showTopic = function(id, $idx){
      console.log(id);

      topicFactory.show(id, function(){
        console.log("in showTopic callback");
        console.log("showTopic");
      })
      $location.url('/topic/' + $idx);
    }


  }]);