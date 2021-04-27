// IMPORTS

import express from "express";

// VARIABLES

const router : express.IRouter = express.Router();

// MODELS

import { Test } from "../models/Test";

// ROUTES

router.get("/", (req : express.Request, res : express.Response) => {
  return res.send("Hello World!");
});

router.get("/:name/:description/:createdBy", async (req : express.Request, res : express.Response) => {
  // Declare variables
  const name : string = req.params.name;
  const description : string = req.params.description;
  const createdBy : string = req.params.createdBy;
  // Create test instance
  const test = new Test({ name, description, createdBy });
  // Save new test instance
  try {
    await test.save();
  } catch (error) {
    return res.send({ status: "error", content: error });
  }
  // Success handler
  return res.send({ status: "succeeded", content: test });
});

// EXPORT

export default router;