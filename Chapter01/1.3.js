function greetUser( username ) {
    return `Hi, ${username}`
}

console.log('Greet a correct user: ', greetUser('Codebeast'))
console.log('Greet a boolean: ',greetUser(true))
console.log('Greet a number: ', greetUser(1))

/**
 * Greet a correct user:  Hi, Codebeast
 * Greet a boolean:  Hi, true
 * Greet a number:  Hi, 1
 */