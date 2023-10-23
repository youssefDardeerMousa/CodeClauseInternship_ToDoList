let input1=document.querySelector('#input1');
let input2=document.querySelector('#input2');
let btn=document.querySelector('#btn');
let card=document.querySelector('#card');
let mood=document.querySelector('#mood');
let error=document.querySelector('#error');
let search=document.querySelector('#search');

mood.addEventListener('click',()=>{
 
  if(mood.className=='fas fa-moon mx-5 my-3'){
    localStorage.setItem("mood","fas fa-moon mx-5 my-3")
    mood.className='fas fa-sun mx-5 my-3'
    document.body.style.backgroundColor='black'
    document.body.style.color='white'
  }
  else if(mood.className=='fas fa-sun mx-5 my-3'){
    localStorage.setItem("mood","fas fa-sun mx-5 my-3")
    mood.className='fas fa-moon mx-5 my-3';
    document.body.style.backgroundColor='white'
    document.body.style.color='black'

  }
  
  
})
function moood(){
  if(localStorage.getItem("mood")=="fas fa-sun mx-5 my-3"){
    mood.className='fas fa-moon mx-5 my-3'
    document.body.style.backgroundColor='white'
    document.body.style.color='black' 
  }
  if(localStorage.getItem("mood")=="fas fa-moon mx-5 my-3"){
    mood.className='fas fa-sun mx-5 my-3'
    document.body.style.backgroundColor='black'
    document.body.style.color='white' 
  }
}
moood()

let arr;
if(localStorage.getItem("data")==null){
  console.log("null");
  arr=[];
}
else{
  console.log("Not null");

  arr=JSON.parse(localStorage.getItem("data"))
  display()
}
btn.addEventListener("click",()=>{
  if(btn.innerHTML=='Add To Do'){
    console.log("log");
let prod={
        Name:input1.value,
        Category:input2.value
    }
    if (input1.value!='' && input2.value!='') {

      arr.push(prod);
    }
  
    else{
      error.innerHTML="All Inputs Are Required"
    }
    
   
   
   
    
       mytest()
localStorage.setItem("data",JSON.stringify(arr))
    console.log(arr[0]);
    display()
    
  }
  else if('Update'){
   
    xupdate(x)
    mytest()
  }

})

var myindex;
function display(){
    let box=``;
    for(let i=0;i<arr.length;i++){
      
        myindex=i;
         box+=`
         <div class="card border border-5 border-dark my-3">
         <div  class=" my-2 d-flex justify-content-between ">
             <div class="card-body  my-3">
            
             <p class="card-title">product Name : ${arr[i].Name}</p>
             <p class="card-text">product Categ : ${arr[i].Category}</p>
             
           </div>
           <div class=" py-5">
         
             <i class=" fas fa-trash-can text-danger px-3" style="cursor:pointer" onclick="mydelete(${i})"></i>
             <i class="fas fa-pen text-danger px-3" style="cursor:pointer" onclick="Update(${i})"></i>
           </div>
             </div>
       </div>
        
         `;
   
    }
    card.innerHTML=box;
   
}
function empty(){
    input1.value=``
    input2.value=``
}
function mydelete(index){

arr.splice(index,1);

localStorage.setItem("data", JSON.stringify(arr));
console.log(arr);
display()

}

document.addEventListener('keydown', function(event) {
  if (event.keyCode === 13) {
      // Call function to handle "Enter" key press event
      if(input1.value!='' && input2.value!=''){
        handleEnterKeyPress();
        display()
      }
     
  }
});

function handleEnterKeyPress() {
  // Add code to handle "Enter" key press event here
  if(btn.innerHTML=='Add To Do'){
    console.log("log");
let prod={
        Name:input1.value,
        Category:input2.value
    }
      arr.push(prod);
     
localStorage.setItem("data",JSON.stringify(arr))
    console.log(arr[0]);
    display()
    empty()
  }
  else if('Update'){
   
    xupdate(x)

  }
  

}
let x;
function Update(index){
input1.value=arr[index].Name;
input2.value=arr[index].Category;
btn.innerHTML='Update';
x=index;
btn.style.backgroundColor="rgb(164, 164, 45)"
btn.style.border="black";
}

function xupdate(x) {
  console.log(x);
  arr[x].Name=input1.value;
  arr[x].Category=input2.value;
  localStorage.setItem("data", JSON.stringify(arr));

  btn.innerHTML='Add To Do';
  btn.style.backgroundColor="#0275d8"

display()
empty()
}
function test1(){
  const nameRegex = /^[a-zA-Z]+$/;
if(nameRegex.test(input1)&& nameRegex.test(input2)){
  return true;
}
if (input1.value=='' && input2.value!='') {
  error.innerHTML="All Inputs Are Required"
return false

} 

}
function mytest(){
  
if (input1.value=='' && input2.value!='') {
  error.innerHTML="All Inputs Are Required"


} 
if (input1.value=='' && input2.value=='') {
  error.innerHTML="All Inputs Are Required"


} 
if (input1.value!='' && input2.value=='') {
  error.innerHTML="All Inputs Are Required"
  


}
if (input1.value!='' && input2.value!='') {
  error.innerHTML=""
  empty()



}
}
let mySearch=[];
var xNAME=``;
var box=``;

search.addEventListener("input",()=>{
  if(search.value==``){
    display()
  }
  else{
    for(let i=0;i<arr.length;i++){
      xNAME=arr[i].Name;
      if(xNAME.includes(search.value)){
        console.log("true");
        box=`
        <div class="card border border-5 border-dark my-3">
        <div  class=" my-2 d-flex justify-content-between ">
            <div class="card-body  my-3">
           
            <p class="card-title">product Name : ${arr[i].Name}</p>
            <p class="card-text">product Categ : ${arr[i].Category}</p>
            
          </div>
          <div class=" py-5">
        
            
          </div>
            </div>
      </div>
       
        `;
        
      }
      card.innerHTML=box;
  
    }
  }
 
})
