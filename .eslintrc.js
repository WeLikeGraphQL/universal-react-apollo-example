module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
    "node": true,
    "mocha": true
  },
  "rules": {
    "arrow-body-style": 0,
    "camelcase": 0,
    "comma-dangle": 0,
    "max-len": 0,
    "trailing-spaces": 0,

    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,

    "jsx-a11y/html-has-lang": 0,
    "jsx-a11y/no-static-element-interactions": 0,

    "react/forbid-prop-types": 0,
    "react/prop-types": 0,
    "react/jsx-filename-extension": 0,

    "graphql/template-strings": [2, {
      "env": "apollo",
      "schemaJson": require("./schema/schema.json")
    }]
  },
  "plugins": [
    "graphql"
  ]
}
