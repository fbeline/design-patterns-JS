// composition
function EquipmentComposition(name) {
  this.equipments = [];
  this.name = name;
}

EquipmentComposition.prototype.add = function(equipment) {
  this.equipments.push(equipment);
};

EquipmentComposition.prototype.getPrice = function() {
  return this.equipments.map(function(equipment) {
    return equipment.getPrice();
  }).reduce(function(a, b) {
    return a + b;
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
