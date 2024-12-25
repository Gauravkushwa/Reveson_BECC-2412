const fs = require('fs');
const path = require('path');

const operation = process.argv[2];
const fileName = process.argv[3];
const content = process.argv[4];

switch (operation) {
    case 'create':
        if (!fileName) {
            console.log('Error: File name is required!');
            process.exit(1);
        }
        fs.writeFile(fileName, ' ', (err) => {
            if (err) {
                console.log('Error in creating the file!');
            } else {
                console.log(`File '${fileName}' created.`);
            }
        });
        break;

    case 'read':
        if (!fileName) {
            console.log('Error: File name is required!');
            process.exit(1);
        }
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if (err) {
                console.log(`Error reading file: ${err.message}`);
            } else {
                console.log(`File: ${fileName}\nContent: ${data}`);
            }
        });
        break;

    case 'append':
        if (!fileName || !content) {
            console.log('Error: File name and content are required!');
            process.exit(1);
        }
        fs.appendFile(fileName, content, (err) => {
            if (err) {
                console.log(`Error appending to file: ${err.message}`);
            } else {
                console.log(`Content appended to '${fileName}'.`);
            }
        });
        break;

    case 'delete':
        if (!fileName) {
            console.log('Error: File name is required!');
            process.exit(1);
        }
        fs.unlink(fileName, (err) => {
            if (err) {
                console.log(`Error deleting file: ${err.message}`);
            } else {
                console.log(`File '${fileName}' deleted successfully.`);
            }
        });
        break;

    case 'rename':
        if (!fileName || !content) {
            console.log('Error: Both old and new file names are required!');
            process.exit(1);
        }
        fs.rename(fileName, content, (err) => {
            if (err) {
                console.log(`Error renaming file: ${err.message}`);
            } else {
                console.log(`File '${fileName}' renamed to '${content}'.`);
            }
        });
        break;

    case 'list':
        if (!fileName) {
            console.log('Error: Directory name is required!');
            process.exit(1);
        }
        fs.readdir(fileName, (err, files) => {
            if (err) {
                console.log(`Error listing files: ${err.message}`);
            } else {
                console.log('Files in directory:');
                files.forEach(file => console.log(file));
            }
        });
        break;

    default:
        console.log('Unknown command. Please use "create", "read", "append", "delete", "rename", or "list".');
        process.exit(1);
}
