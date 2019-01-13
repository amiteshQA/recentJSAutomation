const BaseService = require('../service/base.service');

/**
 * Session Service
 */
class PagesService extends BaseService {

    // Hits Import Pages Route
    hitsImportPages(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/ajax_import-pages.inc.php', requestBody, this.options);
    };

    // Hits Remove Special Page Section Route
    hitsRemoveSpecialPageSection(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/ajax_remove_special_page_section.inc.php', requestBody, this.options);
    };

    // Hits Remove Page Route
    hitsRemovePage(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/ajax_remove_page.inc.php', requestBody, this.options);
    };

    // Hits Update Landing Page New Route
    hitsUpdateLandingPageNew(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/ajax_update_landing_page-new.inc.php', requestBody, this.options);
    };

    // Hits Update Special Page Section Route
    hitsUpdateSpecialPageSection(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/ajax_update_special_page_section.inc.php', requestBody, this.options);
    };
}

module.exports = PagesService;