import fs from 'fs';
import csv from 'csv-parser';

export default class UserService {
  async prepareCsvData(
    path: string,
    options: any = { remove: true }
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const results: any = [];
      fs.createReadStream(path)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('error', (err) => reject(err))
        .on('end', () => {
          options?.remove &&
            fs.unlink(path, (err) => {
              reject(err);
            });
          resolve(results);
        });
    });
  }
}
