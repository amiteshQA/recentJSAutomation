const fs = require('fs');
const Environment = require('../constants/const.js');

/**
 * ConfigurationUtility
 * TODO: Make this class a singleton
 * We don't want to read from the config file multiple times
 */
class ConfigurationUtility {

    /**
     * Reads test-config.json and derive host url
     */
    getHost() {

        //TODO: move path to config into a constant
        //TODO: add validation to confirm config has content env is valid
        const content = fs.readFileSync('./configs/config.json');
        const config = JSON.parse(content);
        return Environment.Admin[config.environment];
    }
}

module.exports = ConfigurationUtility;
