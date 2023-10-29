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

//使用function 

function lemoncake(butter, lemon, flour){
    const drizzle = `super nice ingredients which is ${butter} cups butter, ${lemon} cups lemonjuice and ${flour} cups flour`;
    return drizzle;
}

const amazingcake =lemoncake(3, 2, 1) ;
console.log(amazingcake);

function callcAge(a1, a2){
    const resAge = a1 + a2;
    return resAge;
}

console.log(callcAge(29, 41));

// 製作菜單 製作oblect, 使用時都用.
const eggen = {
    firstName:"Meg",
    lastame: "Wu",
    age: 1994,
    job:"student",
    hasID: false,
};

//console.log(meggen);

console.log(eggen.age);

//const info = prompt(
    "about meggen"
//);
//console.log(info);
//console.log(meggen[info]);

// 記得避免 空字的錯誤，要加上if else
/*if (eggen[info]){
    console.log(eggen[info]);
} else{
    console.log("say again");
}

/*
const meggen = {
    firstName:"Meg",
    lastame: "Wu",
    age: 2023-1994,
    job:"student",
};
*/

eggen.cat = "pittpana";
eggen. location = "öland";

//console.log(meggen);

const meggen = {
    firstName:"Meg",
    lastame: "Wu",
    age: 1994,
    job:"student",
    hasID: false,
    calcAge: function (){
        console.log(this);
        return 2023 - this.age;
    },
    getSummary: function (){
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job}. 
        And she has ${this.hasID ? "a" : "no"} ID.`
    } 
};

//console.log(meggen.getSummary());


function describself(name, age, favouriteFood){
    return `My name is ${name} and I am ${age} years old. My favo food is ${favouriteFood}. `;
}

const person1 =  describself("kit", 41, "pizza");
const person2 = describself("meg", 29, "veg");
const person3 = describself("panna", 3, "soup");

console.log(person1);
console.log(person2);
console.log(person3);


const me = {
    firstName: "momo",
    lastName: "wo",
    age: 29,
    job: "student",
    pets: false,

    logSelf:function(){
        return `My name is ${this.firstName} ${this.lastName} and 
    I'm ${this.age} years old ${this.job}. 
    I have ${this.pets ? "a" : "no"} pets at home. `;
    }
}

console.log(me.logSelf());

//

function calTip(billAmount){
    let tipPercentage;
    if(billAmount <50){
        tipPercentage = 0;
    
    }else if (billAmount >= 50 && billAmount <= 300){
        tipPercentage = 10;
    
    } else{
        tipPercentage = 15;
    }

    const tipAmount = (tipPercentage / 100) * billAmount;
    const totalAmount = tipAmount + billAmount ;

    return `The total amount of the bill is ${billAmount}. The tip % is therefore ${tipPercentage}% and the total amount to pay including tip is ${totalAmount}.`;

}

// test the function with different values
const bill1 = 265;
const bill2 = 80;
const bill3 = 560;
const bill4 = 30;

 console.log(calTip(bill1));
 console.log(calTip(bill2));
 console.log(calTip(bill3));
 console.log(calTip(bill4));
