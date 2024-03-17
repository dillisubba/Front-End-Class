/*static method
----------------------
Static methods can be accessed without creating an object.
use classname.methodname();

use static keyword to declare a static method.
static method can have any name.
A class can have more than one static method.
If we declare two static methods with the same name then the last static method will be executed.

<script>
class Test
{
static display()
{
document.write("static method");
}
static show(){
        return "Show Method";
}
}
Test.display(); 
document.write(Test.show());
</script>
*/