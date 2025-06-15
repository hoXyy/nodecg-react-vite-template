import path from 'path';
import nodeExternals from 'webpack-node-externals';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export default {
  name: 'extension',
  mode: process.env.NODE_ENV || 'production',
  entry: path.resolve('src/extension/index.ts'),
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'builtin:swc-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    tsConfig: path.resolve('tsconfig.extension.json'),
  },
  output: {
    path: path.resolve('extension'),
    filename: 'index.js',
    library: { type: 'commonjs2' },
    clean: true,
  },
  devtool: 'source-map',
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000,
  },
  externals: [nodeExternals()],
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve('tsconfig.extension.json'),
      },
    }),
  ],
};
