import { Application, RequestHandler, Request, Response } from 'express';
import http from 'http';
import { Mongoose } from 'mongoose';
import path from 'path';
import Controller from '../typings/Controller';
import { DATABASE_URL } from '../config';

export default class Server {
  app: Application;
  private database: Mongoose;
  private readonly port: number;

  constructor(app: Application, database: Mongoose, port: number) {
    this.app = app;
    this.database = database;
    this.port = port;
  }

  public run(): http.Server {
    return this.app.listen(this.port, () => {
      console.log(`The server is running on port ${this.port}`);
    });
  }

  public loadMiddleware(middlewares: Array<RequestHandler>): void {
    middlewares.forEach((middleware) => {
      this.app.use(middleware);
    });
  }

  public loadControllers(controllers: Array<Controller>): void {
    controllers.forEach((controller) => {
      console.log(controller.path);
      this.app.use(controller.path, controller.setRoutes());
    });
  }

  public renderClient(): void {
    this.app.get('/*', (req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, '../../client', 'index.html'));
    });
  }

  public async initDatabase(): Promise<void> {
    try {
      await this.database.connect(DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      console.log('Database is successfully connected');
    } catch (err) {
      console.log(err);
    }
  }
}
