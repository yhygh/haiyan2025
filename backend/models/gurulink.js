import mongoose from "mongoose";

const guruLinkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  coment: String,
});

export const Gurulink = mongoose.model("Gurulink", guruLinkSchema);
