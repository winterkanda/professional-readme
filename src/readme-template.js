// sections for text

const generateDescription = descriptionText => {
    if (!descriptionText) {
        return '';
    }

    return `
    ${descriptionText}
    `;
};

const generateInstallation = installationText => {
    if (!installationText) {
        return '';
    }

    return `
    ${installationText}
    `;
};

const generateUsage = usageText => {
    if (!usageText) {
        return '';
    }

    return `
    ${usageText}
    `;
};

const generateContributing = contributingText => {
    if (!contributingText) {
        return '';
    }

    return `
    ${contributingText}
    `;
};

const generateTesting = testingText => {
    if (!testingText) {
        return '';
    }

    return `
    ${testingText}
    `;
};

module.exports = templateData => {
    console.log(templateData);

    const { title, description, installation, usage, licenses, contributing, testing, email, gitHub, name } = templateData;

    return `

    # ${title}
    ![badge](https://img.shields.io/badge/license-${licenses}-green)


    ## Table of Contents  
    [Description](#description)  
    [Installation](#installation)  
    [Usage](#usage)  
    [Licenses](#licenses)  
    [Testing](#testing)  
    [Questions](#questions)  
    
    <a name="description"/>

    ## Description
    ${generateDescription(description)}
    
    <a name="installation"/>
    
    ## Installation Instructions
    ${generateInstallation(installation)}
    
    <a name="usage"/>
    
    ## Usage Instructions
    ${generateUsage(usage)}
    
    <a name="licenses"/>
    
    ## Licenses Used
    ${licenses}.
    <a name="contributions"/>

    ## Contribution Guidelines
    ${generateContributing(contributing)}
    <a name="testing"/>
    
    ## Testing Instructions
    ${generateTesting(testing)}
    <a name="questions"/>
    
    ## Questions
    Contact me with any additional questions either via my GitHub or email: 
    * GITHUB: https://www.github.com/${gitHub}
    * EMAIL: <mailto:${email}>
    ### @${new Date().getFullYear()} ${name}
    
    `;  
};