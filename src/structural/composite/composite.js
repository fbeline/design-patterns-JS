// composition
function EquipamentComposition(name) {
    this.equipaments = [];
    this.name = name;
}

EquipamentComposition.prototype.add = function(Equipament) {
    this.equipaments.push(Equipament);
}; 

EquipamentComposition.prototype.getPrice = function() {
    return this.equipaments.map(function(Equipament){
        return Equipament.getPrice();
    }).reduce(function(a, b) {
        return  a + b;
    });
}

function Equipament() {};

Equipament.prototype.getPrice = function() {
    return this.price;
};

// -- leafs
function FloppyDisk() {
    this.name = "Floppy Disk";
    this.price = 70;
}
FloppyDisk.prototype = Object.create(Equipament.prototype);

function HardDrive() {
    this.name = "Hard Drive";
    this.price = 250;
}
HardDrive.prototype = Object.create(Equipament.prototype);

function Memory() {
    this.name = "8gb memomry";
    this.price = 280;
}
Memory.prototype = Object.create(Equipament.prototype);

//example
var cabbinet = new EquipamentComposition("cabbinet");
cabbinet.add(new FloppyDisk());
cabbinet.add(new HardDrive());
cabbinet.add(new Memory());

console.log(cabbinet.getPrice());
