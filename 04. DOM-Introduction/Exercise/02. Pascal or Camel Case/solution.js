function solve(string, transform) {
  let text = document.getElementById("text").value;


  let operation = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");
  text = text.toLowerCase();

  if (operation == "Camel Case") {
    text = text.split(" ")
    for (let i = 1; i < text.length; i++) {
        let word=text[i]
        text[i]=word.charAt(0).toUpperCase()+word.slice(1);
    }
    let result2=text.join("")
    
    result.textContent = result2;
  } else if (operation == "Pascal Case") {
    text = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    result.textContent = text;
  } else {
    result.textContent = "Error!";

  }
}