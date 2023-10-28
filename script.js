//console.log("wulal");

let firstName = "momo";
console.log(firstName);

lastName="Wu";
console.log(lastName);

let firstWeek = true;
//console.log(firstWeek);

console.log(typeof firstWeek);

firstWeek = "happy";
console.log(typeof firstWeek);

//console.log(typeof 33);
//console.log(typeof "wulal")
//console.log(typeof "lulu")
//console.log(firstWeek);

let x = 3
x +=10;
console.log(x);

x--;
console.log(x);

x++;
console.log(x);

x += 10;
console.log(x);

x *= 4;
console.log(x);


const now = 2023
const myAge = now - 1994;
const ageBrother = now - 1998;
//console.log(myAge);
//console.log(ageBrother);
console.log(myAge,ageBrother);

//console.log(firstName+lastName);
//console.log(firstName +" "+lastName+""+firstName)

//console.log(myAge < ageBrother);
//console.log(myAge >= 24);
//console.log(myAge - 10 <= ageBrother+20);

const triangleOne = (10*13)/2;
const triangleTwo = (16.5*20.3)/2;

console.log(triangleOne, triangleTwo);
console.log(triangleOne >= triangleTwo);

const triangleOn = 10*2.4/2.5;
const triangleTw = (10*2.4)/2.5;
const triangleT = 3*6/3;
const triangleF = (3*6)/3;
console.log(triangleOn, triangleTw, triangleT, triangleF);

const triangleThree = (16.5*20.3)/2;
const triangleFour = (20.3*16.5)/2

//console.log(triangleThree, triangleFour);
//console.log(triangleThree >= triangleFour);


const triangleFive = (7.8*5.6)/2;
const triangleSix = (9.3*12.4)/2
//console.log(triangleFive, triangleSix);
//console.log(triangleFive >=triangleSix);

const nameMy = "Mowei";
const birthMy = 1994;
const people = "cool kid";

const Meggen = 
"My name is " + nameMy + "," + (now - birthMy) + " years old,"  +" I am a " + people + "."

console.log(Meggen);

const MeggenNew = 
`My name is ${nameMy}, 
${now-birthMy} years old, 
I am a ${people} !`;

console.log(MeggenNew);

// 1.製作年紀容器

//2.定義大腦成熟年紀

//3.比較是否成熟

//4.下指令

const agePerson = 24;

const ageLife = agePerson >= 25; 

if (ageLife){
    //console.log("Congratulations! Now your brain is fully developed! ")
} else{
    console.log("That's okay to be silly");
}


/*
const  yearMany =
(if ( yearWait >= 1 ){
    console.log("years");
}else {
    console.log("year"); 確認如何使years 也能變動
 */


if ( agePerson >= 25){
    console.log("Congratulationsn! Now your brain is fully developed! ");
} else {
    
    const yearWait = 25 - agePerson;
    console.log( `You still have ${yearWait} year (or your whole life) to be silly.`);
}

const day = "sunday";

if (day === "monday") {
    console.log("that's blue day");
} else if ( day === "tuesday"){
    console.log("thats red day");
} else if ( day=== "wednesday"){
    console.log("thats yellow day");
} else if (day === "thursday"){
    console.log("that's green day");
}else if (day === "freday"){
    console.log("that's purple day");
}else if (day === "saturday" || day === "sunday"){
    console.log("thats happy day");
}else{
    console.log("thats cool day");
}

agePerson >= 25 ? console.log ("Congratulationsn! Now your brain is fully developed!"):console.log("That's okay to be silly");

const ageBrain = agePerson >= 25 ? "Congratulationsn!" : "That's okay";
console.log(ageBrain);

console.log(`Your brain is ${agePerson >= 25 ? "fully developed!" : "still growing"}`);




let n = "1" + 1;
n = n - 1 ;
console.log(n);

const colour = ["blue", "orange", "green", "purple"];

console.log(colour[2]);

console.log(colour.length);

console.log(colour[colour.length-1]);




const calcAge = function (birthYear) {
    return 2023 - birthYear;
}

const yearOfBirth = [2022, 1994, 1982];

const firstAge = calcAge(yearOfBirth[1]);
const secondAge = calcAge(yearOfBirth[2]);

console.log(firstAge, secondAge);