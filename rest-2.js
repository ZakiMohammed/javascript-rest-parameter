const add = (...numbers) => numbers.reduce((acc, crr) => acc + crr, 0)

console.log(add(100, 200, 500))

// 800