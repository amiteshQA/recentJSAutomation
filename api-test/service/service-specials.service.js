const BaseService = require('../service/base.service');

/**
 * Session Service
 */
class ServiceSpecialsService extends BaseService {

    // Hits Add Service Special Route
    hitsAddServiceSpecial(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/ajax_add_service_special.inc.php', requestBody, this.options);
    };

    // Hits Delete Service Special Route
    hitsDeleteServiceSpecial(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/ajax_delete_service_special.inc.php', requestBody, this.options);
    };

    // Hits Import Service Specials Route
    hitsImportServiceSpecials(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/ajax_import_service_specials.inc.php', requestBody, this.options);
    };

    // Hits Sync Account Service Why Buy Message Route
    hitsSyncAccountServiceWhyBuyMessage(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/ajax_sync_account_service_why_buy_message.inc.php', requestBody, this.options);
    };

    // Hits Update Service Special Route
    hitsUpdateServiceSpecial(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/ajax_update_service_special.inc.php', requestBody, this.options);
    };

    // Hits Delete Service Sync Specials
    hitsDeleteServiceSyncSpecials(requestBody) {
      return this.chakram.delete(this.baseUrl + '/includes/ajax/delete_service_sync_specials.php', requestBody, this.options);
    };

    // Hits Post Service Sync Specials
    hitsPostServiceSyncSpecials(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/post_service_sync_specials.php', requestBody, this.options);
    };

}

/**
 * Export
 * @type {SessionService}
 */
module.exports = ServiceSpecialsService;