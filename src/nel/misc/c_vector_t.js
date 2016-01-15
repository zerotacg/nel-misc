/**
 * @class nlmisc.CVector<T>
 */
export default class CVector {
    static template( type ) {
        class CVectorType extends CVector {
            static readFrom( stream ) {
                return stream.readModel(CVectorType);
            }

            static create( data ) {
                return new CVectorType(data);
            }
        }

        CVectorType.fields = [
            { type, name: "x" },
            { type, name: "y" },
            { type, name: "z" }
        ];

        return CVectorType;
    }

    constructor( config ) {
        Object.assign(this, config);
    }
}
