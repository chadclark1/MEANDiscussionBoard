console.log("messageFactory loaded");



app.factory('messageFactory', ['$http', function($http) {
	    // The factory is nothing more than a function that returns an object

    function messageFactory(){

    	var _this = this;


    	this.index = function(callback){

	      $http.get('/messages').then(function(returned_data){
	        // console.log(returned_data.data);
	        posts = returned_data.data;
	        callback(posts);
	        // console.log(callback);
	      })
	    };





    	this.postMessage = function(message, callback){
    		console.log("factory");
    		console.log(message);
    		$http.post('/messages', message).then(function(returned_data){
    			console.log(returned_data);
    		})
    	}

    	// this.register = function(newUser, callback){
    	// 	console.log(newUser);
    	// 	$http.post('/users/register', newUser).then(function(returned_data){
		        
    	// 		console.log(returned_data.data)

		   //      if(returned_data.data.err == null){
		   //      	console.log("errors empty");
		   //      	console.log(returned_data.data);
		   //      	callback(returned_data.data.err);
		   //      } else {
		   //      	console.log("we have some errors");
			  //       console.log(returned_data.data.err.errors);
			  //       if (typeof(callback) == 'function'){
			  //         callback(returned_data.data.err.errors);
			  //       }
			  //   }
		   //  });
    	// }

    	// this.login = function(userCredentials, callback){
    	// 	console.log("userCredentials");
    	// 	console.log(userCredentials);
    	// 	$http.post('/users/login', userCredentials).then(function(returned_data){
		   //      // console.log(returned_data.data);
		   //      if (typeof(callback) == 'function'){
		   //        callback(returned_data);
		   //      }
		   //  });
    	// }


    }

    return new messageFactory();
}]);