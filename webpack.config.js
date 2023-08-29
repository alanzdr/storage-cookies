const webpack = require('webpack')
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = () => {
  const mode = process.env.NODE_ENV ?? 'development'
  console.log('## START ##', `env: ${mode}`);

  const env = {
    development: {
      PATH: 'public',
      FILENAME: 'storage-cookie.js'
    },
    production: {
      PATH: 'dist',
      FILENAME: 'storage-cookie.min.js'
    }
  }

  return {
    entry: './src/index.ts',
    mode,
    target: ['web', 'es5'],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader'
            }
          ],
        },
      ],
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        ...env[mode],
        DEBUG: false,
      })
    ],
    resolve: {
      plugins: [
        new TsconfigPathsPlugin()
      ],
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: env[mode].FILENAME,
      path: path.resolve(__dirname, env[mode].PATH),
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: 9000,
    }
  };
}