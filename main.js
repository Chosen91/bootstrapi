function getsTheDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //get the dog image in the dog card so that I can assign the URL from dog site to image source
        const dogImg = document.querySelector("#this-dog");
       newimage = dogImg.src = data.message;

      });
  }
  //Make sure you call the dog img when page begins loading 
  getsTheDogImage();
  //Get access to the button for making random dog image
  const dogButton = document.querySelector("#dog-button");
  // add event listener to dog button
  dogButton.addEventListener("click", () => {
    getsTheDogImage();
  });
  
  //Weather appplication
  //text bar for the city
  const userInput = document.querySelector('[type="text"]');
  
  // declare variables to store data from different cities
  let tempHolder;
  let windHolder;
  let descriptionHolder;
  
  //Document the weather API portion of page
  const weatherBackground = document.querySelector("#weather-api");
  
  //function to get the weather for a given city
  function getsTheWeather() {
    let city = userInput.value;
    const weatherURL = `https://goweather.herokuapp.com/weather/${city}`;
    fetch(weatherURL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //Document the temperature, wind, and description and display
        //Create new html elements in index.html to store this data
        const temperature = document.querySelector("#temp");
        temperature.innerText = `Temperature:  ${data.temperature}`;
        const windiness = document.querySelector("#wind");
        windiness.innerText = `Wind:  ${data.wind}`;
        const weatherDescription = document.querySelector("#description");
        weatherDescription.innerText = `Weather Description: ${data.description}`;
        tempHolder = data.temperature;
        windHolder = data.wind;
        descriptionHolder = data.description;
        if (descriptionHolder.toLowerCase().includes("cloud")) {
          weatherBackground.classList.replace(
            weatherBackground.classList[1],
            "cloudy"
          );
        }
        if (descriptionHolder.toLowerCase().includes("sun")) {
          weatherBackground.classList.replace(
            weatherBackground.classList[1],
            "sunny"
          );
        }
        if (descriptionHolder.toLowerCase().includes("wind")) {
          weatherBackground.classList.replace(
            weatherBackground.classList[1],
            "windy"
          );
        }
        if (descriptionHolder.toLowerCase().includes("rain")) {
          weatherBackground.classList.replace(
            weatherBackground.classList[1],
            "rainy"
          );
        }
        if (descriptionHolder.toLowerCase().includes("snow")) {
          weatherBackground.classList.replace(
            weatherBackground.classList[1],
            "snowy"
          );
        }
      });
  }
  
  //Access the weather submit button
  const weatherButton = document.querySelector("#weather-button");
  
  // Allow user to click the submit or press enter to submit city
  weatherButton.addEventListener("click", () => {
    getsTheWeather();
  });
  
  userInput.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
      getsTheWeather();
    }
  });