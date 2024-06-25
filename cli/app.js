const { program } = require('commander');
const { exec } = require('child_process');
const path = require('path');
const env = require ('dotenv')

program
    .version('0.0.1')
    .option('-n', '--normalize', "Include the Normalize.css file")
    .option('-c', '--css <file>', 'Inject any CSS file into your project')
    .option('-s', '--swatch <file>', "Inject a swatch into your project")
    .option('t', '--theme <file>', 'Inject a theme into your project')
    .option('-f', '--fonts <file>', 'Select a font sheet for your project')
    
const options = program.opts();

let files = [];

if(options.normailze){
    // Pull the normalize.css file and put it into the /css directory of the project
}
if(options.color){
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