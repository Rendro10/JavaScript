// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // --> This semicolon is important otherwise another function will not run

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Arka')

