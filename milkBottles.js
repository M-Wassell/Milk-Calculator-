

function getMilk(money, milkCost){
    console.log(`Hi, the number of bottles you can buy for £${money} is ` + bottleCount(money, milkCost)+ ` bottles`);
    return console.log(`Hello, your change is £` + change(money, milkCost));
}
//gt commit working??
function change(money, milkCost){

    var theChange = money % milkCost;
    return theChange;
}

function bottleCount(money, milkCost){
    var bottleNumber = Math.floor(money/milkCost)
    return bottleNumber;
}

getMilk(100, 40);


function bmiCalculator(weight, height) {
  let bmi = weight / Math.pow(height, 2);

  return bmi < 18.5 ? `Your BMI is ${bmi}, so you are underweight.`: bmi >= 18.5 && bmi <= 24.9 ? 
    `Your BMI is ${bmi}, so you have a normal weight.`: `Your BMI is ${bmi}, so you are overweight.`;
}

console.log(bmiCalculator(19, 2));