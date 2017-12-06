// Code 1.2
var isCompleted;

// Assign null
isCompleted = null;
console.log('When null:', isCompleted);

// Re-assign a boolean
isCompleted = false;
console.log('When boolean:', isCompleted);

// Re-assign a string
isCompleted = 'Not Yet!';
console.log('When string:', isCompleted);

// Re-assign a number
isCompleted = 0;
console.log('When number:', isCompleted);

// Re-assign an array
isCompleted = [false, true, 0];
console.log('When array:', isCompleted);

// Re-assign an object
isCompleted = {status: true, done: "no"};
console.log('When object:', isCompleted);

/*
CONSOLE:

When null: null
When boolean: false
When string: Not Yet!
When number: 0
When array: [ false, true, 0 ]
When object: { status: true, done: 'no' }
*/