//var name =prompt("Enter your name");
//var Gender =prompt("Enter your gender");

// genderFun(Gender);
//var age =prompt("Enter your age");

//const drinkType =prompt("Would you like a hot or cold drink?");
//const drink =prompt("What do want to drink?");
const form = document.getElementById("myForm");

form.addEventListener("submit", (e)=> {
    e.preventDefault()
    let namee = e.target.namee.value;
    let drinkType1 = document.getElementById("drinkType1").checked;
    
    if(drinkType1){
        drinkType1 = "cold";
    }else{
        drinkType1 = "";
    }
    let drinkType2 = document.getElementById("drinkType2").checked;
    if(drinkType2){
        drinkType2 = "hot";
    }else{
        drinkType2 = "";
    }
    //let drinkType2 = e.target.drinkType2.value;
    let age = e.target.Age.value;
    let drink = e.target.drink.value;

    console.log(drinkType1,drinkType2)

let order=document.getElementById("order");
let parg = document.createElement("p");
let ull= document.createElement("ul");
let li1 = document.createElement("li");
//let li2 = document.createElement("li");
let li3 = document.createElement("li");

parg.textContent=namee;
li1.textContent = "Age: "+age
//li2.textContent = "Age: "   + age
li3.textContent = "drink: " + drinkType1 +" "+drinkType2 +" "+drink

ull.appendChild(li1);
//ull.appendChild(li2);
ull.appendChild(li3);
order.appendChild(parg);
order.appendChild(ull)

document.getElementById("order").style.display="block";


    //render(namee,email)
    // let par = document.createElement("p");
    // let par2 = document.createElement("p");
    // par.textContent = namee
    // par2.textContent =email
    // divv.appendChild(par)
    // divv.appendChild(par2)
    form.reset();

});

//alert("The drink will be prepared soon \n please wait...")

// console.log("Name: "+name);
// console.log("Your drink: " + drinkType+" "+drink)

// let arr =[];
// arr.push(name,Gender,drinkType,drink)

// for(let x=0;x<arr.length;x++){
//     console.log(arr[x])
// }



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



