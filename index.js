/*
long double multinomialCoefficientLn(int n, const vector<int>& counts) {
    vector<long double> count_factorials;
    count_factorials.resize(counts.size());
    transform(counts.begin(), counts.end(), count_factorials.begin(), factorialln);
    return factorialln(n) - sum(count_factorials);
}
*/

var factorialln = require('factorial-ln')
var arraySum = require('array-sum');

function multinomialCoefficientLn(counts) {
  var countFactorials = counts.map(
    function(n) {
      return factorialln(n)
    })
  return factorialln(arraySum(counts)) - arraySum(countFactorials)
}

module.exports = multinomialCoefficientLn
