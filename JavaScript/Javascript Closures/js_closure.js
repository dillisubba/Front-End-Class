/*inner function has access to the outer function
sytax
function A(){
    function B(){

    }
  }
};

function display(){
    var num1=1;
    function show(){
        return num1;
    }
    return show;
}
 var result = display();//yo variable result becomes function down-below
 document.write(result()+"<br/>");
 document.write(result());

 document.write('<br/');
 

 function display(){
    var firstname=("Dilli");
    function show(){
        return firstname;
    }
    return show;
 }
 var fname=display();
 document.write(fname());

 document.write('<br/');

 function displayName(fname){
    var result="Welcome "+ fname;
    return result;
 }
 document.write(displayName("Dilli"));*/


 document.write('<br/');

 function displaydata(fname)
 {
    var result="Welcome "+ fname;
    function showdata()
    {
        var output=result+ "Hello";
        document.write(output);
    };
    return showdata;
 }
 var finaloutput=displaydata("Dilli");
 finaloutput();


