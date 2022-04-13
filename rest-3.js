const info = (name, age, ...skills) => `${name} ${age} - ${skills.join(', ')}`

console.log(info('John', 21, 'Python', 'Bootstrap', 'Sass'))

// John 21 - Python, Bootstrap, Sass