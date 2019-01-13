// require services
const NewSpecialsService = require('../service/new-specials.service');

// require models
const EditSpecialRequestModel = require('../models/request/edit-special-request.model');

// require chakram
const chakram = require('chakram'),
  expect = chakram.expect;

// tests
describe("New Specials Zero Down Pricing Tests", () => {
  it("Updates Zero Down Lease Title", () => {
    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'zero_down_lease_title', 'Lease for');

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', 'Lease for');
  });

  it("Updates Zero Down Lease Payment", () => {
    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'zero_down_lease_price', 500);

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', '500');
  });

  it("Updates Zero Down Additional Text", () => {
    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'zero_down_additional_text', 'test text');

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', 'test text');
  });

  it("Updates Zero Down Lease Term", () => {
    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'zero_down_lease_term', 42);

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', '42');
  });


  it("Updates Payment Frequency", () => {
    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'zero_down_lease_term_label', 'per week');

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', 'per week');
  });

  it("Updates Zero Down Lease Due At Signing", () => {
    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'zero_down_lease_due_at_signing', 200);

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', '200');
  });

  it("Updates Zero Down Lease Cents/Miles", () => {
    // Arrange
    const newSpecialService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'zero_down_lease_cents_miles', 20);

    // Act
    const response = newSpecialService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', '20');
  });

  it("Updates Lease Kilometers/Year", () => {
    // Arrange
    const newSpecialService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'zero_down_lease_miles', 13500);

    // Act
    const response = newSpecialService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', '13500');
  });

  it("Updates Zero Down Lease Disclosure", () => {
    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'zero_down_disclosure', 'legal gymnastics!');

    // Act
    const response = newSpecialsService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', 'legal gymnastics!');
  });
});