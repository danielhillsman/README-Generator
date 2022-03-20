// TODO: Include packages needed for this application
const fs = require(`fs`);
const util = require(`util`);
const generateMd = require(`./utils/generateMarkdown`);
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = [
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
        choices: [
            "MIT",
            "Apache 2.0",
            "Unlicense",
        ]
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installation",
        default: "npm i"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
        default: "npm run test"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repository?",
        name: "usage"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repository?",
        name: "contribute"
    },
];

const inquirer = require(`inquirer`);

const promptUser = () => {
    return inquirer
        .prompt(questions);
}
// Created function to write README file
function writeToFile(fileName, data) {
    return writeFileAsync(fileName, data);
}

// Created a function to initialize app
function init() {
    try {
        console.log(`Welcome to the README generator.
        Please answer the following questions:`)

        // ask user for answers to questions
        const answers = await promptUser();

        // create markdown content from user answers
        const fileContent = generateMd(answers);

        // write markdown content to README.md file
        await writeToFile(`./output/README.md`, fileContent);

        // notify user that file has been written
        console.log(`README.md created in output folder.`);

    } catch (err) {
        console.error(`Error creating README. File not created.`);
        console.log(err);
    }
}

// Function call to initialize app
init();
