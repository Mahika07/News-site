let date=document.getElementById("date");

let displayDate=new Date();
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let btn=`<a class="btn btn-primary" style="background-color:antiquewhite;color:black;">${displayDate.getDate()}/${displayDate.getMonth()+1}/${displayDate.getFullYear()} , ${weekday[displayDate.getDay()]}</a>`
date.innerHTML=btn;

//7d27b38eff444b1596dda2dcafa779a7
let source = 'the-times-of-india';
let apiKey = '7d27b38eff444b1596dda2dcafa779a7'
let category="general";
let newsbtn=document.getElementsByClassName("newsbtn");

let  newscard=document.getElementById("newscard");



Array.from(newsbtn).forEach(function(e,index) {
    e.addEventListener('click',()=>{
     category=document.getElementsByTagName("button")[index+1].id;

     const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`, true);
let display=document.getElementById("newscard");
xhr.onload=function()
{
   try {
let json=JSON.parse(this.responseText);
console.log(json);
let article=json.articles;
let html="";
article.forEach(function(element,index){
html=html+`  <div class="card my-3 mx-3" style="width: 22rem;">
<img src="${element.urlToImage}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${element.title}</h5>
  <p class="card-text">${element.description}</p>
  <a href="${element.url}" target="_">Read More</a>
</div>
</div>
`

    

});
newscard.innerHTML=html;
   } catch (error) {
    console.log(error);
   }
}
xhr.send();
    });
    });


    const xhr = new XMLHttpRequest();
    xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`, true);
    let display=document.getElementById("newscard");
    xhr.onload=function()
    {
       try {
    let json=JSON.parse(this.responseText);
    console.log(json);
    let article=json.articles;
    let html="";
    article.forEach(function(element,index){
    html=html+`  <div class="card mynews my-3 mx-3" style="width: 22rem;">
    <img src="${element.urlToImage}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text">${element.description}</p>
      <a href="${element.url}" target="_">Read More</a>
    </div>
    </div>
    `
    
        
    
    });
    newscard.innerHTML=html;
       } catch (error) {
        console.log(error);
       }
    }
    xhr.send();




let search=document.getElementById('searchtxt');

search.addEventListener("input", function (e) {
   let inputval = search.value.toLowerCase();
   let notecard = document.getElementsByClassName("mynews");
   Array.from(notecard).forEach(function (element) {
       let cardtxt = element.innerText;
       if (cardtxt.includes(inputval)) {
           element.style.display = "block";
           
       }
       else {
           element.style.display = "none";
       }
   })

});
