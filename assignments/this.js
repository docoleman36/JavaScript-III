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

const myObj = {
  greeting: "Hi",
  speak: function(name) {
    console.log(`${this.greeting} my name is ${name}`);
  }
};

myObj.speak("DJ");

// Principle 3

// code example for New Binding

function SouthPark(obj) {
  this.name = obj.name;
  this.language = obj.language;
  this.speak = function() {
    console.log(this);
    return `Hello, my name is ${this.name}, and I speak ${this.language}.`;
  };
}

const eric = new SouthPark({ name: "Eric", language: "English" });

eric.speak();

// Principle 4

// code example for Explicit Binding

const MyObj = function() {
  this.name = "DJ";
  this.favColor = "Red";
};

MyObj.prototype.speak = function() {
  MyObj.call(MyObj);
  console.log(
    `My name is ${this.name} and my favorite color is ${this.favColor}`
  );
};

var obj = new MyObj();

obj.speak();
