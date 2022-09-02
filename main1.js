function calculateArea (){
    let baseValue = prompt('Enter the base of a triangle: ');
    let heightValue = prompt('Enter the height of a triangle: ');
    const areaValue = (baseValue * heightValue) / 2;
    console.log(`The are of the triangle is ${areaValue}`);
}

calculateArea();