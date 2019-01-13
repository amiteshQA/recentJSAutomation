const BaseService = require('../service/base.service');

/**
 * Session Service
 */
class MPOPAdminService extends BaseService {

    // Hits Get User Access Route
    hitsGetUserAccess(requestBody) {
      return this.chakram.get(this.baseUrl + '/includes/ajax/ajax_get_user_access.inc.php', requestBody, this.options);
    };
}

module.exports = MPOPAdminService;