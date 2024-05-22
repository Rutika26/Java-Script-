
function sayMyName(){
    console.log("r");
    console.log("u");
    console.log("t");
    console.log("i");
    console.log("k");
    console.log("a");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);  


function loginUserMessage(username = "sam")//default value sam
{
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

function calculateCartPrice(val1, val2, ...num1){
    console.log(val1)
    console.log(val2)
    console.log(num1)
      // return num1
  }
  
  console.log(calculateCartPrice(200, 400, 500, 2000,100,200))
  
  const user = {
      username: "rutika",
      prices: 199
  }
  
   handleObject=function(anyobject){
      console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);    //Username is rutika and price is 199
      console.log(`Cost is ${anyobject.cost}`); //Cost is undefined
  }
  
  handleObject(user) //passed object as argument
  
  
  
  
  
  const myNewArray = [200, 400, 100, 600]
  
  function returnSecondValue(getArray){
      return getArray[1]
  }
  
  console.log(returnSecondValue(myNewArray));
  console.log(returnSecondValue([200, 400, 500, 1000]));