var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
function addElementToBeginningOfArray(array, element) {
  ["element", ...array]
  return
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  [array = "element", ...array]
}
