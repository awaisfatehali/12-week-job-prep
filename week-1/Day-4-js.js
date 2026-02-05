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

// ======================== JavaScript Memory Management ========================

// ------------------------ 1. What is Memory Management ------------------------
// Memory management is the process of:
// 1. Allocation – Reserving memory for variables, objects, arrays, functions
// 2. Usage – Reading or writing data
// 3. Deallocation – Releasing memory when no longer needed
// In JavaScript, memory management is automatic via the Garbage Collector (GC)

// Unlike C/C++, developers do not manually free memory

// ------------------------ 2. Memory Allocation in JS ------------------------
let num = 10;                  // primitive allocation (stack)
let user = { name: "Awais" };  // object allocation (heap)

// ------------------------ 3. Stack vs Heap ------------------------

// Stack Memory (Primitive Types)
// Primitive types: string, number, boolean, null, undefined, bigint, symbol
// Stored directly as values, immutable
let name1 = "Awais";
let name2 = name1;
name2 = "Fateh";
console.log(name1); // "Awais"
console.log(name2); // "Fateh"

// Heap Memory (Reference Types)
// Reference types: Object, Array, Function
// Stored in heap; variables hold references
let user1 = { name: "Awais" };
let user2 = user1;
user1.name = "Fateh";
console.log(user1.name); // "Fateh"
console.log(user2.name); // "Fateh"

// ------------------------ 4. Functions & Closures in Memory ------------------------
// Local variables of a function go on the stack
// If inner function (closure) references them, those variables stay in heap
function outer() {
  let secret = "JS Memory";
  return function inner() {
    console.log(secret);
  };
}
const closureFn = outer(); // 'secret' stays in memory until closureFn is discarded

// ------------------------ 5. Garbage Collection ------------------------
// JS automatically frees memory when objects are no longer reachable
// Modern engines use Mark-and-Sweep

// Mark-and-Sweep Algorithm:
// 1. Starts from roots (global objects, execution contexts)
// 2. Marks all reachable objects
// 3. Removes all unreachable objects

// Reference Counting (Old Approach):
// Tracks number of references. When count = 0, object is removed
// Problem: Fails for circular references
let obj1 = {};
let obj2 = {};
obj1.ref = obj2;
obj2.ref = obj1;
// If no other references exist, these two would remain in memory in reference counting

// ------------------------ 6. Memory Leaks in JS ------------------------
// Memory leaks occur when memory is not released despite being unused
// Common causes:
// 1. Global variables
// 2. Forgotten timers / intervals
// 3. Unremoved event listeners
// 4. Closures holding references
// 5. Detached DOM elements

// Example of a leak:
let data = [];
setInterval(() => {
  data.push(new Array(10000).fill("leak"));
}, 1000);

// ------------------------ 7. Event Loop & Memory ------------------------
// Timers, promises, async callbacks hold references to objects until executed
// Example:
let obj = { value: 42 };
setTimeout(() => console.log(obj.value), 1000); // 'obj' can't be GC'd until timeout fires

// ------------------------ 8. Key Interview Points ------------------------
/*
1. JS uses automatic garbage collection
2. Memory lifecycle: Allocation → Usage → Deallocation
3. Primitives: copied by value, immutable
4. Reference types: copied by reference, mutable, stored in heap
5. Closures keep variables in memory until no longer referenced
6. Garbage collection: Mark-and-Sweep, based on reachability
7. Reference counting is outdated; fails on circular references
8. Memory leaks: globals, timers, listeners, closures, detached DOM
9. Event loop callbacks can hold memory until executed
10. Optimization tips:
   - Minimize global variables
   - Remove listeners and intervals
   - Nullify large arrays/objects when done
*/
