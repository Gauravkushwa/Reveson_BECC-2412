// // Import required modules
// const crypto = require('crypto');
// const fs = require('fs');
// const readline = require('readline');
// const { v4: uuidv4 } = require('uuid');
// const os = require('os');
// const { performance } = require('perf_hooks');

// // Function to encrypt a string
// function encryptString(input) {
//     const algorithm = 'aes-256-cbc';
//     const key = crypto.randomBytes(32);
//     const iv = crypto.randomBytes(16);

//     const cipher = crypto.createCipheriv(algorithm, key, iv);
//     let encrypted = cipher.update(input, 'utf-8', 'hex');
//     encrypted += cipher.final('hex');

//     console.log('Encrypted String:', encrypted);
//     console.log('Encryption Key:', key.toString('hex'));
//     console.log('IV:', iv.toString('hex'));
// }

// // Function to generate a random string using UUID
// function generateUUID() {
//     const uuid = uuidv4();
//     console.log('Generated UUID:', uuid);
// }

// // Function to read large files using streams
// function readLargeFileWithStream(filePath) {
//     const start = performance.now();
//     const stream = fs.createReadStream(filePath, { encoding: 'utf-8' });

//     stream.on('data', (chunk) => {
//         // Process each chunk (optional)
//     });

//     stream.on('end', () => {
//         const end = performance.now();
//         console.log(`Stream read completed in ${(end - start).toFixed(2)} ms`);
//     });

//     stream.on('error', (err) => {
//         console.error('Error reading file with stream:', err.message);
//     });
// }

// // Function to read large files using normal fs.readFile
// function readLargeFileWithFS(filePath) {
//     const start = performance.now();

//     fs.readFile(filePath, 'utf-8', (err, data) => {
//         if (err) {
//             console.error('Error reading file with fs:', err.message);
//             return;
//         }

//         const end = performance.now();
//         console.log(`FS read completed in ${(end - start).toFixed(2)} ms`);
//     });
// }

// // Function to print system details using OS module
// function printSystemDetails() {
//     console.log('System Details:');
//     console.log('Architecture:', os.arch());
//     console.log('CPU Info:', os.cpus());
//     console.log('Free Memory:', os.freemem());
//     console.log('Total Memory:', os.totalmem());
//     console.log('Hostname:', os.hostname());
//     console.log('Platform:', os.platform());
//     console.log('Uptime:', os.uptime(), 'seconds');
// }

// // Command-line argument handling
// const args = process.argv.slice(2);
// const command = args[0];

// switch (command) {
//     case 'encrypt':
//         const input = args[1] || 'Hello, Good Morning';
//         encryptString(input);
//         break;

//     case 'uuid':
//         generateUUID();
//         break;

//     case 'stream-read':
//         const streamFilePath = args[1];
//         if (!streamFilePath) {
//             console.error('Please provide a file path for stream read.');
//             break;
//         }
//         readLargeFileWithStream(streamFilePath);
//         break;

//     case 'fs-read':
//         const fsFilePath = args[1];
//         if (!fsFilePath) {
//             console.error('Please provide a file path for fs read.');
//             break;
//         }
//         readLargeFileWithFS(fsFilePath);
//         break;

//     case 'system-details':
//         printSystemDetails();
//         break;

//     default:
//         console.log('Invalid command. Available commands: encrypt, uuid, stream-read, fs-read, system-details');
// }
// // Import required modules
// const crypto = require('crypto');
// const fs = require('fs');
// const readline = require('readline');
// const { v4: uuidv4 } = require('uuid');
// const os = require('os');
// const { performance } = require('perf_hooks');

// // Function to encrypt a string
// function encryptString(input) {
//     const algorithm = 'aes-256-cbc';
//     const key = crypto.randomBytes(32);
//     const iv = crypto.randomBytes(16);

//     const cipher = crypto.createCipheriv(algorithm, key, iv);
//     let encrypted = cipher.update(input, 'utf-8', 'hex');
//     encrypted += cipher.final('hex');

//     console.log('Encrypted String:', encrypted);
//     console.log('Encryption Key:', key.toString('hex'));
//     console.log('IV:', iv.toString('hex'));
// }

// // Function to generate a random string using UUID
// function generateUUID() {
//     const uuid = uuidv4();
//     console.log('Generated UUID:', uuid);
// }

// // Function to read large files using streams
// function readLargeFileWithStream(filePath) {
//     const start = performance.now();
//     const stream = fs.createReadStream(filePath, { encoding: 'utf-8' });

//     stream.on('data', (chunk) => {
//         // Process each chunk (optional)
//     });

//     stream.on('end', () => {
//         const end = performance.now();
//         console.log(`Stream read completed in ${(end - start).toFixed(2)} ms`);
//     });

//     stream.on('error', (err) => {
//         console.error('Error reading file with stream:', err.message);
//     });
// }

// // Function to read large files using normal fs.readFile
// function readLargeFileWithFS(filePath) {
//     const start = performance.now();

//     fs.readFile(filePath, 'utf-8', (err, data) => {
//         if (err) {
//             console.error('Error reading file with fs:', err.message);
//             return;
//         }

//         const end = performance.now();
//         console.log(`FS read completed in ${(end - start).toFixed(2)} ms`);
//     });
// }

// // Function to print system details using OS module
// function printSystemDetails() {
//     console.log('System Details:');
//     console.log('Architecture:', os.arch());
//     console.log('CPU Info:', os.cpus());
//     console.log('Free Memory:', os.freemem());
//     console.log('Total Memory:', os.totalmem());
//     console.log('Hostname:', os.hostname());
//     console.log('Platform:', os.platform());
//     console.log('Uptime:', os.uptime(), 'seconds');
// }

// // Command-line argument handling
// const args = process.argv.slice(2);
// const command = args[0];

// switch (command) {
//     case 'encrypt':
//         const input = args[1] || 'Hello, Good Morning';
//         encryptString(input);
//         break;

//     case 'uuid':
//         generateUUID();
//         break;

//     case 'stream-read':
//         const streamFilePath = args[1];
//         if (!streamFilePath) {
//             console.error('Please provide a file path for stream read.');
//             break;
//         }
//         readLargeFileWithStream(streamFilePath);
//         break;

//     case 'fs-read':
//         const fsFilePath = args[1];
//         if (!fsFilePath) {
//             console.error('Please provide a file path for fs read.');
//             break;
//         }
//         readLargeFileWithFS(fsFilePath);
//         break;

//     case 'system-details':
//         printSystemDetails();
//         break;

//     default:
//         console.log('Invalid command. Available commands: encrypt, uuid, stream-read, fs-read, system-details');
// }
