"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Horse = void 0;
const Animal_1 = require("./Animal");
class Horse extends Animal_1.Animal {
    constructor(name) {
        super(name);
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
exports.Horse = Horse;
//# sourceMappingURL=Horse.js.map