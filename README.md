# Logging Library

This library provides a flexible logging system, allowing the use of different logging strategies and providers. It's designed to enable easy integration and customization of logging behavior in web applications.

## Features

- **Pluggable Logging Strategies:** Choose from different strategies like immediate logging, logging after a timeout, or logging when certain events occur.
- **Multiple Logging Providers:** Log data can be output to the console, HTML elements, or other custom providers.
- **Extensible Design:** Easily extend the library with custom strategies and providers.

## To-Do List for Logging Library Project

- [ ] **Add Tests**
    - Implement unit tests for each class.
    - Integrate testing frameworks like Jest or Mocha.
    - Ensure code coverage for different logging strategies and providers.
    - Add end-to-end tests for real-world scenarios.

- [ ] **Improve Documentation**
    - Enhance inline code comments and JSDoc for better clarity.
    - Update README with more detailed usage examples.
    - Create a comprehensive API reference guide.
    - Document best practices and common use cases.

- [ ] **Add Watcher for Build**
    - Implement a build watcher for esbuild.
    - Ensure automatic rebuilds on file changes during development.
    - Configure efficient build caching for faster rebuild times.

- [ ] **Install and Configure TSLint**
    - Install TSLint or an equivalent TypeScript linter (e.g., ESLint with TypeScript support).
    - Set up linting rules and standards for the project.
    - Integrate linting into the build process and/or pre-commit hooks.


## Installation

To install the dependencies, navigate to the root of the folder and run:

```bash
yarn install
```

## Build

To build the project, use the following command:

```bash
yarn build
```

You can edit the file ``scripts/build.js`` to set your output path.

## Demo

You can find a demo under ``public`` folder in ``index.html`` file.
To run the local server, in root of project, use the following command: ``yarn serve``.

Or, you can run ``yarn start`` to run the log server to test ``JsonLog`` class.

## Usage

Here's an example of how to use the library with randomized providers and strategies:

```html
<script type="module">
    import {
        BaseFormatter as Formatter,
        HtmlElementLog as Provider,
        LogNow as Strategy,
        LogService as Service
    } from "./public/assets/index.esm.js";

    const formatter = new Formatter();
    const provider = new Provider(formatter, 'console');
    const strategy = new Strategy(provider);
    const service = new Service(strategy);

    [...Array(120).keys()].forEach((index) => {
        setTimeout(() => service.error(`Message error #${index}`), Math.floor(index * Math.random()) * index)
    });

    [...Array(120).keys()].forEach((index) => {
        setTimeout(() => service.info(`Message info #${index}`), Math.floor(index * Math.random()) * index)
    })
</script>
```
You can also register global event listener.

```html
<script>
    import {
        BaseFormatter as Formatter,
        HtmlElementLog as Provider,
        LogNow as Strategy,
        LogService as Service
    } from "./public/assets/index.esm.js";

    const formatter = new Formatter();
    const provider = new Provider(formatter, 'console');
    const strategy = new Strategy(provider);
    const service = new Service(strategy);
    
    window.addEventListener('error', async (error) => {
        service.error(error.message);
    });
</script>
```

## Contributing

Contributions to this library are welcome. Please follow the standard pull request process for your contributions.