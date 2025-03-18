const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  questions: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("Quiz", QuizSchema);