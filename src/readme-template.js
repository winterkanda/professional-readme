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
}