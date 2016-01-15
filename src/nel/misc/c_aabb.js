import { CheckVersion } from "nel/io/read_stream";
import CVector from "nel/misc/c_vector";

const VERSION = 0;

/**
 * @class nlmisc.CAABB
 */
export default class CAABB {
    static readFrom( stream ) {
        return stream.readModel(CAABB);
    }

    static create( data ) {
        return new CAABB(data);
    }

    constructor( config ) {
        Object.assign(this, config);
    }
}

CAABB.fields = [
    { type: CheckVersion, value: VERSION },
    { type: CVector, name: "center" },
    { type: CVector, name: "half_size" }
];
