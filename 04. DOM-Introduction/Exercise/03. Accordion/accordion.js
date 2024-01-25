function toggle() {
    let elementButton=document.getElementsByClassName("button")[0];
    let textEle=document.getElementById("extra");

    if(elementButton.textContent == "More"){
        textEle.style="display:block;";
        elementButton.textContent="Less"
    } else if(elementButton.textContent == "Less"){
        textEle.style="display:none;";
        elementButton.textContent="More"

    }
    




}