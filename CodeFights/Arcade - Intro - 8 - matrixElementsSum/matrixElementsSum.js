function matrixElementsSum(matrix) {
    var matrixEdited = matrix;
    console.log(matrixEdited);
    var total = 0;

    //Get each array
    for (let i = 0; i < matrixEdited.length; i++) {
        //iterate through each array
        for (let e = 0; e < matrixEdited[i].length; e++) {
            //Check if array object equals zero
            if (matrixEdited[i][e] != 0) {
                //If it does increase returned total.
                total += matrixEdited[i][e];
            } else if (matrixEdited[i][e] === 0) {
                //Iterate through each position "below" and set it to 0
                for (let r = i; r < matrixEdited.length; r++) {
                    matrixEdited[r][e] = 0;
                }
            }
        }
    }
    console.log(matrixEdited);
    return total;
}