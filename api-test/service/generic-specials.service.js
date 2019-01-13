const BaseService = require('../service/base.service');

/**
 * Session Service
 */
class GenericSpecialsService extends BaseService {

    // Adds Car Special of chosen condition (New or Used) to specified account
    addCarSpecial(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/ajax_add_special-new.inc.php', requestBody, this.options);
    };

    // Hits Get Special Sort Options Route
    hitsGetSpecialSortOptions(requestBody) {
      return this.chakram.get(this.baseUrl + '/includes/ajax/ajax_get_special_sort_options.inc.php', requestBody, this.options);
    };

    // Hits Delete-Specials Route
    hitsDeleteSpecials(queryString) {

      let options = this.options;
      options.qs = queryString;
      return this.chakram.delete(this.baseUrl + '/includes/ajax/delete-specials.php', {}, this.options);
    };

    // Hits Delete_Specials Route
    hitsDeleteSpecial(requestBody) {
      return this.chakram.delete(this.baseUrl + '/includes/ajax/ajax/delete_special.php', requestBody, this.options);
    };

    // Hits Post Sync Specials Route
    hitsPostSyncSpecials(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/post_sync_specials.php', requestBody, this.options);
    };

    // Hits Post Sync Specials Route
    hitsUpdateSpecials(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/update-specials.php', requestBody, this.options);
    };

    // Hits Update Specials Fields Route
    hitsUpdateSpecialsFields(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/ajax_update-specials-fields.php', requestBody, this.options);
    };

    // Hits Delete Sync Specials
    hitsDeleteSyncSpecials(requestBody) {
      return this.chakram.delete(this.baseUrl + '/includes/ajax/delete_sync_specials.php', requestBody, this.options);
    };

    // Hits Post Web Special
    hitsPostWebSpecial(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/post_web_special.php', requestBody, this.options)
    };

}

module.exports = GenericSpecialsService;