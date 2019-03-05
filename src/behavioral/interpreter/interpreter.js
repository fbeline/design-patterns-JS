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
