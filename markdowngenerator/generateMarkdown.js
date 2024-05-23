// markdowngenerator/generateMarkdown.js
function generateMarkdown(data) {
    // Function to generate license badge URL
    function getLicenseBadgeURL(license) {
        const licenseMap = {
            MIT: "https://img.shields.io/badge/License-MIT-yellow.svg",
            APACHE2.0: "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
            Boost1.0: "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg",
            MPL2.0: "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg",
            BSD2: "https://img.shields.io/badge/License-BSD%202--Clause-orange.svg",
            BSD3: "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg",
            none: ""
        };
        return licenseMap[license] || "";
    }

    // Ensure data.license is a string
    const license = Array.isArray(data.license) ? data.license[0] : data.license;

    // Generate license badge URL
    const licenseBadgeURL = getLicenseBadgeURL(license);

    // Generate markdown here
    return `
![License](${licenseBadgeURL})

# ${data.title}

## Table of Contents
- [Description](#description)
- [Sources](#sources)
- [Usage](#usage)
- [License](#license)
- [Creator](#creator)
- [Email](#email)
- [Contributors](#contributors)
- [Tests](#tests)

## Description
${data.description}

## Sources
${data.Sources}

## Usage
${data.usage}

## License
This project is licensed under the ${license} license.

## Creator
GitHub: [${data.creator}](https://github.com/${data.creator})

## Email
${data.email}

## Contributors
${data.contributors}

## Tests
${data.test}
    `;
}

module.exports = generateMarkdown;
