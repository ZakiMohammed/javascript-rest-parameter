function add(num1, num2) {
    return num1 + num2 + arguments[2]
}

console.log(add(100, 200, 500))

// 800

// [Arguments] { '0': 100, '1': 200, '2': 500 }