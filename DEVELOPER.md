# Vision
The vision is to provide front-end developers with easy access to emojis to relieve them from the tedious process of copy pasting emojis or unicodes into their projects. The library should be up to date with the latest version of Unicode (currently version 15). 

# Class diagram
The class ```EmojiProvider``` contains all methods belonging to the the public interface.

The class ```UnicodeConverter``` handles conversion of unicodes to emojis.

The class ```EmoticonConverter``` handles conversion of emoticons to emojis.

The class ```EmojiResources``` gathers all emojis into one array containing either all emojis or only emojis belonging to requested category.

As of now, the emojis are stored in classes. All emoji categories have its own class and one class has as only task to return an array of all emoji objects belonging to that category class. 

<span style="color:orange">OBS! Plans of migrating emoji data to json files or a REST API are under consideration. Do you want to help? To contribute, check below!</span>

![Class diagram](./release/images/class-diagram.png "Class diagram")

# Requirements specification
 The requirements specification can be found here: [./release/requirements-specification.md](https://github.com/emiliaajax/emoji-provider/blob/main/release/requirements-specification.md)

# Test specification and test reports
The test specification can be found here: [./release/test-specification.md](https://github.com/emiliaajax/emoji-provider/blob/main/release/test-specification.md) <br>
The test reports can be found here: [./release/test-reports/](https://github.com/emiliaajax/emoji-provider/tree/main/release/test-reports) 

# Code standard
The project follows the [Javascript Standard Style](https://standardjs.com/).

# Contributing
1. Fork the project on Github.
2. Install dev dependencies (```npm install```).
3. Create a new feature branch (```git checkout -b my-awesome-new-feature```)
4. Add tests to your feature.
5. If manual test, add test cases in [`./release/test-specification.md`](https://github.com/emiliaajax/emoji-provider/blob/main/release/test-specification.md).
7. Make sure that all tests are passing when running the automatic unit tests (```npm test```) or testing manually.
8. Document both manual and automatic unit tests in a test report and add the report to [`./release/test-reports/`](https://github.com/emiliaajax/emoji-provider/tree/main/release/test-reports).
9. Add your feature in [`./release/requirements-specification.md`](https://github.com/emiliaajax/emoji-provider/blob/main/release/requirements-specification.md). Don't forget to add status!
5. Create a pull request!

# Available scripts

In the project directory, you can run:

### `npm start`
Runs the application.

### `npm run lint`
Checks the code for linting errors.

### `npm run lint:fix`
Fixes existing linting errors.

### `npm run test`
Runs the automatic unit tests.

# TODO List
[ ] Tag-to-emoji conversion for text inputs<br>
[ ] Check if the used browser supports an emoji<br>
[ ] Migrate emoji data from classes to .json files or a REST API
