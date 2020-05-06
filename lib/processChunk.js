const getOptionsArray = require('./getOptionsArray')
const replace = require('./replace')

function processChunk (source, map) {
  this.cacheable()
  console.log("this.resource  - "+this.resource+"\n");
  const optionsArray = getOptionsArray(this)
  let newSource = source

  for (const options of optionsArray) {
    newSource = replace(newSource, options)
  }

  this.callback(null, newSource, map)
}

module.exports = processChunk
