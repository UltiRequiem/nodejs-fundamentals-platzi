const { app, BrowserWindow } = require('electron');

const createWindow = () =>
  new BrowserWindow({
    width: 800,
    height: 600
  });


const run = (window) => window.loadFile('index.html');

app.on('ready', () => run(createWindow()));
