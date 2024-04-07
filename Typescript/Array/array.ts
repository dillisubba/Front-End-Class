//Single dimensional
let age:number[]=[18,19,20,21,22,23,24,25];
console.log(age[0]);
console.log(age[1]);
console.log(age[2]);
console.log(age[3]);
console.log(age[4]);
console.log(age[5]);
console.log(age[6]);
console.log(age[7]);

console.log("-----------------");

//Multidimensional
let fname:string[][]=[
    ["Shiva", "Dilli","Sam"],//string values should always be in quotation.
    ["Ram", "Hari", "Om"]
];
console.log(fname[0][0]);
console.log(fname[0][1]);
console.log(fname[0][2]);
console.log(fname[1][0]);
console.log(fname[1][1]);
console.log(fname[1][2]);

console.log("-----------------");

//Array Object/for loop
let flower:string[]= new Array("Marigold", "Sunflower", "Rose");//new Array is a keyword.
for(let i=0; i<flower.length; i++){
    console.log(flower[i]);
};


console.log("-----------------");

//for..in loop
let media:string[]=new Array("Television", "Newspaper", "Magazine", "Internet");
for(let i in media){
    console.log(media[i]);
};
