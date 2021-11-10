const arr = [50, 60, 70, 80]

const btn1=document.querySelector("#tree");
const btn2=document.querySelector("#six");
const btn3=document.querySelector("#twelve");
const btn4=document.querySelector("#twentyfour");
const apr=document.querySelector("#apr");
const cost=document.querySelector("#cost");

btn1.onclick=function(){
    document.getElementById("total").value = 3*(100*50/12) 
}
btn2.onclick=function(){
    document.getElementById("total").value = 6*(100*60/12) 
}
btn3.onclick=function(){
    document.getElementById("total").value = 12*(100*70/12) 
}
btn4.onclick=function(){
    document.getElementById("total").value = 24*(100*80/12) 
}