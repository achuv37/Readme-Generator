// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if(license != "None") {
    badge = "![License Badge](https://img.shields.io/badge/License-" + license + "-yellow.svg)";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";
// selecting the correct license link.
  if (license === "MIT") {
    licenseLink = "https://mit-license.org/";
  } else if (license === "Apache") {
      licenseLink = "https://www.apache.org/licenses/LICENSE-2.0.html";
  } else if (license === "BSD") {
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
  } else if (license === "GPL") {
      licenseLink === "https://www.gnu.org/licenses/gpl-3.0.en.html";
  } else {
      licenseLink ="N/A";
  }
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // creating license section
  let licenseSection = "";
  if(license != "None") {
    licenseSection += "##License\n"
    licenseSection += "Check here to see " + renderLicenseLink(license) + " to get more information\n";
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
