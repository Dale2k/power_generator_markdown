// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let badge;
  if (!license) {
    return "";
  } else if (license) {
    if (license == "MIT" || license == "mit") {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
    } else if (license == "BSL" || license == "bsl") {
      return `[![License: BSL](https://img.shields.io/badge/License-BSL-yellow.svg)]`;
    } else if (license == "Apache" || license == "apache") {
      return `[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`;
    }
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;
  if (license == "MIT" || license == "mit") {
    link =
      "[https://choosealicense.com/licenses/mit](https://choosealicense.com/licenses/mit)";
  } else if (license == "Apache" || license == "apache") {
    link =
      "[https://choosealicense.com/licenses/apache-2.0/](https://choosealicense.com/licenses/apache-2.0/)";
  } else if (license === "BSL" || license == "bsl") {
    link =
      "[https://choosealicense.com/licenses/](https://choosealicense.com/licenses/bsl/)";
  } else {
    link = "";
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license !== " ") {
    licenseSection = `## License
The Application is covered under ${license}  license. Learn more about the license from the following link: ${renderLicenseLink(
      license
    )}`;
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //table of contents
  let toc = [
    "Description",
    "Installation",
    "Usage",
    "License",
    "Contribution",
    "Test",
    "Questions",
  ];
  let res = "";
  for (let i = 0; i < toc.length; i++) {
    res += `- [${toc[i]}](#${toc[i]})\n`;
  }

  return `# ${data.title}

## Description
${data.description}
## Table of Contents
${res}
## Installation
${data.installation}
## Usage
${data.usage}
${renderLicenseSection(data.license)}
## ${toc[3]}
${renderLicenseBadge(data.license)}
## Contribution
${data.contributing}
## Test
${data.test}
## Questions
GitHub: ${data.username}. [Click here](https://github.com/${
    data.username
  }) to go to my github profile\n
For additional questions reach me at ${data.email}
`;
}

module.exports = generateMarkdown;
