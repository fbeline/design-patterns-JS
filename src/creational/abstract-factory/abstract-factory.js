function droidProducer(kind) {
  if (kind === 'battle') return battleDroidFactory;
  return pilotDroidFactory;
}

function battleDroidFactory() {
  return new B1();
}

function pilotDroidFactory() {
  return new Rx24();
}

function B1() {}
B1.prototype.info = function() {
  return "B1, Battle Droid";
};

function Rx24() {}
Rx24.prototype.info = function() {
  return "Rx24, Pilot Droid";
};

module.exports = droidProducer;
