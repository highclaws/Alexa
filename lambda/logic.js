const util = require('./util');
const axios = require('axios');

const getPotagerData = (namePotager) => {
    const url = "https://apigreenhouse.herokuapp.com/potagers/arduinoid/"+namePotager
    const config = {
        timeout: 6500, // timeout API call before we reach Alexa's 8 second timeout, or set globally via axios.defaults.timeout
        headers: {'Accept': 'application/json'}
    };
    async function getJsonResponse(url, config) {
        const res = await axios.get(url, config);
        return res.data;
    }
    return getJsonResponse(url, config)
        .then((result) => result)
        .catch((error) => null)
};



module.exports = {
    getPotagerData,
}