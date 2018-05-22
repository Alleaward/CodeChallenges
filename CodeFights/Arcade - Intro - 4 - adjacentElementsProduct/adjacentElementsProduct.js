function adjacentElementsProduct(inputArray) {
    var largest = inputArray[0] * inputArray[1];

    for (i = 0, a = 1, n = inputArray.length; i < n; i++, a++) {
        if (inputArray[i] * inputArray[a] > largest) {
            largest = inputArray[i] * inputArray[a];
        }
        console.log(largest, inputArray[i], inputArray[a]);
    }
    return (largest);
}
