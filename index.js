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

function solution() {
    computerNumber = makeComputerNumber()
    console.log(computerNumber)

}
solution()
