let fs = require("fs");
fs.writeFileSync("./data/hello.txt","Hello Thailand");

let r = fs.readFileSync("./data/hello.txt","utf-8");
console.log(r);