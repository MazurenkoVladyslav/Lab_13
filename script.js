let sideA = parseFloat(prompt("Введіть довжину в (см) сторони A:"));
let sideB = parseFloat(prompt("Введіть довжину в (см) сторони B:"));
let sideC = parseFloat(prompt("Введіть довжину в (см) сторони C:"));


if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0) {
    console.log('Incorrect data');
} else {

    let semiPerimeter = (sideA + sideB + sideC) / 2;


    let area = Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC));


    area = area.toFixed(3);

    let isRightTriangle = sideA ** 2 + sideB ** 2 === sideC ** 2 ||
                        sideA ** 2 + sideC ** 2 === sideB ** 2 ||
                        sideB ** 2 + sideC ** 2 === sideA ** 2;


    console.log('Площа трикутника: ' + area + ' см');
    console.log('Чи є трикутник прямокутним: ' + isRightTriangle);
}
