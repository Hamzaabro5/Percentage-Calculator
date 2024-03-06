var chemMarks = document.querySelector(`.Chem-mark`);
var phyMarks = document.querySelector(`.Phy-mark`);
var mathMarks = document.querySelector(`.Math-mark`);
var comMarks = document.querySelector(`.Com-mark`);
var totalmarks = document.querySelector(`#totalmarks`);
var percentage = document.querySelector(`#Percentage`);
var grade = document.querySelector(`#grade`);


function showResult() {
    console.log(chemMarks.value);
    console.log(phyMarks.value);
    console.log(mathMarks.value);
    console.log(comMarks.value);
    
    var obtainedMarks = (+chemMarks.value + +phyMarks.value + +mathMarks.value + +comMarks.value)
    console.log(obtainedMarks + ` out of 400`);

    totalmarks.innerHTML = obtainedMarks;
    
    var studentpercentage = obtainedMarks/400 * 100
    percentage.innerHTML = studentpercentage;
    // console.log(`You got ` + studentpercentage `%`);
    totalmarks.innerHTML = obtainedMarks;
    
}

