function magicMatrices(matrix){

    // Calculate the sum of the first row
    let sumFirstRow = 0;
    for (let i = 0; i < matrix[0].length; i++) {
        sumFirstRow += matrix[0][i];
    }

    // Check if the sums of all rows are equal to the sum of the first row
    for (let row = 1; row < matrix.length; row++) {
        let currentRowSum = 0;
        for (let col = 0; col < matrix[row].length; col++) {
            currentRowSum += matrix[row][col];
        }
        if (currentRowSum !== sumFirstRow) {
            return false;
        }
    }

    // Check if the sums of all columns are equal to the sum of the first row
    for (let col = 0; col < matrix[0].length; col++) {
        let currentColSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            currentColSum += matrix[row][col];
        }
        if (currentColSum !== sumFirstRow) {
            return false;
        }
    }

    // If all checks pass, the matrix is magical
    return true;
}


magicMatrices([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
   );