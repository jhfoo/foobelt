const {ConfigReader} = require('../src/index.js')

const config = ConfigReader({
    port: 1000,
    production: {
        port: 1001
    }
}, 'production')
console.log('config.port: %d', config.port)

const config1 = ConfigReader('./test/config.js')
console.log('config1.port: %d', config1.port)

const config2 = ConfigReader('./test/config.json', 'production')
console.log('config2.port: %d', config2.port)
