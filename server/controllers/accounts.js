console.log("Accounts controller loaded");


var mongoose = require('mongoose');
var Account = mongoose.model('Account');


function AccountsController(){


  this.register = function(req,res){
    console.log(req.body);
    Account.create({ 
        username: req.body.username,
          }, function(err, results){
        // console.log("in FriendsController this.index, Friend.find");
        // console.log(results);
        if(err) {console.log(err);}
        // res.json(results);
        res.json({err});
      })
      
    };

  this.login = function(req,res){
    console.log(req.body.username);
    Account.find({username: req.body.username}, function(err, results){
      console.log(err);
      // if(err){
      //   console.log(err);
      //   res.json({err});
      // } else {       
      //   res.json(true);   
      //  }

      if(results != ''){
        res.json(true);
      } else {
        res.json({err});
      }
      
    })
  }


  // this.create = function(req,res){
  //   //your code here
  //   res.json({placeholder:'create'});
  // };
  // this.update = function(req,res){
  //   //your code here
  //   res.json({placeholder:'update'});
  // };
  // this.delete = function(req,res){
  //   //your code here
  //   res.json({placeholder:'delete'});
  // };
  // this.show = function(req,res){
  //   //your code here
  //   res.json({placeholder:'show'});
  // };
}



module.exports = new AccountsController();