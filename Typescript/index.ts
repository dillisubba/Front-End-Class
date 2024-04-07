
//Arithematic operators
console.log("Arithematic operators");
let num1:number=10;
let num2:number=20
console.log("num1 is "+  num1);
console.log("num2 is "+  num2);
console.log("Sum is "+  (num1 +num2));
console.log("Diff is "+ (num2 -num1));
console.log("Product is "+ (num1*num2));
console.log("Quotion is "+ (num2/num1));
console.log("Answer is "+ (num2%num1));

//Assignment Operator
console.log("Assignment operators");
let num3:number=15;
let num4:number=25
num1=num2;
console.log("num1 is "+  num3);
console.log("num2 is "+  num4);
console.log("answer is "+ (num3+=num4));//num3+=num4 means, num3=num3+num4--assigning new value for num3(40).
console.log("answer is "+ (num3-=num4));//num3-=num4 means, num3=num3-num4 --used new value of num3.
console.log("answer is "+ (num3*=num4));//num3=num3 times num4
console.log("answer is "+ (num3/=num4));//num3= num3 divide4 by num4
console.log("answer is "+ (num3%=num4));//remainder 

//Relational operator
console.log("Relational operators");
let num5:number=50;
let num6:number=100
console.log("num1 is "+  num5);
console.log("num2 is "+  num6);
console.log("Answer is "+ (num5==num6));
console.log("Answer is "+ (num6>num5));
console.log("Answer is "+ (num5<num6));
console.log("Answer is "+ (num6>=num5));
console.log("Answer is "+ (num5<=num6));
console.log("Answer is "+ (num5!=num6));

//Logical operator
console.log("Logical operators");
let num7:number=100;
let num8:number=200;
console.log("num1 is "+  num7);
console.log("num2 is "+  num8);
console.log("Answer is "+ (num7==100&&num8==200));//&& all condition must be true. nu
console.log("Answer is "+ (num7==200||num8==200));//anyone must be true
console.log("Answer is "+ (!(num8==200)));//one condition is not true or false

//Ternary Operator
console.log("Ternary operators");
let num9:number=12;
let num10:number=9
console.log("num1 is "+  num9);
console.log("num2 is "+  num10);
console.log("Answer is "+ (num9>num10? "num9 is greater than num10": "num9 is less than num10"));

/*Conditional Operator

let num11:number=10;
let num12:number=20
console.log("num1 is "+  num11);
console.log("num2 is "+  num12);
console.log("Answer is "+ (num11>num12? "num11 is greater than num12": "num11 is less than num12"));

For Loop

let num13:number=10;
let num14:number=20
for(let i=0;i<10;i++){
    console.log("num1 is "+  num13);
    console.log("num2 is "+  num14);
    console.log("Answer is "+ (num13>num14? "num13 is greater than num14": "num13 is less than num14"));*/