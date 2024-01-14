function evenPositionElements(input) {

    // let str = "";


    // for (let i = 0; i < input.length; i += 2) {
    //     str += input[i] + " ";
    // }

    // console.log(str);
    console.log(input.filter((_, i) => i % 2 === 0).join(' '));


}

evenPositionElements(['5', '10']);