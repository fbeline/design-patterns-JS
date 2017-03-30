function Operation() {}

Operation.prototype.accept = function(visitor) {
    return visitor.visit(this);
};

function Sum() {
    this.val = " + ";
}
Sum.prototype = Object.create(Operation.prototype);

function Min() {
    this.val = " - ";
}
Min.prototype = Object.create(Operation.prototype);

function Num(val) {
    this.val = val;
}
Num.prototype = Object.create(Operation.prototype);


function Printer() {}
Printer.prototype.visit = function(operation) {
    return operation.val;
};

module.exports = [Sum, Min, Num, Printer];
