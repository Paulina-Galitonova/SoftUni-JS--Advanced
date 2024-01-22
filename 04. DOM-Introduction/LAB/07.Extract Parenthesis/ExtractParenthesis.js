function extract(content) {
let elements=document.getElementById("content");
let text=elements.textContent;
let result=[];
let regex=/\(([^)]+)\)/gm;


let match;
while ((match = regex.exec(text)) !== null) {
    result.push(match[1]);
}

return result.join("; ");



}