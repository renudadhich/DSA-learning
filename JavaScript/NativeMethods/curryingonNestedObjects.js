const pipe = (obj) => {
  return (...args) => {
    for (let i in obj) {
      const val = obj[i];
      if (typeof obj[i] === "function") {
        obj[i] = val(...args);
      } else if (typeof obj[i] === "object" && obj[i] !== null) {
        obj[i] = pipe(obj[i])(...args);
      }
    }
    return obj;
  };
};

let testObj = {
  a: {
    b: (a, b, c) => a + b + c,
    c: (a, b, c) => a + b - c,
  },
  d: (a, b, c) => a - b - c,
  e: 1,
  f: true,
};
// output should be as below
// {
//   a: {
//     b: 3,
//     c: 1
//   },
//   d: -1,
//   e: 1,
//   f: true
// }
console.log(pipe(testObj)(1, 1, 1));