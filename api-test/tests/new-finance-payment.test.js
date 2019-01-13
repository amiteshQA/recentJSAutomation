// require services
const NewSpecialsService = require('../service/new-specials.service');

// require models
const EditSpecialRequestModel = require('../models/request/edit-special-request.model');

// require chakram
const chakram = require('chakram'),
  expect = chakram.expect;

// tests
describe("New Specials Finance Payment Tests", () => {
  it("Updates Show Finance Payment", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'show_finance_payment', 0);

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', '0');
  });

  it("Updates Finance Title", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'finance_payment_title', 'Finance for');

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', 'Finance for');
  });

  it("Updates Vehicle Price", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'total_amount_financed', 10000);

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', '10000');
  });

  it("Updates Financial Additional Text", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'finance_additional_text', 'test finance text');

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', 'test finance text');
  });

  it("Updates Financial Payment APR", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'finance_payment_down_rate', 6.0);

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', '6');
  });

  it("Updates Finance Payment APR Term", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'finance_term', 60);

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', '60');
  });

  it("Updates Finance Payment Frequency", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'finance_payment_weeks', 'weeks');

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', 'weeks');
  });

  it("Updates Finance Payment Down Amount", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'finance_payment_down_amount', 5000);

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', '5000');
  });

  it("Updates Document Fees", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'document_fee', 100);

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', '100');
  });

  it("Updates Document Fees Title", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'document_fee_title', 'Document Fee');

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', 'Document Fee');
  });

  it("Updates Days To First Payment", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'days_to_first_payment', 30);

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', '30');
  });

  it("Toggles Show Days To First Payment In Disclosure", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'show_days_to_first_payment', 0);

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', '0');
  });

  it("Updates Finance Payment Disclosure", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'finance_disclosure', 'Test Finance Payment Disclosure');

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', 'Test Finance Payment Disclosure');
  });

});