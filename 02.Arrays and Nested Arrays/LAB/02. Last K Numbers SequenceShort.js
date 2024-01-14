function lastKSequence(n, k) {
    let sequence = [1];

    for (let i = 1; i < n; i++) {
        let startIndex = Math.max(0, i - k);
        let subarray = sequence.slice(startIndex, i);
        let nextElement = subarray.reduce((sum, num) => sum + num, 0);

        sequence.   push(nextElement);
    }

    return sequence;
}

console.log(lastKSequence(6, 3));