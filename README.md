# Weather App

A simple weather application built with React and Next.js that allows users to fetch and display weather information for various cities. Users can enter their API key and select cities to view current weather data.

## Features

- **Weather Data Fetching**: Fetches real-time weather data from the OpenWeather API.
- **City Selection**: Users can choose from a list of Turkish cities to display weather information.
- **Responsive Design**: Works well on both mobile and desktop devices.
- **Error Handling**: Displays user-friendly error messages for incorrect API keys or connectivity issues.

## Technologies Used

- **React**: For building user interfaces.
- **Next.js**: For server-side rendering and routing.
- **TypeScript**: For type safety and better code quality.
- **Tailwind CSS**: For styling the application.
- **OpenWeather API**: For fetching weather data.

## Installation

### Prerequisites

- Node.js (v14 or later)
- npm (v5.6 or later) or Yarn

### Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/enesbek/weather-condition-next.git

   ```

2. **Navigate to the project directory:**:

   ```bash
   cd weather-condition-next

   ```

3. **Install the dependencies::**:

   ```bash
   npm install

   or

   yarn add

   ```

4. **Set up your OpenWeather API key::**:

- Sign up at OpenWeather and get your API key.
- In your project, open the src/services/api.ts file and replace the placeholder for sessionStorage with your actual API key:

  ```typescript
  sessionStorage.setItem("weatherApiKey", "YOUR_API_KEY");
  ```

5. **Start the development server:**:

   ```bash
   npm run dev
   ```

   or

   ```bash
   yarn dev
   ```

6. **Open your browser and navigate to http://localhost:3000 to view the application.:**:

## Usage

1. Enter your OpenWeather API key if prompted.

2. Select a city from the list to fetch and display the current weather information.

3. View detailed weather data, including temperature, humidity, and wind speed.

## Error Handling

- If an invalid API key is entered or there is a connectivity issue, the application will display an error message to the user.

- The application also checks for valid city names and provides feedback if the input is incorrect.

### Contributing

Contributions are welcome! If you have suggestions for improvements or features, please fork the repository and submit a pull request.

### License

This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details.
