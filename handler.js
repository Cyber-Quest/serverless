'use strict';

const AWS = require("aws-sdk");

module.exports.hello = async ({Records: records}, context) => {
  try{
    await Promise.all(records.map( async rescord => {
        
    }));
    
    return{
      statusCode: 200,
      body:{ok: true}
    }
  } catch(err){
    return err;
  }
};
