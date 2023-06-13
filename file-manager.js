const fs = require('fs');
const path = require('path');
const { app, dialog } = require('electron');

// Function to get the list of files in the input folder
function getInputFiles(inputFolderPath) {
  return fs.readdirSync(inputFolderPath);
}

function selectFolder() {
  const focusedWindow = BrowserWindow.getFocusedWindow();
  
  const folder = dialog.showOpenDialogSync(focusedWindow, {
    properties: ['openDirectory'],
  });

  if (folder && folder.length > 0) {
    return folder[0];
  }

  return null;
}

module.exports = {
  selectFolder,
  getInputFiles,
};