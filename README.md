![Hermie The Crab](/icon.png)

# Scuttle Shell

This is a [Secure Scuttlebutt](http://scuttlebutt.nz) system tray application. It provides an always-running _sbot_ for your local system.

This app also setups itself as a [Native Host App](https://developer.mozilla.org/en-US/Add-ons/WebExtensions/Native_messaging) that can be used by **authorized Firefox Add-ons** such as [Patchfox](https://github.com/soapdog/patchfox).

## Dependencies

You must have [Git](https://git-scm.com) and [Node](https://nodejs.org) installed.

## Install globally

```
$ npm install -g scuttle-shell
```

or if you cloned this repo (run from the repo folder itself):

```
$ npm install -g
```

You can run the app by executing `scuttleshell` on your terminal.

## Using it programmatically

Right now, there is only one feature exported by the `scuttle-shell` module which is the ability to start a server. Example:

```
let scuttleshell = require("scuttle-shell")

console.log("Starting sbot, quitting after 30 seconds")
scuttleshell.start()

setTimeout(scuttleshell.stop, 30000)
```

## Setup

This application is built with [NodeJS](https://nodejs.org). To set it up run:

```
$ npm install
```

This should set it up. If anything fails you can check your setup with

### Checking your setup

Depending on your running operating system, you can check the configuration using:

```
$ npm run check
```

or

```
$ npm run check-win
```

### Running Setup (again)

If anything went wrong during the setup or if you rename the folder this app is in, you can redo the setup with:

```
$ npm install
```
