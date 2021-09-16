import * as dotenv from 'dotenv';

dotenv.config();

export const PORT = parseInt(process.env.PORT!);
export const DATABASE_URL: string = process.env.DATABASE_URL!;
