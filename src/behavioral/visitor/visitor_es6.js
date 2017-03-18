class Operation {
    accept(visitor) {
        return visitor.visit(this);
    }
}

class Sum extends Operation {
    constructor() {
        super();
        this.val = " + ";
    }
}

class Min extends Operation {
    constructor() {
        super();
        this.val = " - ";
    }
}

class Num extends Operation {
    constructor(val) {
        super();
        this.val = val;
    }
}

class Printer {
    visit(operation) {
        return operation.val;
    }
}

module.exports = [Sum, Min, Num, Printer];
