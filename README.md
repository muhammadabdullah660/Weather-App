# Weather Forecast App

## Description

This project is a simple weather forecast application built using React. It allows users to search for the current weather conditions of a specific city. The weather data is fetched from the [WeatherAPI](https://www.weatherapi.com/) using AJAX (XMLHttpRequest).

## How to Run Locally

1. Clone the repository:

   ```
   git clone https://github.com/your-username/Weather-App.git
   ```

2. Navigate to the project directory:

   ```
   cd Weather-App
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npm start
   ```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the app.

## Benefits of Using AJAX

AJAX (Asynchronous JavaScript and XML) provides several benefits for web development, and in this project, it enables the app to fetch weather data from the WeatherAPI without refreshing the entire page. The benefits include:

- **Asynchronous Requests:** AJAX allows the application to make asynchronous requests, ensuring that the user interface remains responsive while data is being fetched in the background.

- **Improved User Experience:** Users can interact with the app seamlessly, and data can be updated dynamically without requiring a full page reload.

- **Efficient Data Transfer:** AJAX requests transfer only the necessary data, reducing the amount of information sent between the client and server. This can lead to faster load times and improved performance.

## Challenges Faced and Solutions

### Challenge: Fetching Data with XMLHttpRequest

Using XMLHttpRequest posed challenges in terms of syntax and handling. Additionally, parsing the response required extra steps.

### Solution:

Careful debugging and referring to documentation, such as [W3Schools](https://www.w3schools.com/js/js_ajax_intro.asp), helped in understanding and resolving issues. Switching to modern fetch or async/await is recommended for cleaner code and better error handling.

## References

- [WeatherAPI](https://www.weatherapi.com/)
- [W3Schools - AJAX Introduction](https://www.w3schools.com/js/js_ajax_intro.asp)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
