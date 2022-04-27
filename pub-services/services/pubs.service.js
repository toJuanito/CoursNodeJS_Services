var pubs = require('../mocks/pubs.json');

var listPubs = () => {
    return pubs;
}

var listPubsOuverts = (jours) => {

    const pubsOuverts = pubs.filter(p => {
        let aux = true;
        jours.forEach(j => {
            if (!p.openDays.includes(j)) {
                aux = false;
            }
        });
        if (aux)
            return p;
    })
    return pubsOuverts;
}

//listPubsOuverts(["Friday"]);

module.exports = {
    listPubs: listPubs,
    listPubsOuverts: listPubsOuverts,
}