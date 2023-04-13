var img=document.getElementById("imageid");
img.src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/sum-of-two-numbers-img.png";
var inp1 =document.getElementById("inp1").value;
var inp2 =document.getElementById("inp2").value;

var b1 =document.getElementById("btn1");
var b2=document.getElementById("btn2");
var result =document.getElementById("res").value;


function restart()
{
var inp1 =document.getElementById("inp1").value=Math.floor((Math.random()*10));
var inp2 =document.getElementById("inp2").value=Math.floor((Math.random()*10));
var result =document.getElementById("res").value="";  
    
}

function check()
{
   
var inp1 =document.getElementById("inp1").value;
var inp2 =document.getElementById("inp2").value;
var div =document.getElementById("divid");
var result =document.getElementById("res").value;

var first_val =parseInt(inp1);
var second_val =parseInt(inp2);
var answer = first_val+second_val;

if(result == answer)
{
    div.innerHTML="Congrats";
    div.style.color="green";
    div.style.backgroundColor="yellow";
}
else
{
    div.innerHTML="Sorry Try Again";
    div.style.color="red";
    div.style.backgroundColor="black";
}
}