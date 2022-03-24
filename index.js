// TODO: Include packages needed for this application
const fs = require(`fs`);
const inquirer = require(`inquirer`);

inquirer.prompt([
    {
        type: "input",
        message: "What is your project's title?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a short description of your project.",
        name: "description"
    },
    {
        type: "list",
        message: "What license should your project have?",
        name: "license",
        choices: ["MIT", "Apache 2.0", "Unlicense"]
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installation",
        default: "npm i"
    },
    {
        type: "input",
        message: "What tests did you do?",
        name: "tests",
    },
    {
        type: "input",
        message: "What does user need to know about using the repository?",
        name: "usage"
    },
    {
        type: "input",
        message: "What does user need to know about contributing to the repository?",
        name: "contribute"
    },
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
])
.then((data) => {
    // Const for README generation fs
    const readme =

`# ${data.title}

## Description
${data.description}


## Table of Contents
* [Description](#description)
- [Installation](#installation)
* [Usage](#usage)
- [License](#license)
* [Contributing](#contributing)
- [Tests](#tests)
* [Contact](#contact)

## Installation

To install any dependencies, run the following:

\`
${data.installation}
\`

## Usage

${data.usage}

## License
![license](https://img.shields.io/static/v1?label=license&message=${data.license}&color=success)

## Contributing

${data.contribute}

## Tests

To run tests, run the following:
\`
${data.tests}
\`
## Contact
Have any questions? Please contact me at [${data.email}](mailto:${data.email}). View more of my work in GitHub at [${data.username}](https://github.com/${data.username})
`
    fs.writeFile(`readme.md`, readme, (err) => err ? console.log(err) : console.log
    (`Successful!!`));
});
