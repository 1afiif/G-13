let st1 = 'Hi from Parent';
let st2 = 'Hi from Parent';

let obj1 = {name:'Hi from Parent'}
let obj2 = {name:'Hi from Parent'}
console.log(st1 === st2);
console.log(JSON.stringify(obj2) === JSON.stringify(obj1));