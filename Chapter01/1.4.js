function greetUser( username ) {
    var reversed = username.split('').reverse().join('');
    return `Hi, ${reversed}`
}

console.log('Greet a correct user: ', greetUser('Codebeast'))
console.log('Greet a boolean: ',greetUser(true))
// console.log('Greet a number: ', greetUser(1))

/**
 * Greet a correct user:  Hi, tsaebedoC
 * Greet a boolean:  Hi, true
 * Greet a number:  Hi, 1
 */

