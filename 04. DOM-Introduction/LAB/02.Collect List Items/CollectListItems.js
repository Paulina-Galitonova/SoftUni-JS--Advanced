function extractText() {
    const list=document.getElementById("items");

    let result=[];

    const items=Array.from(list.children);

  

    for(let item of items){
        result.push(item.textContent);

    }

    let textArea=document.getElementById("result");

    textArea.value = result.join("\n");
}