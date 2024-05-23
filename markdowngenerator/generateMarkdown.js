function generateMarkdown(data) {
    // Function to generate license badge URL
    function getLicenseBadgeURL(license) {
        const licenseMap = {
            "MIT": "https://img.shields.io/badge/License-MIT-yellow.svg",
            "APACHE2.0": "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
            "Boost1.0": "https://img.shields.io/badge/License-Boost%201.0-lightblue.svg",
            "MPL2.0": "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg",
            "BSD2": "https://img.shields.io/badge/License-BSD%202--Clause-orange.svg",
            "BSD3": "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg",
            "none": ""
        };
        return licenseMap[license] || "";
    }

    // Ensure data.license is a string
    const license = Array.isArray(data.license) ? data.license[0] : data.license;

    // Generate license badge URL
    const licenseBadgeURL = getLicenseBadgeURL(license);

    // Generate markdown here
    return `
# ${data.title}

![License](${licenseBadgeURL})

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Creator](#creator)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.Installation}

## Usage
${data.usage}

## License
This project is licensed under the ${license} license.

## Creator
GitHub: [${data.creator}](https://github.com/${data.creator})

## Tests
${data.test}

## Questions
If you have any questions about the repo, please contact me at ${data.email}. You can also view more of my projects at [${data.creator}](https://github.com/${data.creator}).

Contributors: ${data.contributors}
    `;
}

module.exports = generateMarkdown;
