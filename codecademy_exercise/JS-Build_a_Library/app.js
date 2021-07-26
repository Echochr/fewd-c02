class Media {
    constructor(title) {
      this._title = title
      this._isCheckedOut = false
      this._ratings = []
    }
  
    get title() {
      return this._title
    }
    get isCheckedOut() {
      return this._isCheckedOut
    }
    get ratings() {
      return this._ratings
    }
  
    set isCheckedOut(isCheckedOutIn) {
      this._isCheckedOut = isCheckedOutIn
    }
  
    toggleCheckOutStatus() {
      this._isCheckedOut = !this._isCheckedOut
    }
  
    getAverageRating() {
      const ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0)
      const avgRating = ratingsSum / this._ratings.length
      return avgRating
    }
  
    addRating(rating) {
      if (typeof rating === 'number' && (rating >=1 && rating <= 5)) {
      this._ratings.push(rating)
      } else {
        console.log('Rating input invalid. Must be a number between 1-5.')
      }
    }
  }
  
  // Book class
  class Book extends Media {
    constructor(author, title, pages) {
      super(title)
      this._author = author
      this._pages = pages
    }
  
    get author() {
      return this._author
    }
    get pages() {
      return this._pages
    }
  }
  
  // Movie class
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title)
      this._director = director
      this._runTime = runTime
    }
  
    get director() {
      return this._director
    }
    get runTime() {
      return this._runTime
    }
  }
  
  // CD class
  class CD extends Media {
    constructor(artist, title) {
      super(title)
      this._artist = artist
      this._songs = []
    }
  
    get artist() {
      return this._artist
    }
    get songs() {
      return this._songs
    }
  
    addSongs(song) {
      this._songs.push(song)
    }
  
    shuffle() {
      this._songs.sort(() => Math.random() - 0.5)
    }
  }
  
  // Book instance
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)
  historyOfEverything.toggleCheckOutStatus()
  console.log(historyOfEverything.isCheckedOut)
  historyOfEverything.addRating(4)
  historyOfEverything.addRating(3)
  historyOfEverything.addRating(4)
  console.log(historyOfEverything.getAverageRating())
  
  // Movie instance
  const speed = new Movie('Jan de Bont', 'Speed', 116)
  speed.toggleCheckOutStatus()
  console.log(speed.isCheckedOut)
  speed.addRating(1)
  speed.addRating(1)
  speed.addRating(5)
  console.log(speed.getAverageRating())
  
  
  // CD instance
  const undertale = new CD('Toby Fox', 'Undertale Soundtrack')
  undertale.toggleCheckOutStatus()
  console.log(undertale.isCheckedOut)
  undertale.addRating(5)
  undertale.addRating(4)
  undertale.addRating(5)
  console.log(undertale.getAverageRating())
  undertale.addSongs('Once Upon a Time')
  undertale.addSongs('Your Best Friend')
  undertale.addSongs('Spider Dance')
  undertale.addSongs('Death By Glamour')
  undertale.addSongs('SAVE The World')
  undertale.addSongs('Your Best Nightmare')
  undertale.addSongs('MEGALOVANIA')
  undertale.shuffle()
  console.log(undertale.songs)