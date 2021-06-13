// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `https://img.shields.io/badge/license-${license}-9cf`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'None':
      return "";
      break;

    case 'GNU AGPLv3':
      return "https://choosealicense.com/licenses/agpl-3.0/"
      break;

    case 'GNU GPLv3':
      return "https://choosealicense.com/licenses/gpl-3.0/"
      break;

    case 'GNU LGPLv3':
      return "https://choosealicense.com/licenses/lgpl-3.0/"
      break;

    case 'Apache-2.0':
      return "https://choosealicense.com/licenses/apache-2.0/"
      break;

    case 'Mozilla Public License 2.0':
      return "https://choosealicense.com/licenses/mpl-2.0/"
      break;
    
    case 'MIT':
      return "https://choosealicense.com/licenses/mit/"
      break;

    case 'Boost Software License 1.0':
      return "https://choosealicense.com/licenses/bsl-1.0/"
      break;

    case 'The Unlicense':
      return "https://choosealicense.com/licenses/unlicense/"
      break;

    default:
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let badge = renderLicenseBadge(license);
  let licenseLink = renderLicenseLink(license);

  return `[${license}](${licenseLink})
  ![License Badge](${badge})`

}
// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses) {
  let license = renderLicenseSection(userResponses.license)
  return draftMarkdown=`

  ${userResponses.title}
  ${renderLicenseBadge(license)}

  ## Description 
  
  ${userResponses.description}

  Table of Contents Section

  ## Table of Contents
  ${userResponses.installation?'* [Installation](#installation)':''}
  ${userResponses.usage?'* [Usage](#usage)':''}
  ${renderLicenseLink(userResponses.license)}
  ${userResponses.contributing?'* [Contributing](#contributing)':''}
  ${userResponses.tests?'* [Tests](#tests)':''}


  ## Installation
  
  *Steps required to install the project and step-by-step guide of how to get the development environment running:*
  
  ${userResponses.installation}

  ## Usage 
  
  *Instructions and examples for use:
   
  [Demo Link](https://drive.google.com/file/d/1lt_5fTS1c40iQVHQvRut7Gcmee0FBQef/view)*
  
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