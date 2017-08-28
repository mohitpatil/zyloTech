/**
 * Created by mohitpatil on 8/27/17.
 */

const readline = require('readline');
var os = require('os');

// Reading Files.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var counter = 1, newFileFlag = true, fileName = '', content = '';

rl.on('line', function(line) {
    input = line.trim();

    if(!input) {
        counter++;

        if(counter === 3){
            newFileFlag = true;
        }
        if(counter > 3){
            printOutput();
            rl.close();
        }
    } else {
        if(newFileFlag) {
            if(fileName) {
                // Getting File type(Extension name) and Input.
                fileName = fileName.split('.')[0];
                input = input.charAt(0).toUpperCase() + input.substr(1);
            }
            fileName += input;
        } else {
            // Search and Replace $ Character.
            input = input.replace(/\$/g, '');
            content += input + os.EOL;
        }
        counter = 1;
        newFileFlag = false;
    }
});

function printOutput(){
    console.log(fileName);
    console.log(content);
}