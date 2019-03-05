function EpsonPrinter(ink) {
  this.ink = ink();
}
EpsonPrinter.prototype.print = function() {
  return "Printer: Epson, Ink: " + this.ink;
};

function HPprinter(ink) {
  this.ink = ink();
}
HPprinter.prototype.print = function() {
  return "Printer: HP, Ink: " + this.ink;
};

function acrylicInk() {
  return "acrylic-based";
}

function alcoholInk() {
  return "alcohol-based";
}

module.exports = [EpsonPrinter, HPprinter, acrylicInk, alcoholInk];
