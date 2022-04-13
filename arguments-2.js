const add = (num1, num2) => {
    return num1 + num2 + arguments[2]
}

console.log(add(100, 200, 500))

// 300[object Object]

// arguments returns root level object 
// (for browser it is window, for Node.js it is module wrapper variables)