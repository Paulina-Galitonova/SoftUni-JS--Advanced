function extractIncreasingSubsequence(array){

    return array.reduce((result, current) => {
        if (result.length === 0 || current >= result[result.length - 1]) {
            result.push(current);
        }
        return result;
    }, []);
}

// function extractIncreasingSubsequence(array) {
//     let result = [];

//     for (let i = 0; i < array.length; i++) {
//         let current = array[i];

//         if (result.length === 0 || current >= result[result.length - 1]) {
//             result.push(current);
//         }
//     }

//     return result;
// }
console.log(extractIncreasingSubsequence([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ));