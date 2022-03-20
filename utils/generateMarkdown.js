// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {

// }


const badgeLinks = require('./licensebadge');
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  data.renderLicenseSection = badgeLinks[data.license];

  return `# ${data.title}

  ${data.renderLicenseSection}

  ## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install any dependencies, run the following:

\`
${data.installation}
\`

## Usage

${data.usage}

## License

This repository is licensed under the ${data.license} license.

## Contributing

${data.contribute}

## Tests

To run tests, run the following:
\`
${data.tests}
\`
## Questions
Have any questions? Please contact me at [${data.email}](mailto:${data.email}). View more of my work in GitHub at [${data.username}](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;
