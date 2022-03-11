debugger;
async function p1() {
  return 1;
}

async function p2() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(2), 1000);
  });
}

async function p3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(new Error('test')), 1000);
  });
}

// Promise.all([p1(), p2()]).then(arr => {

//     console.log(arr);
// })

function PromiseAll(arrP) {
  return new Promise((mainResolve, mainReject) => {
    const values = [];
    for (let p = 0; p < arrP.length; p++) {
      const currP = arrP[p];
      currP
        .then((val) => {
          values[p] = val;
          if (values.length === arrP.length) {
            mainResolve(values);
          }
        })
        .catch((e) => {
          mainReject(e);
        });
    }
  });
}

PromiseAll([p1(), p2(), p3()])
  .then((arr) => {
    console.log(arr);
  })
  .catch((e) => {
    console.log(e);
  });

export default {};
