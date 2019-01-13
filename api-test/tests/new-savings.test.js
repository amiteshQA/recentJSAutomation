// require services
const NewSpecialsService = require('../service/new-specials.service');

// require models
const EditSpecialRequestModel = require('../models/request/edit-special-request.model');

// require chakram
const chakram = require('chakram'),
  expect = chakram.expect;

// tests
describe("New Specials Savings Tests", () => {

  it("Updates Savings Title", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'save_up_to_title', 'Save up to');

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', 'Save up to');
  });

  it("Updates Savings Amount", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'save_up_to_amount', 10000);

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', '10000');
  });

  it("Updates Savings Additional Text", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'savings_additional_text', 'Test savings additional text');

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', 'Test savings additional text');
  });

  it("Updates Savings After Text", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'save_up_to_amount_after_text', 'Test savings after text');

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', 'Test savings after text');
  });

  it("Updates Savings Disclosure", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'savings_disclosure', 'Test savings disclosure');

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', 'Test savings disclosure');
  });

});