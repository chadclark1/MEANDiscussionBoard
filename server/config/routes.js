console.log('Routes.js: future routes');

var accounts = require('./../controllers/accounts.js');
var messages = require('./../controllers/messages.js');

// var quotes = require('../controllers/quotes.js')
module.exports = function(app){
  	app.post('/accounts/login', accounts.login);
 //   app.get('/friends/:id', friends.show);
    app.post('/accounts/register', accounts.register);
 //   app.put('/friends/:id', friends.update);
 //   app.delete('/friends/:id', friends.delete);
 	app.post('/messages', messages.postMessage);
 	app.get('/messages', messages.index);

}
