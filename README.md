# AWS multi region and zone scheduled instance shutdown

This app is meant to be deployed on Pivotal Web Services to keep track of my AWS account spending.  It will be a node microservice that runs a scheduled job that :

* Creates environment variables on deployment to allow AWS login 
* Retrieves all regions from AWS
* Retrieves all instances from the Regions
* Shuts them down every night
 

Future improvements:

* Allow passing of AWS credentials
* Allows passing of schedule(s)
* Allows passing of region(s)
* Can start/reboot instances
