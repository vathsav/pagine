# Pagine

This project contains the code for my personal website - https://www.vathsav.com. 'Pagine' is Italian for 'Pages'.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Resources

* [Release Notes]()
* [Backend Models]()

## Technology Stack

* React Front-end
* Firebase Back-end
* AWS - CI / CD

## Features

* 3 Main Page
    * Home
        * Scalable, responsive visualisation of the skyline of Milan, connected to OpenWeatherMap. It rains when it rains,
        snows when it snows, the landscape responds to the time of the day, seasons. Dope stuff.
    * Blog
        * Content is served from Firestore. All content is realtime - meaning you could make changes on the go.
    * Portfolio
        * A simple card column layout of some of my work.
    * EmailJS
        * A client-side email sending service. No server code.
    * Disqus Comment System
        * Because why build one myself when Disqus is so darn nice?

## Installing

To install this project locally, fork the project, you need to first setup your environment variables:

Install dependencies
```
yarn install
```

Run the server
```
yarn start
```

## License

Copyright 2022 Vathsav Harikrishnan

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
