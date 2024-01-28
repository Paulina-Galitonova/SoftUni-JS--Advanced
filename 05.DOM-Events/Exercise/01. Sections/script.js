function create(words) {

   
   let resultField=document.getElementById("content")

   words.forEach(word =>{
     const newDiv=document.createElement("div");
     const newP=document.createElement("p");
     newP.textContent=word;
     newP.style="display:none"
     newDiv.appendChild(newP)
     newDiv.addEventListener("click",display);
     resultField.appendChild(newDiv);
   })




   function display(event){
      const divSection=event.currentTarget;
      const paragraph=divSection.childNodes[0];
      paragraph.style="display:block"
   }
}