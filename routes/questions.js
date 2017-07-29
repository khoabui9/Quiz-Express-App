'use strict'

var express = require('express');
var Question = require("../models/Question");
var router = express.Router();

router.get('/', function() {
	/*var length;
	Question.find({}, function(err, questions) {
		length = questions.length;
		console.log(length);
	});
	var numberOfQuestions = length;
  var id = Math.floor( Math.random() * numberOfQuestions );
  res.redirect( `/cards/${flashcardId}` )*/
});

module.exports = router;