const { program } = require('commander');
const { exec } = require('child_process');
const path = require('path');
const env = require ('dotenv');
const AWS = require('aws-sdk');

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
    .option('-c', '--color <file>', 'Inject any Color file into your project')
    .option('-i', '--icon <file>', 'Add any icon into your project')
    .option('-s', '--swatch <file>', "Inject a swatch into your project")
    .option('-t', '--theme <file>', 'Inject a theme into your project')
    .option('-f', '--fonts <file>', 'Select a font sheet for your project');
    
const options = program.opts();

// This is the store of CSS files that the user will add into their project
let files = [];


if(options.normailze){
    // Pull the normalize.css file and put it into the /css directory of the project
}
if(options.color){
    // Pull the specified color files
}
if(options.icon){
    // Pull the specified color files
}
if(options.swatch){
    // Pull the specified swatch file
}
if(options.theme){
    // Pull the specified theme files
}
if(options.fonts){
    // Pull the specified font(s) file(s)
}