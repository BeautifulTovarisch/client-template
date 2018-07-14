# README #

### What is this repository for? ###

A standalone front-end powered by webpack + webpack-dev-server. Includes configuration for automated testing with [AVA](https://github.com/avajs/ava)

### How do I get set up? ###

[Download this repository](https://bitbucket.org/cgis_development/node-scaffolding/get/e4d96f80f66f.zip)

Afterwards, unzip the folder and rename it to the desired project.

Run `yarn` or `yarn install` to install the dependencies. `npm start` will run the dev server and AVA.

### Deployment ###

Run `npm build` to build a production bundle. After moving the bundle to the desired location, be sure to type `yarn install --production` in order to only install production dependencies.
