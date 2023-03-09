// Importing packages
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
console.log("Welcome! Lets create a README.md");
console.log("Answer the questions to create a README.md");

// Array of questions
const questions = [
  // Project name/title
  {
    type: "input",
    name: "Title",
    message: "What is the title of your project?",
    // Validation function
    validate: (your_input) => {
      if (your_input) {
        return true;
      } else {
        console.log("Tell us the title of your project before continuing.");
        return false;
      }
    },
  },
  // Description
  {
    type: "input",
    name: "Description",
    message: "Describe your project.",
    validate: (your_input) => {
      if (your_input) {
        return true;
      } else {
        console.log("Tell us about your project before continuing.");
        return false;
      }
    },
  },
  // Table of Contents
  {
    type: "input",
    name: "Table of Contents",
    message: "Table of Contents",
    validate: (your_input) => {
      if (your_input) {
        return true;
      } else {
        console.log(
          "Let's set up the Table of Contents for your project before continuing."
        );
        return false;
      }
    },
  },
  // Installations
  {
    type: "input",
    name: "Installation",
    message: "How do we install the necessary, if any, packages?",
    validate: (your_input) => {
      if (your_input) {
        return true;
      } else {
        console.log(
          "Is there anything that needs to be installed before continuing?"
        );
        return false;
      }
    },
  },
  // Usage
  {
    type: "input",
    name: "Usage",
    message: "How can we use your app? What is it for?",
    validate: (your_input) => {
      if (your_input) {
        return true;
      } else {
        console.log(
          "Don't forget to tell us anything else we can and/or can't do!"
        );
        return false;
      }
    },
  },
  // Licenses
  {
    type: "list",
    name: "License",
    message: "Choose a license!",
    choices: ["MIT", "Mozilla", "Boost Software", "GNU", "None of the above"],
    validate: (your_Input) => {
      if (your_Input) {
        return true;
      } else {
        console.log("What license, if any, did you use?");
        return false;
      }
    },
  },
  // Contribute
  {
    type: "input",
    name: "Contribute",
    message: "How can we contribute to your project?",
    validate: (your_input) => {
      if (your_input) {
        return true;
      } else {
        console.log("How else can we contribute to your project?");
        return false;
      }
    },
  },
  // Tests
  {
    type: "input",
    name: "Tests",
    message: "How do we test your project?",
    validate: (your_input) => {
      if (your_input) {
        return true;
      } else {
        console.log("Tell us about testing information before continuing!");
        return false;
      }
    },
  },
  // GitHub Username
  {
    type: "input",
    name: "GitHub",
    message: "What is your GitHub username?",
    validate: (your_input) => {
      if (your_input) {
        return true;
      } else {
        console.log("Enter your GitHub username before continuing.");
        return false;
      }
    },
  },
  // Email
  {
    type: "input",
    name: "Email",
    message: "What is your Email?",
    validate: (your_input) => {
      if (your_input) {
        return true;
      } else {
        console.log("Enter your email before continuing.");
        return false;
      }
    },
  },
  // Questions
  {
    type: "input",
    name: "Questions",
    message: "Questions?",
    validate: (your_input) => {
      if (your_input) {
        return true;
      } else {
        console.log("Do you have any questions about the project?");
        return false;
      }
    },
  },
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
}

// Init function
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    writeToFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();
