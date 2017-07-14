class Color {
    constructor(name) {
        this.name = name;
    }
}

class ColorFactory {
    static getColors() {
        if (ColorFactory.colors) return ColorFactory.colors;
        ColorFactory.colors = {};
        return ColorFactory.colors;
    };

    static create(name) {
        const newColor = ColorFactory.getColors()[name];
        if (newColor) return newColor;
        ColorFactory.colors[name] = new Color(name);
        return ColorFactory.colors[name];
    }
}

module.exports = ColorFactory;
