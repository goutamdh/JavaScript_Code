/* powerset, Javascript, Math, Algorithm
 * Returns the powerset of a given array of numbers.
 *
 * 1. Use Array.prototype.reduce() combined with Array.prototype.map() 
 * The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
 * to iterate over elements and combine into an array containing all combinations.The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
 * The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
 */

const powerset = array =>
  array.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);

console.log(' Powser Set: ', powerset([1, 2]));

// Returns
// Powser set Set:  [ [], [ 1 ], [ 2 ], [ 2, 1 ] ]
