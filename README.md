# JavaScript Rest Parameter

Understanding the JavaScript Rest Parameter.

## Life without Rest

JavaScript functions don't give a func about extra parameters, they simply ignore them.
```
function add(num1, num2) {
    return num1 + num2
}

console.log(add(100, 200, 500)) // 500 is ignored, lol

// 300
```

One way to remember the forgotten is to use arguments keyword within a function.
```
function add(num1, num2) {
    return num1 + num2 + arguments[2]
}

console.log(add(100, 200, 500))

// 800

// [Arguments] { '0': 100, '1': 200, '2': 500 }
```

But they doesn't jam with arrow arrow functions
```
const add = (num1, num2) => {
    return num1 + num2 + arguments[2]
}

console.log(add(100, 200, 500))

// 300[object Object]

// arguments returns root level object 
// (for browser it is window, for Node.js it is module wrapper variables)
```

The fall of arguments keyword:

- it is an object acting as an array
- provide all parameters (given or not given)
- doesn't jam with arrow arrow functions
- not an array, so can't use array functions
- syntactically weirdo

## Rest to the rescue

Put 3 dots before a function's parameter and call it a rest parameter.
```
function add(...numbers) {
    let total = 0
    for (const num of numbers) {
        total += num
    }
    return total
}

console.log(add(100, 200, 500))

// 800
```

Leveraging the power of array functions with rest parameter.
```
const add = (...numbers) => numbers.reduce((acc, crr) => acc + crr, 0)

console.log(add(100, 200, 500))

// 800
```

Can also jam with arrow functions.
```
const add = (...numbers) => numbers.reduce((acc, crr) => acc + crr, 0)

console.log(add(100, 200, 500))

// 800
```

Rest must be the last parameter in a function's parameter list.
```
const info = (name, age, ...skills, gender) => `${name} ${age} - ${skills.join(', ')}`

console.log(info('John', 21, 'Python', 'Bootstrap', 'Sass'))

// Uncaught SyntaxError: Rest parameter must be last formal parameter
```

Failed to do so will leads to error and error nobody wants and dev are not nobody.
```
const info = (name, age, ...skills, gender) => `${name} ${age} - ${skills.join(', ')}`

console.log(info('John', 21, 'Python', 'Bootstrap', 'Sass'))

// Uncaught SyntaxError: Rest parameter must be last formal parameter
```

Summary about rest parameter:

- its simply an array
- benefited with array functions
- jam with arrow functions
- must be the last parameter
- syntactically awesome