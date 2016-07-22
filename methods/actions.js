var User = require('../models/user');
// Models
var Review = require("../models/review")

var config = require('../config/database');
var jwt = require('jwt-simple');

var functions = {
    // Routes
 
    // Get reviews
     getReview:function(req, res) {
 
        console.log("fetching reviews");
 
        // use mongoose to get all reviews in the database
        Review.find(function(err, reviews) {
 
            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)
 
            res.json(reviews); // return all reviews in JSON format
        });
    },
    // create review and send back all reviews after creation
    postReview:function(req, res) {
 
        console.log("creating review");
 
        // create a review, information comes from AJAX request from Ionic
        Review.create({
            title : req.body.title,
            description : req.body.description,
            rating: req.body.rating,
            done : false
        }, function(err, review) {
            if (err)
                res.send(err);
 
            // get and return all the reviews after you create another
            Review.find(function(err, reviews) {
                if (err)
                    res.send(err)
                res.json(reviews);
            });
        });
 
    },
    authenticate: function(req, res) {
        User.findOne({
            name: req.body.name
        }, function(err, user){
            if (err) throw err;
                     
            if(!user) {
                res.json({success: false, msg: 'Authentication failed, User not found'});
            }
           else {
                user.comparePassword(req.body.password, function(err, isMatch){
                    if(isMatch && !err) {
                        var token = jwt.encode(user, config.secret);
                        res.json({success: true, token: token});
                    } else {
                        rres.json({success: false, msg: 'Authenticaton failed, wrong password.'});
                    }
                })
            }
            
        })
    },
    addNew: function(req, res){
        if((!req.body.name) || (!req.body.password)){
            console.log(req.body.name);
            console.log(req.body.password);
            
            res.json({success: false, msg: 'Enter all values'});
        }
        else {
            var newUser = User({
                name: req.body.name,
                password: req.body.password
            });
            
            newUser.save(function(err, newUser){
                if (err){
                    res.json({success:false, msg:'Failed to save'})
                }
                
                else {
                    res.json({success:true, msg:'Successfully saved'});
                }
            })
        }
    },
    getinfo: function(req, res){
        if(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            var token = req.headers.authorization.split(' ')[1];
            var decodedtoken = jwt.decode(token, config.secret);
            return res.json({success: true, msg: 'hello '+decodedtoken.name});
        }
        else {
            return res.json({success:false, msg: 'No header'});
        }
    }
    
    
}

module.exports = functions;

