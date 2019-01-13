// require services
const NewSpecialsService = require('../service/new-specials.service');

// require models
const EditSpecialRequestModel = require('../models/request/edit-special-request.model');

// require chakram
const chakram = require('chakram'),
  expect = chakram.expect;

// tests
describe("New Specials Lease Pricing Tests", () => {

  it("Updates Lease Title", () => {
    // Arrange
    const newSpecialService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'lease_title_text', 'Lease for');

    // Act
    const response = newSpecialService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', 'Lease for');
  });

  it("Updates Lease Price", () => {
    // Arrange
    const newSpecialService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'lease_price', 300);

    // Act
    const response = newSpecialService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', '300');
  });

  it("Updates Lease Additional Text", () => {
    // Arrange
    const newSpecialService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'lease_additional_text', 'Test lease additional text');

    // Act
    const response = newSpecialService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', 'Test lease additional text');
  });

  it("Updates Lease Term", () => {
    // Arrange
    const newSpecialService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'lease_term', 48);

    // Act
    const response = newSpecialService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', '48');
  });

  it("Updates Payments Frequency", () => {
    // Arrange
    const newSpecialService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'lease_term_label', 'mo');

    // Act
    const response = newSpecialService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', 'mo');
  });

  it("Updates Lease Down Payment", () => {
    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'lease_extras', 2500);

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', '2500');
  });

  it("Updates Lease Down Text", () => {
    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'lease_down_text', 1);

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', '1');
  });

  it("Updates Lease Cents/Mile", () => {
    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'lease_cents_miles', 10);

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', '10');
  });

  it("Updates Lease Kilometers/Year", () => {
    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'lease_miles', 5000);

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', '5000');
  });

  it("Updates Lease Disclosure", () => {
    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'lease_disclosure', 'Test lease disclosure');

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', 'Test lease disclosure');
  });

});