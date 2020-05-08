const getOptionsArray = require('./getOptionsArray')
const replace = require('./replace')
const debug = require('./debug')

function processChunk (source, map) {
  this.cacheable()
  const optionsArray = getOptionsArray(this)
  let newSource = source
  
  for (const options of optionsArray) {
    if(options.debug) {
      debug(this, options.debug)
    }
    newSource = replace(newSource, options, this)
  }

  this.callback(null, newSource, map)
}

module.exports = processChunk
