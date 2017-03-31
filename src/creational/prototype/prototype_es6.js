class Cloneable {
    constructor() {
    }

    clone() {
        return null;
    }
}

class Sheep extends Cloneable {
    constructor(name, weight) {
        super();
        this.name = name;
        this.weight = weight;
    }

    clone() {
        return new Sheep(this.name, this.weight);
    }
}

module.exports = Sheep;


