// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  let badge;
  if (!license) {
    return "";
  } else if (license) {
    if (license == "MIT") {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://`;
    } else if (license == "BSL") {
      return `[![License: BSL](https://img.shields.io/badge/License-BSL-yellow.svg)`;
    } else if (license == "Apache") {
      return `[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    }
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;
  if (license == "MIT") {
    link =
      "[https://choosealicense.com/licenses/mit](https://choosealicense.com/licenses/mit)";
  } else if (license == "Apache") {
    link =
      "[https://choosealicense.com/licenses/apache-2.0/](https://choosealicense.com/licenses/apache-2.0/)";
  } else if (license === "BSL") {
    link =
      "[https://choosealicense.com/licenses/](https://choosealicense.com/licenses/)";
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

## ${toc[0]}
${data.description}
## Table of Contents
${res}
## ${toc[1]}
${data.installation}
## ${toc[2]}
${data.usage}
${renderLicenseSection(data.license)}
## ${toc[3]}
${renderLicenseBadge(data.license)}
## ${toc[4]}
${data.contributing}
## ${toc[5]}
${data.test}
## ${toc[6]}
GitHub: ${data.username}. [Click here](https://github.com/${
    data.username
  }) to go to my github profile\n
For additional questions reach me at ${data.email}\n
`;
}

module.exports = generateMarkdown;
