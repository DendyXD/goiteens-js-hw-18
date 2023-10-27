console.log("Завдання 2");

class User {
    constructor({ name, age, followers } = {}) {
        this.name = name,
        this.age = age,
        this.followers = followers
    }

    getInfo = () => {
        console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
    }
}

const mango = new User({
  name: 'Mango',
  age: 90,
  followers: -15,
});

console.log("Mango :>>>", mango); 

mango.getInfo()