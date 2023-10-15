/* Codekata day -1

Programming:
             Machine Understanding language
             To give instructinos to the computer
             Reduce human effort.
Variables:
Values=> You can store different things!

Strings => "Guvi";
Number => 12;*/

var toys = "remotecar"; //String

var noOfToys= 1; //Number

console.log(toys);

console.log(noOfToys);

//String methods

/* length
   toUpperCase(), toLowerCase
   charAt()
   substring()
   split()
   indexOf()
   replace()
   trim()*/

   //1.length - returns the number of characters in a string.()

   //real time usage 

   var fruits = "Apple is a sweet fruit"; //it's consider the space and letters also.
   console.log(fruits.length);

   var arr=["good",1,4,6,true];
   console.log(arr.length);

   //2.toUpperCase() & toLowerCase() : convert a string to uppercase or lowercase.
   var fruits1 = "Apple is a sweet fruit";

   console.log(fruits1.toUpperCase());

   var fruits2 = "APPLE";
   console.log(fruits2.toLowerCase());

   //3.charAt(): returns the character at a specific index in a string

   // t r a i n
   // 0 1 2 3 4

   var toy = "remoteCar";
   console.log(toy.charAt(6));// the index which you provide it's return the character at a specific index in a string.

   //4.substring(): extract a position of a string between two specified index(position).

   //it's used for first name second name places.
   var toy1 = "train";

   console.log(toy1.substring(1,4)); //rai

   console.log(toy1.substring(1,5)); //rain

   console.log(fruits1.substring(2,8));

   //5.split(): split is a string into an array of substrings based on specified separator.
//*Array
var name ="vinith";
var age ="27";

console.log(name,age);


var person = ["Vinith", 27];
console.log(person);


var myString = "Hello, world!";

var myArray = myString.split(",");

console.log(myArray);
   //6.indexOf() : returnd the index of the first occurance of the special value in a string
var myString = "Guvi is very excellent";

console.log(myString.indexOf("v")); // there is 2 v are apprear in the sentence but it's only consider the first value.
//all the string value are used for the forms only.

   //7.replace() : repalce a specified value with a new value.

   var myString1 = "Nume";

   var newStr1 = myString1.replace("u","a");

   console.log(newStr1);

   //8.trim() : remove white space from both end of the string. 

   var username = "  Vinth      ";
   console.log(username.trim());

   -----------------------------


   