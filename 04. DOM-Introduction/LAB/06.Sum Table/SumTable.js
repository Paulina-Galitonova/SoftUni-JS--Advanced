function sumTable() {

    let elements = document.getElementsByTagName("td");
    let arr = Array.from(elements);
    let sum = 0;


    for (let i = 1; i <= arr.length - 2; i += 2) {
        let price = Number(arr[i].textContent);
        sum+=price;

    }

    let sumCell = document.getElementById("sum");
    sumCell.textContent=sum;

}