/**
 * @class nlmisc.CRGBA
 * @implements nlio.ISerializable
 */
export default class CRGBA {
    static readFrom( stream ) {
        var instance = new CRGBA(0, 0, 0);

        instance.readFrom(stream);

        return instance;
    }

    static writeTo( stream, instance ) {
        instance.writeTo(stream);
    }

    /**
     * @constructor
     * @param {uint8} r
     * @param {uint8} g
     * @param {uint8} b
     * @param {uint8} [a=255]
     */
    constructor( r, g, b, a = 255 ) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    readFrom( stream ) {
        this.r = stream.readUint8();
        this.g = stream.readUint8();
        this.b = stream.readUint8();
        this.a = stream.readUint8();
    }

    writeTo( stream ) {
        stream.writeUint8(this.r);
        stream.writeUint8(this.g);
        stream.writeUint8(this.b);
        stream.writeUint8(this.a);
    }
}
