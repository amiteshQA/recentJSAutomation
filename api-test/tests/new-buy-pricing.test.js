// require services
const NewSpecialsService = require('../service/new-specials.service');

// require models
const EditSpecialRequestModel = require('../models/request/edit-special-request.model');

// require chakram
const chakram = require('chakram'),
  expect = chakram.expect;

// tests
describe("New Specials Buy Pricing Tests", () => {
  it("Updates Buy Title", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'buy_title', 'Buy for');

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', 'Buy for');
  });

  it("Updates Buy Price", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'buy_price', 30000);

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', '30000');
  });

  it("Updates Buy Additional Text", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'buy_additional_text', 'Test Buy Additional Text');

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', 'Test Buy Additional Text');
  });

  it("Updates MSRP", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'msrp', 35000);

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', '35000');
  });

  it("Updates Buy Disclosure", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'buy_disclosure', 'Test buy disclosure');

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', 'Test buy disclosure');
  });

});