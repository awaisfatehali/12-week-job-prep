// Execution Context
// → Environment where JS code runs.

// Global Execution Context
// → Created once when program starts.

// Function Execution Context
// → Created every time function is called.

// Creation Phase
// → Memory allocated, variables hoisted.

// Execution Phase
// → Code executed line by line.

// Variable Environment
// → Stores var and function declarations.

// Lexical Environment
// → Stores let, const, block scope, scope chain reference.

// Call Stack
// → Manages execution contexts (LIFO).



//+++++++++++++++++++++++++++++++ Part 2 ++++++++++++++++++++++++++++++++++++++

// JavaScript Memory Management (Interview Notes)

// 1. What is Memory Management?
// Memory management is the process of:
// 1. Allocation – Reserving memory for variables and objects.
// 2. Usage – Reading or writing data.
// 3. Deallocation – Releasing memory when it is no longer needed.
// In JavaScript, memory management is handled automatically by the Garbage Collector (GC).
// Unlike languages such as C or C++, developers do not manually free memory.

// 2. Memory Allocation in JavaScript
// Memory is allocated automatically when:
// - Variables are declared
// - Objects or arrays are created
// - Functions are defined

let num = 10;              // primitive allocation
let user = { name: "Awais" };  // object allocation

// 3. Stack vs Heap (Conceptual Model)

// Stack Memory (Primitive Types)
// Primitive data types: string, number, boolean, null, undefined, bigint, symbol
// Stored directly as values.

let name1 = "Awais";
let name2 = name1;
name2 = "Fateh";
console.log(name1); // Awais
console.log(name2); // Fateh

// Heap Memory (Reference Types)
// Reference types: Object, Array, Function
// Stored in heap; variables hold references.

let user1 = { name: "Awais" };
let user2 = user1;
user1.name = "Fateh";
console.log(user1.name); // Fateh
console.log(user2.name); // Fateh

// 4. Garbage Collection in JavaScript
// JS uses automatic garbage collection.
// Modern engines use Mark-and-Sweep algorithm.

// Mark-and-Sweep Algorithm
// 1. Starts from root objects (Global object, execution context).
// 2. Marks all reachable objects.
// 3. Unreachable objects are removed from memory.

// Reference Counting (Old Approach)
// Each object tracked how many references pointed to it. When count was zero, it was removed.
// Problem: Fails with circular references.

let obj1 = {};
let obj2 = {};
obj1.ref = obj2;
obj2.ref = obj1;
// Both obj1 and obj2 are unreachable but not removed in reference counting.

// 5. Memory Leaks in JavaScript
// Memory leak occurs when memory is not released though it's no longer needed.
// Common causes:
// 1. Global variables
// 2. Forgotten timers (setInterval)
// 3. Unremoved event listeners
// 4. Closures holding references
// 5. Detached DOM elements

let data = [];
setInterval(() => {
data.push(new Array(10000).fill("leak"));
}, 1000);

// 6. Key Interview Points
// - JS uses automatic garbage collection.
// - Memory lifecycle: Allocation → Usage → Deallocation.
// - Primitives copied by value; objects copied by reference.
// - Garbage collection uses Mark-and-Sweep and is based on reachability.
// - Memory leaks happen when objects remain reachable unintentionally.
