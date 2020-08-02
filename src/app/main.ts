import { app, BrowserWindow } from 'electron';
import * as path from 'path';

function createWindow() {
    const mainWindow = new BrowserWindow({
        height: 80,
        width: 1024,
        resizable: false,
        alwaysOnTop: true,
        skipTaskbar: true,
        fullscreenable: false,
        frame: false,
        titleBarStyle: 'hiddenInset',
        backgroundColor: '#222831',
    });

    mainWindow.loadFile(path.join(__dirname, '../../index.html'));
    // mainWindow.webContents.openDevTools();
}

app.on('ready', () => {
    createWindow();

    app.on('activate',  () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
