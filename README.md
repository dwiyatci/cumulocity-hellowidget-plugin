# cumulocity-hellowidget-plugin

[![version](https://img.shields.io/npm/v/cumulocity-hellowidget-plugin.svg)](https://www.npmjs.com/package/cumulocity-hellowidget-plugin)
[![downloads](https://img.shields.io/npm/dt/cumulocity-hellowidget-plugin.svg)](http://npm-stat.com/charts.html?package=cumulocity-hellowidget-plugin)
[![MIT License](https://img.shields.io/github/license/mashape/apistatus.svg)](https://raw.githubusercontent.com/dwiyatci/cumulocity-hellowidget-plugin/master/LICENSE.txt)

#### *** Heads-up! Since version 2.X, this Cumulocity UI plugin boilerplate is written in ES6+. :tada: ***

A demo app for showcasing creation of a custom Cumulocity UI widget plugin.

### Why?
Currently there is [this snore-inducing JSDoc for the API to allow adding components (widgets)](http://resources.cumulocity.com/documentation/jssdk/latest/#/api/c8y.ui.provider:c8yComponentsProvider), but it is inadequately practical to show "how-to" in details. So, let's slay the Jabberwocky! :hocho: :dragon_face:

## Installation
* Make sure you have Node.js ≥ v6.11.0 installed and npm from its [website](https://nodejs.org), or better even, use [nvm](https://github.com/creationix/nvm).

* Clone the repo, `cd` to your project directory, and setup dependencies:

```bash
$ npm run install:clean
```

## Usage
Check out [the introduction to plugin development docs](http://cumulocity.com/guides/web/introduction/).

## Quicky up and running
Oh well, I know that you guys are a bunch of lazy people. How to get this app deployed and see it running on my tenant, you ask? Be my guest:

```bash
$ npm run deploy
```

After a few more steps in interactive command line user interfaces, you should then be able to access the app on `https://<your-tenant-url>/apps/hellowidgetapp`.

## Unit testing
```bash
$ npm t
```

~~Note that you may need to supply different app context path other than `hellowidgetapp` in npm scripts for `test` (in `package.json`) if you want to reuse this boilerplate.~~

## Linting
```bash
$ npm run lint <targetFileOrDir>
```

Example:
```bash
$ npm run lint plugins
```

Or better yet, make your IDE automatically integrate the linting process based on the .rc file (`.eslintrc.yaml`).

The rules quite strictly follow the [Airbnb JavaScript Style Guide (ES6+ without React)](https://github.com/airbnb/javascript).

## Author
Glenn Dwiyatcita ([@dwiyatci](http://tiny.cc/dwiyatci))

## License
MIT.

See [LICENSE.txt](LICENSE.txt).
