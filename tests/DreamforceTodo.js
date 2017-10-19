const child_process = require('child_process')

//try {
//    child_process.execSync('sfdx force:org:delete -u nightwatch -p')
//} catch(e) {}
//child_process.execSync('sfdx force:org:create -f config/project-scratch-def.json -a nightwatch')
//child_process.execSync('sfdx force:source:push -u nightwatch')
//child_process.execSync('sfdx force:user:permset:assign -n Dreamforce_Todo -u nightwatch')
const loginUrl = JSON.parse(child_process.execSync('sfdx force:org:open -u nightwatch --json --urlonly')).result.url

const appLauncher = '.appLauncher'
const appXPath = '//div[contains(@class, "appTileTitleNoDesc") and text()="Dreamforce Todo"]'
const dreamforceTodoHeader = '//h2[text()="Dreamforce Todo"]'
const newTodoButton = '//button[text()="New"]'
const todoNameInput = '//input[@name="name"]'
const todoSave = '//button[text()="Save"]'

function logIn(browser) {
    browser
        .url(loginUrl)
        .useCss()
        .waitForElementVisible('.setup-header-element')
}

function openDreamforceApp(browser) {
    browser
        .useCss()
        .waitForElementVisible(appLauncher)
        .click(appLauncher)
        .useXpath()
        .waitForElementVisible(appXPath)
        .click(appXPath)
        .waitForElementVisible(dreamforceTodoHeader)
    return browser
}

function createTask(browser, name) {
    browser.useXpath()
        .waitForElementVisible(newTodoButton)
        .click(newTodoButton)
        .waitForElementVisible(todoNameInput)
        .setValue(todoNameInput, name)
        .waitForElementVisible(todoSave)
        .click(todoSave)
    return browser
}

module.exports = {
    'Create Tasks': function (browser) {
        logIn(browser)
        openDreamforceApp(browser)
        createTask(browser, 'Test Task 1')
        createTask(browser, 'Test Task 2')
        createTask(browser, 'Test Task 3')
    }
}