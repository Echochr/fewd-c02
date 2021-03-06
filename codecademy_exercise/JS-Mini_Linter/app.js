let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// step 1&2
const storyWords = story.split(' ')
console.log(`Original word count is ${storyWords.length}`)
// console.log(storyWords)


// step 3
const betterWords = storyWords.filter(word => !unnecessaryWords.includes(word)
)


// step 4
let numOverused = 0
for (let i=0; i < storyWords.length; i++) {
  if (overusedWords.includes(storyWords[i])) {
    numOverused++
  }
}

// step 5
let sentenceCounter = 0
// for (let i=0; i < betterWords.length; i++) {
//   let lastChar = betterWords[i][betterWords[i].length - 1]
//   if (lastChar === '.' || lastChar === '!') {
//     sentenceCounter++
//   }
// }
betterWords.forEach(word => {
  if (word[word.length-1] === '.' || word[word.length-1] === '!') {
    sentenceCounter++
  }
})

// step 6.3: log the number of times each overused word appears
const overusedWordCount = () => {
  overusedWords.forEach(overusedWord => {
    const num = betterWords.reduce((count, word) => {
      if (word.toLowerCase() === overusedWord) {
        return ++count
      } else return count
    }, 0)
    console.log(`"${overusedWord}" count is ${num}`)
  })
}

// step 8.1
const editedStory = []
const removeOverusedWords = () => {
  for (const word of betterWords) {
    let isOverusedWord = overusedWords.includes(word)
    if (!isOverusedWord) editedStory.push(word)
  }
}
removeOverusedWords()

// step 8.2
const findMostFrequentWord = () => {
  let mostFrequent = 1
  let count = 0
  let word
  for (let i=0; i<editedStory.length; i++) {
    for (let j=i; j<editedStory.length; j++) {
      if (editedStory[i] === editedStory[j]) count++;
      if (mostFrequent < count) {
        mostFrequent = count
        word = editedStory[i]
      }
    }
    count = 0
  }
  console.log(`The most frequent word is "${word}", it appeared ${mostFrequent} times."`)
}

console.log(`Better word count is ${betterWords.length}`)
console.log(`Sentence count is ${sentenceCounter}`)
console.log(`Overused word count is ${numOverused}`)
overusedWordCount()
console.log(`========================================`)
console.log(`Edited story word count is ${editedStory.length}`)
findMostFrequentWord()
console.log(`========================================`)
// console.log(betterWords.join(' '))
console.log(editedStory.join(' '))