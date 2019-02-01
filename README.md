# foobelt
Foo's Utility Belt

## ConfigReader
### Parameters
ConfigReader(filename, RunMode)

- Supports .js and .json file formats

### Example
<code>
const foobelt = require('foobelt'),
    Config = foobelt.ConfigReader('./config.js','production');
</code>