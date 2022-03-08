//polyfill for bind
Function.prototype.myBind = function (context, ...args) {
  var _this = this;
  return function (...additionalArgs) {
    return _this.call(context, ...[...args, ...additionalArgs]);
  };
};

function test(profession, age) {
  console.log(`my name is ${this.name} and i am ${profession} and i am ${age}`);
}

const developerFn = test.myBind({ name: 'clarence' }, 'developer');
developerFn(27);

export default {};
