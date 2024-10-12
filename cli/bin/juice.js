const { program } = require('commander');
const { exec } = require('child_process');
const path = require('path');
const env = require ('dotenv');
const AWS = require('aws-sdk');
const fs = require('fs');

// Load the env config
env.config();

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

program
    .version('0.0.1')
    .option('-n', '--normalize', "Include the Normalize.css file")
    .option('-c', '--css <file>', 'Inject any CSS file into your project')
    .option('-i', '--icon <file>', 'Add any icon into your project')
    .option('-s', '--swatch <file>', "Inject a swatch into your project")
    .option('-t', '--theme <file>', 'Inject a theme into your project')
    .option('-f', '--fonts <file>', 'Select a font sheet for your project');
    
const options = program.opts();
AWS.config.update({logger: console});


// This is the store of CSS files that the user will add into their project
let files = [];

// TODO: Define logic and to pull to /css directory for config files (normalize.css | berillium.css or berillium.min.css)
// TODO: Define logic for other util CSS to be pulled into PWD


if(options.normalize){
    // Pull the normalize.css file and put it into the /css directory of the project
    s3.getObject({
        Bucket: process.env.AWS_BUCKET,
        Region: process.env.AWS_REGION,
        Key: 'berillium/css/normalize.css',
    })
    .promise()
    .then(data => {
        fs.writeFileSync(path.join(__dirname, 'css', 'normalize.css'), data.Body);
        console.log('Normalize.css has been added to your project');
    })
    .catch(err => {
        console.log(err);
    });
}
if(options.css){
    // Pull the specified CSS files
    //  DO NOT ALLOW ICONS, SWATCHES, THEMES, OR FONTS TO BE ADDED HERE
    //  ONLY ALLOW CSS FILES TO BE ADDED HERE
    s3.getObject({
        Bucket: process.env.AWS_BUCKET,
        Key: `berilliumcss/css/${options.css}`,
    })
    .promise()
    .then(data => {
        fs.writeFileSync(path.join(__dirname, 'css', options.css), data.Body);
    })
    .catch(err => {
        console.log(err);
    });

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