const inquirer = require("inquirer");
const fs = require("fs");
const generateMd = require("./utils/generateMarkdown.js");

const projectQuestions = [
    {
        type: "input",
        message: "What is your project called?",
        name: "title",
    },
    {
        type: "input",
        message: "Provide a short description of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "What modules need to be installed?",
        name: "installation",
    },
    {
        type: "input",
        message: "Where can a demonstration of your project be viewed?",
        name: "usageDemo",
    },
    {
        type:"input",
        message:'Please give a short description of the project demo.',
        name: "usageAlt"
    },
    {
        type: "input",
        message: "What contribution guidelines would you like to set? Please note the default is the 'Contributor Convenant'.",
        name: "contribution",
    },
    {
        type: "input",
        message: "Please explain what your libraries do and how to test them.",
        name: "test",
    },
    {
        type: "input",
        message: "Please provide your Github username.",
        name: "githubUsername",
    },
    {
        type: "input",
        message: "Please provide your email address.",
        name: "email",
    },
    {
        type: "list",
        message: "What license does your project use?",
        name: "license",
        choices: [
            "None",
            "Apache License 2.0",
            "Boost Software License",
            'BSD 2-Clause License',
            'BSD 3-Clause License',
            "CC0 1.0 Universal",
            "Eclipse Public License 2.0",
            "GNU GPL v2",
            "GNU GPL v3",
            "GNU AGPL v3",
            "GNU LGPL v3",
            "MIT License",
            "Mozilla Public License 2.0",
            "The Unlicense",
        ],
    },
];

function init() {
    inquirer.prompt(projectQuestions).then((response) => {
        fs.writeFile('README.md', generateMd(response), (err) => {
            if (err) {
                console.error(err);
                return;
            }
        });
    });
}

init();