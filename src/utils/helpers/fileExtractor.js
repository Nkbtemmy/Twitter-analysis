const path = require("path");
const fs = require("fs");
const unzipper = require("unzipper");

/**
 * Unzips a file and returns the path to the unzipped folder.
 * @param {string} zipFilePath - Path to the zip file.
 * @param {string} outputFolder - Path to the folder where the file will be unzipped.
 * @returns {string|null} - Path to the unzipped folder or null if unsuccessful.
 */
function unzipFile(zipFilePath, outputFolder) {
	try {
		fs.createReadStream(zipFilePath).pipe(
			unzipper.Extract({ path: outputFolder }),
		);

		return outputFolder;
	} catch (error) {
		console.error("Error during unzip:", error.message);
		return null;
	}
}

// Example usage:
const zipFilePath = path.join(__dirname, "./files/query2_ref.zip");
const outputFolderPath = path.join(__dirname, "./files");

const unzippedFolderPath = unzipFile(zipFilePath, outputFolderPath);

if (unzippedFolderPath) {
	console.log("Unzipped folder path:", unzippedFolderPath);

	// Now you can read the contents of the unzipped folder as needed.
	// For example, you can list the files in the folder:
	const filesInFolder = fs.readdirSync(unzippedFolderPath);
	console.log("Files in the unzipped folder:", filesInFolder);
} else {
	console.error("Failed to unzip the file.");
}
module.exports = unzipFile;
