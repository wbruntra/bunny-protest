#!/usr/bin/env node
const protest = require('./bunny');
var argv = require('minimist')(process.argv.slice(2));

const lineLength = Number(argv.l) || 12;
const message = argv['_'].join(' ');

protest(message, lineLength)