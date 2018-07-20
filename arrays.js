var chocolateBars = [ "snickers", "hundred grand", "kitkat", "skittles" ];
console.log(chocolateBars)
  
function addElementToBeginningOfArray(array, element) {
  (${array}.unshift("element"))
  console.log(${array})
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  [array = "element", ...array]
}
