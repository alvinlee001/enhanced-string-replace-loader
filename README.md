# Replace string with filename loader for [Webpack](http://webpack.github.io/)

Perform replacements (plain) with filename (regex) in the contents loaded by the loader.

## Usage:

Loader allows to perform replacements in a way [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) does (loader uses it internally).
It means that if you want to replace all occurrences, you should use RegExp-like string in `options.search` with `g` flag in `options.flags`, etc.

The replacement string is a result of a callback that accepts the filename as param.

### Plain replacement:

Plain string replacement, no need to escape RegEx special characters.

In your `webpack.config.js`:

```javascript
module.exports = {
  // ...
  module: {
    rules: [
        {
          test: /\.constant\.ts$/,
          use: [{
                  loader: "replace-string-with-filename-loader",
                  options: {
                    search: "@@FILENAME@@",
                    replacementString: function(filename) {
                      return filename.replace('.constant', '');
                    },
                    debug: function(self) {
                      // console.log('All Loaders: ', self.loaders)
                    },
                    flags: 'g'
                  }
          }]
        }
    ]
  }
}
```

