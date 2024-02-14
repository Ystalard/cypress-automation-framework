# Cypress-automation framework formation
## Prerequisite
1. Assume working on windows
2. Install [node.js](https://nodejs.org/en/download/current)
3. Install [git and git bash](https://gitforwindows.org/)
4. Install [VS code](https://code.visualstudio.com/download)
5. git, npm knowledges

## Setup dev environment
1. Create Cypress-automation-framework folder
2. Open VS code on this folder
3. Open git bash terminal on VS code<br/>![image](https://github.com/Ystalard/cypress-automation-framework/assets/58308727/194c9a40-6221-4505-bd97-6fdeabb1220b)
   - run `npm init`
      - follow the steps and initialize the fields as you want. For instance:<br/>
```
{
  "name": "cypress-automation-framework",
  "version": "1.0.0",
  "description": "Cypress Automation Framework",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Nicolas Parisse",
  "license": "ISC"
}
```
4. Install cypress: `npm install --save-dev cypress@12.14.0`
5. Create .gitignore file and remove node_modules
6. Open cypress for the first time through git bash: `./node_modules/.bin/cypress open`
7. Select E2E Testing<br/>![image](https://github.com/Ystalard/cypress-automation-framework/assets/58308727/391c788f-f1ef-4286-8b48-d782e4137b13)
8. Choose Chrome browser<br/>![image](https://github.com/Ystalard/cypress-automation-framework/assets/58308727/b873e7f1-5e97-4816-8d54-485141088f5c)
9. Select Scaffold example specs<br/>![image](https://github.com/Ystalard/cypress-automation-framework/assets/58308727/36b65497-bfe1-4dea-a0f9-3bb1eee7faf0)<br/>cypress folder must be generated in your cypress-automation-framework folder<br/>![image](https://github.com/Ystalard/cypress-automation-framework/assets/58308727/e7c50ed5-acdf-47e5-9741-8fc228f8b153)
10. Open cypress again and here are the sample tests!<br/>![image](https://github.com/Ystalard/cypress-automation-framework/assets/58308727/082b773a-ff20-424f-9715-d20b62cf11fc)

## Mocha Overview

Mocha comes with two function `describe()` and `it()`. It uses those function to regroup the tests.
<br/>`describe()` takes two arguments: the name of the test and the function to apply the test. It is basically used to regroup the test.
<br/>`it()` function must define each individual test inside the describe block and also take two argument: the name of the this individual test should do and the function with all the action to perform it.

### Mocha exemple
![image](https://github.com/Ystalard/cypress-automation-framework/assets/58308727/47a18ca1-97b0-4dd2-972d-52e6287e16ed)



