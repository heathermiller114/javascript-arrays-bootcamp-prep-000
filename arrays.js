var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles" ];
console.log(chocolateBars)

function addElementToBeginningOfArray(array, element) {
  var array2 = [element, ...array]
  return array
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
function addElementToEndOfArray(array, element) {
  [...array, element]
  return array
}
function destructivelyAddElementToEndOfArray (array, element) {
  array.push(element)
  return array
}
function accessElementInArray(array, index) {