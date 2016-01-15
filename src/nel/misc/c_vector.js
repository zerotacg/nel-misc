import { float } from "nel/io/read_stream";

/**
 * @class nlmisc.CVector
 */
export default class CVector {
    static readFrom( stream ) {
        return stream.readModel(CVector);
    }

    static create( data ) {
        return new CVector(data);
    }

    constructor( config ) {
        Object.assign(this, config);
    }
}

CVector.fields = [
    { type: float, name: "x" },
    { type: float, name: "y" },
    { type: float, name: "z" }
];
