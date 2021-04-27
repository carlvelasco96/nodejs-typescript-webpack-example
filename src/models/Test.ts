// IMPORTS

import mongoose from "mongoose";

// INTERFACE

interface ITask extends mongoose.Document {
  name: string;
  description: string;
  createdBy: string;
}

// MODEL

const TestSchema : mongoose.Schema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: "" },
  createdBy: { type: String, required: true }
});

// EXPORT

export const Test = mongoose.model<ITask>("tests", TestSchema);