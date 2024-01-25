function subtract() {

    let firstElement=document.getElementById("firstNumber");
    let firstNum=Number(firstElement.value);
    let secondElement=document.getElementById("secondNumber");
    let secondNum=Number(secondElement.value);
    let result=firstNum-secondNum;

    let resultElement=document.getElementById("result");
    resultElement.textContent=result;



}