class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    };
    coordenadas() {
        if (this.x > 0) {
            if (this.y < 0) {
                return 4;
            } else {
                return 1;
            }

        } else {
            if (this.y < 0) {
                return 3;
            } else {
                return 2;
            }

        }
    };
}