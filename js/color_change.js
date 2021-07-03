var b =document.getElementById('click');
var c =document.getElementById('default');
var d=document.getElementById('click1');
const a=['forestgreen','palevioletred','blue','darkturquoise','violet','tomato','teal','yellow','coral','skyblue']
var i=0;
c.onclick = function(){ 
    d.innerHTML=`You are at Default`
    document.body.style.backgroundColor = 'white'; 
}

b.onclick = function(){ 
    d.innerHTML=`You are at color no. ${(i)%10 + 1}`
    document.body.style.backgroundColor = a[(i)%10]; 
    i+=1 
}
