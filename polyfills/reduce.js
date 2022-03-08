const arr = ['h', 'e', 'l', 'l', 'o'].reverse();

// 55

Array.prototype.myReduce = function (cb, initialValue) {
  let finalValue = initialValue;

  this.forEach((i, index, self) => {
    const reverseIndex = self.length - 1 - index;
    const item = self[reverseIndex];
    console.log(item, reverseIndex);
    finalValue = cb(finalValue, item, reverseIndex, self);
  });

  return finalValue;
};

// const sum = arr.reduce((acc, i) => (acc += i), 0);

const sum = arr.myReduce((acc, i) => (acc += i), '');

console.log('reduce', sum);

export default {};
