'use strict'

const fs = require('fs')
const Mustache = require('mustache')
const path = require('path')
const projectDirectory = path.join(process.cwd(), 'project')

/**
 * Generates the project files
 */
function generate (spec) {
  createProjectDirectory()
  writeFileSync('server.mustache', spec, 'server.js')
  writeFileSync('package.mustache', spec, 'package.json')
}

/**
 * Creates the output project directory
 */
function createProjectDirectory (content) {
  if (!fs.existsSync(projectDirectory)) {
    fs.mkdirSync(projectDirectory)
  }
}

/**
 * Writes the file to the output folder
 */
function writeFileSync (templateName, templateOption, filename) {
  let templateString = fs.readFileSync(path.join(__dirname, '/templates/' + templateName), 'utf8')
  fs.writeFileSync(path.join(projectDirectory, filename), Mustache.render(templateString, templateOption))
}

module.exports = generate