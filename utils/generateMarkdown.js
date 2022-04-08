// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  if(license != "None") {
    badge = "![License Badge](https://img.shields.io/badge/License-" + license + "-yellow.svg)";
  }
  return badge;
}

// Create a function that returns the license link
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

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // creating license section
  let licenseSection = "";
  if(license != "None") {
    licenseSection += "## " + "License" + "\n"
    licenseSection += "Check here: " + renderLicenseLink(license) + " to get more information\n";
  }
  return licenseSection;
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  const contents = ["Description", "Installation", "Usage", "Contributing", "Tests", "License", "Questions"];
  // Adding title
  let template = "# " + data.title + "\n";
  // Adding license badge
  template += renderLicenseBadge(data.license) + "\n";
  // Adding table of contents
  template += "## Table of Contents\n";
  for (let i = 0; i<contents.length; i++) {
    if(!(contents[i]==="License" && data.license ==="None")) {
      template +=  i+ 1 + ". [" + contents[i] + "](#" + contents[i][0].toLowerCase() + contents[i].substring(1) + ")\n";
    }
  }
  template += "\n";

  // Adding Description 
  template += "## " + contents[0] + "\n";
  template += data.description + "\n";

  // Adding Installation
  template += "## " + contents[1] + "\n";
  template += data.install + "\n";

  // Adding Usage 
  template += "## " + contents[2] + "\n";
  template += data.usage + "\n";

  // Adding Contributors
  template += "## " + contents[3] + "\n";
  template += data.contributors + "\n";

  // Adding Test
  template += "## " + contents[4] + "\n";
  template += data.test + "\n";

  //Adding License
  template += renderLicenseSection(data.license) + "\n";
  
  // Adding Questions 
  template +="## " + contents[6] + "\n";
  template += "Please contact me at " + data.email + " if you have any questions.\n";
  template += "Check here: (http://github.com/" + data.username + ") on Github.\n";
  
  return template;
}

module.exports = generateMarkdown;
