console.log("Завдання 5");

class Car {
    getSpecs(car) {
        console.log(`maxSpeed: ${this.maxSpeed}; speed: ${this.speed}; isOn: ${this.isOn}; distance: ${this.distance}; price: ${this.#price}`);
    }

    #price

    constructor({ maxSpeed = 0, price = 0 } = {}) {
        this.maxSpeed = maxSpeed;
        this.speed = 0;
        this.isOn = false;
        this.distance = 0;
        this.#price = price;
    }


    get price() {
        console.log(`Car price :>>> ${this.#price}`);
    }

    set price(newPrice) {
        this.#price = newPrice;
        console.log("New car price :>>>", this.#price);
    }


    turnOn = () => {
        this.isOn = true;
        console.log("Car is turned on");
    }

    turnOff = () => {
        this.isOn = false;
        this.speed = 0;
        console.log("Car is turned off");
    }


    accelerate = (value) => {
        if (this.speed + value < this.maxSpeed) {
            this.speed += value;
            console.log("New speed :>>>", this.speed);
        }
    }

    decelerate = (value) => {
        if (this.speed - value > 0) {
            this.speed -= value;
            console.log("New speed :>>>", this.speed);
        }
    }


    drive = (hours) => {
        if (this.isOn === true) {
            this.distance = this.speed * hours;
            console.log(`Mileage is now ${this.distance}`);
        } else {
            console.log("The car is not turned on");
        }
    }
}

const tesla = new Car({ maxSpeed: 350, price: 99999 })

tesla.price;

tesla.price = 99998;

tesla.getSpecs()

tesla.turnOn()

tesla.accelerate(300)

tesla.decelerate(140)

tesla.turnOff()