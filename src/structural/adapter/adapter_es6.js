class ViolentPeople {
    attack() {

    }
}

class Soldier extends ViolentPeople {
    constructor(level) {
        super();
        this.level = level;
    }

    attack() {
        return this.level * 1;
    }
}

class Jedi {
    constructor(level) {
        this.level = level;
    }

    attackWithSaber() {
        return this.level * 100;
    }
}

class JediAdapter extends ViolentPeople {
    constructor(jedi) {
        super();
        this.jedi = jedi;
    }

    attack() {
        return this.jedi.attackWithSaber();
    }
}

module.exports = [Soldier, Jedi, JediAdapter];
