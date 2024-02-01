function sayHello() {
    console.log(`Hello, ${this.name}!`);
  }
  
  const person = { name: 'John' };
  const greetJohn = sayHello.bind(person);
  
  greetJohn(); // Създава нова функция, където this винаги ще сочи към обекта person
  