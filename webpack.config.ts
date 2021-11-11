module.exports = {
  module: {
    rules: [
      // Place this *before* the `ts-loader`.
      {
        test: /\.worker\.ts$/,
        loader: 'worker-loader',
        options: {
          worker: 'SharedWorker',
          inline: 'fallback',
          publicPath: '/assets/workers/',
        },
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
};
// ;
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
// import { AngularWebpackPlugin } from '@ngtools/webpack';

// module.exports = {
//   module: {
//     // rules: [
//     //   // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
//     //   {
//     //     test: /\.tsx?$/,
//     //     use: {
//     //       loader: 'ts-loader',
//     //     },
//     //   },
//     //   {
//     //     test: /\.worker\.js$/,
//     //     use: { loader: 'sharedworker-loader' },
//     //   },
//     // ],
//     rules: [
//       {
//         test: /\.worker\.ts$/,
//         use: [
//           {
//             loader: 'worker-loader',
//             options: {
//               worker: 'SharedWorker',
//               inline: 'fallback',
//               // filename: 'static/js/[name].js',
//             },
//           },
//           { loader: 'ts-loader' },
//           // {
//           //   loader: 'babel-loader',
//           //   options: {
//           //     cacheDirectory: true,
//           //   },
//           // },
//         ],
//       },
//       {
//         test: /\.worker\.(c|m)?js$/i,
//         loader: 'worker-loader',
//         options: {
//           worker: 'SharedWorker',
//           inline: 'fallback',
//         },
//       },
//       {
//         test: /\.ts$/,
//         loader: 'ts-loader',
//         exclude: [
//           //...
//           /\.worker\.ts$/,
//         ],
//         // loader: '@ngtools/webpack',
//         // options: {
//         //   tsConfigPath: 'tsconfig.app.json',
//         // },
//       },
//     ],
//   },
//   // resolve: {
//   //   extensions: ['.ts', '.js'],
//   // },
//   plugins: [
//     new AngularWebpackPlugin({
//       tsconfig: 'tsconfig.app.json',
//     }),
//   ],
// };
// @ts-ignore
// module.exports = (config, options) => {
//   // config.module.rules.forEach(rule => {
//   //     if (rule.test.exec('.scss')) {
//   //         rule.test = new RegExp('(?<!\.webcomponent)(' + rule.test.source + ')');
//   //     }
//   // });

//   config.module.rules.push(
//     // {
//     //   test: /\.ts$/,
//     //   loader: 'ts-loader',
//     //   // loader: 'awesome-typescript-loader',
//     //   options: {
//     //     compilerOptions: 'tsconfig.json',
//     //   },

//     //   exclude: [/node_modules/],
//     // },
//     {
//       test: /\.worker\.ts$/,
//       exclude: [/node_modules/],

//       use: [
//         {
//           loader: 'worker-loader',

//           options: {
//             // filename: '[name].[hash:8].ts',
//             inline: 'fallback',
//             worker: {
//               type: 'SharedWorker',
//               options: {
//                 // credentials: 'omit',
//                 name: 'verifikaDal', // for debbuging
//               },
//             },
//           },
//         },
//         { loader: 'ts-loader' },

//         // {
//         //   loader: 'babel-loader',
//         //   options: {
//         //     cacheDirectory: true,
//         //   },
//         // },
//         // {
//         //   loader: 'babel-loader',
//         //   options: {
//         //     cacheDirectory: true,
//         //   },
//         // },
//       ],
//     },
//     {
//       test: /\.worker\.(c|m)?js$/i,
//       loader: 'worker-loader',
//       options: {
//         worker: 'SharedWorker',
//         inline: 'fallback',
//       },
//     }
//   );
//   return config;
// };

// const WorkerPlugin = require('worker-plugin');

// module.exports = {
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         loader: 'ts-loader',
//         // loader: 'awesome-typescript-loader',
//         // options: {
//         //   compilerOptions: 'tsconfig.json',
//         // },

//         exclude: [/node_modules/],
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.ts', '.js'],
//   },
//   plugins: [
//     new WorkerPlugin({
//       globalObject: 'self',
//       sharedWorker: true,
//     }),
//   ],
// };
