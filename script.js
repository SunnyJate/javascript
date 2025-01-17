// console.log("hello");
/* function fun1(){
    console.log("I am function");
    function fun2(){
        console.log("I am function2");
    }
    fun2();
}
fun1(); */

//Lexical Function
/* var a=3;
function fun(){
    let a = 5;
    console.log("this is function " + a)
    function fun1(){
        var a = 1;
        console.log("this is function " +a)// here var a=1 is local which is limited  for the fun1(). 
        //As previously function fun1() read value of a as 5, now it read value of a as 1 bcz it find in the function fun1() itself.
    }
    fun1(); //Here a is in lexical scope of function fun1. Bcz of the fun1 can access the 'a' variable. Its is similar as global veriable.
    //here a can be used through out whole function fun() and all subsunction offunction fun() can access the value of a.
}
fun();  */

//Debugger

/* function fun(){
    debugger;
    for(let i=1; i<=5; i++){
        console.log(i);
    }
}
fun(); */

//Sets

/* const arr=[10,20,30,40,50];
 console.log(arr);
 console.log(arr.length);//to find array length
 const s = new Set([10,20,30,40,50]);//declare set
 s.add(60);//element can add in set
s.add(40);//set not allow duplicate element and not show error if we try to add duplicate
s.add("Hello");//we can  add different data type elements in set as well as in array.
 console.log(s);

//to find length of set

debugger;
length = 0;
for(let element of s){
    length++;
}
console.log(length); */

//MAP

//Map declaration
/* var map1 = new Map([
  [1, "Red"],
  ["Color", "Black"],
  ["Integers", [1, 2, 3, 4]],
]);
console.log(map1);
console.log(map1.get("Integers"));//to retrieve perticular value we use .get method and insert the key of the value which we want to retrieve.

//how to retrieve keys
let k=map1.keys();
for(var key of k){
    console.log(key);
}

//how to insert the element int map
console.log("map2");
var map2 = new Map();
map2.set("fname","Mun");
console.log(map2); */

//This key word
//this keyword represent the object in which the values are present
/* let obj={
    fname : "Sunny",
    age : "24",
    fun :function(){
        console.log(this.fname);
    }
}
obj.fun();

//console.log(this);//here this is play a role as window object
function fun(){
    console.log(this);
}
fun();//in this condition still the this keyword is work as window object. */

//"new" key word
//The new keyword is used to create an instance of a user-defined object type and a constructor function

/* function fun(){
    let fName = "Sunny";
    this.fName = fName;
}
var obj = new fun();
console.log(obj); */

//constructor function
//It named with capital letter only
//Should have execute only with "new" keyword

/* function User(name){
    if(!new.target){
        return new User(name)
    }//WE CAN USE THE NEW KEY WORD IN THIS FORM ALSO.
    this.name = name;
}
//let person = new User("Sam");
//we can write this keyword at this position 
let person = User("Sam");//IF NEW NOT USE HERE THEN NEED TO ADD IF STATEMENT IN FUNCTION.
console.log(person.name); */

/* //Symbol
//It is hidden property
//if we print keys that time symbol is not show.
let sys=Symbol("id");
console.log(sys.toString());
console.log(sys.description);

//every symbol is unique
let sys1= Symbol("id");
console.log(sys == sys1);
console.log(sys === sys1);

let id = Symbol("id");
let obj={
    name:"sunny",
    age:24
    // [id]:1
}
obj[id]=1;
console.log(obj);

for(let key in obj){
    console.log(key);
} */

//Recursion

/* function recursive(n){
    if(n<=10){
        console.log(n)
        recursive(n+1)
    }
}
recursive(1); */

// //factorial
// function fact(n){
//     if(n==0){
//         return 1
//     }
//   /*   else{
//         return n*fact(n-1)
//     } */
//     return n;
// }
// console.log(5*fact(5 - 1)*fact(4 - 1)*fact(3 - 1)*fact(2 - 1));

//JS is Synchronous language.
//it work simultaneously as first come first serve basis
//It approach is tqp to down.
// setTimeout(fun,1000);//we cam write this way or another below mentioned way.
// console.log("this");
// function fun(){
//     console.log("Asynchronous");
// }
// /* setTimeout(()=>{
//     console.log("Asynchronous");
// },10) *///settimeout is worked as asynchronous in the program. It means in the delay time other task is perform without waiting for that time to complete and after completing the delay the task is completed which is stop due to delay.
// console.log("is")

//callback function
/* debugger
function fun(val){
    console.log(val);
}
function add(a,b,callback){
    let sum = a+b;
    callback(sum);
}
add(5,6,fun); */

/* //Callback hell

function loadingdata(callback) {
  setTimeout(() => {
    console.log("Loading Data");
    callback();
  }, 1000);
}
function collectingdata(callback) {
  setTimeout(() => {
    console.log("Collecting Data");
    callback();
    l;
  }, 1000);
}
function approvingdata(callback) {
  setTimeout(() => {
    console.log("Approving Data");
    callback();
  }, 1000);
}
function approved() {
  console.log("Approved");
}

//calling the function and making nested function is easy for less function but if the function are in lots of quantity then this process of calling function again and again is like a hell for the programmer.
//Thats why this process is called
//Callback hell
loadingdata(function () {
  collectingdata(function () {
    approvingdata(function () {
      approved();
    });
  });
}); */

//To overcome from the callback hell we need to write promise.`
/* 
function loadingdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Loading Data");
      resolve();
    }, 1000);
  });
}
function collectingdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Collecting Data");
      resolve();
    }, 1000);
  });
}
function approvingdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Approving Data");
      reject("Error: Not Fullfilled");
    }, 1000);
  });
}
function approved() {
  console.log("Approved");
} */

/* loadingdata().then(collectingdata).then(approvingdata).then(approved).catch((err)=>{
  console.log(err);
}) */

//Asysc Await
//this is better way of using promise for catching the errors

/* async function Ex(){
  await loadingdata();
  await collectingdata();
  await approvingdata();
  await approved();
}
Ex().catch((err)=>{
  console.log(err)
}); */
//we can use '.then' function also after Ex() but the function in ',then' will execute after all function

//timeinterval

/* var inter = setInterval(fun, 1000)
function fun(){
  let date = new Date().toLocaleTimeString();
  console.log(date);
}
setTimeout(()=>{
  clearInterval(inter)
},10000) */

//call bind apply

/* function fun(age,gender) {//we can pass parameters in this also
  console.log(this.fName,age,gender); //"this" is represent the object which in mention in call function.
}
var obj1 = {
  fName: "Sunny",
}
var obj2 = {
  fName: "Hari",
} */
// var obj3={
//   fName:"Manthan",
// }
// fun.call(obj1,24,"male"); //by using call here we do not need to writer function calling separately. we can call obj 2 through obj 1 by /. using call.

// fun.apply(obj2,[18,"Male"]);//at time of using apply need to pass parameters in form of array.

/* var d = fun.bind(obj2,[26,"Male"]);
console.log(d) */

// Property flags and descriptors

/* let emp={};
emp.name="Sunny";
console.log(Object.getOwnPropertyDescriptor(emp,"name"))

Object.defineProperty(emp,"age",
{
  value:24,
  writable:true,//true == chan change value
  configurable:true,// true == attribute can be deleted
  enumerable:true//true== attribute can visible in string or array like places.
});
console.log(Object.getOwnPropertyDescriptor(emp,"age")); */

//proto

/* var obj={
  fName: "Sunny",
}
// var obj1 ={
//   lName: "Jate",
// }

// obj1. __proto__ = obj;
// console.log(obj1)
obj1 = Object.create(obj)
obj1.lname="Jate"

console.log(obj1) */

//Prototype

/* function Person(name, age) {
  // let person = Object.create(Person.prototype);//If we use new keyword then there is no need to create object prototype seperately
  //person.name = name;
  this.name=name;
  // person.age = age;
  this.age = age;
  // return person;
}
Person.prototype.greet= function(){
    console.log(`Hello ${this.name}`)
  }

//let user = Person("Sunny",25)
let user = new Person("Sunny",25)
user.greet()
console.log(user) */

// console.log(Person.prototype)

//Class
/* class Person{
  constructor(name,age){
    this.name=name;
    this.age=age;
  }
  greet(){
    console.log( `Hello ${this.name}`)    
  }
}
let user = new Person("Hari", 18)
    user.greet()
    console.log(user) */

//Inheritance

/* class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a noise`);
  }
  sing() {
    console.log(`${this.name} sings a song`);
  }

  //static keyword
  static move(){
    console.log(`${this.name} is running fast`)
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name); //as we use extends keyword that means here Animal class is parent class of Dog class
    // so to access the method of parent class in child we need to use super keyword.and the attribute which we have to use.
  }
}
class Cat extends Animal{
  constructor(name){
    super(name);
  }
}
let d=new Dog('Max');
d.speak()
d.sing()
Animal.move()//Animal.move(d)//Animal.move(d.name)
//let d='Max'; Animal.move()
//As the method is static then we can't access it directly by object. But the class can access it still so the this way is to access the method.

let e=new Cat('Kat');
e.sing();
e.speak();
*/

/* //Private

class BankAccount {
  #balance=0;
  //#==private attribute
  //it shows that this can only accessible in the class itself not outside

  deposit(amount) {
    this.#balance += amount;
    console.log(`Deposit ${amount},new balance is ${this.#balance}`);
  }
  withdraw(amount) {
    if (amount > this.#balance) {
      console.log(`Insufficient Fund`);
    } else {
      this.#balance -= amount;
      console.log(`Withdraw ${amount}, new balance ${this.#balance}`);
    }
  }
  balance(){
    console.log(this.#balance)
  }
}
const account = new BankAccount();
account.deposit(20000);
account.withdraw(1600);
account.balance(); */

/* //try catch throw

function div(a,b){
  try{
    if(b==0){
      throw new Error("can't divide by 0")
    }//the throw is used to show the error messages
    else{
      console.log(a/b)
    }
  }//In try block there is different scenario which are tried which can get leads to error
  catch(err){
    console.log(err.message)
  }//in the catch block the error get catch and the proper error message shown.
}
div(10,0) */
//Fetch Api


//Get data "GET API"

/* fetch(`https://jsonplaceholder.typicode.com/posts`)//this the url for fake json data
  .then(response => {
    if (!response.ok) {
      throw new Error(`File not found`);
    }
    return response.json();
  })
  .then(data => data.forEach(element => {
    console.log(element.title)
  }))
  .catch((error) => console.error(error));//by this we can show error as like other errors
//.catch(error=> console.log(error))//to show error message which we want to send
//.catch(error=> console.error(`error`))//to show only error */

//to add new "POST API"

/* fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json)); */


  //to update "PUT API"

  /* fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  body: JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json)); */

  //to do partial modification "PATCH API"

  /* fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json)); */


  //To delete data "DELETE API"

  /* fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
}); */
