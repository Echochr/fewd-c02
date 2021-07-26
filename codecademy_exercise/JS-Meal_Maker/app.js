const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers() {
      return this._courses.appetizers
    },
    set appetizers(appetizersIn) {
  
    },
    get mains() {
      return this._courses.mains
    },
    set mains(mainsIn) {
  
    },
    get desserts() {
      return this._courses.desserts
    },
    set desserts(dessertsIn) {
  
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      }
      this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse: function (courseName) {
      const dishes = this._courses[courseName]
      let idx = Math.floor(Math.random() * dishes.length)
      return this._courses[courseName][idx]
    },
    generateRandomMeal: function() {
      const appetizer = this.getRandomDishFromCourse('appetizers')
      const main = this.getRandomDishFromCourse('mains')
      const dessert = this.getRandomDishFromCourse('desserts')
      const totalPrice = appetizer.price + main.price + dessert.price
      return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. Total price is ${totalPrice}`
    }
  }
  
  menu.addDishToCourse('appetizers', 'edamame', 3)
  menu.addDishToCourse('appetizers', 'tofu', 2)
  menu.addDishToCourse('appetizers', 'gyoza', 4)
  menu.addDishToCourse('appetizers', 'steamed egg', 2)
  menu.addDishToCourse('appetizers', 'fish ball', 2)
  menu.addDishToCourse('mains', 'ramen', 10)
  menu.addDishToCourse('mains', 'fried rice', 8)
  menu.addDishToCourse('mains', 'sushi', 9)
  menu.addDishToCourse('mains', 'okonomiyaki', 12)
  menu.addDishToCourse('mains', 'steak', 20)
  menu.addDishToCourse('desserts', 'ice cream', 3)
  menu.addDishToCourse('desserts', 'pudding', 2)
  menu.addDishToCourse('desserts', 'cake', 4)
  menu.addDishToCourse('desserts', 'banana boat', 6)
  
  const meal = menu.generateRandomMeal()
  console.log(meal)