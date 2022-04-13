function add(...numbers) {
    let total = 0
    for (const num of numbers) {
        total += num
    }
    return total
}

console.log(add(100, 200, 500))

// 800