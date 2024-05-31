const newman = require('newman');
require("dotenv").config();
 
newman.run({
    collection:`https://api.postman.com/collections/29363005-adddde7e-c40a-4d16-b721-65f95b2fdd30?access_key=${process.env.secretKey}`,
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});