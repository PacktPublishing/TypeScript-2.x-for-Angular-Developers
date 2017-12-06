function greetUser( user ) {
    if ( typeof user !== 'object' ) {
        throw new Error('Type is not an object');
    }
    return `Hi, ${user.name}`;
}

console.log('Greet a correct user: ', greetUser( {name: 'Codebeast', age: 24 } ))
console.log('Greet a boolean: ', greetUser( [1, 2, 3] ))