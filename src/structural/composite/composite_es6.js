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
