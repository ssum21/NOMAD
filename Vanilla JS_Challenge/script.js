let a = 5; //After creation, we can change the value
const b = 2; // After creation, we can't change the value
const myName = "nico"; //JS에서는 띄어쓰기 이후의 글자는 대문자로 쓰자.
//기본적으로는 const를 사용하고, 변경사항이 자주있는 일부 변수에 대해서만 let을 사용하는 것이 관용.

console.log(a+b);
console.log(a*b);
console.log(a/b);
console.log("hello"+myName);

const amIFat = true;
console.log(amIFat);

const amINull = null; //null은 자연스럽게 발생할 수 X
console.log = amINull;

let something;
console.log = something; //undefined 상태, 메모리는 할당되어 있음.

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

console.log(daysOfWeek[5]);

// Add one more day to the array
daysOfWeek.push("sum");
console.log(daysOfWeek);