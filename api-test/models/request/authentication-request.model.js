/**
 * AuthenticationRequestModel
 */
class AuthenticationRequestModel {

    /**
     * AuthenticationRequestModel Constructor
     */
    constructor(username, password, vendorToken) {
        this.username = username;
        this.password = password;
        this.vendorToken = vendorToken;
    }

}

module.exports =  AuthenticationRequestModel;