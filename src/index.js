'use strict'

const fs = require('fs')
const Mustache = require('mustache')
const path = require('path')

/**
 * Generates the project files
 */
function generate (spec) {
  let directory = path.join(process.cwd(), spec.name)
  let testDirectory = path.join(directory, 'test')
  let configDirectory = path.join(directory, 'config')
  let pm2Directory = path.join(directory, 'pm2')
  createProjectDirectory(directory)
  createProjectDirectory(testDirectory)
  createProjectDirectory(configDirectory)
  createProjectDirectory(pm2Directory)
  spec['directory'] = directory
  writeFileSync('app.mustache', spec, 'app.js')
  writeFileSync('package.mustache', spec, 'package.json')
  writeFileSync('gitigonre.mustache', spec, '.gitignore')
  writeFileSync('ci.mustache', spec, '.gitlab-ci.yml')
  writeFileSync('skyfile.mustache', spec, 'skyfile.js')
  spec['directory'] = testDirectory
  writeFileSync('test.mustache', spec, 'index.test.js')
  spec['directory'] = pm2Directory
  writeFileSync('21.mustache', spec, '21.json')
  spec['directory'] = configDirectory
  writeFileSync('default.mustache', spec, 'default.json')
}

/**
 * Creates the output project directory
 */
function createProjectDirectory (directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory)
  }
}

/**
 * Writes the file to the output folder
 */
function writeFileSync (templateName, templateOption, filename) {
  let templateString = fs.readFileSync(path.join(__dirname, '/templates/' + templateName), 'utf8')
  fs.writeFileSync(path.join(templateOption.directory, filename), Mustache.render(templateString, templateOption))
}

module.exports = generate