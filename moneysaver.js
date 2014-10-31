/**
 * @file moneysaver is micro-library.
 * Scaffolded with generator-microjs
 * @author Sean Keery <>
 */

// This function handles arrays and objects
function eachInstanceStatus(obj) {
  for (i in obj.InstanceStatuses) {
      console.log(obj.InstanceStatuses[i].InstanceId + ' status is ' + obj.InstanceStatuses[i].InstanceState['Code']);
  }
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
  else console.log(data); // successful response returns (Array<map>)
});

ec2.describeInstanceStatus({}, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else console.log(eachInstanceStatus(data));
});

// ec2.stopInstances({"InstanceIds":["i-dd913237"]}, function(err) {
//   console.log("Stopping instance", err ? "failure" : "success");
// });
