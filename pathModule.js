const paths = require('path');
const filepath = paths.join('data','hello','hello.txt');
//console.log("File:"+filepath);
const pathObj = {
    separatePathBy:paths.sep,
    delimiter:paths.delimiter  //ตัวคั่น window ; แต่ OS :   
}
// console.log(pathObj);
// console.log(paths.parse(filepath)); 
 // basepath:paths.basename(filepath), //get last path
    // directory:paths.dirname(filepath),
    // extsionFile:paths.extname(filepath),
// const changeExt = paths.basename(filepath,'.txt'); //remove some word in the last path
// console.log("Change "+pathObj.basepath+' to ' + changeExt);

//console.log(process.env.PATH);
//console.log(process.env.PATH.split(paths.delimiter));
// console.log(paths.dirname(filepath));
// console.log(paths.extname(filepath));
// console.log(paths.basename(filepath));
// console.log(paths.basename(filepath,'.txt'));
// const pformat = {
//     dir:paths.dirname(),
//     filename:paths.basename(filepath)
// }
// console.log(paths.format(pformat));
console.log(paths.format(paths.parse(filepath)));
const absolute = paths.resolve(__dirname,'data','hello.txt');
console.log(absolute);