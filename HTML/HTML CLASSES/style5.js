
//Questions: 1. Write a program to display 1 to 10 numbers.
var num1 = 1;
while (num1<=10)
    {
        document.write(num1 + ",");
        num1++;
    }
document.write ("<br>");
    for(var num1=1; num1<=10;num1++){
        document.write(num1 + ",");
    }
    
document.write ("<br>");

//Questions: 2.  Write a program to display sum of first 10 numbers.
// 1,2,3,4,5,6,7,8,9,10=55   
   var i = 1;
   var sum = 0;
   
   while(i<=10)//1<=10 y 2<10y 3<=10y
   {
       sum = sum + i; //sum=0+1
    //    document.write(sum)--if you comment inside the loop, you will see the error.
      i++;//i=2 i=3
   }
   document.write(sum);
   document.write ("<br>");
   //for loop
   sum = 0;
   for(i=1; i<=10; i++){
    sum = sum + i;
   }
   document.write(sum);
   document.write ("<br>");

   //Question 3:Write a program to display first 10 even numbers.
   //2,4,6,8,10,12,14,16,18,20.--first ten even numbers.
   var i = 2;
   while(i<=20)
   {
    if(i%2==0)
    document.write(i + ",");
    i++;
   }
   document.write ("<br>");
   //for loop
   var i=2;
   for(i=2; i<=20;i++){
    if(i%2==0)
    document.write(i + ",");
  }

   document.write ("<br>");

   //Question4: Write a program to display sum of first 10 odd numbers.
   //1,3,5,7,9,11,13,15,17,19= 100--first ten oddnumbers.
   var i = 1;
   var sum = 0;
   while(i<20)
   {
    if(i%2!=0)
    sum = sum + i;
    i++;
   }
   document.write(sum)
   document.write ("<br>");
//using for loop
var sum = 0;
for(i=1; i<20; i++){
    if(i%2!=0)
   sum = sum + i;
     }
   document.write(sum)
document.write ("<br>");


   //5. Write a program to display 9th multiplication table.
   //1,2,3,4,5,6,7,8,9
   var i = 1;
   while(i<=10)
   {
    document.write(i + " *9= " + i*9 + "<br>");
    i++;
   }
   document.write ("<br>");
   //for loop
   i = 1;
   for(i=1; i<=12; i++){
   document.write(i+ " *7 = "+ i*7 +"<br>");
   }

document.write('<br>');
//multiplication table
for(i=1; i<=10; i++){
    document.write(i+ ' *5 = ' + 5*i + '<br>')
};



  
    
