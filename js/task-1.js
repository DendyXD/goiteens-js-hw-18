console.log("Завдання 1");

class Account {
    constructor([ login, email ] = []) {
        this.login = login,
        this.email = email
    }
        
    getInfo = () => { 
        console.log(`Login :> ${this.login}; Email :> ${this.email};`);
    }
    }

const mango = new Account([ "mango2004", "frukt@gmail.com" ])

console.log("Mango :>>>", mango);

mango.getInfo()