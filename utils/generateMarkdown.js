// 5-1.TODO: Create a function that returns a license badge based on which license is passed in


// 5-2. If there is no license, return an empty string
function renderLicenseBadge(license) {}

// 6-1.TODO: Create a function that returns the license link
// 6-2.If there is no license, return an empty string
function renderLicenseLink(license) {}

// 7-1.TODO: Create a function that returns the license section of README
// 7-2.If there is no license, return an empty string
function renderLicenseSection(license) {}

// 4. TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Lisence](#lisence)
* [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Lisence
${data.lisence}

## Questions
Please contact me with any questions via email at ${data.email} or Github [${data.github}](https://github.com/${data.github})


`;
}

module.exports = generateMarkdown;
