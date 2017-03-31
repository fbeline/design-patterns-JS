# Design Patterns JS

**[Behavioral](#behavioral)**
* [Chain Of Resp](#chain-of-resp)
* [Command](#command)
* [Interpreter](#interpreter)
* [Iterator](#iterator)
* [Mediator](#mediator)
* [Memento](#memento)
* [Observer](#observer)
* [State](#state)
* [Strategy](#strategy)
* [Template](#template)
* [Visitor](#visitor)

**[Creational](#creational)**
* [Abstract Factory](#abstract-factory)
* [Builder](#builder)
* [Factory](#factory)
* [Prototype](#prototype)
* [Singleton](#singleton)

**[Structural](#structural)**
* [Adapter](#adapter)
* [Bridge](#bridge)
* [Composite](#composite)
* [Decorator](#decorator)
* [Facade](#facade)
* [Flyweight](#flyweight)
* [Proxy](#proxy)



## behavioral
### Chain Of Resp
##### chain-of-resp.js
```Javascript
function ShoppingCart() {
    this.products = [];

    this.addProduct = function(p) {
        this.products.push(p);
    };
}

function Discount() {
    this.calc = function(products) {
        var ndiscount = new NumberDiscount();
        var pdiscount = new PriceDiscount();
        var none = new NoneDiscount();

        ndiscount.setNext(pdiscount);
        pdiscount.setNext(none);

        return ndiscount.exec(products);
    };
}

function NumberDiscount() {
    this.next = null;
    this.setNext = function(fn) {
        this.next = fn;
    };

    this.exec = function(products) {
        var result = 0;
        if (products.length > 3)
            result = 0.05;

        return result + this.next.exec(products);
    };
}

function PriceDiscount() {
    this.next = null;
    this.setNext = function(fn) {
        this.next = fn;
    };
    this.exec = function(products) {
        var result = 0;
        var total = products.reduce(function(a, b) {
            return a + b;
        });

        if (total >= 500)
            result = 0.1;

        return result + this.next.exec(products);
    };
}

function NoneDiscount() {
    this.exec = function() {
        return 0;
    };
}

module.exports = [ShoppingCart, Discount];

```

### Command
##### command.js
```Javascript
function Cockpit(command) {
    this.command = command;
}
Cockpit.prototype.execute = function() {
    this.command.execute();
};

function Turbine() {
  this.speed = 0;
  this.state = false;
}

Turbine.prototype.on = function() {
    this.state = true;
    this.speed = 100;
};

Turbine.prototype.off = function() {
    this.speed = 0;
    this.state = false;
};

Turbine.prototype.speedDown = function() {
    if (!this.state) return;

    this.speed -= 100;
};

Turbine.prototype.speedUp = function() {
    if (!this.state) return;

    this.speed += 100;
};


function OnCommand(turbine) {
    this.turbine = turbine;
}
OnCommand.prototype.execute = function() {
    this.turbine.on();
};

function OffCommand(turbine) {
    this.turbine = turbine;
}
OffCommand.prototype.execute = function() {
    this.turbine.off();
};

function SpeedUpCommand(turbine) {
    this.turbine = turbine;
}
SpeedUpCommand.prototype.execute = function() {
    this.turbine.speedUp();
};

function SpeedDownCommand(turbine) {
    this.turbine = turbine;
}
SpeedDownCommand.prototype.execute = function() {
    this.turbine.speedDown();
};


module.exports = [Cockpit, Turbine, OnCommand, OffCommand, SpeedUpCommand, SpeedDownCommand];

```
##### command_es6.js
```Javascript
class Cockipt {
    constructor(command) {
        this.command = command;
    }
    execute() {
        this.command.execute();
    }
}

class Turbine {
    constructor() {
        this.state = false;
    }
    on() {
        this.state = true;
    }
    off() {
        this.state = false;
    }
}

class OnCommand {
    constructor(turbine) {
        this.turbine = turbine;
    }
    execute() {
        this.turbine.on();
    }
}

class OffCommand {
    constructor(turbine) {
        this.turbine = turbine;
    }
    execute() {
        this.turbine.off();
    }
}

module.exports = [Cockipt, Turbine, OnCommand, OffCommand];

```

### Interpreter
##### interpreter.js
```Javascript
function Sum(left, right) {
    this.left = left;
    this.right = right;
}

Sum.prototype.interpret = function() {
   return this.left.interpret() + this.right.interpret();
};

function Min(left, right) {
    this.left = left;
    this.right = right;
}

Min.prototype.interpret = function() {
   return this.left.interpret() - this.right.interpret();
};

function Num(val) {
    this.val = val;
}

Num.prototype.interpret = function() {
    return this.val;
};

module.exports = [Num, Min, Sum];

```
##### interpreter_es6.js
```Javascript
class Sum {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }

    interpret() {
        return this.left.interpret() + this.right.interpret();
    }
}

class Min {
    constructor(left, right) {
        this.left = left;
        this.right = right;
    }

    interpret() {
        return this.left.interpret() - this.right.interpret();
    }
}


class Num {
    constructor(val) {
        this.val = val;
    }

    interpret() {
        return this.val;
    }
}


module.exports = [Num, Min, Sum];

```

### Iterator
##### iterator.js
```Javascript
function Iterator(el) {
    this.index = 0;
    this.elements = el;
}

Iterator.prototype = {
    next: function() {
        return this.elements[this.index++];
    },
    hasNext: function() {
        return this.index < this.elements.length;
    }
};

module.exports = Iterator;

```
##### iterator_es6.js
```Javascript
class Iterator {
    constructor(el) {
        this.index = 0;
        this.elements = el;
    }

    next() {
        return this.elements[this.index++];
    }

    hasNext() {
        return this.index < this.elements.length;
    }
}

module.exports = Iterator;

```

### Mediator
##### mediator.js
```Javascript
function TrafficTower() {
    this.airplanes = [];
}

TrafficTower.prototype.requestPositions = function() {
    return this.airplanes.map(function(airplane) {
        return airplane.position;
    });
};

function Airplane(position, trafficTower) {
    this.position = position;
    this.trafficTower = trafficTower;
    this.trafficTower.airplanes.push(this);
}

Airplane.prototype.requestPositions = function() {
    return this.trafficTower.requestPositions();
};

module.exports = [TrafficTower, Airplane];

```
##### mediator_es6.js
```Javascript
class TrafficTower {
    constructor() {
        this.airplanes = [];
    }

    requestPositions() {
        return this.airplanes.map(function(airplane) {
            return airplane.position;
        });
    }
}

class Airplane{
    constructor(position, trafficTower) {
        this.position = position;
        this.trafficTower = trafficTower;
        this.trafficTower.airplanes.push(this);
    }

    requestPositions() {
        return this.trafficTower.requestPositions();
    }
}


module.exports = [TrafficTower, Airplane];

```

### Memento
##### memento.js
```Javascript
function Memento(value) {
    this.value = value;
}

var originator = {
    store: function(val) {
        return new Memento(val);
    },
    restore: function(memento) {
        return memento.value;
    }
};

function Caretaker() {
    this.values = [];
}

Caretaker.prototype.addMemento = function(memento) {
    this.values.push(memento);
};

Caretaker.prototype.getMemento = function(index) {
    return this.values[index];
};

module.exports = [originator, Caretaker];

```
##### memento_es6.js
```Javascript
class Memento {
    constructor(value) {
        this.value = value;
    }
}

var originator = {
    store: function(val) {
        return new Memento(val);
    },
    restore: function(memento) {
        return memento.value;
    }
};

class Caretaker {
    constructor() {
        this.values = [];
    }

    addMemento(memento) {
        this.values.push(memento);
    }

    getMemento(index) {
        return this.values[index];
    }
}



module.exports = [originator, Caretaker];

```

### Observer
##### observer.js
```Javascript
function Product() {
    this.price = 0;
    this.actions = [];
}

Product.prototype.setBasePrice = function(val) {
    this.price = val;
    this.notifyAll();
};

Product.prototype.register = function(observer) {
    this.actions.push(observer);
};

Product.prototype.unregister = function(observer) {
    this.actions.remove.filter(function(el) {
        return el !==  observer;
    });
};

Product.prototype.notifyAll = function() {
    return this.actions.forEach(function(el) {
        el.update(this);
    }.bind(this));
};

var fees = {
    update: function(product) {
        product.price = product.price * 1.2;
    }
};

var proft = {
    update: function(product) {
        product.price = product.price * 2;
    }
};

module.exports = [Product, fees, proft];

```
##### observer_es6.js
```Javascript
class Product {
    constructor() {
        this.price = 0;
        this.actions = [];
    }

    setBasePrice(val) {
        this.price = val;
        this.notifyAll();
    }

    register(observer) {
        this.actions.push(observer);
    }

    unregister(observer) {
        this.actions.remove.filter(function(el) {
            return el !== observer;
        });
    }

    notifyAll() {
        return this.actions.forEach(function(el) {
            el.update(this);
        }.bind(this));
    }
}

class fees {
    update(product) {
        product.price = product.price * 1.2;
    }
}

class proft {
    update(product) {
        product.price = product.price * 2;
    }
}

module.exports = [Product, fees, proft];

```

### State
##### state.js
```Javascript
function Order() {
    this.state = new WaintingForPayment();

    this.nextState = function() {
        this.state = this.state.next();
    };
}


function WaintingForPayment() {
    this.name = 'waitingForPayment';
    this.next = function() {
        return new Shipping();
    };
}

function Shipping() {
    this.name = 'shipping';
    this.next = function() {
        return new Delivered();
    };
}

function Delivered() {
    this.name = 'delivered';
    this.next = function() {
        return this;
    };
}

module.exports = Order;

```

### Strategy
##### strategy.js
```Javascript
function ShoppingCart(discount) {
    this.discount = discount;
    this.amount = 0;
}

ShoppingCart.prototype.setAmount = function(amount) {
    this.amount = amount;
};

ShoppingCart.prototype.checkout = function() {
   return this.discount(this.amount);
};

function guestStrategy(amount) {
    return amount;
}

function regularStrategy(amount) {
    return amount * 0.9;
}

function premiumStrategy(amount) {
    return amount * 0.8;
}

module.exports = [ShoppingCart, guestStrategy, regularStrategy, premiumStrategy];

```
##### strategy_es6.js
```Javascript
class ShoppingCart {

    constructor(discount) {
        this.discount = discount;
        this.amount = 0;
    }

    checkout() {
        return this.discount(this.amount);
    }

    setAmount(amount) {
        this.amount = amount;
    }
}

function guestStrategy(amount) {
    return amount;
}

function regularStrategy(amount) {
    return amount * 0.9;
}

function premiumStrategy(amount) {
    return amount * 0.8;
}

module.exports = [ShoppingCart, guestStrategy, regularStrategy, premiumStrategy];

```

### Template
##### template.js
```Javascript
function Tax() {}

Tax.prototype.calc = function(value) {
   if (value >= 1000)
       value = this.overThousand(value);

    return this.complementaryFee(value);
};

Tax.prototype.complementaryFee = function(value) {
    return value + 10;
};


function Tax1() {}
Tax1.prototype = Object.create(Tax.prototype);

Tax1.prototype.overThousand = function(value) {
    return value * 1.1;
};


function Tax2() {}
Tax2.prototype = Object.create(Tax.prototype);

Tax2.prototype.overThousand = function(value) {
    return value * 1.2;
};

module.exports = [Tax1, Tax2];

```
##### template_es6.js
```Javascript
class Tax {
    calc(value) {
        if (value >= 1000)
            value = this.overThousand(value);

        return this.complementaryFee(value);
    }

    complementaryFee(value) {
        return value + 10;
    }

}

class Tax1 extends Tax {
    constructor() {
        super();
    }
    overThousand(value) {
        return value * 1.1;
    }
}

class Tax2 extends Tax {
    constructor() {
        super();
    }
    overThousand(value) {
        return value * 1.2;
    }
}

module.exports = [Tax1, Tax2];

```

### Visitor
##### visitor.js
```Javascript
function bonusVisitor(employee) {
    if (employee instanceof Manager)
        employee.bonus = employee.salary * 2;
    if (employee instanceof Developer)
        employee.bonus = employee.salary;
}

function Employee() {
    this.bonus = 0;
}

Employee.prototype.accept = function(visitor) {
    visitor(this);
};

function Manager(salary) {
    this.salary = salary;
}

Manager.prototype = Object.create(Employee.prototype);

function Developer(salary) {
    this.salary = salary;
}

Developer.prototype = Object.create(Employee.prototype);


module.exports = [Developer, Manager, bonusVisitor];

```
##### visitor_es6.js
```Javascript
function bonusVisitor(employee) {
    if (employee instanceof Manager)
        employee.bonus = employee.salary * 2;
    if (employee instanceof Developer)
        employee.bonus = employee.salary;
}

class Employee {
    constructor(salary) {
        this.bonus = 0;
        this.salary = salary;
    }

    accept(visitor) {
        visitor(this);
    }
}

class Manager extends Employee {
    constructor(salary) {
        super(salary);
    }
}

class Developer extends Employee {
    constructor(salary) {
        super(salary);
    }
}

module.exports = [Developer, Manager, bonusVisitor];

```


## creational
### Abstract Factory
##### abstract-factory.js
```Javascript
function droidProducer(kind) {
   if (kind === 'battle') return battleDroidFactory;
   return pilotDroidFactory;
}

function battleDroidFactory() {
    return new B1();
}

function pilotDroidFactory() {
    return new Rx24();
}

function B1() {}
B1.prototype.info = function() {
    return "B1, Battle Droid";
};

function Rx24() {}
Rx24.prototype.info = function() {
    return "Rx24, Pilot Droid";
};

module.exports = droidProducer;

```
##### abstract-factory_es6.js
```Javascript
function droidProducer(kind) {
   if (kind === 'battle') return battleDroidFactory;
   return pilotDroidFactory;
}

function battleDroidFactory() {
    return new B1();
}

function pilotDroidFactory() {
    return new Rx24();
}


class B1 {
    info() {
        return "B1, Battle Droid";
    }
}

class Rx24 {
    info() {
        return "Rx24, Pilot Droid";
    }
}


module.exports = droidProducer;

```

### Builder
##### builder.js
```Javascript
function Request() {
    this.url = '';
    this.method = '';
    this.payload = {};
}

function RequestBuilder() {

    this.request = new Request();

    this.forUrl = function(url) {
        this.request.url = url;
        return this;
    };

    this.useMethod = function(method) {
        this.request.method = method;
        return this;
    };

    this.payload = function(payload) {
        this.request.payload = payload;
        return this;
    };

    this.build = function() {
        return this.request;
    };

}

module.exports = RequestBuilder;

```
##### builder_es6.js
```Javascript
class Request {
    constructor() {
        this.url = '';
        this.method = '';
        this.payload = {};
    }
}

class RequestBuilder {
    constructor() {
        this.request = new Request();
    }

    forUrl(url) {
        this.request.url = url;
        return this;
    }

    useMethod(method) {
        this.request.method = method;
        return this;
    }

    payload(payload) {
        this.request.payload = payload;
        return this;
    }

    build() {
        return this.request;
    }

}

module.exports = RequestBuilder;

```

### Factory
##### factory.js
```Javascript
function bmwFactory(type) {
    if (type === 'X5')
        return new Bmw(type, 108000, 300);
    if (type === 'X6')
        return new Bmw(type, 111000, 320);
}

function Bmw(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
}

module.exports = bmwFactory;

```
##### factory_es6.js
```Javascript
class BmwFactory {

    create(type) {
        if (type === 'X5')
            return new Bmw(type, 108000, 300);
        if (type === 'X6')
            return new Bmw(type, 111000, 320);
    }
}

class Bmw {
    constructor(model, price, maxSpeed) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}

module.exports = BmwFactory;

```

### Prototype
##### prototype.js
```Javascript
function Sheep(name, weight) {
    this.name = name;
    this.weight = weight;
}

Sheep.prototype.clone = function() {
    return new Sheep(this.name, this.weight);
};


module.exports = Sheep;

```

### Singleton
##### singleton.js
```Javascript
function Person() {

    if(typeof Person.instance === 'object')
        return Person.instance;

    Person.instance = this;

    return this;
}

module.exports = Person;

```


## structural
### Adapter
##### adapter.js
```Javascript
function Soldier(lvl) {
    this.lvl = lvl;
}

Soldier.prototype.attack = function() {
    return this.lvl * 1;
};

function Jedi(lvl) {
    this.lvl = lvl;
}

Jedi.prototype.attackWithSaber = function() {
    return this.lvl * 100;
};

function JediAdapter(jedi) {
    this.jedi = jedi;
}

JediAdapter.prototype.attack = function() {
    return this.jedi.attackWithSaber();
};

module.exports = [Soldier, Jedi, JediAdapter];

```

### Bridge
##### bridge.js
```Javascript
function EpsonPrinter(ink) {
    this.ink = ink();
}
EpsonPrinter.prototype.print = function() {
    return "Printer: Epson, Ink: " + this.ink;
};

function HPprinter(ink) {
    this.ink = ink();
}
HPprinter.prototype.print = function() {
    return "Printer: HP, Ink: " + this.ink;
};

function acrylicInk() {
    return "acrylic-based";
}

function alcoholInk() {
    return "alcohol-based";
}

module.exports = [EpsonPrinter, HPprinter, acrylicInk, alcoholInk];

```
##### bridge_es6.js
```Javascript
class Printer {
    constructor(ink) {
        this.ink = ink;
    }
}

class EpsonPrinter extends Printer {
    constructor(ink) {
        super(ink);
    }

    print() {
        return "Printer: Epson, Ink: " + this.ink.get();
    }
}

class HPprinter extends Printer {
    constructor(ink) {
        super(ink);
    }

    print() {
        return "Printer: HP, Ink: " + this.ink.get();
    }
}

class Ink {
    constructor(type) {
        this.type = type;
    }
    get() {
        return this.type;
    }
}

class AcrylicInk extends Ink {
    constructor() {
        super("acrylic-based");
    }
}

class AlcoholInk extends Ink {
    constructor() {
        super("alcohol-based");
    }
}

module.exports = [EpsonPrinter, HPprinter, AcrylicInk, AlcoholInk];

```

### Composite
##### composite.js
```Javascript
// composition
function EquipmentComposition(name) {
    this.equipaments = [];
    this.name = name;
}

EquipmentComposition.prototype.add = function(Equipament) {
    this.equipaments.push(Equipament);
};

EquipmentComposition.prototype.getPrice = function() {
    return this.equipaments.map(function(Equipament){
        return Equipament.getPrice();
    }).reduce(function(a, b) {
        return  a + b;
    });
};

function Equipment() {}

Equipment.prototype.getPrice = function() {
    return this.price;
};

// -- leafs
function FloppyDisk() {
    this.name = "Floppy Disk";
    this.price = 70;
}
FloppyDisk.prototype = Object.create(Equipment.prototype);

function HardDrive() {
    this.name = "Hard Drive";
    this.price = 250;
}
HardDrive.prototype = Object.create(Equipment.prototype);

function Memory() {
    this.name = "8gb memomry";
    this.price = 280;
}
Memory.prototype = Object.create(Equipment.prototype);

module.exports = [EquipmentComposition, FloppyDisk, HardDrive, Memory];

```
##### composite_es6.js
```Javascript
//Equipment
class Equipment {

    getPrice() {
        return this.price || 0;
    }

    getName() {
        return this.name;
    }

    setName(name) {
       this.name = name;
    }
}

// --- composite ---
class Composite extends Equipment {

    constructor() {
        super();
        this.equipaments = [];
    }

    add(equipament) {
        this.equipaments.push(equipament);
    }

    getPrice() {
        return this.equipaments.map(equipament => {
            return equipament.getPrice();
        }).reduce((a, b)  => {
            return  a + b;
        });
    }
}

class Cabbinet extends Composite {
    constructor() {
        super();
        this.setName('cabbinet');
    }
}

// --- leafs ---
class FloppyDisk extends Equipment {
    constructor() {
        super();
        this.setName('Floppy Disk');
        this.price = 70;
    }
}

class HardDrive extends Equipment {
    constructor() {
        super();
        this.setName('Hard Drive');
        this.price = 250;
    }
}

class Memory extends Equipment {
    constructor() {
        super();
        this.setName('Memory');
        this.price = 280;
    }
}

module.exports = [Cabbinet, FloppyDisk, HardDrive, Memory];

```

### Decorator
##### decorator.js
```Javascript
function Pasta() {
    this.price = 0;
}
Pasta.prototype.getPrice = function() {
    return this.price;
};

function Penne() {
    this.price = 8;
}
Penne.prototype = Object.create(Pasta.prototype);


function SauceDecorator(pasta) {
    this.pasta = pasta;
}

SauceDecorator.prototype.getPrice = function() {
    return this.pasta.getPrice() + 5;
};

function CheeseDecorator(pasta) {
    this.pasta = pasta;
}

CheeseDecorator.prototype.getPrice = function() {
    return this.pasta.getPrice() + 3;
};

module.exports = [Penne, SauceDecorator, CheeseDecorator];

```
##### decorator_es6.js
```Javascript
class Pasta {
    constructor() {
        this.price = 0;
    }
    getPrice() {
        return this.price;
    }
}

class Penne extends Pasta {
    constructor() {
        super();
        this.price = 8;
    }
}


class PastaDecorator extends Pasta {
    constructor(pasta) {
        super();
        this.pasta = pasta;
    }

    getPrice() {
        return this.pasta.getPrice();
    }
}


class SauceDecorator extends PastaDecorator {
    constructor(pasta) {
        super(pasta);
    }

    getPrice() {
        return super.getPrice() + 5;
    }
}

class CheeseDecorator extends PastaDecorator {
    constructor(pasta) {
        super(pasta);
    }

    getPrice() {
        return super.getPrice() + 3;
    }
}

module.exports = [Penne, SauceDecorator, CheeseDecorator];

```

### Facade
##### facade.js
```Javascript
var shopFacade = {
    calc: function(price) {
        price = discount(price);
        price = fees(price);
        price += shipping();
        return price;
    }
};

function discount(value) {
   return value * 0.9;
}

function shipping() {
   return 5;
}

function fees(value) {
    return value * 1.05;
}

module.exports = shopFacade;

```
##### facade_es6.js
```Javascript
class ShopFacade {
    constructor() {
        this.discount = new Discount();
        this.shipping = new Shipping();
        this.fees = new Fees();
    }

    calc(price) {
        price = this.discount.calc(price);
        price = this.fees.calc(price);
        price += this.shipping.calc();
        return price;
    }
}

class Discount {

    calc(value) {
        return value * 0.9;
    }
}

class Shipping {
    calc() {
        return 5;
    }
}

class Fees {

    calc(value) {
        return value * 1.05;
    }
}

module.exports = ShopFacade;

```

### Flyweight
##### flyweight.js
```Javascript
function Color(name) {
    this.name = name;
}

var colorFactory = {
    colors: {},
    create: function(name) {
        var color = this.colors[name];
        if(color) return color;

        this.colors[name] = new Color(name);
        return this.colors[name];
    }
};

module.exports = colorFactory;

```

### Proxy
##### proxy.js
```Javascript
function Car() {
    this.drive = function() {
        return "driving";
    };
}

function CarProxy(driver) {
    this.driver = driver;
    this.drive = function() {
        if ( driver.age < 18)
            return "too young to drive";
        return new Car().drive();
    };
}

function Driver(age) {
    this.age = age;
}

module.exports = [Car, CarProxy, Driver];


```



