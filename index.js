// let str="racecr"
// let reverse="";
// for( let i=str.length-1;i>=0;i--){
//     reverse+=str[i];
// }
// console.log(reverse)
// if(str===reverse){
//     console.log("palindrome")
// }
// else{
//     console.log("not a palindrome")
// }

// function add(a,b){ //a,b parameters , inside{ function definiton}
//     return a+b;
// }
// function minus(a,b){
//     return a-b;
// }
// var res1=add(10,20); //value 10,20 arguements , add() minus() -- Function call
// var res2=minus(20,10);
// console.log(res1);
// console.log(res2);
// console.log( "answer" ,res1+res2);



// function expression

// function add(a,b){
//     return a+b;
// }
// var res=add(10,20);
// console.log(res);


// normal  function

// var minus=function(a,b){
//     return a-b;
// }
// var res=min(20,10);
// console.log(res)

// var add= function(a,b){ return a+b;}
// function logic(x){
//     console.log(x(100,100))
// }
// logic(add);

// function logic(){
//     var res=function a(){
//         console.log("hi");
//     };
//     return res;
// }
// var x=logic();
// x();


//output
// alert("Warning");

//get input as true or false

// var res=confirm("Are You Okay ??");
// console.log(res);

// get input
// var result=prompt("input");
// console.log(result);


// var result=prompt("input");
// console.log(result);

// if(result=="hi"){
//     alert("True")
// }
// else{
//     alert("wrong")
// }


// nullish coalesing operator ??
// function log(a,b){
//     a=a??10;
//     b=b??20;
//     console.log(a);
//     console.log(b);
// }
//  log()     //if arguments are undefined will print next value after a Op 10,20
//  log(30,40) //now a=30 b=40 op---> 30,40



//error handling
// try
// catch
// finally
var a=1;
var b=2;
var c=3;























//object method


// var mario={
//     life:3,
//     powerup:4,
//     coins:0,
//     walk:function(){
//         console.log("mario is walking");
//     },
//     jump:function(){
//         console.log("mario is jumping");
//     },
//     speed(){
//         console.log("coins", this.life, "life")
//         this.coins=200;
//     }
// }
// mario.jump();
// console.log(mario.life);
// mario.walk();
// mario.speed();
// console.log(mario);



// ?.

// var clg={
//     add:{
//         city:"coimbatore",
//         place:{
//             area:"saravanapatti",
//             landmark:{
//                 right:"residency",
//                 left:"hotel"
//             }
//         }
//     }
// }
// console.log(clg.house?.area);



// eval function

let mobiles=[
    {color: 'blue',model:'oppo a7'},
    {color: 'black',model:'redmin note 7 pro'},
    {color: 'white',model:'iphone 16 pro max'},
    {color: 'green',model:'samsung'},

];
let updatecolor = mobiles.map(phone => {
    phone.color='red';
    return phone;
})






