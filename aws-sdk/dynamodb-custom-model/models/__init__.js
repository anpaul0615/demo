import CONFIG from '../config/aws.credentials.json';
import AWS from 'aws-sdk';

export default async function() {

    /* Init Access Configuration */
    AWS.config.update({
        accessKeyId: CONFIG.accessKeyId,
        secretAccessKey: CONFIG.secretAccessKey,
        region: CONFIG.region,
        endpoint: CONFIG.endpoint,
    });
    
    /* Load Models */
    const docClient = new AWS.DynamoDB.DocumentClient();
    const Models = {
        Movie: require('./Movie')(docClient)
    };

    /* Table Init Functions */
    function DescribeTable(model){
        return new Promise((resolve,reject)=>{
            model.describeTable((err,data)=>{
                if (err) {
                    reject({
                        message: '[Fail] Table Describe Fail..!',
                        data,
                        err
                    });
                } else {
                    resolve({
                        message: '[Done] Table Describe Success!!',
                        data,
                        err
                    });
                }
            });
        });
    }
    function CreateTable(model){
        return new Promise((resolve,reject)=>{
            model.createTable((err,data)=>{
                if (err) {
                    reject({
                        message: '[Fail] Table Create Fail..!',
                        data,
                        err
                    });
                } else {
                    resolve({
                        message: '[Done] Table Create Success!!',
                        data,
                        err
                    });
                }
            });
        });
    }


    /* Init Tables */
    function CreateTableIfNotExist(model){
        return DescribeTable(model)
        .catch(err=>CreateTable(model))
        // .then(result=>console.log(result), err=>console.log(err))
    }
    await Promise.all(
        Object.keys(Models).map(key=> CreateTableIfNotExist( Models[key] ))
    );

    /* Return Models */
    return Models;
}