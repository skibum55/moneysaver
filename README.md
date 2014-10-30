# moneysaver
[![Build Status][build-image]][build-url]
[![Code GPA][gpa-image]][gpa-url]
[![Test Coverage][coverage-image]][coverage-url]
[![Dependency Status][depstat-image]][depstat-url]
[![Bower Version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]
[![IRC Channel][irc-image]][irc-url]
[![Gitter][gitter-image]][gitter-url]
[![GitTip][tip-image]][tip-url]

##  AWS multi region and zone scheduled instance shutdown

This app is meant to be deployed on Pivotal Web Services to keep track of my AWS account spending.  It will be a node microservice that runs a scheduled job that :

* Creates environment variables on deployment to allow AWS login
* Retrieves all regions from AWS
* Retrieves all instances from the Regions
* Shuts them down every night


Future improvements:

* Allow passing of AWS credentials
* Allows passing of schedule(s)
* Allows passing of region(s)
* Can start/reboot instances

This repository was scaffolded with [generator-microjs](https://github.com/daniellmb/generator-microjs).

## Examples

### JavaScript

```JavaScript
  // TODO
```

## Install Choices
- `bower install moneysaver`
- [download the zip](https://github.com/skibum55/moneysaver/archive/master.zip)

## Tasks

All tasks can be run by simply running `gulp` or with the `npm test` command, or individually:

  * `gulp lint` will lint source code for syntax errors and anti-patterns.
  * `gulp gpa` will analyze source code against complexity thresholds.
  * `gulp test` will run the jasmine unit tests against the source code.
  * `gulp test-min` will run the jasmine unit tests against the minified code.

## License

(The MIT License)

Copyright (c) 2014 Sean Keery

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



[build-url]: https://travis-ci.org/skibum55/moneysaver
[build-image]: http://img.shields.io/travis/skibum55/moneysaver.png

[gpa-url]: https://codeclimate.com/github/skibum55/moneysaver
[gpa-image]: https://codeclimate.com/github/skibum55/moneysaver.png

[coverage-url]: https://codeclimate.com/github/skibum55/moneysaver/code?sort=covered_percent&sort_direction=desc
[coverage-image]: https://codeclimate.com/github/skibum55/moneysaver/coverage.png

[depstat-url]: https://david-dm.org/skibum55/moneysaver
[depstat-image]: https://david-dm.org/skibum55/moneysaver.png?theme=shields.io

[issues-url]: https://github.com/skibum55/moneysaver/issues
[issues-image]: http://img.shields.io/github/issues/skibum55/moneysaver.png

[bower-url]: http://bower.io/search/?q=moneysaver
[bower-image]: https://badge.fury.io/bo/moneysaver.png

[downloads-url]: https://www.npmjs.org/package/moneysaver
[downloads-image]: http://img.shields.io/npm/dm/moneysaver.png

[npm-url]: https://www.npmjs.org/package/moneysaver
[npm-image]: https://badge.fury.io/js/moneysaver.png

[irc-url]: http://webchat.freenode.net/?channels=moneysaver
[irc-image]: http://img.shields.io/badge/irc-%23moneysaver-brightgreen.png

[gitter-url]: https://gitter.im/skibum55/moneysaver
[gitter-image]: http://img.shields.io/badge/gitter-skibum55/moneysaver-brightgreen.png

[tip-url]: https://www.gittip.com/skibum55
[tip-image]: http://img.shields.io/gittip/skibum55.png
