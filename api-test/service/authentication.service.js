const BaseService = require('../service/base.service');

class AuthenticationService extends BaseService {

    // returnsAuthenticationData
    returnsAuthenticationData(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/authenticate.php', requestBody, this.options);
    };

}

module.exports = AuthenticationService;