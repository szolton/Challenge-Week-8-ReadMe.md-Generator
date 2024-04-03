const fs = require("fs");
const inquirer = require("Inquirer");
const path = require("path");
const generatorMarkdown = require("./utils/generatorMarkdown");

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
        type: "checkbox",
        name: "license",
        message: "Please select a license applicable to this project."
        choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
    },

    {
        type: "input",
        name: "require",
        message: "List any project dependencies here."
    },
  
    {
        type: "input",
        name: "usage",
        message: "State the languages or technologies associated with this project."
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
        message: "Provide walkthrough of required tests if applicable."
    },
    ]

    // writing README.md file
    function init () {
        inquirer.createPromptModule(questions).then((responses) => {
            console.log("Creating Professional README.md File...");
            writeToFile("./08-challenge-week9")
        });
    }

    init();