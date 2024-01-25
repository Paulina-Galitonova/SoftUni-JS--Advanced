function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   

   function onClick() {

      let input = document.getElementById("searchField").value;
      input = input.toLowerCase();
      let rows = Array.from(document.getElementsByTagName("tr"));

      for (let i = 2; i < rows.length; i++) {
         let currentRow = rows[i];
         let cells = currentRow.getElementsByTagName("td");

         for (let j = 0; j < cells.length; j++) {
            let currentCellText = cells[j].textContent.toLowerCase();

            if (currentCellText.includes(input)) {
              currentRow.classList.add("select");
               break
            } else{
               currentRow.classList.remove("select");
            }


         }
      }

      document.getElementById("searchField").value = "";

   }


   
      
   
}