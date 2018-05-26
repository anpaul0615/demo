import InitModels from './models/__init__';

(async function(){

    // Init
    const Models = await InitModels();
    const { Movie } = Models;
    
    // Query And Scan
    try{
        // Insert Data
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
                    rating: 5.5
                }
            },
            {
                year: 2016,
                title:'test movie3',
                info: {
                    plot: 'Nothing happens at all.',
                    rating: 7.9
                }
            },
            {
                year: 2017,
                title:'test movie4',
                info: {
                    plot: 'Nothing happens at all.',
                    rating: 4.3
                }
            }
        ];
        const createResult = await new Promise((resolve,reject)=>{
            Movie.create(newMovies, (err,data)=>{
                if (err) reject(err);
                else resolve(data);
            });
        });
        console.log("Create Result : ", JSON.stringify(createResult, null, 2));


        // Query Data
        const queryResult = await new Promise((resolve,reject)=>{
            Movie.query(2016)
            .where('title').equals('test movie3')
            .exec((err,data)=>{
                if (err) reject(err);
                else resolve(data);
            })
        });
        console.log("Query Result : ", JSON.stringify(queryResult, null, 2));


        // Scan Data
        const scanResult = await new Promise((resolve,reject)=>{
            Movie.scan()
            .where('title').beginsWith('test')
            .projectionExpression('#yr, #ttl, #rt')
            .filterExpression('#rt between :start_rt and :end_rt')
            .expressionAttributeNames({'#yr':'year', '#ttl':'title', '#rt':'info.rating'})
            .expressionAttributeValues({':start_rt':5, ':end_rt':6})
            .exec((err,data)=>{
                if (err) reject(err);
                else resolve(data);
            })
        });
        console.log("Scan Result : ", JSON.stringify(scanResult, null, 2));


    } catch(e) {
        console.log(e);
        // console.log("Before Item : ", JSON.stringify(e.data, null, 2));
        // console.log("Error Info : ", JSON.stringify(e.err, null, 2));
    }

})();
