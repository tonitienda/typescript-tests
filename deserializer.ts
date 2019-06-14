import Ajv from 'ajv'
const ajv = new Ajv()

export default function Deserializer<T>(schema: any) {
    return function(data: any) {
        const validated = JSON.parse(JSON.stringify(data))
        const valid = ajv.validate(schema, validated)

        if (!valid) { 
            throw ajv.errors
        } else {
            return validated as T
        }
    }    
}