//Id, UserName, FirstName, LastName, City, Address, Zip, Credit Card Code, CVV, Name, Date
import { Schema, model, Document } from 'mongoose';

export interface IUser {
  Id: number;
  UserName: { type: string };
  FirstName: { type: string };
  LastName: string;
  City: string;
  Address: string;
  Zip: string;
  CreditCard: string;
  Code: string;
  CVV: string;
  Name: string;
  Date: string;
}
const schema = new Schema<IUser>(
  {
    Id: { type: Number },
    UserName: { type: String },
    FirstName: { type: String },
    LastName: { type: String },
    City: { type: String },
    Address: { type: String },
    Zip: { type: String },
    CreditCard: { type: String },
    Code: { type: String },
    CVV: { type: String },
    Name: { type: String },
    Date: { type: String }
  },
  { timestamps: true }
);

export default model<IUser>('User', schema);
