/**
 * Created by mohitpatil on 8/27/17.
 */

const readline = require('readline');
var os = require('os');

//Creating interface to read files.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var totalCase = 0, counter = 1, evalString = '' ;

rl.on('line', function(line){
    input = line.trim();

    if(!totalCase) {
        totalCase = input;
    } else {
        evalString += eval(input) + os.EOL;

        if(counter == totalCase) {
            console.log(evalString);
            rl.close();
        }
        counter++;
    }
});

//Creating Method
String.prototype.XyloHack = function(n) {
    var string = '';

    for (var i = 0; i < this.length; i++) {
        string += this[i];
    }

    //Checking if Number is even or odd and then converting.
    if(n % 2) {
        string = string.toLowerCase();
    } else {
        string = string.toUpperCase();
    }
    return string;
};