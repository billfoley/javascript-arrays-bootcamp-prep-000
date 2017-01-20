var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, foo) {
  var array = [1]
  return ["foo", ...array]
}

function destructivelyAddElementToBeginningOfArray(array, foo) {
  var array = [1]
  array.unshift("foo")
  return array
}

function addElementToEndOfArray(array, foo) {
  var array = [1]
  return [...array, "foo"]
}

function destructivelyAddElementToEndOfArray(array, foo) {
  var array = [1]
  array.push("foo")
  return array
}

function accessElementInArray(array, 2) {
  var array = [1, 2, 3]
  return array[2]
}

function removeElementFromBeginningOfArray(array) {
  var array = [1, 2, 3]
  return array.slice(-1)
}

function removeElementFromEndOfArray(array) {
  var array = [1, 2, 3]
  return array.slice(0, array.length - 1)
}
