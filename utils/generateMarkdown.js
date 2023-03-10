// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// Function returns license badge
function renderLicenseSection(license) {
  const licenseBadges = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    Mozilla:
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    "Boost Software":
      "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    GNU: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "None of the above": "None of the above",
  };
  return licenseBadges[license];
}

// Table of Contents
function generateMarkdown(data) {
  return `# ${data.title}
  ## License:
  ${renderLicenseSection(data.License)}
  ### Table of Contents
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contributing](#contributing)
  5. [Testing](#testing)


  ## Description:
  ${data.Description}
  ## Installation:
  ${data.Installation}
  ## Usage:
  ${data.Usage}
  ## Contributing:
  ${data.Contribute}
  ## Tests:
  ${data.Tests}
  ## Contact:
  - GitHub [${data.github}](https://github.com/${data.github})
  - Email: [${data.Email}](mailto:${data.Email})`;
}

module.exports = generateMarkdown;
