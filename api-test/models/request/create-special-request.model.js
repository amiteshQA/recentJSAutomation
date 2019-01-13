/**
 * CreateSpecialRequestModel
 */
class CreateSpecialRequestModel {

  /**
   * CreateSpecialRequestModel Constructor
   */
  constructor(ncs_account_id, new_used, year, make_id, model_id) {
    this.ncs_account_id = ncs_account_id;
    this.new_used = new_used;
    this.year = year;
    this.make_id = make_id;
    this.model_id = model_id;
  }

}

module.exports = CreateSpecialRequestModel;