//polyfill for bind
Function.prototype.myApply = function (context, ...args) {
  return this.bind(context, ...args[0])();
};

function log(profession, age) {
  console.log(`my name is ${this.name} and i am ${profession} and i am ${age}`);
}

log.myApply({ name: 'clarence' }, ['developer', 27]);
export default {};
