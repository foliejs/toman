'use strict'

const fs = require('fs')
const Mustache = require('mustache')
const path = require('path')
const logSymbols = require('log-symbols')
const chalk = require('chalk')
const shell = require('shelljs')

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

  console.log(logSymbols.info, 'This generator can also be run with ' + chalk.yellow(spec.name))

  spec['directory'] = directory
  writeFileSync('app.mustache', spec, 'app.js')
  writeFileSync('package.mustache', spec, 'package.json')
  writeFileSync('gitignore.mustache', spec, '.gitignore')
  writeFileSync('ci.mustache', spec, '.gitlab-ci.yml')
  writeFileSync('skyfile.mustache', spec, 'skyfile.js')
  spec['directory'] = testDirectory
  writeFileSync('test.mustache', spec, 'index.test.js')
  spec['directory'] = pm2Directory
  writeFileSync('21.mustache', spec, '21.json')
  writeFileSync('ga.mustache', spec, 'ga.json')
  writeFileSync('release.mustache', spec, 'release.json')
  spec['directory'] = configDirectory
  writeFileSync('default.mustache', spec, 'default.json')
  spec['directory'] = localesDirectory
  writeFileSync('en.mustache', spec, 'en.json')
  writeFileSync('zh.mustache', spec, 'zh.json')
  spec['directory'] = libDirectory
  writeFileSync('appstart.mustache', spec, 'app.js')
  writeFileSync('router.mustache', spec, 'router.js')
  writeFileSync('utils.mustache', spec, 'utils.js')
  spec['directory'] = serviceDirectory
  writeFileSync('error.mustache', spec, 'error.js')
  // writeFileSync('limbo.mustache', spec, 'limbo.js')
  writeFileSync('sdk.mustache', spec, 'sdk.js')
  spec['directory'] = middlewareDirectory
  writeFileSync('response-renderer.mustache', spec, 'response-renderer.js')
  spec['directory'] = schemasDirectory
  writeFileSync('userSchema.mustache', spec, 'user.js')
  writeFileSync('indexSchema.mustache', spec, 'index.js')
  spec['directory'] = apiDirectory
  writeFileSync('userController.mustache', spec, 'UserController.js')
  writeFileSync('oauthController.mustache', spec, 'OauthController.js')

  console.log(chalk.underline('Im all done. Running npm install for you to install the required dependencies. If this fails, try running the command yourself.'))
  if (shell.exec('yarn --version').code !== 0) {
    shell.exec(`cd ${directory} && npm install`)
  } else {
    shell.exec(`cd ${directory} && yarn install`)
  }
}

/**
 * Creates the output project directory
 */
function createProjectDirectory (directory) {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory)
  }
}

function generateWeb (spec) {
  let directory = path.join(process.cwd(), spec.name)
  let testDirectory = path.join(directory, 'test')
  let toolsDirectory = path.join(directory, 'tools')
  let configDirectory = path.join(directory, 'config')
  let pm2Directory = path.join(directory, 'pm2')
  let srcDirectory = path.join(directory, 'src')
  let appDirectory = path.join(srcDirectory, 'app')
  let componentsDirectory = path.join(appDirectory, 'components')
  let containersDirectory = path.join(appDirectory, 'containers')
  let moduleDirectory = path.join(appDirectory, 'module')
  let stylesDirectory = path.join(appDirectory, 'styles')
  let utilsDirectory = path.join(appDirectory, 'utils')

  createProjectDirectory(directory)
  createProjectDirectory(testDirectory)
  createProjectDirectory(configDirectory)
  createProjectDirectory(pm2Directory)
  createProjectDirectory(toolsDirectory)
  createProjectDirectory(srcDirectory)
  createProjectDirectory(appDirectory)
  createProjectDirectory(componentsDirectory)
  createProjectDirectory(containersDirectory)
  createProjectDirectory(moduleDirectory)
  createProjectDirectory(stylesDirectory)
  createProjectDirectory(utilsDirectory)
  console.log(logSymbols.info, 'This generator can also be run with ' + chalk.yellow(spec.name))

  spec['directory'] = directory
  writeFileSync('front/package.mustache', spec, 'package.json')
  writeFileSync('front/postcss.config.mustache', spec, 'postcss.config.js')
  writeFileSync('front/tsconfig.mustache', spec, 'tsconfig.json')
  writeFileSync('front/tslint.mustache', spec, 'tslint.json')
  writeFileSync('front/gitignore.mustache', spec, '.gitignore')
  writeFileSync('front/gitlab-ci.mustache', spec, '.gitlab-ci.yml')
  writeFileSync('skyfile.mustache', spec, 'skyfile.js')
  spec['directory'] = testDirectory
  writeFileSync('test.mustache', spec, 'index.test.js')
  spec['directory'] = pm2Directory
  writeFileSync('21.mustache', spec, '21.json')
  writeFileSync('ga.mustache', spec, 'ga.json')
  writeFileSync('release.mustache', spec, 'release.json')
  spec['directory'] = configDirectory
  writeFileSync('default.mustache', spec, 'default.json')
  spec['directory'] = toolsDirectory
  writeFileSync('front/webpack.dev.mustache', spec, 'webpack.dev.js')
  writeFileSync('front/webpack.common.mustache', spec, 'webpack.common.js')
  writeFileSync('front/webpack.prod.mustache', spec, 'webpack.prod.js')
  spec['directory'] = srcDirectory
  writeFileSync('front/global.d.mustache', spec, 'global.d.js')
  writeFileSync('front/index.mustache', spec, 'index.html')
  writeFileSync('front/index-tsx.mustache', spec, 'index.tsx')
  writeFileSync('front/style.mustache', spec, 'style.ts')
  writeFileSync('front/common.mustache', spec, 'common.ts')
  spec['directory'] = appDirectory
  writeFileSync('front/app.component.mustache', spec, 'app.component.tsx')
  writeFileSync('front/app.index.mustache', spec, 'index.ts')

  console.log(chalk.underline('Im all done. Running npm install for you to install the required dependencies. If this fails, try running the command yourself.'))
  if (shell.exec('yarn --version').code !== 0) {
    shell.exec(`cd ${directory} && npm install`)
  } else {
    shell.exec(`cd ${directory} && yarn install`)
  }
}

/**
 * Writes the file to the output folder
 */
function writeFileSync (templateName, templateOption, filename) {
  let templateString = fs.readFileSync(path.join(__dirname, '/templates/' + templateName), 'utf8')
  console.log(logSymbols.success, `${chalk.cyan('create')} ${path.join(templateOption.directory, filename)}`)
  fs.writeFileSync(path.join(templateOption.directory, filename), Mustache.render(templateString, templateOption))
}

module.exports = {
  api: generate,
  webapp: generateWeb
}
