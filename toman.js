#!/usr/bin/env node
'use strict'

const prog = require('caporal')
const generate = require('./src/index')
const Version = require('./package.json').version

prog
  .version(Version)
  .help(`
#  ▄▄▄▄▄            ▄▄▌  
#  •██  ▪     ▪     ██•  
#   ▐█.▪ ▄█▀▄  ▄█▀▄ ██▪  
#   ▐█▌·▐█▌.▐▌▐█▌.▐▌▐█▌▐▌
#   ▀▀▀  ▀█▄▀▪ ▀█▄▀▪.▀▀▀                                                            
  `)
  .command('generate', 'generate framework')
  .help(`alias: toman g`)
  .alias('g')
  .option('--name <name>', '项目名称')
  .option('--project <project>', '项目框架', (opt) => {
    let supportWork = ['koa1', 'koa2', 'sails', 'express', 'restify', 'strongLoop']
    if (supportWork.includes(opt) === false) {
      throw new Error('暂不支持该框架')
    }
    return opt.toUpperCase()
  })
  .option('--port <port>', '项目端口号')
  .action((args, options, logger) => {
    let [name, project, port] = [options.name, options.project, options.port]
    if (!name) {
      throw Error('请输入项目名称')
    }
    let spec = {
      port: port || 3000,
      name: name,
      project: project || 'express'
    }
    generate(spec)
  })

prog.parse(process.argv)
