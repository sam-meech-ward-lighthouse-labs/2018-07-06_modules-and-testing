var stringFunctions = require('../stringFunctions');
var assert = require('assert');

// console.log(stringFunctions.uppercase("a", 1) === "A ");
// console.log(stringFunctions.uppercase("a", 2) === "A A ");
// console.log(stringFunctions.uppercase("watermelon", 1) === "WATERMELON ");

describe('stringFunctions', function() {
  describe('uppercase()', function() {
    it('should return the string upper-cased when given a string and 1', function() {
      assert.equal(stringFunctions.uppercase("a", 1), "A ");
    });
    it('should return the bigger word upper-cased when given a string and 1', function() {
      assert.equal(stringFunctions.uppercase("watermelon", 1), "WATERMELON ");
    });
    it('should return the string upper-cased twice when given a string and 2', function() {
      assert.equal(stringFunctions.uppercase("a", 2), "A A ");
    });
    it('should return 💩 when given 🤗', function() {
      assert.equal(stringFunctions.uppercase("🤗"), "💩");
    });
    it('should return 🏝 when given 🥥', function() {
      assert.equal(stringFunctions.uppercase("🥥"), "🏝");
    });
  });
});