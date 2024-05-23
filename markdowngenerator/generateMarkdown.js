// Import the renderLicenseBadge function if it's defined in another file
// const { renderLicenseBadge } = require('./path/to/renderLicenseBadge');

// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (!license) {
      return ``;
    } else {
      return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
    }
}


// Returns the license link
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return `https://opensource.org/licenses/MIT`;
    } else if (license === 'APACHE2.0') {
        return `https://www.apache.org/licenses/LICENSE-2.0`;
    } else if (license === 'Boost1.0') {
        return `https://www.boost.org/LICENSE_1_0.txt`;
    } else if (license === 'MPL2.0') {
        return `https://www.mozilla.org/en-US/MPL/2.0/`;
    } else if (license === 'BSD2') {
        return `https://opensource.org/licenses/BSD-2-Clause`;
    } else if (license === 'BSD3') {
        return `https://opensource.org/licenses/BSD-3-Clause`;
    } else {
        return '';
    }
}


// Generate markdown function
function generateMarkdown(data) {
    // Ensure data.license is a string
    const license = Array.isArray(data.license) ? data.license[0] : data.license;
  
    // Generate license badge URL
    const licenseBadgeURL = renderLicenseBadge(license);
  
    // Generate markdown here
    const markdown = `
  # ${data.title}
  
  ${licenseBadgeURL}
  
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
  
  ## Contributors
  ${data.contributors}
  
  ## Tests
  ${data.test}
  
  ## Questions
  If you have any questions about the repo, please contact me at ${data.email}. You can also view more of my projects at [${data.creator}](https://github.com/${data.creator}).
    `;
  
    console.log("Generated Markdown:", markdown);
    return markdown;
}

module.exports = { generateMarkdown, renderLicenseBadge };
