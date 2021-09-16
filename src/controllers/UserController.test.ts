import UserController from './UserController';
import UserService from '../services/UserService';
import { NextFunction, Request } from 'express';

describe('UserController', () => {
  test('should return users list from CSV', async () => {
    const usersList = [
      {
        Id: '1',
        UserName: 'test test test',
        FirstName: 'testName',
        LastName: 'test',
        City: 'test',
        Address: 'test',
        Zip: 'test',
        CreditCardCode: 'test',
        CVV: 'test',
        Name: 'test',
        Date: 'test'
      },
      {
        Id: '2',
        UserName: 'test test test1',
        FirstName: 'testName1',
        LastName: 'test1',
        City: 'test1',
        Address: '1test',
        Zip: 'test1',
        CreditCardCode: 'test1',
        CVV: 'test1',
        Name: 'test1',
        Date: 'test1'
      }
    ];
    const userService = new UserService();
    const users = await userService.prepareCsvData('uploads/test/test.csv', {
      remove: false
    });
    expect(users).toEqual(usersList);
  });
});
