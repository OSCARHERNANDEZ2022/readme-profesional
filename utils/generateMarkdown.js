// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
        return `![GitHub License](https://img.shields.io/badge/license-${license}-red.svg)`
    }
    return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== 'None') {
        return `- [license](#license)`
    }
    return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license !== 'None') {
        return `## license
this project used the ${license} license`
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.licenses)}

# Table of Content
- [description](#description)
- [installation](#installation)
- [usage](#usage)
${renderLicenseLink(data.licenses)}
- [contribution](#contribution)
- [test](#test)
- [username](#username)
- [profile](#profile)
  
## username:
${data.github}
  
## description:
${data.description}
  
## installation:
${data.installation}
  
## usage:
${data.usage}
  
${renderLicenseSection(data.licenses)}
  
## contribution:
${data.contribution}
  
## test:
${data.test}
  
## email:
${data.email}  
`
}
// ${data.profile}
// ##profile:

module.exports = generateMarkdown;
