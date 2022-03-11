const arr = [5, 2, 3, 1, 4];

const sum = 9;

// for (let i = 0; i < arr.length; i++)= 100
//   for (let j = 0; j < arr.length; j++) = 100
//     if (arr[i] + arr[j] === sum) {
//       console.log('found');
//     }

const dp = {};

for (let i = 0; i < arr.length; i++) {
  const diff = sum - arr[i];

  if (dp[diff]) {
    console.log(diff, arr[i]);
  } else {
    dp[arr[i]] = arr[i];
  }
}

export default {};
