const { exec } = require('child_process');

const execCli = (c) => exec(c, (e, o) => (e ? console.log(e) : console.log(o)));

execCli('ls -la');
