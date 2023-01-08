let score = document.getElementById('score')
let slotItemArr = document.getElementsByClassName('slot-item')
let balance = document.getElementById('balance')
let pushBtn = document.getElementById('pushBtn')
let pullBtn = document.getElementById('pullBtn')
console.log(score)
console.log(slotItemArr)
console.log(balance)
console.log(pushBtn)

const slotItems = ['$', '*', '#']
let balanceValue = 0  
let scoreAmount = 0 


function randomSlotItem(max) {
    return Math.floor(Math.random() * max)
}

pullBtn.addEventListener('click', (event) => {
    if(balanceValue >= 50) {
        balanceValue -= 50 
        balance.innerHTML = balanceValue
        let randomItem1 = slotItems[randomSlotItem(3)]
        let randomItem2 = slotItems[randomSlotItem(3)]
        let randomItem3 = slotItems[randomSlotItem(3)]
        slotItemArr[0].innerHTML = randomItem1
        slotItemArr[1].innerHTML = randomItem2
        slotItemArr[2].innerHTML = randomItem3
        console.log(balanceValue)
        if(randomItem1 === randomItem2 && randomItem1 === randomItem3) {
            alert('Jackpot!!!!')
            scoreAmount += 10
            score.innerHTML = scoreAmount
        }
    }
    
})

pushBtn.addEventListener('click', (event) => {
    balanceInput = parseInt(document.getElementById('balanceInput').value)
    balanceValue = balanceInput
    balance.innerHTML = balanceValue
    console.log(balance.innerHTML)
})

