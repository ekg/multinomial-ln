var test = require('tape')
var multinomialln = require('./')
var multinomial = require('multinomial')
var range = require('range')
Array.prototype.sample = require('array-sample')

function doTest(elems, count, max) {
  test('log(multinomial coefficient) test '+elems+'-element multisets', function (t) {
    var c = count
    t.plan(c)
    var n = range(0,max)
    for (var i = 0; i < c; ++i) {
      var arr = n.sample(5)
      console.log(arr)
      t.equals(Math.round(Math.exp(multinomialln(arr))),
               multinomial(arr))
    }
  })
}

doTest(2, 100, 5)
doTest(3, 100, 4)
doTest(4, 100, 3)
// regular vanilla multinomial can't handle this one
//doTest(3, 100, 7)

function specificTestFloat(arr, val) {
  test('log(multinomial coefficient) test '+arr.join(','), function (t) {
    t.plan(1)
    t.equals(Math.round(Math.exp(multinomialln(arr))), val)
  })
}


function specificTestLog(arr, val) {
  test('log(multinomial coefficient) test '+arr.join(','), function (t) {
    t.plan(1)
    t.ok(multinomialln(arr) - val < 1e-10)
  })
}

// from wolfram alpha, these don't work with vanilla node factorial

specificTestFloat([3, 5, 3, 5, 5], 821292151680)
specificTestLog([1, 5, 7, 5, 5, 1, 2, 3], 45.8844957279684)
specificTestLog([1, 1, 7, 5, 32, 1, 50], 106.60573852903470)

