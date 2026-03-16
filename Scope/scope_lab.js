// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

//Block Scope
console.log(blockVar);
// console.log(blockLet);

function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
show();

// console.log(functionVar); // Throws ReferenceError
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError

console.log(typeof(globalVar));

var age =18;
console.log(age > 18 ? 'adult' : 'minor');

if (age>18){console.log("Can drive ")}
else if (age>12){console.log("Can ride a bike")}
else{console.log("can ride a cycle")}

if (age>18) var isDriver = true;
console.log(isDriver);
var day = 'Monday';
switch (day) {
    case 'Monday':
        console.log('Enjoy the sun');
        break;
    case 'Tuesday':
        console.log('Enjoy the rain');
        break;
    default:
        console.log('Enjoy the wind');
}

for (let i=0; i<10; i++){console.log(i)}