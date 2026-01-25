//*******************Tech Side**********************


// Var: declaring variable using var then the variable is not limited to the scope in which it is declared.
// when we use var it creates a global veriable with same name and attached it to the windows Object.
// and the windows object only have 1 instance and if we are using a third party liberary which have same named object
// as our veriable it can override our veriable
// it was before Es6 or ES2016 we get let and const.

// not added to windows object
let sayHi= ()=>{
    console.log("hi!")
}
// added to windows object
function sayBye(){
    console.log("bye!")
}

//++++++++++++++++++++++ scope +++++++++++++++++++++++//

// scope is a basically a place where a veriable can be accesed with var it was a problem that variable initialized
// inside the scope was able to use out side that scope and it also adds that veriable to the window object 
// which causes ploblems but with ES6 this problem was solved by initializing veriables using let and const
// child scopes can access the values of perent scope but not vice versa
// var is not block scope
// 

//++++++++++++++++++++++ hoisting +++++++++++++++++++++++//

// hoisting is a concept that means everytime a code is run it takes all the initilizations of like functions,veriables 
// and initilize then to the top of the code that it does not causes an error but it only woorks by using keywords like 
// Function,var.
// the initilizations that are done using let or const are not hoisted
 

