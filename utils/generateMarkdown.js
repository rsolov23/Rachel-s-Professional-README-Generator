// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Write captured input to file

  return `
# ${data.Title} 

![License](https://img.shields.io/badge/License-${data.License}-blue)

 

  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing Members](#Contributing-Members)
  * [Tests](#Tests)
  * [Github Username](#Github-Username)
  * [Questions](#Questions)
  
  ### Description
  ${data.Description}

  ### Installation
  ${data.Installation}

  ### Usage
  ${data.Usage}

  ### License
  ${data.License}
 
  ### Contributing Members
  ${data.Contributing}

  ### Tests
  ${data.Tests}

  ### Questions
  #### Please contact me at rsolov23@yahoo.com if you have any further questions!
  ${data.Questions}
  
  [GitHub Profile](https://github.com/${data.Github})

  

`;
}

module.exports = generateMarkdown;
