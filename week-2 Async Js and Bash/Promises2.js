// Q: Write a function that
// Reads the contents of a file
// Trims the extra space from the left and right
// Writes it back to the file
const fs=require('fs');

const promisifiedReading=()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('yo.txt','utf-8',(err,data)=>{
            if(err)reject(err)
            fs.writeFile('yo.txt',data.trim(),(err,data)=>{
               if(err) reject(err);
               resolve('operation performed successfully');
            })
        })
    })
};

promisifiedReading().then(resolve=>{console.log(resolve)}).catch(reject=>{console.log('error::'+reject)})