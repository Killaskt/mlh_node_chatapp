const moment = require('moment');

function formatMessage(username, data) {
return {
        username, // = username : username in ES6
        data,
        time: moment().format('h:mm a')  // hour:minute am/pm
    };
}

module.exports = formatMessage;