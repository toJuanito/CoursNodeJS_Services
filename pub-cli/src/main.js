var pubs = require("pub-services");

var getListPub = () => {
    console.log(pubs.services.pubService.listPubs());
}


var getListPubOpen = () => {
    var d_names = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday"];
    let jour = d_names[(new Date).getDay()];

    console.log("***********************************************************");
    console.log("********* LIST OF OPEN PUBS ON " + jour.toUpperCase() + "S **************");
    console.log("***********************************************************");
    console.log(pubs.services.pubService.listPubsOuverts([jour]));
}

module.exports = {
    getListPub: getListPub,
    getListPubOpen: getListPubOpen
}