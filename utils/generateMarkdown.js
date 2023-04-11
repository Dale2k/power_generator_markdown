// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge;
  if (license !== "none") {
    badge = `![license badge](https://img.shields/badge/license-${license}-success)`;
  } else {
    badge = "";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link;
  if (license === "MIT") {
    link =
      "[https://choosealicense.com/licenses/mit](https://choosealicense.com/licenses/mit)";
  } else if (license === "Apache") {
    link =
      "[https://choosealicense.com/licenses/apache-2.0/](https://choosealicense.com/licenses/apache-2.0/)";
  } else if (license === "ISC") {
    link =
      "[https://choosealicense.com/licenses/](https://choosealicense.com/licenses/isc)";
  } else {
    link = "";
  }
  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = "";
  if (license !== "none") {
    licenseSection = `## License
The Application is covered under ${license}  license
Learn more about the license from the following link: ${renderLicenseLink(
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
    res += `- [${table[i]}](#${table[i]})\n`;
  }

  return `# ${data.title}\n
${badgeShow}
## ${table[0]}\n
${data.description}\n
## Table of Contents\n
${res}\n
## ${table[1]}\n
${data.installation}\n
## ${table[2]}\n
${data.usage}\n
${renderLicenseSection(data.license)}
## ${table[4]}\n
${data.contributing}\n
## ${table[5]}\n
${data.test}\n
## ${table[6]}\n
GitHub: ${data.username}. [Click here](https://github.com/${
    data.username
  }) to go to my github profile\n
For additional questions reach me at ${data.email}\n
`;
}

module.exports = generateMarkdown;
