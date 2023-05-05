# Programming Challende

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Code stack
Redux was used to control the global state, although it is a library characterized by its boilerplate, today there is a package(@reduxjs/toolkit) that facilitates its integration.

Then for the css, styled-component was used, a library that provides flexibility when styling.

In order to test the potions algorithm, jest was used

## Relevant aspects
To find the best possible attack, I sought to solve it with a recursive algorithm that finds the combinations that generate the most damage. In the course I saw that creating combinations of 5 different potions was sometimes not the best option. So you have to make the recursive algorithm compete, basically starting with combinations of 5 types and 4 different types. As the exercise in case 3 shows. If you start with combinations of 4 types there is a greater attack.


I used TDD for its development, and I was finding some bugs along the way. In the end, I did a QA test, found some cases that didn't work, created the unit tests and redeployed (you can see the commit).

## Author
Robert Diaz Bejar
