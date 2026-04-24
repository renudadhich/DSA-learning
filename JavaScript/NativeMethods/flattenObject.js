
let result = {};
  const flatten = (currentObj, parentKey = '') => {
    
    for (let key in currentObj) {
      if (currentObj.hasOwnProperty(key)) {
        const newKey = parentKey ? `${parentKey}.${key}` : key;
        if (typeof currentObj[key] === 'object' && currentObj[key] !== null && !Array.isArray(currentObj[key])) {
          flatten(currentObj[key], newKey);
        } else {
          result[newKey] = currentObj[key];
        }
      }
    }
    return result;
  };


console.log(flatten({
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  },
  f: 4
})); // { 'a': 1, 'b.c': 2, 'b.d.e': 3, 'f': 4 }