var pubService = require('./services/pubs.service');

module.exports = {
    services: {
        pubService: pubService
    }
}


//console.log(pubService.listPubs());