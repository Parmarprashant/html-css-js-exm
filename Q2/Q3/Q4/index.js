var addBtn = document.querySelector("#Btn");
var Rbtn = document.querySelector("#Btn1");
var Text = document.querySelector("#Aclick");
var text1 = document.querySelector("#Rclick");
var count =0;

addBtn.addEventListener("click", function(){
    count++;
    localStorage.setItem("Aclick", count);
    Text.textContent = `clicked + btn: ${count}`;
});
var count2 =0;
Rbtn.addEventListener("click", function(){
    count2++;
    localStorage.setItem("Rclick", count2);
   console.log( text1.textContent = `clicked - btn: ${count2}`);
});