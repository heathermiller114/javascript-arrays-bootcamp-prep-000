var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles" ];
console.log(chocolateBars)
  
function addElementToBeginningOfArray(elememt, array) {
  [element, ...array]
  return array
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

