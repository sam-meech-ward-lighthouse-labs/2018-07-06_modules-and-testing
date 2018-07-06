# Modules and Testing

## Modules 

A module is a JavaScript file.

* A file that exports an object.

Using modules we can: 
* Smaller program, like an installed package.
* Something that someone has made that you can install into node. To *hopefully* make your life easier.

Every JS file in node, gets wrapped in this function:

```js
(function (exports, require, module, __filename, __dirname) {
  // All of our code, happens in here
})(...);
```

Immediately Invoked Function Expression:

```js
(function()) {

})();
```

## npm

Newly Practicing Mortician

* a package manager for node

The same:
* `npm i cowsay`
* `npm install cowsay`
* `npm install --save cowsay`

- package.json 
- `npm init -y`

## mocha

- `npm install --save-dev mocha`

- `./node_modules/mocha/bin/mocha`

## Links

* https://mochajs.org/
* https://nodejs.org/api/path.html#path_path_join_paths
* https://nodejs.org/api/modules.html#modules_require
* https://www.google.ca/search?q=supercalifragilisticexpialidocious&oq=supercal&aqs=chrome.0.0j69i57j0l4.1972j0j7&sourceid=chrome&ie=UTF-8
* https://nodejs.org/api/modules.html

---

## Snippets

```js
console.log( module.exports === exports);

// console.log(stringFunctions.uppercase("sarah", 4));
// console.log(stringFunctions.uppercase("supercalifragilisticexpialidocious", 1));
// console.log(stringFunctions.uppercase("watermelon", 3));

// console.log(stringFunctions.somethingCase("supercalifragilisticexpialidocious"));
```
