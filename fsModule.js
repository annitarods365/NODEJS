//Sync
// console.log('Start process..');
// const {readFileSync,writeFileSync} = require('fs');
// const read1 = readFileSync('./data/hello.txt','utf-8');
// const read2 = readFileSync('./data/hello2.txt','utf-8');
// console.log("Read 2 files done");

// writeFileSync('./data/newFile.txt','Result is : '+read1+','+read2);
// console.log('Write file done');
// writeFileSync('./data/newFile.txt','New Result is : '+read1+','+read2,{flag:'a'});
// console.log('Append file done');

//Async
const {readFile,writeFile} = require('fs');
console.log("Start process..");
readFile('./data/hello.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('Read file done.');
    writeFile('./data/fileCallback2.txt',' Append Result8: '+result,{flag:'a'},(err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log('Write file done');
    });
});
console.log('Do next task...');

