const fs = require('fs'),
    path = require('path');

module.exports = (ConfigFile, RunMode) => {
    if (!RunMode) {
        if (process.env.NODE_ENV) {
            // automatically use NODE_ENV
            RunMode = process.env.NODE_ENV
        } else {
            // default mode
            RunMode = 'development'
        }
    }

    let config = null
    if (isHash(ConfigFile)) {
        config = ConfigFile
    } else if (ConfigFile.match(/\.js$/)) {
        // js format
        config = require(path.resolve(process.cwd() + '/' + ConfigFile))
    } else {
        // assume JSON format
        const ConfigFilePath = path.resolve(process.cwd() + '/' + ConfigFile);
        console.log('path: %s', ConfigFilePath);
        config = JSON.parse(fs.readFileSync(ConfigFilePath));
    }

    if (config[RunMode]) {
        // copy keys from RunMode as root keys
        Object.keys(config[RunMode]).forEach((key) => {
            config[key] = config[RunMode][key];
        });
    }

    return config;
}

function isHash(obj) {
    return (typeof obj === 'object') && !(obj instanceof Array)
}