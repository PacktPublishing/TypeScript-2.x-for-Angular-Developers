function greet( username: string ) {
    return `Hi, ${username}`;
}

console.log('Greet a correct user: ', greet('Codebeast'))
console.log('Greet a boolean: ', greet( [1, 2, 3] ))