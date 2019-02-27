'use strict';

const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

const { ipcMain } = require('electron');
const IPC_CHANNELS = require('./util/ipcChannels');
const model = require('./model');

//global window reference, or else the window will close automatically when the object is
//garbage collected
let win;

// check for presence of app.asar, which is only present in built version of the electron app
function isDev() {
    return process.mainModule.filename.indexOf('app.asar') === -1;
};

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600 });
    console.log(path.join(__dirname, '../dist/recipe-book/index.html'));
    win.loadURL(url.format({
        pathname: path.join(__dirname, '../dist/recipe-book/index.html'),
        protocol: 'file',
        slashes: true
    }));
    if (isDev()) {
        // if in development mode, open dev tools.
        win.webContents.openDevTools();
    }   
    
    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + 
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});

ipcMain.on('ping', (event) => {
    event.sender.send('pong');
    console.log('rcvd ping, sndg pong');
});

ipcMain.on(IPC_CHANNELS.GET_RECIPE_LIST, (event) => {
    event.sender.send(IPC_CHANNELS.GET_RECIPE_LIST, model.getRecipes());
    console.log('sending recipes');
});