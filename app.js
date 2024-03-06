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
    totalmarks.innerHTML = obtainedMarks;

    if(percentage.innerHTML >=80) {
        console.log(grade.innerHTML = `A+` );
    }else if(percentage.innerHTML >=70){
        console.log(grade.innerHTML = `A`);
    }else if(percentage.innerHTML >=60){
        console.log(grade.innerHTML = `B`);
    }else if(percentage.innerHTML >=50){
        console.log(grade.innerHTML = `C`);
    }else{
        console.log(grade.innerHTML = `FAIL`);
    }
    
}

