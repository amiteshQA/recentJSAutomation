// require services
const NewSpecialsService = require('../service/new-specials.service');

// require models
const EditSpecialRequestModel = require('../models/request/edit-special-request.model');

// require chakram
const chakram = require('chakram'),
  expect = chakram.expect;

describe("New Specials", () => {
  it("Updates Title To Impossible Value", () => {

    // Arrange
    const newSpecialService = new NewSpecialsService(chakram);
    const editSpecialRequestModel = new EditSpecialRequestModel(57, 14786, 'used_title', 'Nonsense');

    // Act
    const response = newSpecialService.updateNewSpecialField(editSpecialRequestModel);

    // Assert
    return expect(response).to.have.json('new_value', 'Nonsense');
  });
});