const deepClone = (obj) => {
    // If the input is null or not an object, return it as is
    if (obj === null || "object" != typeof obj) {
        return obj;
    }  // Create a new object or array based on the type of the input
    const newObj = Array.isArray(obj) ? [] : {};  // If the input is a Date object, clone it
    if (obj instanceof Date) {
        const copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }  // Iterate through the properties of the input object
    for (let key in obj) {
        // Check if the property is an object (excluding null)
        if (typeof obj[key] === "object" && obj[key] !== null) {
            // Recursively clone nested objects
            newObj[key] = deepClone(obj[key]);
        } else {
            // Copy non-object properties directly
            newObj[key] = obj[key];
        }
    }  // Return the cloned object
    return newObj;
};  // Test with nested objects
const originalObj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: 3
        }
    }
};
const clonedObj = deepClone(originalObj); console.log(clonedObj);