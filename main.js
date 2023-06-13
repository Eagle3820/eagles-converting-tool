const { app, BrowserWindow } = require('electron');
const { selectFolder, getInputFiles } = require('./file-manager');

app.on('ready', () => {
  // Create the main window
  const mainWindow = new BrowserWindow({
    width: 800, // Set the initial width of the window
    height: 600, // Set the initial height of the window
  });

  // Load the HTML file for the main window
  mainWindow.loadFile('index.html');

  // Optional: Open the DevTools for debugging
  // mainWindow.webContents.openDevTools();

  // Example usage of getInputFiles function
  const inputFolderPath = selectFolder();
  if (inputFolderPath) {
    const inputFiles = getInputFiles(inputFolderPath);
    console.log(inputFiles);
    // Use the inputFiles array as needed
  }
});
