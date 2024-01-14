function addRemoveElements(array) {
    let num = 1;
    let result = [];

    array.forEach(command => {
        command === "add" ? result.push(num) : result.pop();
        num++;
    });

    console.log(result.length > 0 ? result.join("\n") : "Empty");
}

addRemoveElements(['remove', 'remove', 'remove']);
