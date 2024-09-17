import { program } from 'commander';
import chalk from 'chalk';
import fs from 'fs';
// node --experimental-modules index.mjs hello/there to run the program
//to fx the problem with chalk package
console.log(process.argv);
//process.argv will give access (full path) of everything written in cli
//can use this to do the given task without commander.js but it is more refined
//and easy like -h and dynamic commands
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


