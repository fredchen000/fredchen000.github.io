# Fred's Personal Website
View the website: [Link](https://fredchen000.github.io/build/)


# How I Create this Website from Scratch
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- Create React App
Official Website: https://create-react-app.dev/
```
npx create-react-app my-app
cd my-app
npm start
```
npm v.s. npx: https://medium.com/itsems-frontend/whats-npx-e83400efe7f8

p.s. Using [Atom](https://atom.io/) as text editor


ESLint & Prettier
---
https://create-react-app.dev/docs/setting-up-your-editor/
Reason: To ensure same coding patterns.
- ESLint `npm install eslint --save-dev` & `npm install eslint-plugin-react --save-dev`
    - Make sure the editor has eslint plugin installed(ex:linter-eslint in Atom)
    - `eslint --init` to set your style (it will create eslint configuration file in your project)
- Prettier `npm install --save husky lint-staged prettier`
    - husky makes it possible to use githooks as if they are npm scripts.
    - lint-staged allows us to run scripts on staged files in git. See this blog post about lint-staged to learn more about it.
    - prettier is the JavaScript formatter we will run before commits.

Lodash
---
Reason: Easier to maintain JavaScript Codes and working flow.
- Lodash Installation `npm i --save lodash`
- Lodash Documents: https://lodash.com/docs/

SCSS
---
Reason for SCSS not CSS-in-JS: I prefer coding CSS and JS seperately
- installation `npm i --save node-sass`
- Recommend Reading(Chinese): [SCSS進階使用](https://medium.com/d-d-mag/%E4%BD%A0%E5%8F%AF%E8%83%BD%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84-sass-%E6%8A%80%E5%B7%A7-c97d4d5e0fc4)

CSS-Modules (babel-plugin-react-css-modules)
---
Reason: Easy to deal with component style so that specific css are working only to the specific components (write local css)

CSS-Modules is already installed in create-react-app, but since I prefer writing className in strings rather than writing like this `className={style.title}`, I decided to install babel-plugin-react-css-modules so that styleName can be used when adding css styles.

- Installation: see [Guide 1](https://blog.esunr.xyz/2020/04/%E5%9C%A8React%E4%B8%AD%E4%BD%BF%E7%94%A8%E6%9B%B4%E5%A5%BD%E7%9A%84CSS-Modules/#2-2-%E4%BF%AE%E6%94%B9-babel-%E9%85%8D%E7%BD%AE) and [Guide 2](https://daihaoxin.github.io/post/bb9071c9.html)

For Example
code:
![code ><](https://i.imgur.com/yfMFBPF.png =400x)
result:
![elements ><](https://i.imgur.com/fCvyH4q.png =400x)

All classes are unique since they are hashed in this way`[local]__[name]__[hash:base64:5]`

p.s. Hash may not work, please follow this issue to solve the problem. [Issue Link](https://github.com/gajus/babel-plugin-react-css-modules/issues/291)

Resolver (babel-plugin-module-resolver)
---
Reason: Easier to handle path and directories.
- Installation: see [Document](https://www.npmjs.com/package/babel-plugin-module-resolver)

Router(react-router-dom)
---
Reason: Support routing in different pages
- Installation: see [Document](https://reactrouter.com/web/api/HashRouter)

React-Bootstrap
---

- Installation and Doc: see [Document](https://react-bootstrap.github.io/)

React-Router-Hash-Link
---
npm install --save react-router-hash-link


Iconfont map issue
---
Turn "\&#xe7ab;" to "\ue7ab"

Font
---
Robo Slab
https://fonts.google.com/specimen/Roboto+Slab?category=Serif

Packages
---
1. [react-starfield-animation](https://github.com/transitive-bullshit/react-starfield-animation)
2. Header -- [react-bootstrap](https://react-bootstrap.github.io/)
