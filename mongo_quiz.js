/*'use strict';

var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/quiz");

var db = mongoose.connection;

db.on("error", function(err){
	console.error("connection error:", err);
});

db.once("open", function(){
	var Schema = mongoose.Schema;	

	var AnswerSchema = new Schema({
		text: String,
		createdAt: {type: Date, default: Date.now},
	});

	var QuestionSchema = new Schema({
		text: String,
		answer: [AnswerSchema],
		correctAnswer: Number
	});

	var Question = mongoose.model("Question", QuestionSchema);
	var Answer = mongoose.model("Answer", AnswerSchema);

	var quizData = [
		{
			text: "2 + 2 = ",
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
			correctAnswer: 0;
		},
		{
			text: "Red is Blue",
			answer: [
				{
					text: 'true',
				},
				{
					text: 'false',
				},
			],
			correctAnswer: 0;
		},
	];

	Question.remove({}, function(err) {
		if (err) console.error(err);
		Question.create(quizData, function(err, animals){
			if (err) console.error(err);
			Animal.findOne({type: "elephant"}, function(err, elephant) {
				elephant.findSameColor(function(err, animals){
					if (err) console.error(err);
					animals.forEach(function(animal){
						console.log(animal.name + " the " + animal.color + 
							" " + animal.type + " is a " + animal.size + "-sized animal.");
					});
					db.close(function(){
						console.log("db connection closed");
					});
				});
			});
		});
	});
});
*/