const user = {
    username: "rutika",
    price: 999,

    welcomeMessage: function() {
        // console.log(`${this.username} , welcome to website`); rutika , welcome to website
        // console.log(this);   //current context
    }

}


user.welcomeMessage()

// console.log(this);   //{}

function chai(){
    let username = "rutika"
    console.log(this.username); //undefined
    console.log(this)   //current context
}

chai()

// const chai = function () {
//     let username = "rutika"
//     console.log(this.username);  //undefined
// }

const chai1 =  () => {
    let username = "rutika"
    console.log(this);  // {}
}


chai1()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "rutika"})

const add = () => ({username: "rutika"})
console.log(add())  //{ username: 'rutika' }

// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()