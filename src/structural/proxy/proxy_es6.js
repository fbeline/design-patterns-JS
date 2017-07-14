class Driver {
    constructor(age) {
        this.age = age;
    }
}

class Car {
    constructor(driver) {
        this.driver = driver;
    }

    drive() {
    }
}

class RealCar extends Car {
    drive() {
        return "driving";
    }
}

class CarProxy extends Car {
    constructor(driver) {
        super(driver);
        this.realCar = new RealCar();
    }

    drive() {
        return this.driver.age < 18 ? "too young to drive" : this.realCar.drive();
    }
}

module.exports = [CarProxy, Driver];
