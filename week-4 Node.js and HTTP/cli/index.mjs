//cli
// A CLI (Command-Line Interface) is a feature of a program that allows users to interact with it 
// by typing commands in a terminal or command prompt, rather than using a graphical interface.
// Node.js provides a basic CLI to run JavaScript code, manage packages, and run scripts.
// Commander.js is a library that helps you build CLIs more easily by handling commands, options,
// and arguments in Node.js applications.
import { program } from 'commander';
import chalk from 'chalk';
import fs from 'fs';
// node --experimental-modules index.mjs hello/there to run the program
//to fx the problem with chalk package

console.log(process.argv);
//process.argv will give access (full path) of everything written in cli
//can use this to do the given task without commander.js but it is more refined
//and easy like it provides -h and dynamic commands out of the box

program
  .name('words-counter-util')
  .description('CLI to count words from a file')
  .version('1.0.0');

program.command('countWords')
  .description('count  the number of words present in the file')
  .argument('<file>', 'target file')
  .action((str) => {
    try{
    const result=fs.readFileSync(str,{encoding:'utf-8'});
    const wordsArray=result.split(' ');
    console.log(chalk.blue(`The number of words in ${str} are => ${wordsArray.length}`));
    }catch(err){
      console.log(chalk.red.bold('Error::'+err.message));
    }
  });

  program.parse();

  // alias wordcli="node --experimental-modules index.mjs" in bash


