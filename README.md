# Angello: NodeJS express app for AngularJS In Action

NodeJS app for Angello sample in AngularJS in action book.

## Running it

First, you need to set the `AUTH0_CLIENT_ID`, `AUTH0_CLIENT_SECRET` and `MONGO_URL` enviroment variables. For that, you can just create a `.env` file with those variables (similar to the `.env.example` file).

Then run `npm install` in a terminal (or command prompt) window.

In a separate terminal window, run the mongo driver by executing `mongod`.

Finally, go back to the first terminal window and run `node server.js` to start the server.
