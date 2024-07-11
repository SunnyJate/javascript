/* // getElementsBYTagName()
var a = document.getElementsByTagName('li')
console.log(a);
var a = document.getElementsByTagName('div')
console.log(a); */
//Here we can fetch the element by selecting only tag

/* //getElementByClassName()
var a = document.getElementsByClassName("Hero");
console.log(a); */
//To select the element by using class

/*// getElementBYId
var a = document.getElementById('007');
console.log(a); */
//to select element by using ID

/* //querySelector
var a = document.querySelector("li");//to select id use "#" & to select class use "." operator before id and class respectively
//to select tag then write tag name, but if the tag / class are of name name used multiple times then 1st tag only / class get selected
console.log(a);*/
//to select query 

/* //querySelectorAll
var a = document.querySelectorAll(".Hero");//same for class use "." for id use"#" then class and tag name respectively and for tag use tag name directly
//here all means all tags or class or id will get selected for query
console.log(a); */
//to select query for all.


//Traverse the DOM

/* //parentElement
var parent = document.querySelector('div')
var p = parent.parentElement;
console.log(p)
//It us used to get the parent of the selected tag */

/* // children
var child = document.querySelector('ul')
console.log(child.children[4])
console.log(child.children[3]);
//used to select the child element of the element passed in query */

/* //previousElementSibling
// console.log(document.querySelector(`.o07`).previousElementSibling.previousElementSibling)
//used to select the previous sibling for the selected element
var sib=document.querySelector(`.o07`)
console.log(sib.nextElementSibling);
//used to select the next sibling for the selected element */

/* var sib = document.querySelectorAll(`.DON`);
sib.forEach((ele)=>console.log(ele.previousElementSibling))
//to select different siblings for different elements use querySelectorAll */

/* //Append Child
const ul = document.querySelector('ul');
const newE = document.createElement('li');
newE.textContent="Jeson";
ul.appendChild(newE)
//to add new element use append */

//remove
const ul = document.querySelector('li');
ul.remove();