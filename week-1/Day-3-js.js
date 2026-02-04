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

// 📌 What is Asynchronous JavaScript?

// JavaScript is single-threaded.

// That means:

// One call stack

// One task at a time

// If something takes time (API call, file read, DB query), JS doesn’t wait — it continues running other code.

// That behavior is called Asynchronous JavaScript.

// 🔥 Why Do We Need Async JS?

// Some operations take time:

// Fetching data from API

// Reading files

// Database queries

// Timers (setTimeout)

// Authentication

// If JS waited for these, the whole app would freeze.

// Async allows:
// ✅ Non-blocking behavior
// ✅ Better performance
// ✅ Smooth user experience

// 🧠 How JavaScript Handles Async (Very Important)

// JS uses:

// Call Stack

// Web APIs (Browser / Node APIs)

// Callback Queue

// Event Loop

// Flow:

// Async task goes to Web API

// After completion → goes to Callback Queue

// Event Loop checks if call stack is empty

// If empty → moves callback to stack

// That’s how JS stays non-blocking.

// ⏳ setTimeout Example
// console.log("Start");

// setTimeout(() => {
//   console.log("Inside Timeout");
// }, 2000);

// console.log("End");

// Output:
// Start
// End
// Inside Timeout


// Why?

// Because setTimeout is async → goes to Web API → callback queue → executed later.

// 📦 1️⃣ Callbacks

// A callback is a function passed into another function to be executed later.

// Example:
// function fetchData(callback) {
//   setTimeout(() => {
//     callback("Data received");
//   }, 2000);
// }

// fetchData((data) => {
//   console.log(data);
// });

// Problem: Callback Hell 😵
// getUser(function(user) {
//   getOrders(user, function(orders) {
//     getPayment(orders, function(payment) {
//       console.log(payment);
//     });
//   });
// });


// Hard to read

// Hard to maintain

// Pyramid structure

// 📦 2️⃣ Promises

// Promise solves callback hell.

// A Promise has 3 states:

// Pending

// Fulfilled

// Rejected

// Creating a Promise
// const myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("Operation successful");
//   } else {
//     reject("Operation failed");
//   }
// });

// Consuming a Promise
// myPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 🔥 Real Example (API Simulation)
// function fetchUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("User Data");
//     }, 2000);
//   });
// }

// fetchUser()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// 📦 3️⃣ Async / Await (Best & Cleanest Way)

// Async/await is just syntactic sugar over promises.

// It makes async code look synchronous.

// Example:
// function fetchUser() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("User Data");
//     }, 2000);
//   });
// }

// async function getUser() {
//   const data = await fetchUser();
//   console.log(data);
// }

// getUser();

// 🚨 Error Handling with Async/Await
// async function getUser() {
//   try {
//     const data = await fetchUser();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }


// Always use try/catch.

// ⚡ Promise vs Async/Await
// Feature	Promise	Async/Await
// Readability	Medium	Very High
// Error Handling	.catch()	try/catch
// Looks synchronous	❌	✅
// Modern Standard	✅	✅ (Preferred)

// Use async/await in production.

// 🔄 Microtasks vs Macrotasks (Advanced but Important)

// Macrotasks:

// setTimeout

// setInterval

// setImmediate

// Microtasks:

// Promises (.then)

// queueMicrotask

// Microtasks execute before macrotasks.

// Example:

// setTimeout(() => console.log("Timeout"));

// Promise.resolve().then(() => console.log("Promise"));

// console.log("End");


// Output:

// End
// Promise
// Timeout


// Because microtasks run first.

// 🎯 Real Backend Use Cases (Important for You)

// Since you're learning backend:

// Async is used in:

// // Database
// await User.find();

// // API call
// await fetch(url);

// // File handling
// await fs.promises.readFile();

// // Authentication
// await bcrypt.compare();


// Without async → backend blocks.

// 🧩 Important Interview Questions

// Is JavaScript synchronous or asynchronous?
// → Single-threaded but handles async via event loop.

// What is event loop?
// → Mechanism that moves callback from queue to stack.

// Difference between Promise and Async/Await?

// What is callback hell?

// Microtask vs macrotask difference?

// 🧠 Mental Model to Remember

// Think like this:

// JS does one thing at a time
// Slow tasks go outside
// Event loop brings them back later

// That’s Async JS.