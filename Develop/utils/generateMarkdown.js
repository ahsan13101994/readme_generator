// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  // Table of Contents Section
  let generateTableofContent = `## Table of Contents`;

  if (userResponses.installation !== '') { generateTableofContent += `
  * [Installation](#installation)` };

  if (userResponses.usage !== '') { generateTableofContent += `
  * [Usage](#usage)` };

  if (userResponses.contributing !== '') { generateTableofContent += `
  * [Contributing](#contributing)` };

  if (userResponses.tests !== '') { generateTableofContent += `
  * [Tests](#testing)` };


  // Title
  let markdownGenerator = 
  `# ${userResponses.title}
  
  ## Description 
  
  ${userResponses.description}
  `

  // Add Table of Contents to markdown
  markdownGenerator += generateTableofContent;
 
  // Add License section since License is required to Table of Contents
  markdownGenerator += `
  * [License](#license)`;
  

  // Installation Section
  if (userResponses.installation !== '') {
  
  markdownGenerator +=
  `
  ## Installation
  
  *Steps required to install the project and step-by-step guide of how to get the development environment running:*
  
  ${userResponses.installation}`
  };
  

  // Usage Section
  if (userResponses.usage !== '') {
  
  markdownGenerator +=
  
  `
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${userResponses.usage}`
  };
  
  
  // Contributing Section
  if (userResponses.contributing !== '') {

    markdownGenerator +=
  `
  ## Contributing
 
  *Contribution guideline for the app. [Contributor Covenant](https://www.contributor-covenant.org/) industry standard.*
  
  ${userResponses.contributing}`
  };
  

  // Testing Section
  if (userResponses.testing !== '') {
  
  markdownGenerator +=
  `
  
  ## Tests
  
  *To run the tests, run the following command:*
  
  ${userResponses.tests}`
  };


  // License Section
  markdownGenerator +=
  `
  
  ## License
  
  ${userResponses.license}
  `;


  // Developer section
  let devInfo = 
  `
  ---
  
  ## Support
  
  If you have any questions, or open issues about the repo, I can be reached at:
 
  GitHub: [@${userInfo.login}](${userInfo.url})
  `;

  if (userInfo.email !== null) {
  
  devInfo +=
  `
  Email: ${userInfo.email}
  `};

  // Add developer
  markdownGenerator += devInfo;
  
  return draftMarkdown;
  
}

module.exports = generateMarkdown;
