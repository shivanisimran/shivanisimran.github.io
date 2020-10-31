 var b1 =document.getElementById('btn0');
 var b2 =document.getElementById('btn1');
 var b3 =document.getElementById('btnClr');
 var b4 =document.getElementById('btnEql');
 var b5 =document.getElementById('btnSum');
 var b6 =document.getElementById('btnSub');
 var b7 =document.getElementById('btnMul');
 var b8 =document.getElementById('btnDiv');
 var b0 =document.getElementById('res');

 var a='';
 var b;
 var i;
 b1.onclick = function(){
   a=a+b1.innerHTML
   b0.innerHTML=a;
 }
 b2.onclick = function(){
   a=a+b2.innerHTML;
   b0.innerHTML=a;
 }
 b3.onclick = function(){
    a='';
    b0.innerHTML=a;
 }
 b5.onclick = function(){
    a=a+b5.innerHTML;
    b0.innerHTML=a;
 }
 b6.onclick = function(){
    a=a+b6.innerHTML;
    b0.innerHTML=a;
 }
 b7.onclick = function(){
    a=a+b7.innerHTML;
    b0.innerHTML=a;
 }
 b8.onclick = function(){
    a=a+b8.innerHTML;
    b0.innerHTML=a;
 }
 const ops = {
    '+': (a,b) => a + b,
    '-': (a,b) => a - b,
    '*': (a,b) => a * b,
    '/': (a,b) => Math.floor(a / b),
}
 b4.onclick = function(){
    const [op1, operator, op2] = a.split(/\b/);
    const [n1, n2] = [parseInt(op1, 2), parseInt(op2, 2)];
    var x = Number(ops[operator](n1,n2)).toString(2);
     b0.innerHTML=x+" ("+parseInt(x,2)+")";
                 
 }

 
 
 
 
