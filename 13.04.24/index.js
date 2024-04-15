// break
// for(var i=0;i<5;i++){
//     if(i===3){
//         break;
//     }
//     console.log(i)


// }


//continue
// var person="harish";
// var ramzan=6;
// for(let day=1;day<=15;day++){
//     if(day===6){
       
//         console.log("Biriyani" ,day)
//         continue;
       
//     }
//     console.log("class on day;",day)
    
// }
// console.log("home")


//switch
//  var grade="E";

//  if(grade==="A"){
//     console.log("Excellemt");
//  }
//  else if(grade==="B"){
//     console.log("Good");
//  }
//  else if(grade==="C"){
//     console.log("Average");
//  }
//  else if(grade==="D"){
//     console.log("Okay");
//  }
//  else if(grade==="E"){
//     console.log("Need to improve");
//  }
//  else{
//     console.log("Fail");
//  }


// var Grade="A";
// switch(Grade){
// case   "A":
//     console.log("Very Good")
//     break;
// case   "B":
//     console.log("Good")
//     break;
// case   "C":
//     console.log("Okay")
//     break;
// case   "D":
//     console.log("Average")
//     break;
// default:
//     console.log("FAIL")
// }

// Function



// function change(){
//     document.getElementById("He").innerText="Hello";
//     document.body.style.backgroundColor="green";
//     document.getElementById("He").style.color="yellow";
    
// }


// function add(a,b){
//     console.log("inside function first", a, b)
//     var c=a+b;
//     console.log(c)
//     console.log("inside function last")
// }
// console.log("b4 func call")
// add(20,30)
// console.log("after function call")



// //return with value
// function add(a,b){
//     return a+b;
// }
// function min(a,b){                                                  
//     return a-b;
// }
// var res=add(20,10)+min(20,10);
// console.log(res)


function calc(x) {
    var ele = document.getElementById('para');
    ele.innerText +=x;
}
function answer() {
    var ele = document.getElementById('para');
    try{
        
        
        ele.innerText= ele.innerText + '=' +eval(ele.innerText);
    }catch(err) {
        alert(err);
        resetData();
    }
}
function resetData() {
    var ele = document.getElementById('para');
    ele.innerText =" ";
}