//app.js
//https://github.com/rajaraodv/background
var CronJob = require('cron').CronJob;
var job = new CronJob('00 30 11 * * 1-5', function(){
    // Runs every weekday (Monday through Friday)
    // at 11:30:00 AM. It does not run on Saturday
    // or Sunday.
    console.log('Time now: ' + new Date());
}, null, true, 'America/Denver');

