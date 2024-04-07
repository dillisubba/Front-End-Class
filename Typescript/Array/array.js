//Single dimensional
var age = [18, 19, 20, 21, 22, 23, 24, 25];
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
var fname = [
    ["Shiva", "Dilli", "Sam"], //string values should always be in quotation.
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
var flower = new Array("Marigold", "Sunflower", "Rose");
for (var i = 0; i < flower.length; i++) {
    console.log(flower[i]);
}
;
console.log("-----------------");
//for..in loop
var media = new Array("Television", "Newspaper", "Magazine", "Internet");
for (var i in media) {
    console.log(media[i]);
}
