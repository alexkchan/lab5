var data = require("../data.json");

exports.addFriend = function(req, res) {    
   
    var name = req.query.name;
    var desc = req.query.description;
    var img = 'http://lorempixel.com/400/400/people';
    data["friends"].push({name: name, description: desc, imageURL: img});
  
    res.render('add');

 }