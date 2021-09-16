// express
import express, { Application, RequestHandler } from 'express';
// important typings
import Server from './server/Server';
import mongoose from 'mongoose';
import { json, urlencoded } from 'body-parser';
// utils
import { PORT } from './config';
import path from 'path';

import Controller from './typings/Controller';
import UserController from './controllers/UserController';

const app: Application = express();
export const server: Server = new Server(app, mongoose, PORT);

const controllers: Array<Controller> = [new UserController()];

const globalMiddleware: Array<RequestHandler> = [
  urlencoded({ extended: false }),
  json(),
  express.static(path.join(__dirname, '../client'))
];

Promise.resolve()
  .then(() => server.initDatabase())
  .then(() => {
    server.loadMiddleware(globalMiddleware);
    server.loadControllers(controllers);
    server.run();
    server.renderClient();
  });
