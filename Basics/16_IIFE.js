// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`Hello`);
})();

( (name) => {
    console.log(`Hello, ${name}`);
} )('rutika')

console.log('Hi')

