const hourspan = document.querySelector(".hour");
 
const minspan =document.querySelector(".min");

const secspan =document.querySelector(".sec");

const amspan =document.querySelector(".am");
const pmspan =document.querySelector(".pm");

setInterval(() => {
    
   const time = new Date();
  const hours = time.getHours();
  const mins = time.getMinutes();
  const secs = time.getSeconds();
 
  if(hours >11){
    pmspan.className="pm active";
    amspan.className= "am" ;
 if(hours > 12){
    hourspan.innerText =(hours -12);
  }else{
    hourspan.innerText =hours;
  }  
 }else{
    pmspan.className="pm";
    amspan.className="am active";
 if(hours == 0){
        hourspan.innerText =(hours + 12);
      }else{
        hourspan.innerText =hours;
      }
 }

 minspan.innerText =mins;
 secspan.innerText =secs;
 console.log(hours,mins,secs);
}, 1000);