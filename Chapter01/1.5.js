function greetUser( username ) {
    if(typeof username !== 'string') {
      throw new Error('Invalid type passed');
    };
    var reversed = username.split('').reverse().join('');
    return `Hi, ${reversed}`
}

console.log('Greet a correct user: ', greetUser('Codebeast'))
console.log('Greet a boolean: ',greetUser(true))