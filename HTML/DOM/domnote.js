Document Object Model(DOM)
------------------------------------------------
  An object consists of variables and methods.
javascript uses object model which is known as Document Object Model(DOM) to navigate through the Html document in an hierarchy.

Each html document which is loaded into the browser becomes an document object.

DOM represents all Html elements in an Tree Structure.
javascript access elements of html using document object.

:Html DOM Structure:
----------------------------------
  document
  |
  ------------------------------------------------------------------
                                   |                                 |                              |
    anchor                           form                            link    //{children}
      |
      -----------------------------------------------------------------------------------
                                 |              |             |            |           |            |              |
        text         textarea      checkbox       radio       reset        submit         select  //{sibling}
          |
          option  //{leaf}


The nodes in the tree are placed in an hierarchy.
Parent nodes have children.
Children at the same level are called as siblings which are with the same parent.
The top node is called as root.
Every node except root has exactly one parent node.
A node can have any number of children.
the last node is known as leaf node which doesn't conists of children.

Elements can be accessed by moving through the tree nodes.
  document.form.submit
document.form.text
document.form.radio

or
window.document.form.submit
window.document.form.text
window.document.form.radio

Finding Html elements
-------------------------------------
  find html elements by id
find html elements by tag name
find html elements by class name

document.getElementById() //returns the elements of the specified Id.
document.getElementsByTagName()//returns or finds the element by tagname.
document.getElementsByName()//returns all the elements of the specified name.
document.getElementsByClassName()//finds the element by class name.
Write() - writes the given string on the document.
  writeIn() - writes the given string on the document with new line character at the end.


< html >
<head>
<title>DOM</title>
</head>
<body>
<script>
function display()
{
var fname= document.frmname.usrname.value;
alert(fname);
document.write(fname);
}
</script>
<form name="frmname">
<label>Enter User Name :</label>
<input type="text" id="username" name="usrname"/> 
<input type="button" onclick="display()" value="showname">
</form>
</body>
</ >
  -----------------------------------------------------------------------
    -----------------------------------------------------------------------
      getElementById()
-------------------------
< !DOCTYPE html >
  <html lang="en">
    <head>

      <title>DOM ID</title>
    </head>
    <body>
      <script>
        function showdata()
        {
var result=document.getElementById("username").value;
        alert(result);
}
      </script>
      <form>
        <label>Enter username:</label>
        <input type="text" id="username" name="usrname" />
        <input type="button" onclick="showdata()" value="show">
      </form>
    </body>
  </html>
--------------------------------
< !DOCTYPE html >
  <html lang="en">
    <head>

      <title>Id</title>
    </head>
    <body>
      <p id="test1">Welcome to Document Object Model</p>
      <p>Welcome to Paragraph</p>
      <script>
        var result=document.getElementById("test1");
        result.style.background="pink";
      </script>
    </body>
  </html>
--------------
//The Document API, also sometimes called the DOM API, allows you to modify a DOM tree in any way you want.
//It enables you to create any HTML or XML document from scratch or to change any contents of a given HTML or XML document