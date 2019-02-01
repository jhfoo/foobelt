# foobelt
Foo's Utility Belt

## ConfigReader
### Parameters
ConfigReader(filename, RunMode)

- Supports .js and .json file formats

### Example
```javascript
const foobelt = require('foobelt'),
    Config = foobelt.ConfigReader('./config.js','production');
```