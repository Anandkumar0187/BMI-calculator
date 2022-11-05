window.onload = ()=>{
    let calculate = document.querySelector('#btn');
    calculate.addEventListener("click",calculateBMI);
    let clear = document.querySelector('#clear');
    clear.addEventListener("click",clearFields);
}

let clearFields = ()=>{
    window.location.reload()
}
let calculateBMI = () =>{
    let age = parseInt(document.querySelector('#age').value);
    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);
    let result = document.querySelector('#result');

    let bmi = (weight / ((height * height)/1000)).toFixed(2);
    if(age < 2 || age > 120){
        result.innerHTML = `Please provide an age between 2 and 120`;
    }
    else if(bmi < 16){
        result.innerHTML = `<div style="background-color : green; color : white">Result</div> <br> BMI =${bmi} kg/m<sup>2</sup>(Severe Thinness)`;
    }else if(bmi >= 16 && bmi < 17){
        result.innerHTML = `<div style="background-color : green; color : white">Result</div> <br> BMI =${bmi} kg/m<sup>2</sup>(Moderate Thinness)`;
    }else if(bmi >= 17 && bmi < 18.5){
        result.innerHTML = `<div style="background-color : green; color : white">Result</div> <br> BMI =${bmi} kg/m<sup>2</sup>(Mild Thinness)`;
    }else if(bmi >= 18.5 && bmi < 25){
        result.innerHTML = `<div style="background-color : green; color : white">Result</div> <br> BMI =${bmi} kg/m<sup>2</sup>(Normal)`;
    }else if(bmi >= 25 && bmi < 30){
        result.innerHTML = `<div style="background-color : green; color : white">Result</div> <br> BMI =${bmi} kg/m<sup>2</sup>(Overweight)`;
    }else if(bmi >= 30 && bmi < 35){
        result.innerHTML = `<div style="background-color : green; color : white">Result</div> <br> BMI =${bmi} kg/m<sup>2</sup>(Obese Class I)`;
    }else if(bmi >= 35 && bmi < 40){
        result.innerHTML = `<div style="background-color : green; color : white">Result</div> <br> BMI =${bmi} kg/m<sup>2</sup>(Obese Class II)`;
    }else if(bmi > 40){
        result.innerHTML = `<div style="background-color : green; color : white">Result</div> <br> BMI =${bmi} kg/m<sup>2</sup>(Obese Class III)`;
    }
}