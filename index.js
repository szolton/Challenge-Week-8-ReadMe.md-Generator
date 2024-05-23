const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generatorMarkdown = require("./markdowngenerator/generateMarkdown");

// create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please name your project."
    },
    {
        type: "input",
        name: "description",
        message: "Please describe the purpose and functionality of this project."
    },
    {
        type: "input",
        name: "Sources",
        message: "List any project sources here."
    },
    {
        type: "input",
        name: "usage",
        message: "State the languages or technologies associated with this project, and provide instructions and examples for use."
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a license applicable to this project.",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"]
    },
    {
        type: "input",
        name: "creator",
        message: "Write your GitHub username."
    },
    {
        type: "input",
        name: "email",
        message: "Please provide a valid email address."
    },
    {
        type: "input",
        name: "contributors",
        message: "Please list any contributors (use GitHub usernames)."
    },
    {
        type: "input",
        name: "test",
        message: "Provide walkthrough of the project functionality with screenshots."
    },
];

// writing README.md file
function init () {
    inquirer.prompt(questions).then((responses) => {
        console.log("Creating Professional README.md File...");
        const markdown = generatorMarkdown(responses);
        writeToFile("./generatedOutput/README.md", markdown);
    });
}

function writeToFile(fileName, data) {
    // Get the directory name from the file path
    const directory = path.dirname(fileName);

    // Create the directory if it does not exist
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory, { recursive: true });
    }

    // Write the file
    fs.writeFileSync(fileName, data);
    console.log("README.md file created successfully!");
}

init();
