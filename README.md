<h1 align='center'>Check-IA</h1>
<p align="center">Choose your next travel destination based on your profile and using AI :airplane:</p>
<p align="center">
  <a href="https://github.com/facebook/react">
    <img src="https://img.shields.io/static/v1?label=react&message=framework&color=blue&style=flat&logo=REACT" alt="React framework" />
  </a>
  <a href="https://app.netlify.com/sites/check-ia/deploys">
    <img src="https://api.netlify.com/api/v1/badges/40d9e3b1-b47d-45bd-b047-e478b5cb3365/deploy-status" alt="Netlify Status" />
  </a>
</p>

## :book: About
This project was created to help people choose their next travel destination, because we know there are a lot of places you can go and it's not easy to choose it. 
Even more with COVID-19 pandemic :mask:! You just need to answers some personality questions and we help you choose your next travel destination (and we hope you like it :smiley:)!

## :construction_worker: How it works
We created a machine learning model to choose your travel destination based on some personality questions (to understand your profile, we don't collect any data from you). This machine learning model was trained using a [Big Five personality](https://www.simplypsychology.org/big-five-personality.html) dataset that contains a lot of personality questions that were answered by people around the world. We choose some of these questions and we got the answers and the nationalities of each person related to it.

## ⚒️ Technologies
- [React](https://pt-br.reactjs.org/)
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [Axios](https://github.com/axios/axios)

## :gear: Prerequisites
Before you begin, you will need the following tools installed on your machine:
[Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/). 
In addition, you will need to run the [back-end](https://github.com/mateusfugita/check-ia-api) and the [ML API](https://github.com/mateusfugita/check-ia-ml) in your machine before continuing.

## :computer: Running locally
1. Install the dependencies

   ```
   yarn install
   ```

2. Run the application

   ```
   yarn start
   ```

3. The application will be running in `localhost:3000`.

## :building_construction: Build the app for production
Running `yarn build`, it builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!
