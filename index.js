#!/usr/bin/env node
'use strict';

const program = require('commander'),
    fs = require('fs'),
    dateformat = require('dateformat');

var fileName = 'journal.md';
var val = 2;
var bool = false;

function noheader() {
    bool = true;
    val++;
}

program
    .version('0.0.1')
    .option('-n --noheader', 'Adds to last note without a header', noheader)
    .command('in <input-file>')
    .description('journal in a different file by passing in the file you want to journal in')
    .action(function(inputFile){
        fileName = inputFile;
        val += 2;
    });

program.parse(process.argv);

var now = new Date();
var time = "# " + dateformat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");
var input = process.argv.slice(val);
var out = input.join(' ');
if (bool) {
    time = ""
}
out = time + "\n" + out + "\n";


fs.stat(fileName, function(err, stat){
    if (err) {
        fs.appendFile(fileName, out);
    } else {
        var data = fs.readFileSync(fileName);
        var fd = fs.openSync(fileName, 'w+');
        var buffer = new Buffer(out);
        fs.writeSync(fd, buffer, 0, buffer.length); //write new data
        fs.appendFile(fileName, data); //append old data
        fs.close(fd);
    }
});
console.log(out);
