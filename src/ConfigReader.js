const fs = require('fs'),
    path = require('path');

module.exports = (ConfigFile, RunMode) => {
    if (!RunMode) {
        RunMode = 'development';
    }

    let config;
    if (ConfigFile.match(/\.js$/)) {
        config = require(path.resolve(process.cwd() + '/' + ConfigFile));
    } else {
        const ConfigFilePath = path.resolve(process.cwd() + '/' + ConfigFile);
        console.log('path: %s', ConfigFilePath);
        config = JSON.parse(fs.readFileSync(ConfigFilePath));
        // keywords: production, staging, development, default
        if (!RunMode) {
            RunMode = process.env.NODE_ENV ? process.env.NODE_ENV : 'default';
        }
    }

    if (config[RunMode]) {
        // copy keys from RunMode as root keys
        Object.keys(config[RunMode]).forEach((key) => {
            config[key] = config[RunMode][key];
        });
    }

    return config;
};