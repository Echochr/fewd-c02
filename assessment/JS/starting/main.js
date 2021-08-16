const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const height = prompt('height? ')
const width = prompt('width? ')
const percentage = prompt('percentage? (0-100) ')

class Field {
    constructor(field) {
        this.field = field
        this.parsedHeight = parseInt(height)
        this.parsedWidth = parseInt(width)
        this.randomY = 0
        this.randomX = 0
    }

    checkValidInput() {
        if (percentage < 0 || percentage > 100 || typeof this.parsedHeight !== 'number' || typeof this.parsedWidth !== 'number') {
            console.log("Invalid height/width/percentage input, please try again")
        } else return true
    }

    generateRandomCoord(height, width) {
        const numY = Math.floor(Math.random() * Math.floor(height))
        const numX = Math.floor(Math.random() * Math.floor(width))
        this.randomY = numY
        this.randomX = numX
    }

    generateGameField() {
        const gameField = []

        for (let i=0; i<height; i++) {
            const fieldRow = []
            for (let j=0; j<width; j++) {
                let isHole
                let randomNum = Math.floor(Math.random() * 100)
                if (randomNum >= 0 && randomNum <= percentage) isHole = true 
                else isHole = false

                isHole? fieldRow.push(hole):fieldRow.push(fieldCharacter)
            }
            gameField.push(fieldRow)
        }
        this.field = gameField
    }

    generateStartLocation() {
        this.field[0][0] = pathCharacter
    }

    generateHatLocation() {
        this.generateRandomCoord(this.parsedHeight, this.parsedWidth)
        let yHat = this.randomY
        let xHat = this.randomX
        if (yHat == 0 && xHat == 0) {
            this.generateRandomCoord(this.parsedHeight, this.parsedWidth)
            yHat = this.randomY
            xHat = this.randomX
        }
        this.field[yHat][xHat] = hat
    }

    printType() {
        console.log(height)
        console.log(typeof height)
        console.log(width)
        console.log(typeof width)
    }

    printField() {
        for (const row of this.field) {
            console.log(row.join(''))
        }
    }

    printInstructions() {
        console.log("=========================")
        console.log("Instructions: Move up - W, Move down - S, Move left - A, Move right - D")
        console.log("Restart game - RE")
        console.log("=========================")
    }

    playGame() {
        let yCoord = 0
        let xCoord = 0
        let isOutOfBound = false
        let isGameOver = false
        this.generateGameField()
        this.generateHatLocation()
        this.generateStartLocation()
        this.printInstructions()
        this.printField()

        while (this.field[yCoord][xCoord] !== hat) {
            let nextMove = prompt('next move? ')
            switch (nextMove.toLowerCase()) {
                case 'w':
                    yCoord -= 1
                    break
                case 's':
                    yCoord += 1
                    break
                case 'a':
                    xCoord -= 1
                    break
                case 'd':
                    xCoord += 1
                    break
                case 're':
                    return console.log('Restart Game')
            }
            if (yCoord < 0 || yCoord > height || xCoord < 0 || xCoord > width) {
                console.log("Oh no, you fell out of the boundary. Game over.")
                isOutOfBound = true
                isGameOver = true
                break
            }
            if (this.field[yCoord][xCoord] === hole) {
                console.log("OHHH NOOO! You fell into the hole! Game over!")
                isGameOver = true
                break
            }
            if (this.field[yCoord][xCoord] === hat) {
                console.log("Congratulations! You found the hat!")
                isGameOver = true
                break
            }
            if (!isOutOfBound) {
                this.field[yCoord][xCoord] = pathCharacter
            }
            console.clear()
            this.printInstructions()
            this.printField()
        }
    }
}

const hatGame = new Field
if (hatGame.checkValidInput()) hatGame.playGame()