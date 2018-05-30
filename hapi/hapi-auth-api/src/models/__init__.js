export default function(config) {
    const Sequelize = require('sequelize');
    const sequelize = new Sequelize(
        config.database,
        config.user,
        config.password, {
            host: config.host,
            port: config.port,
            dialect: config.dbms,
            timezone: '+09:00',
            pool: {
                min: config.connectionMin,
                max: config.connectionMax,
                idle: 10000,
            },
            // logging: (...rest)=>{
            //     console.log('== db start =================================='); 
            //     console.log(...rest); 
            //     console.log('== db end =================================='); 
            // },
            logging: false,
        }
    );

    /* load model */
    const Devices = sequelize.import('./Devices');
    const DeviceLogs = sequelize.import('./DeviceLogs');
    
    /* set FK */
    //todo

    /* sync model sheme */
    // sequelize.sync({force:true})
    sequelize.sync()
    .then(()=>{
        console.log('Schema is synchronized');
    }).catch(err => {
        console.log('An error has occurred: ', err);
    });

    return {
        Devices,
        DeviceLogs,
    };
}
