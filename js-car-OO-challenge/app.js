class Vehicle {
    constructor(model, make, year) {
        this.model = model;
        this.make = make;
        this.year = year;
    }
    honk() {
        return 'Beep.';
    }
    toString() {
        return `The vehicle is a ${year} ${model} ${make}.`;
    }
}

// add car class extension onto vehicle for 4 # of wheels

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

// add motorcycle extension on type of vehicle

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
}

// add garage class with capacity as a parameter. once its full, no more can be addedd

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
    }
}