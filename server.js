// thanks to http://runnable.com/Um3nhT9LevdQAAC9/stop-an-instance-for-node-js-aws-and-ec2
var AWS = require('aws-sdk');

// configure AWS security tokens - AWS SDK should use the env setup in CF deploy manifest
// AWS.config.update({accessKeyId: process.env.AccessKeyID, 
//  secretAccessKey: process.env.SecretAccessKey});

// Set your region for future requests.
// AWS.config.update({region: 'us-west-1'});

var ec2 = new AWS.EC2();

// Let's loop through all the regions
var params = {
  DryRun: true || false,
  Filters: [
    {
      Name: 'STRING_VALUE',
      Values: [
        'STRING_VALUE',
        /* more items */
      ]
    },
    /* more items */
  ],
  RegionNames: [
    'STRING_VALUE',
    /* more items */
  ]
};
ec2.describeRegions(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response returns (Array<map>)
});

// then loop through all the instances 
var params = {
  DryRun: true || false,
  Filters: [
    {
      Name: 'STRING_VALUE',
      Values: [
        'STRING_VALUE',
        /* more items */
      ]
    },
    /* more items */
  ],
  InstanceIds: [
    'STRING_VALUE',
    /* more items */
  ],
  MaxResults: 0,
  NextToken: 'STRING_VALUE'
};
ec2.describeInstanceStatus(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});

// then shut them down

// var params = {InstanceIds: ["i-d8731783"]};
var params = {
  InstanceIds: [ /* required */
    'STRING_VALUE',
    /* more items */
  ],
  DryRun: true || false,
  Force: true || false
};
// Stop the instance
ec2.stopInstances(params, function(err) {
  console.log("Stopping instance", err ? "failure" : "success");
});
