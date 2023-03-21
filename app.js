var name =prompt("Enter your name");
var Gender =prompt("Enter your gender");

genderFun(Gender);
var age =prompt("Enter your age");

const drinkType =prompt("Would you like a hot or cold drink?");
const drink =prompt("What do want to drink?");
alert("The drink will be prepared soon \n please wait...")

console.log("Name: "+name);
console.log("Your drink: " + drinkType+" "+drink)

let arr =[];
arr.push(name,Gender,drinkType,drink)

for(let x=0;x<arr.length;x++){
    console.log(arr[x])
}

let order=document.getElementById("order");
let parg = document.createElement("p");

let ull= document.createElement("ul");

let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");

parg.textContent=name;
li1.textContent = "Gender: "+Gender
li2.textContent = "Age: "   + age
li3.textContent = "drink: " + drinkType +" "+drink

ull.appendChild(li1);
ull.appendChild(li2);
ull.appendChild(li3);
order.appendChild(parg);
order.appendChild(ull)

document.getElementById("order").style.display="block";


function closefun(){
    console.log("sdfdsfsd")
    document.getElementById("order").style.display="none";
}

function genderFun(){
    while(Gender != "male" && Gender != "female"){
        Gender =prompt("Enter your gender");  
    }
    
    if(Gender =="male"){
        name="Mr. "+name;
        alert("Welcome "+name)
    }else if(Gender =="female"){
        name="Mr. "+name;
        alert("Welcome "+name)
    }else{
        alert("Welcome "+name) 
    }
}



