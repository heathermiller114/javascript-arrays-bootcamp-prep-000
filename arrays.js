var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles" ];
console.log(chocolateBars)
  
function addElementToBeginningOfArray(array, element) {
  array.unshift('element')
  return array
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  [array = "element", ...array]
}
