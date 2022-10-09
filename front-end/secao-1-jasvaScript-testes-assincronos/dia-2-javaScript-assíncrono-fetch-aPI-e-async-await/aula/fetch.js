const fetch = require('node-fetch');

const fetchJoke = async = () => {
  try {
  const url = 'https://api.adviceslip.com/adce';
  const result = fetch(url);
   console.log(result);
  } catch (error){
    console.log(error);
  }
};

fetchJoke();