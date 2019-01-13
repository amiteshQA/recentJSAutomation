const BaseService = require('../service/base.service');

/**
 * Session Service
 */
class NewSpecialsService extends BaseService {

    // Updates New Special Field Route
    updateNewSpecialField(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/ajax_update_special-field-new.inc.php', requestBody, this.options);
    };

    // Hits Copy Save New Special Route
    hitsCopySaveNewSpecial(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/ajax_copy_save_new_special.inc.php', requestBody, this.options);
    };

    // Hits Add Update Web Special Pricing Field New Route
    hitsAddUpdateWebSpecialPricingFieldNew(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/ajax_add_update_web_special_pricing_field-new.inc.php', requestBody, this.options);
    };

    // Hits Delete Special New Route
    hitsDeleteSpecialNew(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/ajax_delete_special-new.inc.php', requestBody, this.options);
    };

    // Hits Post Build New Manual Special Route
    hitsBuildNewManualSpecial(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/post_build_new_manual_special.php', requestBody, this.options);
    };

    // Hits Get Vehicle By Stock Number Route
    hitsGetVehicleByStockNumber(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/ajax_get_vehicle_by_stock-new.inc.php', requestBody, this.options);
    };

    // Post Build New Special From Copy
    hitsPostBuildNewSpecialFromCopy(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/post_build_new_special_from_copy.php', requestBody, this.options);
    };

}

/**
 * Export
 * @type {SessionService}
 */
module.exports = NewSpecialsService;