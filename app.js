var name =prompt("Enter your name");

while(Gender != "male" && Gender != "female"){
    var Gender =prompt("Enter your gender");  
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



