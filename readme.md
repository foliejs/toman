```bash
  _____      U  ___ u   __  __       _        _   _     
 |_ " _|      \/"_ \/ U|' \/ '|u U  /"\  u   | \ |"|    
   | |        | | | | \| |\/| |/  \/ _ \/   <|  \| |>   
  /| |\   .-,_| |_| |  | |  | |   / ___ \   U| |\  |u   
 u |_|U    \_)-\___/   |_|  |_|  /_/   \_\   |_| \_|    
 _// \\_        \\    <<,-,,-.    \\    >>   ||   \\,-.
(__) (__)      (__)    (./  \.)  (__)  (__)  (_")  (_/                                                

```
[![Build Status](https://travis-ci.org/SensitiveMix/node-cluster-email.svg?branch=master)](https://travis-ci.org/SensitiveMix/node-cluster-email)
[![codecov](https://codecov.io/gh/SensitiveMix/node-cluster-email/branch/master/graph/badge.svg)](https://codecov.io/gh/SensitiveMix/node-cluster-email)


A module for taking advantage of the built-in node project in node LTS according to auto generation config.

## Installation
```bash
yarn global add toman
```


## Usage
Initialize toman plugin with the generated project, with the given options.

 Options:

  - `project` select project
  - `type` project type
  - `port` project port
  - `name` project name  
  - `h` display help
  - `no-color` disable color
  - `quiet` quiet mode - only displays warn and error messages
  
## Example
```bash
// generate typescript webapp base on react
toman g webapp --name web --port 10022

// generate api service base koa1.0
toman g api --name apiservice --port 10023
```


## api Directory Layout

  ```shell
  ├── config/                     # constant config
  │   locales/                    # string id translate
  │   pm2/                        # deploy script
  │   ├── 21.json                 # test script
  │   ├── ga.json                 # ga script
  │   └── release.json            # release script
  ├── lib/                        # application source code
  │   ├── api/                    # api controller
  │   ├── middleware/             # api middleware
  │   ├── schemas/                # database
  │   ├── services/               # third part service
  │   ├── route.js                # api routes
  │   └── app.js                  # backend entry point.
  ├── node_modules/               # libraries and utilities
  ├── app.js                      # startup
  ├── package.json                # project pkg
  ├── skyfile.js                  # deploy script
  ├── .gitignore                  # ignore file
  ├── .gitlab-ci.yml              # ci test
  └── test/                       # Unit tests and test-cov
  ```
  
## webapp Directory Layout

  ```shell
  ├── config/                     # constant config
  │   pm2/                        # deploy script
  │   ├── 21.json                 # test script
  │   ├── ga.json                 # ga script
  │   └── release.json            # release script
  ├── src/                        # application source code
  │   ├── app/                    # application config
  │   ├── common.ts               # common ts
  │   ├── global.d.js             # global varible
  │   ├── index.html              # start page
  │   ├── index.tsx               # start ts
  │   └── style.ts                # style reference
  ├── node_modules/               # libraries and utilities
  ├── postcss.config.js           # post css cfg
  ├── tsconfig.json               # ts cfg
  ├── tslint.json                 # eslint standard
  ├── package.json                # project pkg
  ├── skyfile.js                  # deploy script
  ├── .gitignore                  # ignore file
  ├── .gitlab-ci.yml              # ci test
  └── test/                       # Unit tests and test-cov
  ```

## Screenshot

<img src="https://cloud.githubusercontent.com/assets/16094680/25217428/72430d46-25d9-11e7-9831-82cb88909ab5.png">



## License

MIT License

Copyright (c) 2017 Folie.js
