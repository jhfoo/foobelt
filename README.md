# foobelt
Foo's Utility Belt

## ConfigReader
### Parameters
ConfigReader(filename|hash, [RunMode])

- Supports .js and .json file formats

### Example
```js
const foobelt = require('foobelt'),
    Config = foobelt.ConfigReader('./config.js','production');
```