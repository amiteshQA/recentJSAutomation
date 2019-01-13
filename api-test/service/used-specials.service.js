const BaseService = require('../service/base.service');

/**
 * Session Service
 */
class UsedSpecialsService extends BaseService {

    // Hits Get Vehicle By Stock Used Route
    hitsGetVehicleByStockUsed(requestBody) {
      return this.chakram.get(this.baseUrl + '/includes/ajax/ajax_get_vehicle_by_stock-used.inc.php', requestBody, this.options);
    };

    // Hits Update Special Full New Route
    hitsUpdateSpecialFullNew(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/ajax_update_special-full-new.inc.php', requestBody, this.options);
    };
}

module.exports = UsedSpecialsService;