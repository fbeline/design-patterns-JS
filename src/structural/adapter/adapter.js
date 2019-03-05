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
