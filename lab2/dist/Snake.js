"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snake = void 0;
const Animal_1 = require("./Animal");
class Snake extends Animal_1.Animal {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
exports.Snake = Snake;
//# sourceMappingURL=Snake.js.map