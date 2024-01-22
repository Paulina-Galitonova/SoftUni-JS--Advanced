function editElement(el,match, replacer) {
    let text=el.textContent;
    let matcher = new RegExp(match, 'g');
    let edited=text.replace(matcher, replacer); 
    el.textContent=edited;   
}