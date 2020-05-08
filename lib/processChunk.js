const getOptionsArray = require('./getOptionsArray')
const replace = require('./replace')
const debug = require('./debug')

function processChunk (source, map) {
  this.cacheable()
  console.log("this.resource  - "+this.resource+"\n");
  console.log("this.resourcePath  - "+this.resourcePath+"\n");
  const optionsArray = getOptionsArray(this)
  let newSource = source
  
  for (const options of optionsArray) {
    if(options.debug) {
      debug(this, options.debug)
    }
    newSource = replace(newSource, options)
  }

  this.callback(null, newSource, map)
}

module.exports = processChunk
