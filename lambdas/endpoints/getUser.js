const Responses = require('../common/API_Responses');


exports.handler = async event =>{
    console.log('event', event);

    if(!event.pathParameters || !event.pathParameters.ID){
        return Responses._400({message: "missing the id from the path"})
    }

    let ID = event.pathParameters.ID;

    if(data[ID]){
        return Responses._200(data[ID])
    }

    return Responses._400({message: 'no ID in data'})
}

const data = { 
    1234: {name:"Anna jones", age: 15, job:"journalist"},
    7869: {name:"Julie Monarque", age: 32, job:"teacher"},
    4567: {name:"Lorence Zukerberge", age: 43, job:"plasterer"},
}