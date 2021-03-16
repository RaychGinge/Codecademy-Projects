const menu = {
    _courses: {
      appetizers: [],
      mains:[],
      desserts:[],
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    get mains() {
      return this._courses.mains;
    },
    get dessserts() {
      return this._courses.desserts;
    },
    set appetizers(appetizers) {
      this._courses.appetizers = appetizers;
    },
    set desserts(mains) {
      this._courses.mains = mains;
    },
    set desserts(desserts) {
      this._courses.desserts = desserts;
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal() {
      const appetizers = this.getRandomDishFromCourse('appetizers');
      const mains = this.getRandomDishFromCourse('mains');
      const desserts = this.getRandomDishFromCourse('desserts');
      let totalPrice = appetizers.price + mains.price + desserts.price;
      return `Your meal is ${appetizers.name}, ${mains.name}, ${desserts.name}, The price is ${totalPrice}.`;
    }
  };
  
  menu.addDishToCourse('appetizers', 'Tomato Soup', 3.99);
  menu.addDishToCourse('appetizers', 'Smoked Salmon with Cream Cheese & Pineapple', 4.99);
  menu.addDishToCourse('appetizers', 'Stilton Stuffed Mushrooms', 4.59);
  menu.addDishToCourse('mains', 'Steak and Chips', 12.99);
  menu.addDishToCourse('mains', 'Hachee', 9.99);
  menu.addDishToCourse('mains', 'Thai Green Curry', 11.99);
  menu.addDishToCourse('desserts', 'Baked Vanilla Cheesecake', 5.99);
  menu.addDishToCourse('desserts', 'Chocolate Ice Cream', 4.99);
  menu.addDishToCourse('desserts', 'Sticky Toffee Pudding', 5.99);
  
  let meal = menu.generateRandomMeal();
  
  console.log(meal);
  
  