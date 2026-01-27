// ******************closure***********************
// closure-----> function + its environment(lexical environment)
// A closure is the combination of a function bundled together (enclosed) with references to
// its surrounding state (the lexical environment). In other words, a closure gives a function 
// access to its outer scope. In JavaScript, closures are created every time a function is created,
// at function creation time.
function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName; //this does not only return function it returns function with its lexical environment
}

const myFunc = makeFunc();
myFunc();
// in closure the function and the reference of the values (lexical environment returns) which means if inside
// the function the values are changed somehow then the changed value is used after 
// the reference are stored inside heap instead of the stack table which means that the value refence can be
// accesd after the stack table is become empty. 
const x = ()=>{
    let a = 1;
    const y = ()=>{
        console.log(a)
    }
    a=999; // veriable is changed 
    return y;
    
}

let abc = x();
abc();

// ***************Practical use cases:****************
// Data hiding:since the veriable of the closure are private which means we cannot access them directly
// it can only accessed using the methods of the closures.so it can be used for data hiding.
//    Example:
const protectedPass = ()=>{
    const password = "12345"; // protected veriable;
    const checkMatch = (pass)=>{
        return pass === password;
    }
    return checkMatch;
} 

let check =  protectedPass();
let input = "12345"
let access = check(input)
if(access){
    console.log("access granted!")
}else{
    console.log("access rejected!")
}

// | Feature     | Closure Purpose                       |
// | ----------- | ------------------------------------- |
// | Data Hiding | Keeps variables private               |
// | Counter     | Remembers previous values             |
// | Memoization | Stores cached results                 |
// | Callbacks   | Remembers context for later execution |
