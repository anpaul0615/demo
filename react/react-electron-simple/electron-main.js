const {BrowserWindow, app, ipcMain} = require('electron');

let mainWindow;
function initialize(){
  initApp();
  initIPC();
}

/*
* Create app-window
*/
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    maximizeable: false,
    icon:'./src/logo.svg'
  });
  if(/--dev/.test(process.argv[2])){
    mainWindow.webContents.openDevTools();
    mainWindow.loadURL('http://localhost:3000');
  }else{
    mainWindow.loadURL('file://'+ __dirname + '/build/index.html');
  }
  mainWindow.on('closed', ()=>{ mainWindow = null });
}

/*
* Set app-events
*/
function initApp() {
  app.on('ready', ()=>{
    createWindow();
  });
  app.on('activate', ()=>{
    if(mainWindow === null) createWindow();
  });
  app.on('window-all-closed', ()=>{
    if(process.platform !== 'darwin') app.quit();
  });
}

/*
* Set ipc-controller
*/
function initIPC() {
  // async call
  ipcMain.on('async', (event,param)=>{
    var data = {'message':'async call ok'};
    event.sender.send('async', data);
  });
  // sync call
  ipcMain.on('sync', (event,param)=>{
    var data = {'message':'sync call ok'};
    event.returnValue = data;
  });
  // set reload
  ipcMain.on('reload', (event)=>{
    mainWindow.reload();
  });
}

/*
* Handle Squirrel on Windows startup events
*/
switch (process.argv[1]) {
  case '--squirrel-install':
  case '--squirrel-uninstall':
  case '--squirrel-obsolete':
  case '--squirrel-updated':
    app.quit();
    break
  default:
    initialize();
}
