import mongoose from "mongoose";

const trainSchema = new mongoose.Schema(
  {
    train_no: String,
    train_name: String,
    source: String,
    destination: String,
    fare: Number,
    availability: String
  },
  { timestamps: true }
);

export const trainModel = mongoose.model("train", trainSchema);
