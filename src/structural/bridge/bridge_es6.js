class Printer {
  constructor(ink) {
    this.ink = ink;
  }
}

class EpsonPrinter extends Printer {
  constructor(ink) {
    super(ink);
  }

  print() {
    return "Printer: Epson, Ink: " + this.ink.get();
  }
}

class HPprinter extends Printer {
  constructor(ink) {
    super(ink);
  }

  print() {
    return "Printer: HP, Ink: " + this.ink.get();
  }
}

class Ink {
  constructor(type) {
    this.type = type;
  }
  get() {
    return this.type;
  }
}

class AcrylicInk extends Ink {
  constructor() {
    super("acrylic-based");
  }
}

class AlcoholInk extends Ink {
  constructor() {
    super("alcohol-based");
  }
}

export {
  EpsonPrinter,
  HPprinter,
  AcrylicInk,
  AlcoholInk
};
