const [hobby, ...otherHobbies] = ['Football', 'Swimming', 'Boxing']

console.log(hobby)
console.log(otherHobbies)

const { department, ...otherDetails } = {
    id: 1,
    name: 'John Doe',
    salary: 1200,
    department: 'Accounts'
}

console.log(department)
console.log(otherDetails)