/**
 *
 * this file is the entry point of the application
 * when we run the command `npm start` this file is executed
 * we separate the server from the application logic to make the code more modular
 * and easy to maintain, and testable when we need to write multiple tests
 *
 * you basically don't need to touch this file, unless you want to change the port number
 * or add some configurations to the server
 */

const app = require('./index.js');

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('server starting 🚀🆙✔ on port 3000!'));
