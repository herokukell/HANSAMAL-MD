const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'HANSAMAL-MD=N1wX0L4S#JQZrUih3JtzS07iPOxBuZ-LhlWSTOG052kOxdgLCp0g' : process.env.SESSION_ID,
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? 'herokukell' : process.env.GITHUB_USER_NAME,
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? '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' : process.env.GITHUB_AUTH_TOKEN,        
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94784198085' : process.env.OWNER_NUMBER
};
