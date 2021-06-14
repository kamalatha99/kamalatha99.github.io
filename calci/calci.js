var str="";
function one()
{
str=str+"1";
document.getElementById("text").innerHTML=str;
}
function two()
{
str=str+"2";
document.getElementById("text").innerHTML=str;
}
function plus()
{
str=str+"+";
document.getElementById("text").innerHTML=str;
}
function ans()
{
var ans=eval(str);
document.getElementById("text").innerHTML=ans;
}
function a()
{
str="";
document.getElementById("text").innerHTML=str;
}
function b()
{
str=str.slice(0,-1);
document.getElementById("text").innerHTML=str;
}
function into()
{
str=str+"*";
document.getElementById("text").innerHTML=str;
}
function minus()
{
str=str+"-";
document.getElementById("text").innerHTML=str;
}
function by()
{
str=str+"/";
document.getElementById("text").innerHTML=str;
}
function rem()
{
str=str+"%";
document.getElementById("text").innerHTML=str;
}
function three()
{
str=str+"3";
document.getElementById("text").innerHTML=str;
}
function fou()
{
str=str+"4";
document.getElementById("text").innerHTML=str;
}
function fiv()
{
str=str+"5";
document.getElementById("text").innerHTML=str;
}
function six()
{
str=str+"6";
document.getElementById("text").innerHTML=str;
}
function sev()
{
str=str+"7";
document.getElementById("text").innerHTML=str;
}
function eig()
{
str=str+"8";
document.getElementById("text").innerHTML=str;
}
function nin()
{
str=str+"9";
document.getElementById("text").innerHTML=str;
}
function dot()
{
str=str+".";
document.getElementById("text").innerHTML=str;
}
function zer()
{
str=str+"0";
document.getElementById("text").innerHTML=str;
}
function c()
{
if(str[0]=="+" || str[0]!="-")
{
str="-"+str;
document.getElementById("text").innerHTML=str;
}
else
{
str=str.slice(1,str.length);
document.getElementById("text").innerHTML=str;
}
}