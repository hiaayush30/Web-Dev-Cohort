import { program } from 'commander';
import chalk from 'chalk';
import fs from 'fs';
// node --experimental-modules index.mjs hello/there to run the program
//to fx the problem with chalk package
program
  .name('words-counter-util')
  .description('CLI to count words from a file')
  .version('1.0.0');

program.command('count')
  .description('count  the number of words present in the file given as string input')
  .argument('<file>', 'target file')
  .action((str, options) => {
    try{
    const result=fs.readFileSync(str,{encoding:'utf-8'});
    const wordsArray=result.split(' ');
    console.log(chalk.blue(`The number of words in ${str} are => ${wordsArray.length}`));
    }catch(err){
      console.log(chalk.red('Error::'+err.message));
    }
  });

  program.parse();


