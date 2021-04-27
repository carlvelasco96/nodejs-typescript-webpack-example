// IMPORTS

import express from "express";
import mongoose from "mongoose";
import compression from "compression";
import RGeneral from "./routes/general";

class Index {
  private app : express.Express;
  private port : number;
  private uri : string;

  constructor() {
    this.app = express();
    this.port = 80;
    this.uri = "mongodb+srv://carl-test:3HshPXaFG7rLCsT8@test.acw3m.mongodb.net/nodejs-typescript-example?retryWrites=true&w=majority";
  }

  public setMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(compression());
  }

  public setRouters() {
    this.app.use(RGeneral);
  }

  public connectDatabase() {
    return new Promise<void>(async (resolve, reject) => {
      try {
        await mongoose.connect(this.uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
      } catch (error) {
        console.log(error);
        return reject();
      }
      console.log("Database connection has been established");
      return resolve();
    });
  }

  public connectServer() {
    this.app.listen(this.port, () => console.log(`Server is running at port ${this.port}`));
  }
}

const index = new Index();
index.setMiddlewares();
index.setRouters();
index.connectDatabase();
index.connectServer();