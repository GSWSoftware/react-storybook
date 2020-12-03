const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/preset-create-react-app',
      options: {
        scriptsPackageName: path.resolve('../../../node_modules/.bin/react-scripts')
      }
    }
  ]
}
