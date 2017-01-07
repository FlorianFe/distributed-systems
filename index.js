var electron = require('electron');
var electronApp = electron.app;
var ElectronBrowserWindow = electron.BrowserWindow;
var path = require('path');
var url = require('url');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow;
function createWindow() {
    // Create the browser window.
    mainWindow = new ElectronBrowserWindow({
        width: 800,
        height: 600,
        icon: 'icon.png'
    });
    // and load the index.html of the app.
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/index.html'),
        protocol: 'file:',
        slashes: true
    }));
    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
}
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
electronApp.on('ready', createWindow);
// Quit when all windows are closed.
electronApp.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        electronApp.quit();
    }
});
electronApp.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});
// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
//# sourceMappingURL=index.js.map