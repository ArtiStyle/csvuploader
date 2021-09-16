import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import multer from 'multer';
import csv from 'csv-parser';
import Controller, { Methods } from '../typings/Controller';
import User from '../models/User';
import UserService from '../services/UserService';

export default class UserController extends Controller {
  path = '/users';
  routes = [
    {
      path: '/csv',
      method: Methods.POST,
      handler: this.handleCSV,
      localMiddleware: [multer({ dest: 'uploads/' }).single('csv')]
    }
  ];
  userService: UserService;
  constructor() {
    super();
    this.userService = new UserService();
  }
  async handleCSV(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const userService = new UserService();
      if (!req.file) throw new Error('no file provided');
      const { destination, filename } = req.file || {};
      const users = await userService.prepareCsvData(
        `${destination}${filename}`
      );
      await User.insertMany(users);
      super.sendSuccess(res, { users });
    } catch (e: any) {
      super.sendError(res, e?.message);
    }
  }
}
