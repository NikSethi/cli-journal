# Cli-journal
## A command line-based journaling system built in node.js

### Setup
1. Install [node.js](https://nodejs.org/en/download/)
2. Run `npm install cli-journal` and then `npm link`
3. You should be able to run cli-journal from your command line

OR

1. [node.js](https://nodejs.org/en/download/)
2. Download the zip and extract
3. Run `npm install` and `npm link` in the directory
4. You should be able to run cli-journal from your command line

### Commands
If you enter `cli-journal [input]`, your input will be added to the journal.md file with a header stating the date and time. If it's not there, it will be automatically created.

You can write to other files by using the command `cli-journal in fileName [input]`, which will format the text in the same way, but in your desired file.

You can use the `-n` tag to add a note without a time header.

### License
MIT