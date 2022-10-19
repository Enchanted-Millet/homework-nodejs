const suit = ['Spades', 'Hearts', 'Diamonds', 'Clubs']
const num = []

for (let i = 0; i < 13; i++) { 
    num[i] = i + 1 
} 

const shuffle = (arr) => {
    let i = arr.length; 
    while (i) { 
        let j = Math.floor(Math.random() * i--); 
        [arr[j], arr[i]] = [arr[i], arr[j]]; 
    }
    return arr
}

const initializeCards = () => {
    let sortedCards = [[], [], [], []]
    for (let i = 0; i < 4; i++) { 
        for (let j = 0; j < 13; j++) { 
            sortedCards[i][j] = `${suit[i]} - ${num[j]}`
        }
    }
    return sortedCards

}

const randomEach = () => {
    let randomCards1 = [[], [], [], []]
    let initial = initializeCards()
    for (let i = 0; i < 4; i++) { 
        randomCards1[i] = shuffle(initial[i])
    }
    return randomCards1
}

const randomAcross = () => {
    let randomCards2 = [[], [], [], []]
    let initial = initializeCards()
    let temp = []
    let m = 0, n = 0
    for (let i = 0; i < 4; i++) { 
        for (let j = 0; j < 13; j++) { 
                temp[m] = initial[i][j]
                m++
        }
    }
    temp = shuffle(temp)
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 13; j++) {
            randomCards2[i][j] = temp[n]
            n++
        }
    }
    return randomCards2
}

const printCards = () => {
    let initialCard = initializeCards()
    console.log(`The 1st print out:\n${initialCard[0].toString()}\n${initialCard[1].toString()}\n${initialCard[2].toString()}\n${initialCard[3].toString()}\n`)
    let randomCard1 = randomEach()
    console.log(`The 2nd print out:\n${randomCard1[0].toString()}\n${randomCard1[1].toString()}\n${randomCard1[2].toString()}\n${randomCard1[3].toString()}\n`)
    let randomCard2 = randomAcross()
    console.log(`The 3rd print out:\n${randomCard2[0].toString()}\n${randomCard2[1].toString()}\n${randomCard2[2].toString()}\n${randomCard2[3].toString()}\n`)
}

printCards()