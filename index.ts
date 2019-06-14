import { deserialize, Data } from './data-type'
processData(deserialize({id: "1", name:"title", surname:"something else"}))

function processData(data: Data) {
    console.log(data.id)
    console.log(data.name)
    console.log(data.surname)
}

type Some = {
    some: string;
}

type Thing = {
    thing: string;
}

type Event<T> = {
    id: string;
    timestamp: Date;
    payload: T;
}

type SomethingHappened = Event<{
        entityId: string;
}>

const somethingHappened : SomethingHappened = { id: "1", timestamp: new Date(), payload: {entityId: "2"}}
console.log(somethingHappened)
type Something = Some & Thing

const some: Some = {some: 'hello'}
const thing: Thing = { thing: 'world'}
const something: Something = {...some, ...thing}

console.log(`something: `, something)

type Complete = {
    id: string;
    name: string;
    surname:string;
}

type IdName = {
    id: string;
    name: string;
}

function doIt(s: IdName) {
    console.log(s)
}

const c : Complete = { id: '1', name: 'name', surname: 'surname'}
doIt(c)



