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
