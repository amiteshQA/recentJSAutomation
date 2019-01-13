/**
 * EditSpecialRequestModel
 */
class EditSpecialRequestModel {

  /**
   * EditSpecialRequestModel Constructor
   */
  constructor(ncs_account_id, id, field, new_value) {
      this.ncs_account_id = ncs_account_id;
      this.id = id;
      this.field = field;
      this.new_value = new_value;
  }
}

module.exports = EditSpecialRequestModel;