const axios = require("axios")

module.exports = {
    callVelibApi: async function () {
        var result = await axios.get("https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=&facet=name&facet=is_installed&facet=is_renting&facet=is_returning&facet=nom_arrondissement_communes")

        return result.data
    }
};
