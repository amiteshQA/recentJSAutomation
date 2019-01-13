const BaseService = require('../service/base.service');

/**
 * Session Service
 */
class AccountService extends BaseService {

    // Adds Publisher Role to specified account
    addPublisherRole(queryString) {

      let options = this.options;
      options.qs = queryString;
      return this.chakram.post(this.baseUrl + '/includes/ajax/ajax_add_publisher_role.inc.php', {}, this.options);
    };

    // Deletes Publisher Role from specified account
    deletePublisherRole(queryString) {

      let options = this.options;
      options.qs = queryString;
      return this.chakram.post(this.baseUrl + '/includes/ajax/ajax_delete_publisher_role.inc.php', {}, options);
    };

    // Hits Get Account Role Information Route
    hitsGetAccountRoleInformation(requestBody) {
      return this.chakram.get(this.baseUrl + '/includes/ajax/ajax_get_account_role_information.inc.php', requestBody, this.options);
    };

    // Hits Update Account Role Information Route
    hitsUpdateAccountRoleInformation(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/ajax_update_account_role_information.inc.php', requestBody, this.options);
    };

    // Hits Get Account Route
    hitsGetAccount(requestBody) {
      return this.chakram.get(this.baseUrl + '/includes/ajax/get_account.php', requestBody, this.options);
    };

    // Hits Sync Account Why Buy Message Route
    hitsSyncAccountWhyBuyMessage(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/ajax_sync_account_why_buy_message.inc.php', requestBody, this.options);
    };

    // Hits Bulk Edit Options Route
    hitsBulkEditOptions(requestBody) {
      return this.chakram.get(this.baseUrl + '/includes/ajax/ajax_get_bulk_edit_options.inc.php', requestBody, this.options);
    };

    // Hits Get Custom Account CSS Route
    hitsGetCustomAccountCSS(requestBody) {
      return this.chakram.get(this.baseUrl + '/includes/ajax/ajax_get_custom_account_css.inc.php', requestBody, this.options);
    };

    // Hits Get Custom Rules Route
    hitsGetCustomRules(requestBody) {
      return this.chakram.get(this.baseUrl + '/includes/ajax/ajax_get_custom_rules.inc.php', requestBody, this.options);
    };

    // Hits Update Custom Rule Route
    hitsUpdateCustomRule(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/ajax_update_custom_rule.inc.php', requestBody, this.options);
    };
}

/**
 * Export
 * @type {SessionService}
 */
module.exports = AccountService;