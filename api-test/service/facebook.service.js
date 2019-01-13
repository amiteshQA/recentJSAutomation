const BaseService = require('../service/base.service');

/**
 * Session Service
 */
class FacebookService extends BaseService {

    // Hits Facebook Post To Page Route
    hitsFacebookPostToPage(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/ajax_facebook_post_to_page.inc.php', requestBody, this.options);
    };
}

module.exports = FacebookService;