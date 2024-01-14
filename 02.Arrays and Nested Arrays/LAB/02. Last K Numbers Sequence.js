function lastKSequence(n, k) {
    let sequence = [1];



    for (let i = 1; i < n; i++) {
        let nextElement = 0;
        let startIndex = Math.max(0, i - k);

        for(let j=startIndex;j<i;j++){
            nextElement+= sequence[j];
        }

        sequence.push(nextElement);

    }


    return sequence;






}
 console.log(lastKSequence(6, 3));