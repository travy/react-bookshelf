# BookShelf

## Description

BookShelf is a React.js project which allows users to keep track of book items
on one of three shelves:  Want to Read, Currently Reading, and Read.

To keep the project simple and React.js focusted, all storage relies on the
presence of a state cookie.  So any shelves that are setup on one machine (or
browser) will likely not be seen on another.

## Install

### Download Packages

BookShelf was built using `npm` package management, meaning that it is a breeze
to install all of the required software for running the app.  Simply open a
terminal and type `npm install` and all required packages will be downloaded.

```sh
# yarn can also be used, instead of npm, and runs much faster
yarn install
```

### Setup Server

Its also possible to run BookShelf in a few different ways.

#### Development Server

If you do not wish to install the app on a server and instead wish to see it in
action, you can simply run the `npm start` command in your systems terminal.
This will start up a development server which will allow the app to be used
without the effort involved with spinning up a server.

```sh
yarn start
```

#### Production Build

If installing on a production machine, run the command `npm build` which will
generate a folder named `build`.  Using a pre-configured server, you can now
point to the build folder to serve out the application.

```sh
yarn build
```
