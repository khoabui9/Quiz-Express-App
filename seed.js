'use strict'

var Question = require('./models/Question');

var quizData = [
		{
			text: "2 + 2 = ???",
			answer: [
					{
						text: '4',
					},
					{
						text: '5',
					},
					{
						text: '6',
					},
					{
						text: '8',
					},
				],
			correctAnswer: 0
		},
		{
			text: "Red is Blue?",
			answer: [
					{
						text: 'true',
					},
					{
						text: 'false',
					},
				],
			correctAnswer: 0
		},
		{
			text: "Are u good, bro?",
			answer: [
					{
						text: 'Yes',
					},
					{
						text: 'No',
					},
				],
			correctAnswer: 1
		},
	];

Question.remove({}, function(err) {
	if (err) console.error(err);
	Question.create(quizData, function(err, questions){
	if (err) console.error(err);
	});
});

