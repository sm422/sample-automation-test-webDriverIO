const config = {
  timeout: 3000
}

function interact(selector, index=0){
  const element = $$(selector)[index];
  element.waitForExist({timeout: config.timeout});
  element.click();
}

function setInputValue(selector, input, index=0){
  const element = $$(selector)[index];
  element.waitForExist({timeout: config.timeout});
  element.setValue(input);
}

function initCustomFunctions(){
  browser.addCommand('interact', interact);
  browser.addCommand('setInputValue', setInputValue);
}

module.exports = initCustomFunctions;
