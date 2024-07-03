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
var a=3;
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
fun(); 