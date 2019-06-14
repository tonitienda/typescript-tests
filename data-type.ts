import Deserializer from './deserializer'

const DataSchema = {
    type: 'object',
    additionalProperties: false,
    properties: {
        id: {
            type: 'string'
        },
        name: {
            type: 'string'
        },
        surname: {
            type: 'string'
        }
    },
    required:['id', 'name', 'surname']

}

export interface Data {
    id: string;
    name: string;
    surname: string;
}

export const deserialize = Deserializer<Data>(DataSchema)


