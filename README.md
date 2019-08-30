# foobelt
Foo's Utility Belt

## ConfigReader
### Parameters
ConfigReader(filename|hash, [RunMode])

- Supports hash, .js, and .json file formats

### Example 1
```js
const foobelt = require('foobelt'),
    Config = foobelt.ConfigReader('./config.js','production');
```

### Example 2
```js
const {ConfigReader} = require('foobelt'),
    Config = ConfigReader({
        param1: 1000,
        untouchedparam: 'hello'
        production: {
            param1: 2000
        }
    },'production');
```