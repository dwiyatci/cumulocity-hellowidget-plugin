# cumulocity-hellowidget-plugin

[![version](https://img.shields.io/npm/v/cumulocity-hellowidget-plugin.svg)](https://www.npmjs.com/package/cumulocity-hellowidget-plugin)
[![downloads](https://img.shields.io/npm/dt/cumulocity-hellowidget-plugin.svg)](http://npm-stat.com/charts.html?package=cumulocity-hellowidget-plugin)
[![MIT License](https://img.shields.io/github/license/mashape/apistatus.svg)](https://raw.githubusercontent.com/dwiyatci/cumulocity-hellowidget-plugin/master/LICENSE.txt)

A demo app for showcasing creation of a custom Cumulocity UI widget plugin.

### Why?
Currently there is [this snore-inducing JSDoc for the API to allow adding components (widgets)](http://resources.cumulocity.com/documentation/jssdk/latest/#/api/c8y.ui.provider:c8yComponentsProvider), but it is inadequately practical to show "how-to" in details. So, let's slay the Jabberwocky! :hocho: :dragon_face:

## Installation
* Make sure you have Node.js LTS installed and npm from its [website](https://nodejs.org), or better even, use [nvm](https://github.com/creationix/nvm).

- Install [yarn](https://yarnpkg.com/en/docs/install).

- Install [cumulocity-tools](https://www.npmjs.com/package/cumulocity-tools).

- Clone the repo, `cd` to your project directory.

- Adapt the UI build version you want to develop against:
```bash
$ c8y install [ui_build_version]
```

- Install dependencies:
```bash
$ yarn install:clean
```

## Usage
Check out [the introduction to plugin development docs](http://cumulocity.com/guides/web/introduction/).

## Quicky up and running
Oh well, I know that you guys are a bunch of lazy people. How to get this app deployed and see it running on my tenant, you ask? Be my guest:

```bash
$ yarn deploy
```

After a few more steps in interactive command line user interfaces, you should then be able to access the app on `https://<your-tenant-url>/apps/hellowidgetapp`.

## Unit testing
```bash
$ yarn test
```

## Linting
```bash
$ yarn lint <target_file_or_dir>
```

Example:
```bash
$ yarn lint plugins
```

Or better yet, make your IDE automatically integrate the linting process based on the .rc file (`.eslintrc`).

The rules quite strictly follow the [Airbnb JavaScript Style Guide (ES6+ without React)](https://github.com/airbnb/javascript).

## Author
Glenn Dwiyatcita ([@dwiyatci](http://tiny.cc/dwiyatci))

## License
MIT.

See [LICENSE.txt](LICENSE.txt).
