const electronPackager = require('electron-packager');

// set options
var options = {
  'dir' : './',
  'out' : './dist',
  'platform' : 'all',   /* platform : linux, win32, darwin, mas, all */
  'arch' : 'all',       /* arch : ia32, x64, armv7l, all */
  'overwrite' : true,
  'prune' : true,
  'asar' : false
};

console.log('electron-packager is start..!');

// run electron-packager
electronPackager(options, function(err, appPath) {
  if(err) {
    console.warn("[Fail] ::");
    console.warn(err)
  } else {
    console.log("[Success] ::");
    console.log(appPath)
  }
});
