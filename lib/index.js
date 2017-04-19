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
  let localesDirectory = path.join(directory, 'locales')
  let libDirectory = path.join(directory, 'lib')
  let apiDirectory = path.join(libDirectory, 'api')
  let serviceDirectory = path.join(libDirectory, 'services')
  let middlewareDirectory = path.join(libDirectory, 'middlewares')
  let schemasDirectory = path.join(libDirectory, 'schemas')
  createProjectDirectory(directory)
  createProjectDirectory(testDirectory)
  createProjectDirectory(configDirectory)
  createProjectDirectory(pm2Directory)
  createProjectDirectory(localesDirectory)
  createProjectDirectory(libDirectory)
  createProjectDirectory(apiDirectory)
  createProjectDirectory(serviceDirectory)
  createProjectDirectory(middlewareDirectory)
  createProjectDirectory(schemasDirectory)
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
  spec['directory'] = localesDirectory
  writeFileSync('en.mustache', spec, 'en.json')
  writeFileSync('zh.mustache', spec, 'zh.json')
  spec['directory'] = libDirectory
  writeFileSync('appstart.mustache', spec, 'app.js')
  writeFileSync('router.mustache', spec, 'router.js')
  spec['directory'] = serviceDirectory
  writeFileSync('error.mustache', spec, 'error.js')
  writeFileSync('limbo.mustache', spec, 'limbo.js')
  writeFileSync('sdk.mustache', spec, 'sdk.js')
  spec['directory'] = middlewareDirectory
  writeFileSync('response-renderer.mustache', spec, 'response-renderer.js')
  spec['directory'] = schemasDirectory
  writeFileSync('userSchema.mustache', spec, 'user.js')
  writeFileSync('indexSchema.mustache', spec, 'index.js')
  spec['directory'] = apiDirectory
  writeFileSync('userController.mustache', spec, 'UserController.js')
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