// require services
const AuthenticationService = require('../service/authentication.service');

// require models
const AuthenticationRequestModel = require('../models/request/authentication-request.model');

// require chakram
const chakram = require('chakram'),
  expect = chakram.expect;

// tests
// describe("Returns Authentication Data", function () {
//   it("Returns Auth", function () {
//     // Arrange
//     const authenticationService = new AuthenticationService(chakram);
//     const authenticationRequestModel = new AuthenticationRequestModel('testuser', 'test1234', '5X732CAR987');
//
//     // Act
//     const response = authenticationService.returnsAuthenticationData(authenticationRequestModel);
//
//     // Assert
//     return expect(response).to.have.json('token', '_ga=GA1.2.1217226012.1522773007; PHPSESSID=41df945097533044e97e3c6d93337180; _gid=GA1.2.1811802286.1533560730; dtlpc=%2F; _gat_UA-105066977-1=1; dttfa=7d5f43ef5b536239bc98168c58c01398c266f36dc1f3d58247a79b5e61380bdf; dt=9b030187a3c54b9fac1d3563c5909914bcb20bc1');
//   });
// });