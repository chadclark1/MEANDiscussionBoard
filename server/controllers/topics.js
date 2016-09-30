console.log("Topics controller loaded");


var mongoose = require('mongoose');
var Topic = mongoose.model('Topic');


function TopicsController(){


  this.index = function(req,res){
    console.log(req.body);
    Topic.find({}, function(err, results){
      
      if(err) {console.log(err);}
      res.json(results);
    })
  };

  this.addTopic = function(req,res){
    console.log(req.body);
    var TodayDate = new Date();
    var day = TodayDate.getDate();
    var month = TodayDate.getMonth() + 1;
    var year = TodayDate.getFullYear();
    console.log(day);
    console.log(month);
    console.log(year);
    Topic.create({
      user: req.body.user,
      topic: req.body.topic,
      description: req.body.description,
      category: req.body.category,
      date: TodayDate,
      day: day,
      month: month,
      year: year,
      }, 
      function(err, results){
        if(err){
          console.log(err);
        }
        res.json({err});
      })
    // res.json({});
  }


  this.show = function(req,res){
    console.log(req.params.id);
    var topicID = req.params.id;
    console.log(topicID);
    Topic.find({_id: topicID}, function(err, results){
      
      if(err) {console.log(err);}
      res.json(results);
    })
  };


  // this.delete = function(req,res){
  // //   //your code here
  //   console.log("users controller delete")
  //   console.log(req.params)
  //   User.remove({_id: req.params.id}, function(err, results){
  //     if(err){
  //       console.log(err);
  //     }
  //     res.json({placeholder:'delete'});
  //   })
  // };


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



module.exports = new TopicsController();