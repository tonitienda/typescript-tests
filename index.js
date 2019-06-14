"use strict";
exports.__esModule = true;
var ajv_1 = require("ajv");
var ajv2 = new ajv_1["default"]();
// const DataSchema = {
//     type: 'object',
//     additionalProperties: false,
//     properties: {
//         id: {
//             type: 'string'
//         },
//         name: {
//             type: 'string'
//         }
//     },
//     required:['id', 'name']
// }
// interface Data {
//     id: string;
//     name: string;
// }
// const data = {id: "1", name:"title"}
// function deserialize<T>(json: any) {
//     return json as T
// }
// const valid = ajv2.validate(DataSchema, JSON.parse(JSON.stringify(data)))
// if (!valid) { 
//     console.log(ajv2.errors)
// } else {
//     const validated = deserialize<Data>(data)
//     console.log(validated)
// }
// console.log(data)
