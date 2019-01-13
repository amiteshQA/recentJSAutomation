// require services
const NewSpecialsService = require('../service/new-specials.service');

// require models
const EditSpecialRequestModel = require('../models/request/edit-special-request.model');

// require chakram
const chakram = require('chakram'),
  expect = chakram.expect;

// tests
describe("New Specials APR Offer Tests", () => {

  it("Updates APR Title", () => {
    // Arrange
    const newSpecialService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'available_apr_title', 'Available APR');

    // Act
    const response = newSpecialService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', 'Available APR');
  });

  it("Updates APR", () => {
    // Arrange
    const newSpecialService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'available_apr', 5.5);

    // Act
    const response = newSpecialService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', '5.5');
  });

  it("Updates APR Additional Text", () => {
    // Arrange
    const newSpecialService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'apr_additional_text', 'Test APR additional text');

    // Act
    const response = newSpecialService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', 'Test APR additional text');
  });

  it("Updates APR Term", () => {
    // Arrange
    const newSpecialService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'available_apr_text', 48);

    // Act
    const response = newSpecialService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', '48');
  });

  it("Updates APR After Text", () => {
    // Arrange
    const newSpecialService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'available_apr_after_text', 'Test APR after text');

    // Act
    const response = newSpecialService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', 'Test APR after text');
  });

  it("Updates APR Disclosure", () => {
    // Arrange
    const newSpecialService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'apr_disclosure', 'Test APR disclosure');

    // Act
    const response = newSpecialService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', 'Test APR disclosure');
  });

});