# Instructions to run this project

- clone repo using git clone https://github.com/franciscocabrera/CountryVote.git

- run npm install on project directory on console

- run npm start

# Approach

This project consists of three main components: the table, the search bar and the vote modal, each one took in between 2 and 3 hours. The structure of the project has each of this modules on a separate file, while a CountryTable component manages this parts and the state between each other using hooks

This project was made in a conscise and orderly way, according to it's scope, but in a way so as to facilitate the possibility of new features in the future. given the size of the project the only needed external library used was react-modal to handle the vote modal component, to retrieve the weather api's data the chosen library was fetch, since it's inbuilt and if good enough to handle requests of this complexity. In the case of a larger project with need of more robust services, a library like axios could have been used.

Since a connection with a back end or a data base was not a requirement, the react state hooks were used to handle all the live information. The main property that needed to be kept in a state was the number of votes in an array state, so for this a mapping of the data for the initial state was used, and the name of the countries was used as an Id system, the rest of the data was read from the mock.ts file.