// const chai= require('chai')
// const should = chai.should()


window.onload = function() {
  var should = chai.should();
  mocha.setup('bdd');
  describe('test', function() {

    it("string set properly", function() {
      // expect(test()).to.eq("This Works!")
      test().should.equal("This Works!");

    })
  })

  describe('onlyEven', function() {

    it("should return only even numbers in an array", function(){
      onlyEven([]).should.be.a([])
      onlyEven([]).should.equal([2,4,6,8,10,12])
      onlyEven([]).should.not.equal([1,3,5,7,9])
      onlyEven([]).should.not.equal([2,"foo",4,6,"bar",8,"10"])
      onlyEven([]).should.not.have.property({1: 2})
    })
  })

  describe('lowToHigh', function() {

    it("should sort numbers in array from lowest to highest", function(){
      lowToHigh([]).should.equal([1,2,3,4,5,6])
      lowToHigh([]).should.not.equal([10,9,8,7,6,5,4])
      lowToHigh([]).should.not.equal([1,"2",3])
      lowToHigh([]).should.not.have.property({1: 2})
    })
  })

  describe('sum', function() {

    it("should return 0 if the input is empty", function() {
      // expect(sum([]), "Default value is incorrect").to.eq(0)
      sum([]).should.equal(0)
    })

    it("sums the integers in the array", function() {
      sum([2]).should.equal(2)
      sum([2,4]).should.equal(6)
      sum([2,4,6]).should.equal(12)
      sum([2,4,6,8]).should.equal(20)
      sum([2,4,6,8,10,]).should.equal(30)
    })
  })

//   function sum(array) {
//   var result = 0
//    for (var i = 0; i < array.length; i++) {
//      result += array[i]
//    }
// return result;
// }
// console.log(sum([3,4,5]))

  mocha.run();
};

// describe('Array', function() {
//   describe('#indexOf()', function() {
//     // pending test below
//     it('should return -1 when the value is not present');
//   });
// });

// Lee, can you make two test tests. One for a function that returns only even numbers in an array. Test for number, no no number, numbers and a random string, numbers and a number that is a string and not an int, another function, and an object. Then another that takes in an array and sorts from lowest to highest. Passing in all of the above. Please and thank you.
