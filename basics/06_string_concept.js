let name1 = "ayan"
let myrepocount = 16

// console.log(name + myrepocount + "value"); not use this

console.log(`my name is ${name1} and my reposetory count is ${myrepocount}`);

let gamerName = new String('Ayanwamp')
 
// console.log(gamerName[0]);
// console.log(gamerName[1]);
// console.log(gamerName[2]);
// console.log(gamerName[3]);

console.log(gamerName.length);
// console.log(gamerName.toUpperCase());  //not change original value 
console.log(gamerName);
console.log(gamerName.charAt(3));
console.log(gamerName.indexOf('a'));

let newString = gamerName.substring(0,5) //no negative index value if we give they ignore
console.log(newString);

let anotherstring = gamerName.slice(-6,6) // in this we give a negative index value for print
console.log(anotherstring);

let stringone = "   ayan shah     "

console.log(stringone);
console.log(stringone.trim()); 
// trim() used to ignore a space -starting and ending space only

let url = "https://ayan.com/ayan%20shah"

console.log(url.replace('%20','_'));
console.log(url.includes('ayan'));

console.log(url);

let myname1 = "ayan-shah-salaar"
console.log(myname1.split('-'));





