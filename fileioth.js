let fs = require("fs");
fs.writeFileSync("./data/hello2.txt","สวัสดีประเทศไทย วันนี้ฝนตกพร่ำๆทั้งวัน");
let r = fs.readFileSync("./data/hello2.txt","utf-8");
console.log(r);