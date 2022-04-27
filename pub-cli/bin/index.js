#!/usr/bin/env node
var program = require('commander');

program
    .version('1.0.0')
    .option('-a, --listall', 'Get the pubs list')
    .option('-o, --listopenpubs', 'Get the pubs list of all the open pubs for today.')
    .parse(process.argv);

if (program.listall) {
    require('../src/main').getListPub();
}

if (program.listopenpubs) {
    require('../src/main').getListPubOpen();
}