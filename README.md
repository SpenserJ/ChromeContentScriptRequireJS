# Chrome Content Script Extension with RequireJS

This repository should serve as a template for building Chrome extension that utilize RequireJS in a content script context. In order to access the variables of the website it runs on, RequireJS is injected into the document, and loads all modules via CajonJS (an addon for RequireJS, focused on AJAX evals for loading).

## Usage

The main entrypoint for the application is `index.js`, and any static configuration can be stored in `config.js`, until a proper configuration page can be developed. All modules are located in `js/`, with 3rd party dependencies located in `lib/`.

To add a new feature to a website, add a module into `js/`, and add it as a dependency of `index.js`. If you need to do any initialization, that can be added here as well.

## Extensions using this template

* [PowerWrike](https://github.com/SpenserJ/PowerWrike)
