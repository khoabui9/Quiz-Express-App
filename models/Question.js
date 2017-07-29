'use strict';

var mongoose = require('mongoose');

var QuestionSchema = new mongoose.Schema({
		text: String,
		answer: [],
		correctAnswer: { type: Number, min: 0, max: 4 },
});

var model = mongoose.model('Question', QuestionSchema);

module.exports = model;


