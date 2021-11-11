// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.worker\.(c|m)?ts$/i,
//         // use: { loader: 'worker-loader' },
//         loader: 'worker-loader',
//         options: {
//           worker: 'SharedWorker',
//           inline: 'no-fallback',
//           // publicPath: 'auto',
//         },
//       },
//       {
//         test: /\.ts$/,
//         loader: 'ts-loader',
//         // loader: 'awesome-typescript-loader',
//         options: {
//           compilerOptions: 'tsconfig.json',
//         },

//         exclude: [/node_modules/],
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.ts', '.js'],
//   },
// }

// const WorkerPlugin = require('worker-plugin');
module.exports = {
  module: {
    // rules: [
    //   // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
    //   {
    //     test: /\.tsx?$/,
    //     use: {
    //       loader: 'ts-loader',
    //     },
    //   },
    //   {
    //     test: /\.worker\.js$/,
    //     use: { loader: 'sharedworker-loader' },
    //   },
    // ],
    rules: [
      {
        test: /\.worker\.ts$/,
        use: [
          {
            loader: 'worker-loader',
            options: {
              worker: 'SharedWorker',
              inline: 'fallback',
              // filename: 'static/js/[name].js',
            },
          },
          { loader: 'ts-loader' },
          // {
          //   loader: 'babel-loader',
          //   options: {
          //     cacheDirectory: true,
          //   },
          // },
        ],
      },
      {
        test: /\.worker\.(c|m)?js$/i,
        loader: 'worker-loader',
        options: {
          worker: 'SharedWorker',
          inline: 'fallback',
        },
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: [
          //...
          /\.worker\.ts$/,
        ],
        // loader: '@ngtools/webpack',
        // options: {
        //   tsConfigPath: 'tsconfig.app.json',
        // },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
