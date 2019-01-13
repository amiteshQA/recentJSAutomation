const BaseService = require('../service/base.service');

/**
 * Session Service
 */
class AdwordsService extends BaseService {

    // Hits AdWords Builder route
    hitsAdWordsBuilder(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/ajax_adwords_builder.inc.php', requestBody, this.options);
    };
}

module.exports = AdwordsService;