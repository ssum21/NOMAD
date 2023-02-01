const btwNum=document.querySelector(".gameForm");
let range = document.querySelector(".rangeInput");
let maxNum = document.querySelector(".maxNum");
let inputNum = document.querySelector(".inputNum");
let hiddenChose = document.querySelector(".hiddenChose");
let hiddenResult = document.querySelector(".hiddenResult");

function result(temp){
    temp.preventDefault();
    const number=inputNum.value;
    const maxNumber=range.value;
    const randomNum=Math.ceil(Math.random() * maxNumber);

    hiddenChose.innertext=`You chose: ${number}, the machine chose ${randomNum}`;
    if (number === randomNum){ 
      hiddenResult.innerText=`You won!`;
    }
  else if(number > randomNum || number < 0){
      hiddenResult.innerText =`This is wrong number.`;
  }
  else{
      hiddenResult.innerText=`You lose!`;
  }
}

range.addEventListener("submit", result);