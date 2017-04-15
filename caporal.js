#!/usr/bin/env node
'use strict'

const prog = require('caporal')
const Version = require('./package.json').version

prog
  .version(Version)
  .help(`Nice Generate !!`)
  .command('generate', 'Order a pizza')
  .help(`My Custom help about the command !!`)
  .alias('g')
  .argument('<project>', '项目框架', ['koa1', 'koa2', 'sails', 'express', 'restify', 'strongLoop'])
  .complete((args, options, logger) => {
    logger.log('I\'m cooking a pizza !')
    console.log(`您已选择框架${options},请耐心等待`)
  })

prog.parse(process.argv)
