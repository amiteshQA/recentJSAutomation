/**
 * FacebookPostRequestModel
 */
class FacebookPostRequestModel {

  /**
   * CreateSpecialRequestModel Constructor
   */
  constructor(accountId, description, domain, selectedTargetUrl, specialsUrl, targetUrl) {
    this.accountId = accountId;
    this.description = description;
    this.domain = domain;
    this.selectedTargetUrl = selectedTargetUrl;
    this.specialsUrl = specialsUrl;
    this.targetUrl = targetUrl;
  }

};

module.exports = FacebookPostRequestModel;