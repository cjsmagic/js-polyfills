//polyfill for bind
Function.prototype.myCall = function (context, ...args) {
  return this.bind(context, ...args)();
};

function log(profession, age) {
  console.log(`my name is ${this.name} and i am ${profession} and i am ${age}`);
}

log.myCall({ name: 'clarence' }, 'developer', 27);
export default {};
