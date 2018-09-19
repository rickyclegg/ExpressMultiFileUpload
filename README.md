# Express Multi File Upload

A NodeJS Express Application.

### Node Version - 6.5

##### NPM Scripts
* **start** - Starts the app in test env unless NODE_ENV is set,
* **debug** - Starts the app in development env. ***Only on MacOS***,
* **watch** - Starts the app in development env, and watches for changes ***Only on MacOS***,
* **test** - Runs end to end tests and Linting,
* **lint** - Runs Eslint against the code,
* **e2e** - Runs end to end tests.
* **unit** - Runs the unit tests.

The MacOS only scripts can have the equivilent run on Windows, they just need `NODE_ENV` set to `development` before Nodemon is run.

### Testing

The folder `e2e` is used to have integration tests using the [Supertest](https://github.com/visionmedia/supertest) framework.
[Eslint](https://eslint.org/) is used based on the recommended rules with a few changes.

All tests must pass in order for the build to pass. Currently there is no minimum coverage required.

Run `npm test` to see all tests run.

### Structure
`server.js` is currently the main file setting up the server and the routes.
