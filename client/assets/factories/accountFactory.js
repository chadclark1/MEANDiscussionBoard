console.log("accountFactory loaded");



app.factory('accountFactory', ['$http', function($http) {
	    // The factory is nothing more than a function that returns an object

    function accountFactory(){

    	// var _this = this;

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

    	this.login = function(userCredentials, callback){
    		console.log("factory userCredentials");
    		console.log(userCredentials);
    		$http.post('/accounts/login', userCredentials).then(function(returned_data){
		        console.log(returned_data.data);
		        if(returned_data.data == true){
		        	console.log("already a user")
		        	callback(returned_data);
		        }
		        console.log("here")
		        if(returned_data != true){
		        	console.log("siging up")
		        	console.log(returned_data)
		        	$http.post('/accounts/register', userCredentials).then(function(returned_data){
		        		console.log(returned_data.data);
		        		// callback(true);
		        	})
		        }


		        // if (typeof(callback) == 'function'){
		        //   callback(returned_data);
		        // }
		    });
    	}


    }

    return new accountFactory();
}]);