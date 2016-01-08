/**
 * @class nlmisc.CRGBA
 */
export default class CRGBA {
    /**
     * @constructor
     * @param {uint8} r
     * @param {uint8} g
     * @param {uint8} b
     * @param {uint8} [a=255]
     */
    constructor(r, g, b, a = 255) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
}
