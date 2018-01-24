const dns = require('dns');

dns.lookup('google.com', function(err, address, family){
  console.log(address, family);
});
dns.lookupService('222.96.139.38', 80, (err, hostname, service) => {
  console.log(hostname, service);
});
dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
  console.log(hostname, service);
});
