const { interpolateName } = require('loader-utils');

function replace (source, options) {
  const { replacementString, flags, strict } = options
  let search
  if (options.search instanceof RegExp) {
    // if the `search` type is RegExp, we ignore `flags`
    search = options.search
  } else if (flags !== null) {
    search = new RegExp(options.search, flags)
  } else {
    search = options.search
  }

  if (strict && (typeof search === 'undefined' || search === null || typeof replacementString === 'undefined' || replacementString === null)) {
    throw new Error('Replace failed (strict mode) : options.search and options.replace are required')
  }

  console.log("This is: ", this)
  const fileName = interpolateName(this, '[name]', {});
  let replacementResult = replacementString(fileName);
  const newSource = source.replace(search, replacementResult);

  if (strict && (newSource === source)) {
    throw new Error('Replace failed (strict mode) : ' + options.search + ' → ' + options.replace)
  }

  return newSource
}

module.exports = replace
