console.log("Завдання 3");

class Storage {
    constructor(items = []) {
        this.items = items
    }

    getItems = () => {
        console.log("Items :>>>", this.items);
    }

    addItem = (item) => {
        this.items.push(item)
        console.log("Added item :>>>", item);
    }

    removeItem = (itemToFind) => {
        if (this.items.some(item => item === itemToFind)) {
            this.items = this.items.filter(item => item !== itemToFind)
            console.log("Removed item :>>>", itemToFind);
        } else {
            console.log("There's no items with name: ", itemToFind);
        }
    }
}

const storage = new Storage([
    'Нанітоіди',
    'Пролонгер',
    'Залізні жупи',
    'Антигравітатор',
]);

storage.addItem("Різник Худоби 9000")

storage.getItems()

storage.removeItem('Залізні жупи')

storage.getItems()