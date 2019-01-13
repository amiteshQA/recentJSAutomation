const locators = function () {

    this.findById = (Id) => {
        return element(by.id(Id))
    };

    this.findByXpath = (xpath) => {
        return element(by.xpath(xpath))
    };

    this.findByClassName = (className) => {
        return element(by.className(className))
    };

    this.findAllByClassName = (allByClassName) => {
        return element.all(by.className(allByClassName));
    };

    this.findByButtonText = (buttonText) => {
        return element(by.buttonText(buttonText))
    };

    this.findByModel = (modelName) => {
        return element(by.model(modelName))
    };

    this.findAllByModel =  (allByModelName) => {
        return element.all(by.model(allByModelName))
    };

    this.findByBinding = (bindingName) => {
        return element(by.binding(bindingName))
    };

    this.findByExactBinding = (exactBinding) => {
        return element(by.exactBinding(exactBinding))
    };

    this.findByRepeater = (repeater) => {
        return element(by.repeater(repeater))
    };

    this.findByCssAll = (cssAll) => {
        return element.all(by.css(cssAll))
    };

    this.findByCss = (css) => {
        return element(by.css(css))
    };

    this.findAllByXpath = (allXpath) => {
        return element.all(by.xpath(allXpath))
    };

    this.findByClassName = (className) => {
        return element(by.className(className))
    };

    this.findByPartialButtonText = (partialButtonText) => {
        return element(by.partialButtonText(partialButtonText))
    };

    this.findByPartialLinkText = (partialLinkText) => {
        return element(by.partialLinkText(partialLinkText))
    };

    this.findAllByPartialLinkText = (partialLinkText) => {
        return element.all(by.partialLinkText(partialLinkText))
    };
};

module.exports = new locators();