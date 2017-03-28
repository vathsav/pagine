# Pagine

Repo for my blog www.vathsav.com.

## Features
* Uses [hogan.js](http://twitter.github.io/hogan.js/) template engine for sidebars, footers, and blog cards.
* Templates are precompiled using [hulk](https://github.com/twitter/hogan.js/blob/master/bin/hulk), and are rendered on page load.
* Uses [Firebase](http://firebase.google.com/) as a backend service for subscriptions and contact.

## Usage

### Install node packages
```
$ npm install
```

### Compile hogan templates
```
$ node hulk -o templates hogan/*
```
Note that the hulk file has been edited to work from the root directory.

### Create Firebase config file
```
$ cd js
$ touch config.js
$ open config.js
```

Paste the [config script](https://firebase.google.com/docs/web/setup) from your Firebase Console into the config.js file. Make sure to define appropriate [security rules](https://firebase.google.com/docs/database/security/) for your data and you're good to go.

## License
[MIT License](https://github.com/vathsav/pagine/blob/master/LICENSE)
