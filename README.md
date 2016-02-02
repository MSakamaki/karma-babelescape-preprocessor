Karma Babelescape Preprocessor
====================

### install


```sh
npm install --save-dev karma-babelescape-preprocessor
```

### use karma config

 * karma.config.js

```javascript

preprocessors: {
  'client/{app,components}/**/*.js': ['babel', 'babelescape', 'coverage'],
},

```