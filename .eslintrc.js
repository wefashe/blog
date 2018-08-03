// //这是一个javascript代码的检测工具
// //ESLint功能比 JSLint、JSHint强大，且包含它们的所有规则
// //env指定你想启用的环境
// //extends表示继承该插件中的规则
// //"extends": "eslint:all"表示使用eslint中所有的规则
// //extends: "eslint:recommended"表示使用eslint中打勾的规则
// //extends: "standard" 表示使用Standard规则，使用时需要安装依赖

// module.exports = {
//   // 默认情况下，ESLint会在所有父级组件中寻找配置文件，一直到根目录。ESLint一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
//   root: true,
//   // 对Babel解析器的包装使其与 ESLint 兼容。
//   parser: 'babel-eslint',
//   parserOptions: {
//     // 代码是 ECMAScript 模块
//     sourceType: 'module'
//   },

//   env: {
//     "browser": true,
//     "commonjs": true,
//     "es6": true,
//     "jquery": true
//   },
//   plugins: [
//     // 此插件用来识别.html 和 .vue文件中的js代码
//     'html',
//   ],
//   extends: "eslint:recommended", //表示启用推荐规则
//   "parserOptions": {
//     "ecmaVersion": 5
//   },
//   "rules": {
//     "indent": [
//       "error",
//       "tab"
//     ],
//     "linebreak-style": [
//       "error",
//       "unix"
//     ],
//     "quotes": [
//       "error",
//       "double"
//     ],
//     "semi": [ //// 自动补齐分号
//       "error",
//       "always"
//     ]
//   }
// };





// module.exports = {
//     root: true,
//     parserOptions: {
//         sourceType: 'module'
//     },
//     // required to lint *.vue files
//     plugins: [
//         'html'
//     ],
//     // add your custom rules here
//     'rules': {
//         // allow debugger during development
//         'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
//     }
// }