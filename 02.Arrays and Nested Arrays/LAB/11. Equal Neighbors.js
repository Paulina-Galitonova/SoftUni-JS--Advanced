function equalNeighborPairs(matrix){
    let equalPairsCount = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            // Проверка за съсед в същия ред
            if (col < matrix[row].length - 1 && matrix[row][col] === matrix[row][col + 1]) {
                equalPairsCount++;
            }

            // Проверка за съсед в същата колона
            if (row < matrix.length - 1 && matrix[row][col] === matrix[row + 1][col]) {
                equalPairsCount++;
            }
        }
    }

    return equalPairsCount;
}
console.log(equalNeighborPairs(
[['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
));