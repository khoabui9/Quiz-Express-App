'use strict';

var express = require("express");

var Question = require("../models/Question");

var router = express.Router();

var questionaires = [];

var selections = [];

var counter = 0;

var check = false;

router.get( '/', ( req, res ) => {
  selections.length = 0;
  questionaires.length = 0;
  counter = 0;
  const name = req.cookies.username;
  if (name) {
    res.redirect('questions');
  } else {
    res.render('index');
  }
 });

router.post('/', (req, res) => {
	res.cookie('username', req.body.username);
  	res.redirect('/questions');
}); 

router.get('/questions', (req, res) => {
	check = true;
	Question.find({}, function(err, questions) {
		questionaires = questions;
		var length = questions.length;
		var numberOfQuestions = length;
		var id = counter++;
		if (id === length) {
			counter = 0;
			id = counter++;
		}
		res.redirect( `/questions/${id}`);
	});
});

router.get('/questions/:id', (req, res, next) => {	
	var { id } = req.params;
	/*if (check === true) {*/
		Question.find({}, function(err, questions) {
			var questionss = questions[id];
			res.render('questions', {questionss: questionss});
		});
/*	} else res.redirect('/questions');*/	
});

router.post('/questions', (req, res) => {
	var answer = req.body.answer;
	selections.push(answer);
	if (selections.length != questionaires.length)
		res.redirect('/questions');
	else
		res.redirect('/result');
});

router.get('/result', (req, res) => {
	check = false;
	var score = 0;
	const length = questionaires.length;
	for (let i = 0; i < length; i++) {
		var correctAnswer = questionaires[i].correctAnswer;
		if (selections[i] === questionaires[i].answer[correctAnswer].text) {
			score++;
		}
	}
	res.render('result', {score});
});

router.get('/startover', (req, res) => {
	res.redirect('/');
});

router.post('/goodbye', (req, res) => {
	res.clearCookie('username');
	res.redirect('/');
});

module.exports = router;
