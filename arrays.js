var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles" ];
console.log(chocolateBars)
  
function addElementToBeginningOfArray(array, element) {
  [element, ...array ]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}
