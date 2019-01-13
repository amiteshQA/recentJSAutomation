//Dependencies
const GenericSpecialsService = require('../service/generic-specials.service');
const NewSpecialsService = require('../service/new-specials.service');
const UsedSpecialsService = require('../service/used-specials.service');
const ServiceSpecialsService = require('../service/service-specials.service');
const AccountService = require('../service/account.service');
const MPOPAdminService = require('../service/mpop-admin.service');
const CruiseControlService = require('../service/cruise-control.service');
const PagesService = require('../service/pages.service');
const AdwordsService = require('../service/adwords.service');
const ImagesService = require('../service/images.service');
const FacebookService = require('../service/facebook.service');
const CreateSpecialRequestModel = require('../models/request/create-special-request.model');
const FacebookPostRequestModel = require('../models/request/facebook-post-request.model');
const chakram = require('chakram'),
  expect = chakram.expect;

/**
 * Smoke suite of tests
 */
describe("Add Publisher Role", () => {

  it("Adds Type New", () => {

    // Arrange
    const accountService = new AccountService(chakram);
    let queryString = {
      'id': '57',
      'type': 'NCS'
    };

    // Act
    accountService.deletePublisherRole(queryString);
    const response = accountService.addPublisherRole(queryString);

    // Assert
    return expect(response).to.have.json(true);

  });

  it("Adds Type Used", () => {

    // Arrange
    const accountService = new AccountService(chakram);
    let queryString = {
      'id': '57',
      'type': 'UCS',
    };

    // Act
    accountService.deletePublisherRole(queryString);
    const response = accountService.addPublisherRole(queryString);

    // Assert
    return expect(response).to.have.json(true);

  });

  it("Adds Type Service", () => {

    // Arrange
    const accountService = new AccountService(chakram);
    let queryString = {
      'id': '57',
      'type': 'SS',
    };

    // Act
    accountService.deletePublisherRole(queryString);
    const response = accountService.addPublisherRole(queryString);

    // Assert
    return expect(response).to.have.json(true);

  });

  it("Returns Missing Account ID Message", () => {

    // Arrange
    const accountService = new AccountService(chakram);
    let queryString = {
      'id': '',
      'type': 'NCS',
    };

    // Act
    const response = accountService.addPublisherRole(queryString);

    // Assert
    return expect(response).to.have.json('An account id must be provided');

  });

  it("Returns Missing Role Type Message", () => {

    // Arrange
    const accountService = new AccountService(chakram);
    let queryString = {
      'id': '57',
      'type': '',
    };

    // Act
    const response = accountService.addPublisherRole(queryString);

    // Assert
    return expect(response).to.have.json('A type must be provided');

  });
});

describe("Add New Special", () => {
  it("Creates Special with specified values", () => {

    // Arrange
    const genericSpecialsService = new GenericSpecialsService(chakram);
    const createSpecialModel = new CreateSpecialRequestModel(57, 'N', 2018, 20, 501);

    // Act
    const response = genericSpecialsService.addCarSpecial(createSpecialModel);

    // Assert
    // needs better assertion
    return expect(response).to.have.json('special.ncs_account_id', '57');

  });
});

describe("AdWords Builder", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const adwordsService = new AdwordsService(chakram);
    const createSpecialModel = new CreateSpecialRequestModel(57, 'N');

    // Act
    const response = adwordsService.hitsAdWordsBuilder(createSpecialModel);

    // Assert
    return expect(response).to.have.status(200);


  });
});

describe("Delete Service Special Route", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const serviceSpecialsService = new ServiceSpecialsService(chakram);

    // Act
    const response = serviceSpecialsService.hitsDeleteServiceSpecial();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Post to Facebook Page", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const facebookService = new FacebookService(chakram);
    const facebookPostRequestModel = new FacebookPostRequestModel(57, "TEST", "social.dealerteamwork.com", "http://www.dealerteamwork.com?utm_source=dealerteamwork&utm_medium=facebook&utm_campaign=Odyssey&ddcref=facebook", "http://www.dealerteamwork.com?utm_source=dealerteamwork&utm_medium=facebook&utm_campaign=Odyssey&ddcref=facebook", "http://www.dealerteamwork.com?utm_source=dealerteamwork&utm_medium=facebook&utm_campaign=Odyssey&ddcref=facebook");

    // Act
    const response = facebookService.hitsFacebookPostToPage(facebookPostRequestModel);

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Bulk Edit Options", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const accountService = new AccountService(chakram);

    // Act
    const response = accountService.hitsBulkEditOptions();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Get Custom Rules", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const accountService = new AccountService(chakram);

    // Act
    const response = accountService.hitsGetCustomRules();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Delete Specials", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const genericSpecialsService = new GenericSpecialsService(chakram);
    const deleteSpecialsObject = {
      accountId: 57
    };

    // Act
    const response = genericSpecialsService.hitsDeleteSpecials(deleteSpecialsObject);

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Delete Special", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const genericSpecialsService = new GenericSpecialsService(chakram);

    // Act
    const response = genericSpecialsService.hitsDeleteSpecial();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Get Account", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const accountService = new AccountService(chakram);

    // Act
    const response = accountService.hitsGetAccount();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Build New Manual Special", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);

    // Act
    const response = newSpecialsService.hitsBuildNewManualSpecial();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Post Cruise Control Settings", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const cruiseControlService = new CruiseControlService(chakram);

    // Act
    const response = cruiseControlService.hitsPostCruiseControlSettings();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Post Sync Specials", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const genericSpecialsService = new GenericSpecialsService(chakram);

    // Act
    const response = genericSpecialsService.hitsPostSyncSpecials();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Update Specials", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const genericSpecialsService = new GenericSpecialsService(chakram);

    // Act
    const response = genericSpecialsService.hitsUpdateSpecials();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Get Vehicle by Stock Number", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);

    // Act
    const response = newSpecialsService.hitsGetVehicleByStockNumber();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Import Pages", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const pagesService = new PagesService(chakram);

    // Act
    const response = pagesService.hitsImportPages();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Remove Page", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const pagesService = new PagesService(chakram);

    // Act
    const response = pagesService.hitsRemovePage();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Sync Account Service Why Buy Message", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const serviceSpecialsService = new ServiceSpecialsService(chakram);

    // Act
    const response = serviceSpecialsService.hitsSyncAccountServiceWhyBuyMessage();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Update Specials Fields", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const genericSpecialsService = new GenericSpecialsService(chakram);

    // Act
    const response = genericSpecialsService.hitsUpdateSpecialsFields();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Update Custom Rule", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const accountService = new AccountService(chakram);

    // Act
    const response = accountService.hitsUpdateCustomRule();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Update Service Special", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const serviceSpecialsService = new ServiceSpecialsService(chakram);

    // Act
    const response = serviceSpecialsService.hitsUpdateServiceSpecial();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Update Special Full New", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const usedSpecialsService = new UsedSpecialsService(chakram);

    // Act
    const response = usedSpecialsService.hitsUpdateSpecialFullNew();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Upload Image", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const imagesService = new ImagesService(chakram);

    // Act
    const response = imagesService.hitsUploadImage();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Add Service Special", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const serviceSpecialsService = new ServiceSpecialsService(chakram);

    // Act
    const response = serviceSpecialsService.hitsAddServiceSpecial();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Add Update Web Special Pricing Field New", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);

    // Act
    const response = newSpecialsService.hitsAddUpdateWebSpecialPricingFieldNew();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Copy Save New Special", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);

    // Act
    const response = newSpecialsService.hitsCopySaveNewSpecial();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Delete Special New", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);

    // Act
    const response = newSpecialsService.hitsDeleteSpecialNew();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Get Account Role Information", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const accountService = new AccountService(chakram);

    // Act
    const response = accountService.hitsGetAccountRoleInformation();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Get Custom Account CSS", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const accountService = new AccountService(chakram);

    // Act
    const response = accountService.hitsGetCustomAccountCSS();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Get Special Sort Options", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const genericSpecialsService = new GenericSpecialsService(chakram);

    // Act
    const response = genericSpecialsService.hitsGetSpecialSortOptions();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Get User Access", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const mpopAdminService = new MPOPAdminService(chakram);

    // Act
    const response = mpopAdminService.hitsGetUserAccess();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Get Vehicle By Stock Used", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const usedSpecialsService = new UsedSpecialsService(chakram);

    // Act
    const response = usedSpecialsService.hitsGetVehicleByStockUsed();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Import Service Specials", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const serviceSpecialsService = new ServiceSpecialsService(chakram);

    // Act
    const response = serviceSpecialsService.hitsImportServiceSpecials();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Remove Special Page Section", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const pagesService = new PagesService(chakram);

    // Act
    const response = pagesService.hitsRemoveSpecialPageSection();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Sync Account Why Buy Message", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const accountService = new AccountService(chakram);

    // Act
    const response = accountService.hitsSyncAccountWhyBuyMessage();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Update Account Role Information", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const accountService = new AccountService(chakram);

    // Act
    const response = accountService.hitsUpdateAccountRoleInformation();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Update Landing Page New", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const pagesService = new PagesService(chakram);

    // Act
    const response = pagesService.hitsUpdateLandingPageNew();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Update Special Field New", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);

    // Act
    const response = newSpecialsService.hitsUpdateSpecialFieldNew();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Update Special Page Section", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const pagesService = new PagesService(chakram);

    // Act
    const response = pagesService.hitsUpdateSpecialPageSection();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Delete Service Sync Specials", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const serviceSpecialsService = new ServiceSpecialsService(chakram);

    // Act
    const response = serviceSpecialsService.hitsDeleteServiceSyncSpecials();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Post Service Sync Specials", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const serviceSpecialsService = new ServiceSpecialsService(chakram);

    // Act
    const response = serviceSpecialsService.hitsPostServiceSyncSpecials();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Post Build New Special From Copy", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const newSpecialsService = new NewSpecialsService(chakram);

    // Act
    const response = newSpecialsService.hitsPostBuildNewSpecialFromCopy();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Delete Sync Specials", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const genericSpecialsService = new GenericSpecialsService(chakram);

    // Act
    const response = genericSpecialsService.hitsDeleteSyncSpecials();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Post Web Special", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const genericSpecialsService = new GenericSpecialsService(chakram);

    // Act
    const response = genericSpecialsService.hitsPostWebSpecial();

    // Assert
    return expect(response).to.have.status(200);
  });
});

describe("Get Cruise Control Settings", () => {
  it("Checks endpoint for status 200", () => {

    // Arrange
    const cruiseControlService = new CruiseControlService(chakram);

    // Act
    const response = cruiseControlService.hitsGetCruiseControlSettings();

    // Assert
    return expect(response).to.have.status(200);
  });
});