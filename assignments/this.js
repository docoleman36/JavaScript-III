/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. The first principle is the window/ global object binding. When calling "this" it is on the window object only.
 * 2. Implicit Binding is used om function and is called by everything that is left of a preceding dot.
 * 3. New binding is an object constructor that returns a object.
 * 4. Explicit binding is when we use a method to explicitly bind the this keyword.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function sayName(name) {
  console.log(this);
  return name;
}

sayName("DJ");

// Principle 2

// code example for Implicit Binding

const MyObj = function() {
  this.name = "DJ";
  this.favColor = "Red";
};

MyObj.prototype.speak = function() {
  return `My name is ${this.name} and my favorite color is ${this.favColor}`;
};

MyObj();

// Principle 3

// code example for New Binding

// Principle 4

// code example for Explicit Binding
