const info = (name, age, ...skills, gender) => `${name} ${age} - ${skills.join(', ')}`

console.log(info('John', 21, 'Python', 'Bootstrap', 'Sass'))

// Uncaught SyntaxError: Rest parameter must be last formal parameter