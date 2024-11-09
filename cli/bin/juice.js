import fs from 'fs'
import path from 'path'
import https from 'https'
import { program } from 'commander'
import env from 'dotenv'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load the env config
env.config();

program
    .version('0.0.1')
    .option('-n, --normalize', "Include the Normalize.css file")
    .option('-c, --css <file>', 'Inject any CSS file into your project')
    .option('-i, --icon <file>', 'Add any icon into your project')
    .option('-s, --swatch <file>', "Inject a swatch into your project")
    .option('-t, --theme <file>', 'Inject a theme into your project')
    .option('-f, --fonts <file>', 'Select a font sheet for your project');

program.parse(process.argv);
const options = program.opts();




// This is the store of CSS files that the user will add into their project
let files = [];

// TODO: Define logic and to pull to /css directory for config files (normalize.css | berillium.css or berillium.min.css)
// TODO: Define logic for other util CSS to be pulled into PWD

function downloadNormalize() {
    const url = process.env.BASE_URL + process.env.NORMALIZE;
    const filePath = path.join(__dirname, 'css', 'normalize.css');
    // Ensure the css directory exists
    const cssDir = path.dirname(filePath);
    if (!fs.existsSync(cssDir)) {
        fs.mkdirSync(cssDir, { recursive: true });
    }

    https.get(url, (response) => {
        if (response.statusCode === 200) {
            const file = fs.createWriteStream(filePath);
            response.pipe(file);

            file.on('finish', () => {
                file.close();
                console.log('normalize.css has been downloaded successfully.');
            });
        } else {
        console.error(`Failed to download. Status code: ${response.statusCode}`);
        }
    }).on('error', (err) => {
        console.error('Error downloading file:', err.message);
    });
}
// Helper function to download a single file
const downloadFile = (url, filePath) => {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                const file = fs.createWriteStream(filePath);
                response.pipe(file);

                file.on('finish', () => {
                    file.close();
                    resolve();
                });
            } else {
                reject(`Failed to download. Status code: ${response.statusCode}`);
            }
        }).on('error', (err) => {
            reject(`Error downloading file: ${err.message}`);
        });
    });
};

// Main function to download each CSS file separately
async function downloadBlue() {
    const base = `${process.env.BASE_URL}${process.env.COLORS}${process.env.COLOR_BLUE}blue.css`;
    const baseUrl = `${process.env.BASE_URL}${process.env.COLORS}${process.env.COLOR_BLUE}blue/`;
    const cssFiles = ['icon.css', 'shadow.css', 'background.css', 'border.css', 'text.css', 'hover.css'];

    // Ensure the css directory exists
    const cssDir = path.join(__dirname, '/css/color/blue');
    const baseDir = path.join(__dirname, '/css/color');
    if (!fs.existsSync(cssDir)) {
        fs.mkdirSync(cssDir, { recursive: true });
    }

    try {
        // Download each file individually
        await Promise.all(cssFiles.map(async (fileName) => {
            const url = `${baseUrl}${fileName}`;
            const filePath = path.join(cssDir, fileName);
            await downloadFile(url, filePath);
            console.log(`${fileName} has been downloaded successfully.`);
        }));
        /*  Create a promise for the base blue.css file */
        const baseFileUrl = base;
        const baseFilePath = path.join(baseDir, 'blue.css');
        await downloadFile(baseFileUrl, baseFilePath);
        console.log(`blue.css has been downloaded successfully.`);
        // Add the blue.css file to the files array
        files.push('blue.css');
        /* Move blue.css up one directory */

        console.log('All CSS files have been downloaded.');
    } catch (error) {
        console.error('Error downloading files:', error);
    }
}



if(options.normalize){
    downloadNormalize();
    
}
if(options.css){
    downloadBlue();
}
if(options.icon){
    // Pull the specified icon files
    // Make sure all relative paths and SVG files get pulled
}
if(options.swatch){
    // Pull the specified swatch files
}
if(options.theme){
    // Pull the specified theme files
}
if(options.fonts){
    // Pull the specified font(s) file(s)
}