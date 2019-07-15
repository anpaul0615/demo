# eslint-tutorial

> https://eslint.org/docs/user-guide/getting-started


- `npm run lint:init` 실행로그
  ```
  > eslint --init

  ? How would you like to use ESLint? To check syntax, find problems, and enforce code style
  ? What type of modules does your project use? JavaScript modules (import/export)
  ? Which framework does your project use? None of these
  ? Where does your code run? Node
  ? How would you like to define a style for your project? Use a popular style guide
  ? Which style guide do you want to follow? Standard (https://github.com/standard/standard)
  ? What format do you want your config file to be in? JavaScript
  Checking peerDependencies of eslint-config-standard@latest
  The config that you've selected requires the following dependencies:

  eslint-config-standard@latest eslint@>=6.0.1 eslint-plugin-import@>=2.18.0 eslint-plugin-node@>=9.1.0 eslint-plugin-promise@>=4.2.1 eslint-plugin-standard@>=4.0.0
  ? Would you like to install them now with npm? Yes
  Installing eslint-config-standard@latest, eslint@>=6.0.1, eslint-plugin-import@>=2.18.0, eslint-plugin-node@>=9.1.0, eslint-plugin-promise@>=4.2.1, eslint-plugin-standard@>=4.0.0
  ```

- `npm run lint:start` 실행로그
  ```
  > eslint main.js

  ~\_workspace\js-demo\eslint\eslint-tutorial\main.js
    1:14  error  Missing space before function parentheses      space-before-function-paren
    2:7   error  'a' is never reassigned. Use 'const' instead   prefer-const
    3:7   error  'b' is never reassigned. Use 'const' instead   prefer-const
    3:11  error  Strings must use doublequote                   quotes
    7:8   error  Newline required at end of file but not found  eol-last
  ```
