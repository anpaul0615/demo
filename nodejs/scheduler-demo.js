const schedule = require('node-schedule');
/***
 *  Scheduler Cron-Job Format

     *    *    *    *    *    *
     ┬    ┬    ┬    ┬    ┬    ┬
     │    │    │    │    │    |
     │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
     │    │    │    │    └───── month (1 - 12)
     │    │    │    └────────── day of month (1 - 31)
     │    │    └─────────────── hour (0 - 23)
     │    └──────────────────── minute (0 - 59)
     └───────────────────────── second (0 - 59, OPTIONAL)
*/

// Cron-Job Schecduling
const cron = schedule.scheduleJob('42 * * * *', function(){
  console.log('Wake Up..!');
});
const cron2 = schedule.scheduleJob('0 17 ? * 0,4-6', function(){
  console.log('Wake Up..!');
});


// Date-based Schecduling
const date = new Date(2016, 10, 28, 14, 4, 40);
const interval = 15;
const message = "hello";
schedule.scheduleJob(date, function(msg){
  console.log('scheduler start..');
  setInterval(function(){
    console.log(interval + ' :: ' + new Date + ' :: ' + msg);
    if(--interval == 0){
      console.log('scheduler end..');
      clearInterval(this);
    }
  }, 1000);
}.bind(null,message));
