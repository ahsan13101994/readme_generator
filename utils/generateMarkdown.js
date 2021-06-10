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
function generateMarkdown(userResponses) {

  return draftMarkdown=`

  ${userResponses.title}
  ${renderLicenseBadge(userResponses.license)}

  ## Description 
  
  ${userResponses.description}

  Table of Contents Section

  ## Table of Contents
  ${userResponses.installation?'* [Installation](#installation)':''}
  ${userResponses.usage?'* [Usage](#usage)':''}${renderLicenseLink(userResponses.license)}
  ${userResponses.contributing?'* [Contributing](#contributing)':''}
  ${userResponses.testing?'* [Tests](#testing)':''}


  ## Installation
  
  *Steps required to install the project and step-by-step guide of how to get the development environment running:*
  
  ${userResponses.installation}

  ## Usage 
  
  *Instructions and examples for use:*
  
  ${userResponses.usage}
  ${renderLicenseSection(userResponses.license)}

  ## Contributing
 
  *Contribution guideline for the app. [Contributor Covenant](https://www.contributor-covenant.org/) industry standard.*
  
  ${userResponses.contributing}

  ## Tests
  
  *To run the tests, run the following command:*
  
  ${userResponses.tests}

  ## License
  
  ${userResponses.license}

  ## Support
  
  If you have any questions, or open issues about the repo, I can be reached at:
  Email: ${userResponses.email}
  GitHub: [@${userResponses.github}](https://github.com/${userResponses.github}/).
  
`
  
 
}

module.exports = generateMarkdown;