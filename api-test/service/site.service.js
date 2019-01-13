const BaseService = require('../service/base.service');

/**
 * Session Service
 */
class SiteService extends BaseService {

    /**
     * Get Admin Home Page
     * @returns {string}
     */
    getSite() {
        return this.chakram.get(this.baseUrl, null, this.headers);
    };

    /**
     * Return the Admin Authentication session and cookies
     * @returns {*}
     */
    getAuthentication(requestBody) {

        return this.chakram.post(this.baseUrl + '/includes/authenticate.php', requestBody, this.headers);
    };

}

/**
 * Export
 * @type {SessionService}
 */
module.exports = SiteService;
