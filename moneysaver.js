/**
 * @file moneysaver is micro-library.
 * Scaffolded with generator-microjs
 * @author Sean Keery <>
 */

// thanks to http://runnable.com/Um3nhT9LevdQAAC9/stop-an-instance-for-node-js-aws-and-ec2
var AWS = require('aws-sdk');

// configure AWS security tokens - AWS SDK should use the env setup in CF deploy manifest
AWS.config.update({accessKeyId: process.env.AWS_ACCESS_KEY_ID,
secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY_ID});

// Set your region for future requests.
AWS.config.update({region: 'us-east-1'});

var ec2 = new AWS.EC2();

console.log(ec2);

ec2.describeRegions({}, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response returns (Array<map>)
});

ec2.describeInstanceStatus({}, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
