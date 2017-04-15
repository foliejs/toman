#!/usr/bin/env node
'use strict'

const prog = require('caporal')
const Version = require('./package.json').version

prog
  .version(Version)
  .help(`Nice Generate !!`)
  .command('generate', 'Order a pizza')
  .help(`自定制生成项目的类型`)
  .alias('g')
  .argument('<project>', '项目框架', ['koa1', 'koa2', 'sails', 'express', 'restify', 'strongLoop'])
  .action((args, options, logger) => {
    logger.log('I\'m cooking a pizza !')
    console.log(`您已选择框架${options},请耐心等待`)
  })
  .complete((args, options, logger) => {
    logger.log('done')
  })

prog.parse(process.argv)
