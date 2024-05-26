var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    c=30
    console.log("INNER: ", a); //10
    
}



console.log(a); //300
// console.log(b);
console.log(c); //30


function one(){
    const username = "rutika"

    function two()  //closure function
    { 
        var website = "github"
        console.log(username);  //rutika
    }
    // console.log(website);    //website can't access outside the function

     two()

}

 one()

if (true) {
    const username = "rutika"
    if (username === "rutika") {
        const website = " youtube"
        console.log(username + website); //rutika youtube
    }
    // console.log(website); //website can't access outside 
}

// console.log(username); //username can't access outside 


//-------------------------


console.log(addone(5))  //6

function addone(num){
    return num + 1
}



addTwo(5) //error
const addTwo = function(num){
    return num + 2
}
addTwo(5)   //allowed
