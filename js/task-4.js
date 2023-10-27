console.log("Завдання 4");

class StringBuilder {
    #value

    constructor(str) {
        this._value = str;
    }
    get value() {
        console.log("Value :>>>", _value);
    }

    appender = (str) => {
        this._value = this._value + str;
        console.log("Value :>>>", this._value);
    }

    prepender = (str) => {
        this._value = str + this._value;
        console.log("Value :>>>", this._value);
    }

    pad = (str) => {
        this._value = str + this._value + str;
        console.log("Value :>>>", this._value);
    }
}

const builder = new StringBuilder("qwerty");

builder.appender("6")

builder.prepender("9")

builder.pad("_")