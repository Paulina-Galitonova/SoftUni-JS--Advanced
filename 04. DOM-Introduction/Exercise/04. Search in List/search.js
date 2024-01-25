function search() {

   let list=document.getElementById("towns");
   let searchText=document.getElementById("searchText").value;
   const towns=Array.from(list.children);
   let countMatch=0;


   for(let i=0;i<towns.length;i++){
      let currentTown=towns[i].textContent;
      if(currentTown.includes(searchText)){
         countMatch++;
         // let currentCity=list.children[i].textContent.style
         list.children[i].style="font-weight: bold;text-decoration: underline;"
      }
   }

let result=document.getElementById("result");
console.log(result);
result.textContent=`${countMatch} matches found`;

      
}
