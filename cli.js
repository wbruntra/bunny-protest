#!/usr/bin/env node
const protest = require('./index');
const parseArgs = require('minimist');

const run = args => {
  const opts = {
    boolean: 'p'
  };
  const argv = parseArgs(args, opts);

  const lineLength = Number(argv.l) || 12;
  const noPadding = argv.p || false;
  const message = argv['_'].join(' ');

  if (argv.h) {
    console.log(`
    Basic usage:
      > bunnyprotests your message goes here
  
    Output:
  
      |￣￣￣￣￣￣￣|
      | YOUR MESSAGE |
      | GOES HERE    |
      |＿＿＿＿＿＿＿|
      (__/) ||
      (•ㅅ•)||
      / 　 づ
  
    Options:
      -p  no padding of lines (default: false)
  
      -l [number] Specify line length (default: 12)`);
  } else {
    protest(message, lineLength, noPadding);
  }
};

if (require.main === module) {
  run(process.argv.slice(2));
}

module.exports = run;
