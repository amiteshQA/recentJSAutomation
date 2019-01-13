const BaseService = require('../service/base.service');

/**
 * Session Service
 */
class ImagesService extends BaseService {

    // Hits Update Upload Image Route
    hitsUploadImage(requestBody) {
      return this.chakram.post(this.baseUrl + '/includes/ajax/ajax_upload_image.php', requestBody, this.options);
    };
}

module.exports = ImagesService;