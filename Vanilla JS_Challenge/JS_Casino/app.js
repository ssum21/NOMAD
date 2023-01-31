const btwNum=document.querySelector(".gameForm")
const rangeInput = document.querySelector(".rangeInput")
const guessNum = document.querySelector(".guessNum")
const inputNum = document.querySelector(".inputNum")

function result(temp){
    temp.preventDefault();
    const number=inputNum.value;
    const maxNumber=rangeInput.value;
    const randomNum=Math.ceil(Math.random() * maxNumber);

    result(number, randomNum);

    hiddenChose.innertext
}
