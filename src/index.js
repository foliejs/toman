'use strict'

const fs = require('fs')
const Mustache = require('mustache')
const path = require('path')

/**
 * Generates the project files
 */
function generate ({spec = 'spec', name: name}) {
  createProjectDirectory(name)
  writeFileSync('server.mustache', spec, name, 'server.js')
  writeFileSync('package.mustache', spec, name, 'package.json')
}

/**
 * Creates the output project directory
 */
function createProjectDirectory (content) {
  let directory = path.join(process.cwd(), content)
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory)
  }
}

/**
 * Writes the file to the output folder
 */
function writeFileSync (templateName, templateOption, name, filename) {
  let directory = path.join(process.cwd(), name)
  let templateString = fs.readFileSync(path.join(__dirname, '/templates/' + templateName), 'utf8')
  fs.writeFileSync(path.join(directory, filename), Mustache.render(templateString, templateOption))
}

module.exports = generate