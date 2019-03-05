class Car {
  drive() {
    return "driving";
  };
}

class CarProxy {
  constructor(driver) {
    this.driver = driver;
  }
  drive() {
    return (this.driver.age < 18) ? "too young to drive" : new Car().drive();
  };
}

class Driver {
  constructor(age) {
    this.age = age;
  }
}

export {
  Car,
  CarProxy,
  Driver
};
