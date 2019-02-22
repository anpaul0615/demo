import Boom from 'boom';
import * as AccessTokenValidator from './preroutes/AccessTokenValidator';
import * as RequestKeyValidator from './preroutes/RequestKeyValidator';

export default [
    /**
     * Read Device Logs
     */
    {
        method: 'GET',
        path: '/devices/logs', //todo: preroute.auth
        config: {
            pre: [
                RequestKeyValidator.checkFromHeader
            ]
        },
        handler: async (request,reply)=>{
            const { DeviceLogs } = request.server.app.models;
	        
			const { dev_mac, start_date, end_date } = request.query;
            // if (!dev_mac)
            //     return reply(Boom.badRequest('Missing dev_mac..!'));
            
            try {
                const logs = await DeviceLogs.findAll({
                    where: {
                        $and: [ 
                            { reg_date: { $gte: start_date || '1000-01-01' }, },
                            { reg_date: { $lte: end_date || '3000-01-01' }, },
                            { dev_mac: dev_mac || {$not: null} },
                        ],
                    },
                    raw: true, 
                    order: [['reg_date', 'DESC']],
                    limit: 20,
                });
                console.log('========================================================');
                console.log('HTTP GET /devices/logs :: ok');
                console.log('========================================================');
                reply({logs});
            } catch(err) {
                console.log('========================================================');
                console.log('HTTP GET /devices/logs :: fail..!');
                console.log('========================================================');
                reply(Boom.internal('HTTP GET /devices/logs :: err..!', err));
                console.log(request.payload);
            }
        }
    },
    /**
     * Insert Device Logs
     */
    {
        method: 'POST',
        path: '/devices/logs', //todo: preroute.auth
        // config: {
        //     pre: [
        //         RequestKeyValidator.checkFromHeader
        //     ]
        // },
        handler: async (request,reply)=>{
            const { DeviceLogs } = request.server.app.models;
            
            if (!request.payload)
                return reply(Boom.badRequest('Invaild payload..!'));

            const { reg_date, dev_mac, log_data } = request.payload;
            if (!/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]) (\d{2}):(\d{2}):(\d{2}).[0-9]{6})/.test(reg_date))
                return reply(Boom.badRequest('Invaild reg_date..!'));
            if (!dev_mac)
                return reply(Boom.badRequest('Missing dev_mac..!'));
            if (!log_data)
                return reply(Boom.badRequest('Missing log_data..!'));


            try {
                // await DeviceLogs.create({
                //     reg_date, dev_mac, log_data,
                // });
                const sql = 'INSERT INTO DeviceLogs (reg_date, dev_mac, log_data) VALUES (:reg_date, :dev_mac, :log_data);';
                await DeviceLogs.sequelize.query(sql, {
                    replacements: {
                        reg_date, dev_mac, log_data
                    }
                });
                
                console.log('========================================================');
                console.log('HTTP POST /devices/logs :: ok');
                console.log('========================================================');
                reply({ msg:'ok' });
            } catch(err) {
                console.log('========================================================');
                console.log('HTTP POST /devices/logs :: fail..!');
                console.log('========================================================');
                reply(Boom.internal('HTTP POST /devices/logs :: err..!', err));
                console.log(request.payload);
            }
        }
    },


];
