# multinomial-ln

[![NPM](https://nodei.co/npm/multinomial-ln.png?global=true)](https://nodei.co/npm/multinomial-ln/)

[![Build Status](https://travis-ci.org/ekg/multinomial-ln.svg)](https://travis-ci.org/ekg/multinomial-ln)

log(multinomial coefficient) from logs all the way down

## install

```
npm install multinomial-ln
```

## example

``` js
var multinomialLn = require('multinomial-ln')
Math.round(Math.exp(multinomialLn([3, 5, 3, 5, 5]))
// 821292151680
```

You can also work completely in log.

``` js
multinomialLn([1, 5, 7, 5, 5, 1, 2, 3])
// 106.60573852903470
```

As the factorial function used to generate these log-multinomial coefficients is approximate, results like this one are not exact, although respecting the magnitude of this value (`e^106.6`), the actual value is plenty close. Keep this in mind.

## about

Multinomial coefficients can quickly become huge, even for small counts and small numbers of terms. For example, the multinomial coefficient for `[ 6, 4, 5, 3, 3 ]` will overflow the [vanilla node multinomial coefficient library](https://www.npmjs.org/package/multinomial). Where exact results are not required (a big number library is not required to calculate these) they can be generated using log terms for the factorials that underly them. That is what this library implements. As such it is probably most-useful in projects focused on probabilities and statistics.

## license

MIT
