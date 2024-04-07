//How to accept user input

//1.Easy Way = window.prompt
//2.Professional way = HTML textbox

/*Example of easy way.
let usename;
username= window.prompt("What's your username?")
console.log(username);*/

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    console.log(username);
}
