export default function(dynamo, joi) {

    /* define model */
    const Movie = dynamo.define('Movie', {
        hashKey: 'year',    // Partition key
        rangeKey: 'title',  // Sort key
        schema: {
            year: joi.number(),
            title: joi.string(),
            info: joi.object()
        },
        timestamps : true,  // updatedAt, createdAt
    });

    return Movie;
}