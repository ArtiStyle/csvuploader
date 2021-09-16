# csvuploader

CSVUploader is a express api server .

## Tech

CSVUploader uses a number of open source projects to work properly:

- [csv-parser] - Streaming CSV parser that aims for maximum speed as well as compatibility with the csv-spectrum CSV acid test suite.
- [dotenv] - load env variables from .env file
- [express] - Markdown parser done right. Fast and easy to extend.
- [mongoose] - MongoDB object modeling tool designed to work in an asynchronous environment
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework
- [multer] - Middleware for handling `multipart/form-data`.

And of course Dillinger itself is open source with a [public repository][dill]
on GitHub.

## Installation and Run

CSVUploader requires [Node.js](https://nodejs.org/) v10+ to run.
CSVUploader requires MongoDB to run.

Install the dependencies and devDependencies.
Start mongoDB

Pass environment variables - .env file in root folder

```sh
DATABASE_URL=mongodb://{{mongoDB_URL}}/{DB_NAME}
PORT=3000 //port
```

Run in terminal and start the server

```sh
cd csvuploader
npm i
npm run start:dev //development mode
npm start //prod mode
```

Testing

```sh
cd csvuploader
npm run test
```

Demo
[link 1 ](http://artidev.tk)
