//conditional constructs. If the number is positive/negative.
var x=-10;
// document.write("x is positive"); 
if(x>0)
{
    document.write(" x is positive");
}

else
{
 document.write(" x is negative");
}

document.write("<br>");

//If you're broke or not


var money=1000 //initial value

if(money > 0)
{
    document.write("You're not broke!");
}
else
{
    document.write("You're broke!");
}

document.write("<br>");


//Even or odd number
var  x= 10;

if(x%2==0)
{
    document.write("x even number");
}
else{
    document.write("x odd number");
}

document.write("<br>");
//display the greatest number

var x=10;
var y=20;
if(x>y)
{
    document.write("x is greater than y");
}
else
{
    document.write("y is greater than x");
}

document.write("<br>");
var x=10;
var y=20;
if(x>y)
{
    document.write("greater" + x);
}
else
{
    document.write("greater"+ y);
}

document.write("<br>");
//some more examples of conditional constructs
//Hour
//If hour is between 0100am and 1200pm: Good morning!
//If hour is between 1200pm and 1800pm: Good afternoon!
//Otherwise: Good evening!
var hour = 1300;

if(hour>=100 && hour <= 1200)

    Document.write("Good morning!");

else if(hour>=1200 && hour <=1800)

    document.write("Good afternoon!");
else
    document.write("Good evening!");

    document.write("<br>");
    let age = 25;
    if (age>=18){
        document.write("You can vote!");
    }
    else{
        document.write("You can't vote!");
    }