#!/usr/bin/env node
'use strict'

const prog = require('caporal')
const generate = require('./src/index')
const Version = require('./package.json').version

prog
  .version(Version)
  .help(`
#   _____                _ 
#  /__   \  ___    ___  | |
#    / /\/ / _ \  / _ \ | |
#   / /   | (_) || (_) || |
#   \/     \___/  \___/ |_|
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
    logger.log(`您已选择框架${options.project},请耐心等待`)
  })
  .complete((args, options, logger) => {
    logger.log('done')
  })

prog.parse(process.argv)
