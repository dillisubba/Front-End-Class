//Dialog Boxes
----------------------
alert()--just 
prompt()
confirm()

alert("welcome");
var fname=prompt("enter your name")
document.write(fname);
var result=confirm("Do you want to continue(y/n)?");
document.write(result);


Events
----------
Events are actions or occurances which happens in the system.

click - is generated when a user clicks on a form element or on a link button.

load - it is generated when a page is loaded into the browser.//used on opening body tag

mouseover - it is generated when the mouse moves the mouse pointer over a link or an object .

mouseout - it is generated when a mouse pointer leaves the area.

keypress -it is generated when we click any key in the keyboard only characters, no numbers and alt key, shift key 
keydown- user process when user pushes the key such as Cntrol key,shift, alphabet
key up- pops up when any key is released including number and special keys.



<body>
<input type="button" onclick="display()" value="show">

<script>
function display()
{
alert("welcome to events");
}
</script>
</body>
---------------------

