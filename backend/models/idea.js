import mongoose from "mongoose";

const ideaSchema = new mongoose.Schema({
  idea: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  create_date: {
    type: Date,
    default: Date.now,
  },
});

export const Idea = mongoose.model("Idea", ideaSchema);
