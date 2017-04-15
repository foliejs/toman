#!/usr/bin/env node
'use strict'

const prog = require('caporal')
const Version = require('./package.json').version

prog
  .version(Version)
  .help(`
#    _____               _ 
#   |_   _|  ___   ___  | |
#     | |   / _ \ / _ \ | |
#     |_|   \___/ \___/ |_|
#                             
  `)
  .command('generate', 'generate framework')
  .help(`alias g`)
  .alias('g')
  .argument('<project>', '项目框架', (opt) => {
    let supportWork = ['koa1', 'koa2', 'sails', 'express', 'restify', 'strongLoop']
    if (supportWork.includes(opt) === false) {
      throw new Error('暂不支持该框架')
    }
    return opt.toUpperCase()
  })
  .action((args, options, logger) => {
    logger.info('arguments: %j', args)
    logger.info('options: %j', options)
    console.log(`您已选择框架${options},请耐心等待`)
  })
  .complete((args, options, logger) => {
    logger.log('done')
  })

prog.parse(process.argv)
