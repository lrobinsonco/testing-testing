function test() {
 var string ="This Works!";
 return string;
}

console.log(test())

function onlyEven() {

}

function lowToHigh(){

}

// Write function named sum that will take an array of numbers and return the sum of them
function sum(array){
  var total = 0
  for (var i = 0; i < array.length; i++) {
    total += array[i]
  }
  return total
}
console.log(sum([2,3,4]))
