function sageNumbers(num) {

    let str = String(num);

    let isEqial = true;


    for (let i = 0; i < str.length; i++) {
        let currS = str[i];

        if (i < str.length - 1) {
            let next = str[i + 1];
            if (currS !== next) {
                isEqial = false;
                break;
            }

        } else {
            break
        }

    }

    let sum=0;

    for(let i=0;i<str.length;i++){
        let current=Number(str[i]);
        sum+=current;
    }

    console.log(isEqial);
    console.log(sum);


}

sageNumbers(1234);