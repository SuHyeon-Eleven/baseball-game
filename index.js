const readlineSync = require('readline-sync');

function makeComputerNumber() {
    let computerNumber = []
    let i = 0
    while (i < 3) {
        let temp_num = Math.floor(Math.random() * 9) + 1
        if (!sameCheck(temp_num)) {
            computerNumber.push(temp_num)
            i++
        }
    }
    function sameCheck(temp_num) {
        return computerNumber.find((x) => (x === temp_num))
    }
    return computerNumber
}
function userInput() {
    let flag = true
    let input
    while (flag == true) {
        input = readlineSync.question("# 숫자를 입력해주세요 : ");
        console.log(input)
        input = input.split('').map(element => parseInt(element)); // 1 2 3 4
        if (input.length > 3 || input.length == 0 || [...new Set(input)].length < 3) {
            console.log("다시 입력해 주세요")
            flag = true
            continue
        }
        console.log("올바른 숫자형식입니다", input)
        flag = false
    }
    return input
}


function compareValue(computerNumber, input) {
    let strike
    let ball

    strike = 0
    ball = 0
    strike = checkStrike(strike, computerNumber, input)
    console.log("strike", strike)
    ball = checkBall(strike, ball, computerNumber, input)
    console.log("ball", ball)
    if (strike == 3) {
        console.log("3개의 숫자를 모두 맞히셨습니다! 게임 종료")
    } else if (strike != 0 && ball != 0) {
        console.log(`${strike} 스트라이크 ${ball} 볼`)
    } else if (strike == 0 && ball != 0) {
        console.log(`${ball} 볼`)
    } else if (strike != 0 && ball == 0) {
        console.log(`${strike} 스트라이크`)
    } else {
        console.log('낫싱')
    }
    return strike
}

function checkStrike(strike, computerNumber, input) {
    for (let i = 0; i < 3; i++) {
        computerNumber[i] === input[i] ? strike++ : {}
    }
    return strike
}

function checkBall(strike, ball, computerNumber, input) {
    for (let i of input) {
        computerNumber.indexOf(i) != -1 ? ball++ : {}
    }
    return ball - strike
}

function startGame() {
    computerNumber = makeComputerNumber()
    console.log(computerNumber)
    strike = 0
    while(strike != 3){
        input = userInput()
        console.log(input)
        strike = compareValue(computerNumber, input)
    }

}
startGame()
