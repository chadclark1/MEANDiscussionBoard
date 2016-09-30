console.log("topicFactory loaded");



app.factory('topicFactory', ['$http', function($http) {
      // The factory is nothing more than a function that returns an object

    function topicFactory(){

      var _this = this;

      var showTopicID = {};


      this.index = function(callback){
      	console.log("index topicFactory");
        $http.get('/topics').then(function(returned_data){
          topics = returned_data.data;
          console.log(topics);
          callback(topics)
        })
      }




      this.add = function(newTopic, callback){
        console.log(newTopic);
        $http.post('/topics', newTopic).then(function(returned_data){
          console.log("posted");
          callback(returned_data);
        })
      }

      this.show = function(id, callback){
        console.log("show factory");

        showTopicID = {id: id};

        console.log(showTopicID);
        // .then(function(){
        //   console.log("going back to controller");
        //   callback();
        // })
      }

      this.showTopicData = function(callback){
        console.log("showTopicData function in factory")
        console.log(showTopicID.id);

        topicID = showTopicID.id;
        $http.get('/topics/' + topicID).then(function(returned_data){
          console.log("got show data");
          callback(returned_data);
        })
      }

      this.addAnswer = function(newAnswer, callback){
        console.log(newAnswer);
        // $http.post('/topics', newTopic).then(function(returned_data){
        //   console.log("posted");
        //   callback(returned_data);
        // })
      }



      this.delete = function(id, callback){
        console.log("delete factory");
        $http.delete('/topics/' + id).then(function(){
          console.log("deleted");
          callback();
        })
      }


    }

    return new topicFactory();
}]);