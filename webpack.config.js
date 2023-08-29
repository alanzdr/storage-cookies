const webpack = require('webpack')
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = () => {
  const mode = process.env.NODE_ENV ?? 'development'
  console.log('## START ##', `env: ${mode}`);

  const env = {
    development: {
      PATH: 'public'
    },
    production: {
      PATH: 'dist'
    }
  }

  return {
    entry: './src/index.ts',
    mode,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
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
      filename: 'storage-cookie.min.js',
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