// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponses) {

  return draftMarkdown=`

  ${userResponses.title}

  ## Description 
  
  ${userResponses.description}

  Table of Contents Section

  ## Table of Contents
  ${userResponses.installation?'* [Installation](#installation)':''}
  ${userResponses.usage?'* [Usage](#usage)':''}
  ${userResponses.contributing?'* [Contributing](#contributing)':''}
  ${userResponses.tests?'* [Tests](#tests)':''}


  ## Installation
  
  *Steps required to install the project and step-by-step guide of how to get the development environment running:*
  
  ${userResponses.installation}

  ## Usage 
  
  *Instructions and examples for use:*
  
  ${userResponses.usage}

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