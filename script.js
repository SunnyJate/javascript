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

