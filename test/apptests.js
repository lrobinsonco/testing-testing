// const chai= require('chai')
// const should = chai.should()


window.onload = function() {
  var expect = chai.expect;
  mocha.setup('bdd');
  describe('test', function() {

    it("string set properly", function() {
      expect(test()).to.eq("This Works!")
    })

  })


  mocha.run();
};

// describe('Array', function() {
//   describe('#indexOf()', function() {
//     // pending test below
//     it('should return -1 when the value is not present');
//   });
// });

// Lee, can you make two test tests. One for a function that returns only even numbers in an array. Test for number, no no number, numbers and a random string, numbers and a number that is a string and not an int, another function, and an object. Then another that takes in an array and sorts from lowest to highest. Passing in all of the above. Please and thank you.
