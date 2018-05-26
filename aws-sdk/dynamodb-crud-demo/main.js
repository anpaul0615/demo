import InitModels from './models/__init__';

(async function(){

    // Init
    const Models = await InitModels();
    const { Movie } = Models;
    
    // CRUD
    try{
        // Create
        const newMovies = [
            {
                year: 2015,
                title:'test movie',
                info: {
                    plot: 'Nothing happens at all.',
                    rating: 1
                }
            },
            {
                year: 2016,
                title:'test movie2',
                info: {
                    plot: 'Nothing happens at all.',
                    rating: 5.0
                }
            }
        ];
        const createResult = await new Promise((resolve,reject)=>{
            Movie.create(newMovies, (err,data)=>{
                if (err) reject(err);
                else resolve(data);
            });
        });
        console.log("Before Item : ", JSON.stringify(createResult, null, 2));


        // Read
        const readConditions = {
            year: 2016,
            title: 'test movie2'
        };
        const readResult = await new Promise((resolve,reject)=>{
            Movie.get(readConditions, (err,data)=>{
                if (err) reject(err);
                else resolve(data);
            });
        });
        console.log("Readed Item : ", JSON.stringify(readResult, null, 2));


        // Update
        const updateConditions = {
            year: 2016,
            title: 'test movie2'
        };
        const updateParams = {
            UpdateExpression: "set info.rating = :r, info.plot=:p, info.actors=:a",
            ExpressionAttributeValues: {
                ":r": 5.5,
                ":p": "Everything happens all at once.",
                ":a": ["Larry", "Moe", "Curly"]
            },
            ReturnValues: "UPDATED_NEW"
        };
        const updateResult = await new Promise((resolve,reject)=>{
            Movie.update(updateConditions,  (err,data)=>{
                if (err) reject(err);
                else resolve(data);
            });
        });
        console.log("Updated Item : ", JSON.stringify(updateResult, null, 2));


        // Delete
        const deleteConditions = {
            year: 2016,
            title: 'test movie2'
        };
        const deleteParams = {
            ConditionExpression: "info.rating > :v",
            ExpressionAttributeValues: {
                ":v": 5.0
            },
            ReturnValues: "ALL_OLD"
        };
        const deleteResult = await new Promise((resolve,reject)=>{
            Movie.destroy(deleteConditions, deleteParams, (err,data)=>{
                if (err) reject(err);
                else resolve(data);
            });
        });
        console.log("Deleted Item : ", JSON.stringify(deleteResult, null, 2));

        
    } catch(e) {
        console.log(e);
        // console.log("Before Item : ", JSON.stringify(e.data, null, 2));
        // console.log("Error Info : ", JSON.stringify(e.err, null, 2));
    }

})();