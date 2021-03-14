const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Please enter in an  exercise type",
      },
      name: {
        type: String,
        trim: true,
        required: "Please enter in an  exercise name",
      },
      duration: {
        type: Number,
        required:
          "Please enter in the amount of time of the workout in minutes",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workouts = mongoose.model("Workout", workoutSchema);

module.exports = Workouts;
