// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Rutika",
    "full name": "rutika bhagat",
    [mySym]: "mykey1",
    age: 24,
    location: "Pune",
    email: "rutika@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "rutika@chatgpt.com"
Object.freeze(JsUser) //can't changed
JsUser.email = "rutika@microsoft.com" 
console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());