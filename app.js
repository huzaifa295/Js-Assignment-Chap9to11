// Question # 1

var city="Karachi"
var user_city=prompt("Enter your city")
if(city==user_city){
    alert("Welcome to the city of lights")
}else{
    alert("Retry")
}

// Question # 2

var user_gender=prompt("Enter your gender")
var gender="Male"
if(user_gender==gender){
    alert("Good Morning Sir.")
}else{
    alert("Good Morning Ma’am.")
}


var signal1="Red"
var signal2="Yellow"
var signal3="Green"
var user_signal_color=prompt("Enter signal color")

if(user_signal_color==signal1){
    alert("Must Stop")
}if(user_signal_color==signal2){
    alert(" Ready to move")
}if(user_signal_color==signal3){
    alert(" Move now")
}
 
// Question # 4

var user_fule=+prompt("Enter your car's current fule")
 if(user_fule<=0.25){
    alert("Please refill the fuel in your car")
 }

 // Question # 5

 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}


if("car" < "cat"){
alert("car is smaller than cat");
}

 // Question # 6

var total_marks=300
var sub1=+prompt("Enter first your subject marks")
var sub2=+prompt("Enter second your subject marks")
var sub3=+prompt("Enter third your subject marks")
var user_marks=sub1+sub2+sub3
var user_grade=user_marks/total_marks*100
console.log(user_grade)

if(user_grade>=80){
    alert("A-one\nExcillent")
    var marks_sheet=["Total marks : " + total_marks, "Obtained marks : "+ user_marks, "Percentage : " +user_grade, "Grade : A-one" ]
    console.log(marks_sheet)
}
else if(user_grade>=70){
    alert("A\nGood")
    var marks_sheet=["Total marks : " + total_marks, "Obtained marks : "+ user_marks, "Percentage : " +user_grade, "Grade : A"]
    console.log(marks_sheet)
}
else if(user_grade>=60){
    alert("B\nYou need to improve")
    var marks_sheet=["Total marks : " + total_marks, "Obtained marks : "+ user_marks, "Percentage : " +user_grade, "Grade : B"]
    console.log(marks_sheet)
}
else if(user_grade<=60){
    alert("Fail\nSorry")
    var marks_sheet=["Total marks : " + total_marks, "Obtained marks : "+ user_marks, "Percentage : " +user_grade, "Grade : Fail"]
    console.log(marks_sheet)
}

// Question # 7

var num= Math.floor(Math.random() * 10)
var user_num = +prompt("Enter a random number")

if (num==user_num) {
    alert("Bingo! Correct answer.")
} else {
    alert("Close enough to the correct answer.")
}

//  Question # 8

var num = +prompt("Enter a Number")
var reminder = num % 3
if(reminder == 0){
   alert(num +" is divisible by 3")
}else{
   alert(num +" is'nt divisible by 3")
}

//  Question # 9

var numeroddandeven = +prompt("Enter a number to Check The is Odd or Even")
var odd = numeroddandeven % 2
console.log(odd)

if(odd == 0){
   alert("This Number is Even")
}else{
   alert("This Number is Odd")
}

// Question # 10

var temp=+prompt("Enter a temperature")

if (temp>=40) {
 alert("It is too hot outside.")   
}
else if(temp>=30){
    alert("The Weather today is Normal.")
}
else if(temp>=20){
    alert("Today’s Weather is cool.")
}
else if(temp>=10){
    alert("OMG! Today’s weather is so Cool.")
}

//  Question # 11

var num1 = +prompt("Enter Number To Calculate :")
var num2 = +prompt("Enter Number To Calculate :")
var operater = prompt("Enter Operator :")

var str = ""

if(operater == "/"){
    str = num1 / num2
   alert(`Result :  ${str}`)
}
else if(operater == "*"){
    str = num1 * num2
   alert(`Result :  ${str}`)
}
else if(operater == "+"){
    str = num1 + num2
   alert(`Result :  ${str}`)
}
else if(operater == "-"){
    str = num1 - num2
   alert(`Result :  ${str}`)
}