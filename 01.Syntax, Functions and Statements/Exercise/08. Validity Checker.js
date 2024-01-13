function calculateDistance(x1, y1, x2, y2) {
    // Function for calculating the distance between two points
    function isDistanceValid(x1, y1, x2, y2) {
        // Use the formula for distance between points in a Cartesian coordinate system
        const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        // Check if the distance is an integer
        return Number.isInteger(distance);
    }

    // Function for printing the validity of the distance
    function printValidity(point1, point2) {
        const isValid = isDistanceValid(...point1, ...point2);
        console.log(`{${point1.join(', ')}} to {${point2.join(', ')}} is ${isValid ? 'valid' : 'invalid'}`);
    }

    // Print the validity for the distance between {x1, y1} and {0, 0}
    printValidity([x1, y1], [0, 0]);
    // Print the validity for the distance between {x2, y2} and {0, 0}
    printValidity([x2, y2], [0, 0]);
    // Print the validity for the distance between {x1, y1} and {x2, y2}
    printValidity([x1, y1], [x2, y2]);
}

// Example usage of the function with specific coordinate values
calculateDistance(3, 0, 0, 4);
