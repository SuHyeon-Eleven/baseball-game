const readlineSync = require('readline-sync');

function makeComputerNumber(){
    let computerNumber = []
    let i = 0
    while (i < 3){
        let temp_num = Math.floor(Math.random() * 9) + 1
        if (! sameCheck(temp_num)){
            computerNumber.push(temp_num)
            i++
        }
    }
    function sameCheck(temp_num){
        return computerNumber.find((x) => (x === temp_num))
    }
    return computerNumber
}
function userInput(){
    let flag = true
    let input
    while(flag == true){
        input = readlineSync.question("# 숫자를 입력해주세요 : ");
        console.log(input)
        input = input.split('').map(element => parseInt(element)); // 1 2 3 4
        if(input.length > 3 || input.length == 0 || [...new Set(input)].length < 3) {
            console.log("다시 입력해 주세요")
            flag = true
            continue
        }
        console.log("올바른 숫자형식입니다",input)
        flag = false
    }
}
function solution() {
    computerNumber = makeComputerNumber()
    console.log(computerNumber)
    userInput()

}
solution()
