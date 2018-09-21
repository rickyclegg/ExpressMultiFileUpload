# Express Multi File Upload

A NodeJS Express Application.

### Upfront
I tried to get hold of all the version specified in the brief. However the oldest installer or Postgres I could find for MacOS was `9.4` so I installed that.
I didn't install `nvm` to manage node down to version `6.5`. However using the docs I not used any API's that are not available on `6.5`. It was actually a nice challenge, version `6` is very old now.
I may have been a bit confused with the client side brief as it seemed what was being asked with "with an associated 'identifier' form field" I found confusing. So if my UI seems a little confusing this is why.

### Decisions
* I used WebStorm for all my editing.
* I used the express generator to get started. Then tweaked the things I didn't really need.
* I used Jasmine for all my testing. This is because it has the runner, expects, spies and everything there for me.
* I used BDD for the client side to build up the the ES5 classes.
* I used integration tests on the server to test the API, as I think this works really well to hide all the business logic and keep the tests from getting fragile.
* I used a repository-ish pattern to hide Postgres from the rest of the application. And then service files to hold all the business logic. This is still only tested via integration, and not unit.
* I have never stored a file in a DB before, I normally store them in Azure Blob storage and put the url in the DB. So apologies if anything in my `upload.service.js` looks odd to you. I still think the code is very neat.
* I used grunt to build my sass and client side js.
* Hands up, I only ran this in Chrome, but I only used basic MDL and ES5 so should be all good.

### Running
* You need Postgres up and running with a DB called 'multifile'.
* You need a user with the username `admin` and password `admin`.
* This need to be running for the integration tests also.
* Run `npm install`.
* Run `npm start` or `node server` to get the app running.
* Run `npm test` to run linting, unit and integration tests on the client and server.

I'm happy to answer any questions you may have.
I took a little longer than allocated, but I to steal time here and there to get the task done.

I found this task fun to do. I hope you enjoy my code.
