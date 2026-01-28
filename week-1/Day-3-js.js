// *****************How JS Works*******************
// javascript is a single threaded language which means one call stack / one execution thread for JS.
// so if a process is taking too much time it means the(V8 Engine) which is essentially a js engin to run JS code in call stack
// cant do anything else until that process is done so it makes the jS slow
// JavaScript code is executed by the JS engine (V8 in Chrome), while asynchronous features and scheduling are handled by the browser environment
// in order of execute the Js code V8 engine uses call stack in which each line of code is pussed and after execution it is popped out
// since Js is single thread so it means that it take its time to complete the execuation of one thing then move to the other but if something is taking 
// time then it makes the system unusable So how we solve that ??
// like for settimeout system should wait until the timer is up so how we do it without making the website unusabale for that time??
// until the execution in call stack is not done it will keeps the browser from rendring anything.  
// it is done by using webapi,task queue and event loop

// ******************WebApi********************** 
// Web APIs are provided by the browser environment and handle asynchronous operations like timers, network requests, and DOM events outside that allows program to run Asyncronously so if something like settimeout is used it makes a call to the 
// webapi and removes it from call stack so that in the meantime the other Js code can be executed so when the timer is up of that part of code
// inside the webap it goes to the next thing which is task QUEUE

// ***************task QUEUE********************
// TASK queue is a Queue which stores the code from webaPi and stores it until the call stack is not empty so that it can be executed.

// ***************MicroTask QUEUE********************
// Micro task queue is another queue present inside the browser environment which task is to hold the the promisses in the code its priority is higher then the 
// task queue/callback task queue so until the microtask queue is not empty the event loop will allways select tasks from the microtask queue to put inside the call stack 
// and when the micro task queue is empty then and only then the Event loop will pick the tasks from the task queue.

// ***************Starvation************************
// starvation is a concept in which if the microtask queue is never empty then it will not give the chance to task queue's task to be executed

// ***************Event Loop********************
// it monitors the task queue when call stack is empty (which means the other sync code is done executing) Event Loop pushes the code 
// from microtask queue or task queue to call stack for execution (microtask queue has a priority in task execution) 

// in this process the the  browser gets enough time windows to render the frames so that the website does not freez.

console.log("A"); // this is sync so it uses directly call stack to be executed

setTimeout(() => console.log("B"),0); //  webapi->taskQueue(2nd priority)->Event loop->call stack 
Promise.resolve().then(()=>{ // webapi->microtask queue(1st priority)->event loop->call stack
    console.log("promiss C") 
})

console.log("D"); // this is sync so it uses directly call stack to be executed