// Import the renderLicenseBadge function if it's defined in another file
// const { renderLicenseBadge } = require('./path/to/renderLicenseBadge');

// Returns a markdown-formatted license badge based on the license type
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
      return ``;
    } else {
        // Returns a markdown-formatted license badge with a link to the license information
        return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`;
    }
}

// Returns the URL for the license information based on the license type
function renderLicenseLink(license) {
    // Implement logic to return the license link based on the license type
    switch (license) {
        case 'MIT':
            return `https://opensource.org/licenses/MIT`;
        case 'APACHE2.0':
            return `https://www.apache.org/licenses/LICENSE-2.0`;
        case 'Boost1.0':
            return `https://www.boost.org/LICENSE_1_0.txt`;
        case 'MPL2.0':
            return `https://www.mozilla.org/en-US/MPL/2.0/`;
        case 'BSD2':
            return `https://opensource.org/licenses/BSD-2-Clause`;
        case 'BSD3':
            return `https://opensource.org/licenses/BSD-3-Clause`;
        default:
            return '';
    }
}

// Generate markdown content based on user input data
function generateMarkdown(data) {
    // Ensure data.license is a string
    const license = Array.isArray(data.license) ? data.license[0] : data.license;
  
    // Generate license badge URL
    const licenseBadgeURL = renderLicenseBadge(license);
  
    // Generate markdown content
    const markdown = `
# ${data.title}

${licenseBadgeURL}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Creator](#creator)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.Installation}

## Usage
${data.usage}

## License
This project is licensed under the ${license} license. To view the terms, visit [here](${renderLicenseLink(license)}).

## Creator
GitHub: [${data.creator}](https://github.com/${data.creator})

## Contributors
${data.contributors}

## Tests
${data.test}

## Questions
If you have any questions about the repository, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.creator}](https://github.com/${data.creator}).
`;

    console.log("Generated Markdown:", markdown);
    return markdown;
}

module.exports = { generateMarkdown, renderLicenseBadge };
