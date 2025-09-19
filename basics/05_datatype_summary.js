// primitive 
// 7 types
// String,Number,Boolean,BigInt,null,undefined,Symbol

// non primitive
// Array,Object,function

//javascript is a dynamically type language
let id = Symbol('001')
let loggedId = Symbol('001')
console.log(id == loggedId);
console.log("ayan ");


let bigNumber = 26555656565555555n  //bigInt
console.log(typeof bigNumber);
// object is key value pairs
// null => object if we console.log("typeof null")
//array
let heros = ["iron_man","thor","vedant","jetharam"]
    let myobj = {
    name1 : "ayan",
    age : 20,
    location : "nagpur"
    
}
let myfun = function(){
    console.log("hello");
    
}
console.log(myobj);
console.log(typeof heros);
console.log(typeof myobj);
console.log(typeof myfun);
console.log(myfun);






