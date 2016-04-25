# Dog Walkers

A simple frontend app for finding all available dog walkers in an area.

To run the app `git clone` and `cd` into the repository and run `npm install`.

`npm test` will, predictably, run the modest test suite and `npm start` will start the webpack dev server, allowing you to see the app in action at http://localhost:8080/. To actually see the map, you will need to create your own `constants/Keys.js`, with your Google Maps Javascript API key.

You may also try `npm run build` to create a lightly optimized bundle.

## Notable libraries used

- [React] views with [Aphrodite] for styling
- [Material-UI] for rapidly prototyping beautiful form inputs
- [Google Map React] for easy Google Maps integration
- [Redux] for state management
- [Immutable] for ensured immutability
- [Webpack] for asset compilation and [Babel] for the ES2015 and ES7 features of tomorrow, today.
- [Mocha] and [Chai] for testing.
- [Faker] for test user flavour and randomness
- [lodash] for a couple efficient helper methods

[React]: https://facebook.github.io/react/ "Fast and efficient views"
[Aphrodite]: https://github.com/Khan/aphrodite "It's inline styles, but they work!"
[Material-UI]: http://www.material-ui.com/#/ "A Set of React Components that Implement Google's Material Design"
[Google Map React]: https://github.com/istarkov/google-map-react "Universal Google Map React component"
[Redux]: https://github.com/reactjs/redux "Predictable state container for JavaScript apps"
[Immutable]: https://facebook.github.io/immutable-js/ "Immutable collections for JavaScript"
[Webpack]: https://webpack.github.io/ "Everybody's new favourite module bundler"
[Babel]: https://babeljs.io/ "It transforms your JavaScript"
[Mocha]: https://mochajs.org/ "Feature-rich JavaScript test framework"
[Chai]: http://chaijs.com/ "BDD / TDD assertion library"
[Faker]: https://github.com/Marak/faker.js "Generate massive amounts of fake data"
[lodash]: https://lodash.com/ "A modern JavaScript utility library delivering modularity, performance, & extras"
