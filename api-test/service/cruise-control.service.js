const BaseService = require('../service/base.service');

/**
 * Session Service
 */
class CruiseControlService extends BaseService {

    // Hits Post Cruise Control Settings Route
    hitsPostCruiseControlSettings(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/post_cruise_control_settings.php', requestBody, this.options);
    };

    // Hits Get Cruise Control Settings Route
    hitsGetCruiseControlSettings(requestBody) {
      return this.chakram.get(this.baseUrl + '/includes/ajax/')
    };
}

module.exports = CruiseControlService;