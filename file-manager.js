const fs = require('fs');
const path = require('path');
const { dialog } = require('electron');

// Function to get the list of files in the input folder
function getInputFiles(inputFolderPath) {
  return fs.readdirSync(inputFolderPath);
}

function selectFolder() {
  const folder = dialog.showOpenDialogSync({
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
