const AWS = require("aws-sdk");
const CONFIG = require("./config.json");

const { accessKeyId, secretAccessKey } = CONFIG;

AWS.config.update({
    accessKeyId: CONFIG.accessKeyId,
    secretAccessKey: CONFIG.secretAccessKey,
    region: CONFIG.region,
    endpoint: CONFIG.endpoint,
});

const docClient = new AWS.DynamoDB.DocumentClient();

// CRUD Data
const table = "Movies";
const year = 2015;
const title = "The Big New Movie";

// Create
function Create(){
    return new Promise((resolve,reject)=>{
        console.log("Adding a new item...");
        const params = {
            TableName: table,
            Item: {
                "year": year,
                "title": title,
                "info": {
                    "plot": "Nothing happens at all.",
                    "rating": 0
                }
            },
            ReturnValues: "ALL_OLD"
        };
        docClient.put(params, (err,data)=>{
            if (err) {
                reject({
                    message: '[Fail] Add Item Fail..!',
                    data,
                    err
                });
            } else {
                resolve({
                    message: '[Done] Add Item OK!!',
                    data,
                    err
                });
            }
        });
    });
}
// Read
function Read(){
    return new Promise((resolve,reject)=>{
        console.log("Reading the item...");
        const params = {
            TableName: table,
            Key: {
                "year": year,
                "title": title
            }
        };
        docClient.get(params, (err,data)=>{
            if (err) {
                reject({
                    message: '[Fail] Get Item Fail..!',
                    data,
                    err
                });
            } else {
                resolve({
                    message: '[Done] Get Item OK!!',
                    data,
                    err
                });
            }
        });
    });
}
// Update
function Update(){
    return new Promise((resolve,reject)=>{
        console.log("Updating the item...");
        const params = {
            TableName: table,
            Key: {
                "year": year,
                "title": title
            },
            UpdateExpression: "set info.rating = :r, info.plot=:p, info.actors=:a",
            ExpressionAttributeValues: {
                ":r": 5.5,
                ":p": "Everything happens all at once.",
                ":a": ["Larry", "Moe", "Curly"]
            },
            ReturnValues: "UPDATED_NEW"
        };
        docClient.update(params, (err,data)=>{
            if (err) {
                reject({
                    message: '[Fail] Update Item Fail..!',
                    data,
                    err
                });
            } else {
                resolve({
                    message: '[Done] Update Item OK!!',
                    data,
                    err
                });
            }
        });
    });
}
// Delete
function Delete(){
    return new Promise((resolve,reject)=>{
        console.log("Deleting the item...");
        const params = {
            TableName: table,
            Key: {
                "year": year,
                "title": title
            },
            // ConditionExpression: "info.rating <= :val",
            ConditionExpression: "info.rating > :val",
            ExpressionAttributeValues: {
                ":val": 5.0
            },
            ReturnValues: "ALL_OLD"
        };
        docClient.delete(params, (err,data)=>{
            if (err) {
                reject({
                    message: '[Fail] Delete Item Fail..!',
                    data,
                    err
                });
            } else {
                resolve({
                    message: '[Done] Delete Item OK!!',
                    data,
                    err
                });
            }
        });
    });
}


// Do CRUD
(async function(){
    try{
        const createResult = await Create();
        console.log(createResult.message);
        console.log("Before Item : ", JSON.stringify(createResult.data, null, 2));

        const readResult = await Read();
        console.log(readResult.message);
        console.log("Readed Item : ", JSON.stringify(readResult.data, null, 2));

        const updateResult = await Update();
        console.log(updateResult.message);
        console.log("Updated Item : ", JSON.stringify(updateResult.data, null, 2));

        const deleteResult = await Delete();
        console.log(deleteResult.message);
        console.log("Deleted Item : ", JSON.stringify(deleteResult.data, null, 2));

    } catch(e) {
        console.log(e.message);
        console.log("Before Item : ", JSON.stringify(e.data, null, 2));
        console.log("Error Info : ", JSON.stringify(e.err, null, 2));
    }
})();