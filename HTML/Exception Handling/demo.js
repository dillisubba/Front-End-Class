
try{
    var num1=100;
    var num2=50;
    var ans= num1/num2;
    document.write(ans);
}
catch(error){
    document.write(error.message)
}

document.write('<br>');

try{
    var numbers=[50,60,70,80];
    document.write(numbersEx);
}
catch(ex){
    document.write("Error occured");
}

document.write('<br>');

try{
    var numbers=[50,60,70,80];
    document.write(70);
}
catch(ex){
    document.write("Error occured");
}

document.write('<br>');

try{
    var age=prompt("Enter the age between 1 and 100");
    if(age>=1 && age<=100){
        document.writeln("Your age is: ",age);
    }
    else{
        throw new Error("Enter valid age");
    }

}

catch(ex){
    document.writeln("Error occured"+ ex.message);
}


finally{
    document.writeln("Finally block executed");
}


/*try{
    var marks=prompt("Enter marks between 0 and 100");
    if(marks>0 && marks<=100){
    document.write("Marks are :",marks);
    }
    else{
    //throw keyword is used to raise an error
    throw new Error("Enter valid marks");//message
    }
    }
    catch(ex){
    document.write("Error occured"+ex.message);
    }
    finally{
    document.write("finally block executed");
    }*/
