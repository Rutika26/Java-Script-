// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num); //print till arr.length 
}

const greetings = "Hello world!"
for (const greet of greetings) {
    if(greet == " ")    //skip the white space
        {
            continue;
        }
    // console.log(`Each char is ${greet}`)     //print char by char except white space
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")  //map doesn't allow duplicate key


// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);   //print key and value
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {   //for...of() doesn't allowed directly on object
//     console.log(key, ':-', value);
    
// }