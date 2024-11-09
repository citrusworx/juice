import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper function to download a single file
const downloadFile = (url, filePath) => {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            console.log(`Fetching ${url} - Status: ${response.statusCode}`);
            if (response.statusCode === 200) {
                const file = fs.createWriteStream(filePath);
                response.pipe(file);

                file.on('finish', () => {
                    file.close();
                    resolve();
                });
            } else {
                reject(`Failed to download ${url}. Status code: ${response.statusCode}`);
            }
        }).on('error', (err) => {
            reject(`Error downloading file from ${url}: ${err.message}`);
        });
    });
};

// Main function to download each CSS file separately
async function fetch_color(color) {
    // Base color file (e.g., blue.css) and modular file base URL
    const base = `${process.env.BASE_URL}${process.env.COLORS}/${color}/${color}.css`;
    const baseUrl = `${process.env.BASE_URL}${process.env.COLORS}/${color}/${color}/`;

    console.log('Base URL for color file:', base);
    console.log('Base URL for modular files:', baseUrl);

    const cssFiles = ['icon.css', 'shadow.css', 'background.css', 'border.css', 'text.css', 'hover.css'];

    // Ensure the color-specific directory exists
    const cssDir = path.join('', 'css', `/color/${color}/${color}`);
    if (!fs.existsSync(cssDir)) {
        fs.mkdirSync(cssDir, { recursive: true });
    }

    try {
        // Download each modular CSS file
        await Promise.all(cssFiles.map(async (fileName) => {
            const url = `${baseUrl}${fileName}`;
            const filePath = path.join(cssDir, fileName);
            console.log(`Attempting to download from: ${url}`);
            await downloadFile(url, filePath);
            console.log(`${fileName} has been downloaded successfully.`);
        }));

        // Download the main color CSS file (e.g., blue.css)
        const baseFilePath = path.join(process.env.BASE, `/css/color/${color}/${color}.css`);
        await downloadFile(base, baseFilePath);
        console.log(`${color}.css has been downloaded successfully.`);
    
        console.log('All CSS files have been downloaded.');
    } catch (error) {
        console.error('Error downloading files:', error);
    }
}

export default fetch_color;
