import mongoose from "mongoose";
import { Schema } from "mongoose";

const techsectionSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  links: [
    {
      type: Schema.Types.ObjectId,
      ref: "Gurulink",
    },
  ],
});

export const Techsection = mongoose.model("Techsection", techsectionSchema);
