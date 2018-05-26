import config from '../config/aws.credentials.json';
import dynamo from 'dynamodb';
import joi from 'joi';

export default async function() {

    /* Init Access Configuration */
    dynamo.AWS.config.update({
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
        region: config.region,
        endpoint: config.endpoint
    });

    /* Load Models */
    const Movie = require('./Movie');
    const Models = {
        Movie: Movie.default(dynamo, joi)
    };

    /* Model Init Functions */
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
        const tableName = model.tableName();
        return new Promise((resolve,reject)=>{
            dynamo.createTables({
                tableName: {
                    readCapacity: 1,
                    writeCapacity: 1
                },
            },
            (err,data)=>{
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
    function UpdateTable(model){
        return new Promise((resolve,reject)=>{
            model.updateTable((err,data)=>{
                if (err) {
                    reject({
                        message: '[Fail] Table Update Fail..!',
                        data,
                        err
                    });
                } else {
                    resolve({
                        message: '[Done] Table Update Success!!',
                        data,
                        err
                    });
                }
            });
        });
    }

    /* Init Models */
    function CreateOrUpdateTable(model){
        return DescribeTable(model)
        .then(result=>UpdateTable(model), err=>CreateTable(model))
    }
    await Promise.all(
        Object.keys(Models).map(key=> CreateOrUpdateTable( Models[key] ))
    );

    /* Return Models */
    return Models;
}