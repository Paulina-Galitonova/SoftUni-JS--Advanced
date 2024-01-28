function solve() {

  let [inputtext, resultText] = document.querySelectorAll("textarea");
  let [generateButton, buyButton] = document.querySelectorAll("button");
  const tableBody = document.querySelector('.table tbody');

  generateButton.addEventListener("click", add);

  buyButton.addEventListener("click", result);


  function add(event) {

    let data = JSON.parse(inputtext.value);
    for (let info of data) {
      let name = info.name;
      let img = info.img;
      let price = Number(info.price);
      let decFactor = Number(info.decFactor);
      let newRow = document.createElement('tr');
      newRow.innerHTML = `
                <td><img src="${img}"></td>
                <td><p>${name}</p></td>
                <td><p>${price}</p></td>
                <td><p>${decFactor}</p></td>
                <td><input type="checkbox"/></td>
            `;
      tableBody.appendChild(newRow);

    }
  }


    function result(event) {
      
      let name=[];
      let price=0;
      let sumdefac=0;
      let selectRows=document.querySelectorAll("input[type='checkbox']:checked");

      for (let checkbox of selectRows){
        let[imgRef,nameRef,priceRef,decFactorRef]=Array.from(checkbox.parentElement.parentElement.children);
          let nameValue=nameRef.children[0].textContent;
          let priceValue=Number(priceRef.children[0].textContent);
          let decValue=Number(decFactorRef.children[0].textContent);

          name.push(nameValue);
          price+=priceValue;
          sumdefac+=decValue;
      }

      let result="Bought furniture: ";
      result +=name.join(", ");
      result +="\n";
      result += `Total price: ${price.toFixed(2)}\n`;
      result+=`Average decoration factor: ${sumdefac/name.length}`;


      resultText.value=result;
  }


}