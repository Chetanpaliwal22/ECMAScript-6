<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Array.find()</h2>

<p id="demo"></p>

<script>
var numbers = [4, 9, 16, 225, 29];
var first = numbers.find(myFunction);

document.getElementById("demo").innerHTML = "First number over 18 is " + first;

function myFunction(value) {
  return value > 18;
}
</script>

</body>
</html>
