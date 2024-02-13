# Bertholdt's Bed

## *"The training Corps made a game of using Bertholdt's sleeping positions to predict the weather"*

This repository handles the development and deployments for [https://bertholdtsbed.com](https://bertholdtsbed.com), an AI/ML-driven weather application

## To run the project

### On local:
* Clone the repository using `git clone https://github.com/greatmage/bertholdts-bed.git`
* Run the commands `cd bertholdts-bed` to enter the project directory and `npm install` to retrieve the NodeJS dependencies
* Generate API keys for [WeatherAPI](https://www.weatherapi.com) and [OpenAI's GPT-3.5](https://platform.openai.com/account/api-keys) and save them individually to separate files
* Provide the path references to your API key files in `src/constants/apiRefs.js`
* Use `npm start` to run the application in development mode
* Open [http://localhost:3000](http://localhost:3000) to view it in your browser

### On Docker:
* Install and setup [Docker](https://www.docker.com/)
* Clone the repository using `git clone https://github.com/NarVarg/BertholdtsBed.git`
* Run the commands `cd BertholdtsBed` and `npm run dev` to install and run the containerized application
* Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Testing
* For unit testing use `npm run test` or `npm t` to run the AVA suite
* For functional testing `npm run cypress:open` will start the Cypress panel for component and E2E testing
