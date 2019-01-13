//TODO: How do we want to do constants and enums?  This is one option, truly not liking the empty class


/**
 * Constants
 */
class Environment {
}

/**
 * Admin Host Urls
 * @type {{prod: string, test: string, hotfix: string, develop: string, preview: string}}
 */
Environment.Admin = {
    prod: 'http://admin.dealerteamwork.com',
    test: 'http://test-admin.dealerteamwork.com',
    hotfix: 'http://hotfix-admin.dealerteamwork.com',
    develop: 'http://develop-admin.dealerteamwork.com',
    preview: 'http://preview-admin.dealerteamwork.com',
    local: 'http://local-admin.localhost'
};

module.exports = Environment;
