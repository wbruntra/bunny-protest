#!/usr/bin/env node
"use strict";

const protest = require('./index');

var argv = require('minimist')(process.argv.slice(2));

const lineLength = Number(argv.l) || 12;
const message = argv['_'].join(' ');
protest(message, lineLength);