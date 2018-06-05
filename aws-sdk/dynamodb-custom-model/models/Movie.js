module.exports = function(docClient) {

    function Movie(){};
    Movie.prototype.docClient = docClient;
    Movie.prototype.Schema = {
        TableName : "Movies2",
        KeySchema: [
            { AttributeName: "year", KeyType: "HASH"},  //Partition key
            { AttributeName: "title", KeyType: "RANGE" }  //Sort key
        ],
        AttributeDefinitions: [
            { AttributeName: "year", AttributeType: "N" },
            { AttributeName: "title", AttributeType: "S" }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: 1,
            WriteCapacityUnits: 1
        }
    };
    
    /* DDL */
    Movie.prototype.tableName = function(){
        return this.Schema.TableName;
    };
    Movie.prototype.describeTable = function(callback){
        return docClient.service.describeTable(
            { TableName: this.Schema.TableName }, callback);
    };
    Movie.prototype.createTable = function(callback){
        return docClient.service.createTable(this.Schema, callback);
    };
    Movie.prototype.updateTable = function(updateParam, callback){
        if (typeof updateParam === 'function' && !callback) {
            callback = updateParam;
            updateParam = {};
        }
        if (!updateParam && callback) {
            updateParam = {};
        }

        updateParam.TableName = this.Schema.TableName;
        
        // todo:
        // validate updateParam

        return docClient.service.updateTable(updateParam, callback);
    };
    Movie.prototype.deleteTable = function(callback){
        return docClient.service.deleteTable(
            { TableName: this.Schema.TableName }, callback);
    };

    /* DML */
    Movie.prototype.put = function(params, callback){
        params.TableName = this.Schema.TableName;
        return docClient.put(params, callback);
    };
    Movie.prototype.get = function(params, callback){
        params.TableName = this.Schema.TableName;
        return docClient.get(params, callback);
    };
    Movie.prototype.update = function(params, callback){
        params.TableName = this.Schema.TableName;
        return docClient.update(params, callback);
    };
    Movie.prototype.delete = function(params, callback){
        params.TableName = this.Schema.TableName;
        return docClient.delete(params, callback);
    };
    Movie.prototype.query = function(params, callback){
        params.TableName = this.Schema.TableName;
        return docClient.query(params, callback);
    };
    Movie.prototype.scan = function(params, callback){
        params.TableName = this.Schema.TableName;
        return docClient.scan(params, callback);
    };


    return new Movie();
};