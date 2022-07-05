// 5-1.TODO: Create a function that returns a license badge based on which license is passed in
// 5-2. If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return ''
}

// 6-1.TODO: Create a function that returns the license link
// 6-2.If there is no license, return an empty string
function renderLicenseLink(license) {
  if (lisence !== "None"){
    return(
      `\n* [License](#license)\n`
    )
  }
  return ' '
}

// 7-1.TODO: Create a function that returns the license section of README
// 7-2.If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !=="None"){
    return(
      `## License 

      Copyright © ${license}. All rights reserved. 
      
      Licensed under the ${license} license.`
    )
  }
}

// 4. TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Github URL
[${data.github}]((https:/github.cpm/${data.github})/)

## Description
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
${renderLicenseBadge(data.liscense)}

## Questions
Please contact me with any questions via email at ${data.email} or Github [${data.github}](https://github.com/${data.github})no

`;
}

module.exports = generateMarkdown;
