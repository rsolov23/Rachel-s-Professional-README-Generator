// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");
// TODO: Create an array of questions for user input
// 1 title of my project and sections entitled  2 Description,
// 3 Table of Contents,4 Installation,5 Usage,6 License,7 Contributing, 8 Tests, and  9 email for Questions 10 github
const questions = [
  {
    type: "input",
    name: "Title",
    message: "Please enter the title of your project.",
  },
  {
    type: "input",
    name: "Description",
    message: "Please enter a description of your project.",
  },
  {
    type: "checkbox",
    name: "Table of Contents",
    choices: [
      "Title",
      "Description",
      "Table of Contents",
      "Installations",
      "Usage",
      "License",
      "Contributors",
      "Testing",
      "GitHub Username",
      "Email address for additional questions",
    ],
    message:
      "Please select the items you would like to include in the Table of Contents.",
  },
  {
    type: "input",
    name: "Installation",
    message: "Please enter installation instructions for this application.",
  },
  {
    type: "input",
    name: "Usage",
    message: "Please provide the usage information.",
  },
  {
    type: "list",
    name: "License",
    choices: ["Apache", "GNU", "MIT", "Mozilla", "Unlicense"],
    message: "Please select the type of license.",
  },
  {
    type: "input",
    name: "Contributing",
    message: "Please enter all contributing members.",
  },
  {
    type: "input",
    name: "Tests",
    message: "Please enter instructions for testing.",
  },
  {
    type: "input",
    name: "Github",
    message: "Please enter your Github Username.",
  },
  {
    type: "input",
    name: "Questions",
    message: "Please enter your email address for additional questions.",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) => writeToFile("generateREADME.md", generateMarkdown(data)))
    .then(() => console.log("README successfully written."))
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();

//tutor doing weird stuff
// let exampleObj = {
//   title: "Halo 3",
//   name: "Rachel",
// };
// fs.writeFileSync("README.md", generateMarkdown(exampleObj));
