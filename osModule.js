const os = require('os');
// const userinfo = os.userInfo();
// console.log(userinfo);
// console.log(os.version());
// console.log(os.uptime());

const currentOs = {
   // cpu:os.arch(),
    //os_constant:os.constants,
   // cpu_arr:os.cpus(),
    freeMem_space: os.freemem(),
    freeMem:os.freemem(),
    totalMem:os.totalmem(),
    hostName:os.hostname(),
    platform:os.platform(),
    tmpDir:os.tmpdir(),
    osName:os.type(),
    upTime:os.uptime(),
    current_User:os.userInfo()
}

console.log(currentOs);