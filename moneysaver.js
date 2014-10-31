/**
 * @file moneysaver is micro-library.
 * Scaffolded with generator-microjs
 * @author Sean Keery <>
 */

// This function handles arrays and objects
function eachIterator(obj,parent,child) {
  var keys = new Array();
  for (i in obj[parent]) {
    key = obj[parent][i][child];
    //console.log(key);
    keys.push(key);
  }
  console.log(keys);
}

// thanks to http://runnable.com/Um3nhT9LevdQAAC9/stop-an-instance-for-node-js-aws-and-ec2
var AWS = require('aws-sdk');

// configure AWS security tokens - AWS SDK should use the env setup in CF deploy manifest
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_ID
});

// Set your region for future requests.
AWS.config.update({
  region: 'us-east-1'
});

var ec2 = new AWS.EC2();

console.log(ec2);

ec2.describeRegions({}, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else console.log(eachIterator(data,"Regions","RegionName")); // successful response returns (Array<map>)
});

var statusParams = {
  Filters: [
    {
      Name: 'instance-state-name',
      Values: [
        //'running'
        'terminated'
      ]
    }
  ],
  IncludeAllInstances: true
};

ec2.describeInstanceStatus(statusParams, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else console.log(eachIterator(data,"InstanceStatuses","InstanceId"));
});

// var stopParams = {
//   InstanceIds: [
//     "i-dd913237",  // these are not valid, just for testing
//     "i-d70ede3q"
//   ]
// };
// ec2.stopInstances(stopParams, function(err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else     console.log(data);           // successful response
// });
