# Hangman

#### _A basic game of Hangman, 06/03/2022_

#### By _**Tristen Everett**_

## Description

This project was to gain practice with Redux and integrating it into a React project. In this project, I built a page that lets the user play a game of hangman with 1-5 words generated at random using the lorem-ipsum package. When the webpage initially loads the user gets an input that accepts an integer between 1 and 5. The page will then generate a phrase for the user to guess in a game of hangman and loads the game with buttons for the user to click as their guess in the game. As the user makes mistakes the image will change to fill in a stick person, and once the stick person has had their face drawn at 5 mistakes all remaining guess buttons will become disabled showing the phrase as far as the user has filled it in and allowing the user to end game returning them to the initial screen.

### Diagram

* [Hangman Diagram](hangman.pdf)

## Setup/Installation Requirements

1. Clone this Repo
2. Run `npm install` from within the root directory of the cloned project
3. Run `npm start` from within the root directory of the cloned project
4. The webpage should start automatically in your default browser. If it doesn't go to http://localhost:3000 in your preferred browser

## Technologies Used

* [Create React App](https://github.com/facebook/create-react-app)
* Redux
* React-Redux
* [lorem-ipsum](https://www.npmjs.com/package/lorem-ipsum)

### License

This software is licensed under the MIT license

Copyright (c) 2022 **_Tristen Everett_**