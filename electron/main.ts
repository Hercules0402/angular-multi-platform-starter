import { app, BrowserWindow } from 'electron'
import * as path from 'path'
import * as url from 'url'

let win: BrowserWindow;

function createWindow() {
    win = new BrowserWindow({ width: 800, height: 600 })

    win.loadURL(
      url.format({
        pathname: path.join(__dirname, `/../../dist/angular-multi-platform-starter/index.html`),
        protocol: 'file:',
        slashes: true,
      })
    )
  
    // win.webContents.openDevTools()
  
    win.on('closed', () => {
      win = null
    })
}

app.on("ready", createWindow);

// on macOS, closing the window doesn't quit the app
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// initialize the app's main window
app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});