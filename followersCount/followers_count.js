var followers_count = 0;
function increaseCount(){
    followers_count++;
    if (followers_count%10 === 0){
        alert("Followers count is "+followers_count);
    }
    document.getElementById('countDisplay').innerHTML=followers_count;
}


let fruits = ["apple", "banana", "cherry",5,15,6666,8858];
let [first,second,third] = fruits;
console.log(first,second,third);
console.log(fruits[3]);
fruits.push("orange");
console.log(fruits);
console.log(fruits.length);
const temp = [1];
for (let fruit of fruits){console.log(fruit)}
// while (fruits.pop() !== undefined){
// }
// console.log(fruits);

let a="tfdshsf"
for (let i in a){console.log(i)}

let a1 =[1,2,3,4,5,6,7,8,9,10]
a1.shift()
console.log(a1);

let arr = [10, 20, 30, 40];

arr.splice(1, 0, 50, 60);

console.log(arr);
// [10, 40]


const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = arr1.concat(arr2);
console.log(arr3);
console.log(arr1.indexOf(100));
