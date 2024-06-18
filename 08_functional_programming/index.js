function calculateArea(radius) {
    return Math.PI * radius * radius; 
}

function calculateCircumference(radius) {
    return 2 * Math.PI * radius;
}

function calculateDiameter(radius) {
    return 2 * radius;
}

const radiusArray = [3, 1, 2, 4];

function performOperations(operations, radiusArray) {
    let result = [];
    operations.forEach(operation => {
        let operationResult = [];
        radiusArray.forEach(radius => {
            operationResult.push(operation(radius));
        });
        result.push(operationResult);
    });
    return result;
}

const operationList = [calculateArea, calculateCircumference, calculateDiameter];

const finalResult = performOperations(operationList, radiusArray);

console.log(finalResult);