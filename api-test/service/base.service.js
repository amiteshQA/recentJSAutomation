const ConfigurationUtility = require('../utilities/configuration.utility.js');

const AuthenticationRequestModel = require('../models/request/authentication-request.model');
const authenticationRequestModel = new AuthenticationRequestModel("testuser", "test1234", "5X732CAR987");

/**
 * Base Service
 */
class BaseService {

  /**
   * Base Service Constructor
   * @param chakram
   */
  constructor(chakram) {

    this.chakram = chakram;

    //This should be derived from the config
    this.baseUrl = new ConfigurationUtility().getHost();

    //This should come from the response from auth API
    this.headers = {
      'Cookie': '_ga=GA1.2.1217226012.1522773007; PHPSESSID=d7bee1dd2f20118cea009782abfabb20; _gid=GA1.2.205233045.1535461664; dtlpc=%2F; dttfa=49b9d301466ff2dc92edf293261dc3569b856eb341aa5a0d4e1b8053112cc6c6; dt=7d1140d428c883441a430faf2b6166b28356dfdb; _gat_UA-105066977-1=1'
    };

    this.options = {
      headers: this.headers
    }
  }
}

module.exports = BaseService;