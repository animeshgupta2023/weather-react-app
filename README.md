# Weather React App

A simple, interactive weather application built with React that fetches real-time weather data from the OpenWeatherMap API. Search for any city and get instant weather details, dynamic icons, and atmospheric background images.


## ✨ Features

- 🔍 **City Search** – Enter any city name to get current weather.
- 🌡️ **Detailed Metrics** – Temperature, min/max, humidity, feels-like, and weather description.
- 🎨 **Dynamic Visuals** – Background images and icons change based on weather (sunny, rainy, cold).
- 🧊 **Material-UI Design** – Clean, responsive card layout with modern components.
- ❌ **Error Handling** – Friendly error message when a city is not found.
- ⚡ **Default City** – Automatically loads weather for Delhi on first visit.

## 🛠️ Technologies

- **React** – UI library
- **Vite** – Fast build tool and development server
- **Material-UI (MUI)** – Component library and icons
- **OpenWeatherMap API** – Weather data source
- **ESLint** – Code linting

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A free API key from [OpenWeatherMap](https://openweathermap.org/api)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/weather-react-app.git
   cd weather-react-app
   ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up environment variables**
   Create a .env file in the project root and add your OpenWeatherMap API key:
   ```bash
   VITE_API_KEY=your_api_key_here
   ```
4. **Run the development server**
   ```bash
   npm run dev
   ```

## Project Structure

```text
weather-react-app/
├── src/
│   ├── assets/                # Static assets (images, fonts)
│   ├── App.jsx                # Root component
│   ├── WeatherApp.jsx         # Main app container (state management)
│   ├── SearchBox.jsx          # Search input, API logic, error handling
│   ├── InfoBox.jsx            # Weather card display with dynamic visuals
│   ├── SearchBox.css          # Styles for search box
│   ├── InfoBox.css            # Styles for info card
│   ├── index.css              # Global styles
│   └── main.jsx               # React entry point
├── .env                       # Environment variables (not committed)
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

# Component Breakdown

## WeatherApp
- Manages the weatherInfo state with default values.

- Passes setWeatherInfo to SearchBox and info to InfoBox.

## SearchBox

- Handles user input and form submission.

- Fetches weather data from OpenWeatherMap.

- Uses useEffect to load default weather (Delhi) on mount.

- Displays an error if the city is not found.

## InfoBox

- Renders a Material-UI card with weather details.

- Dynamically selects background images:

    - Humidity > 80% → Rainy image

    - Temperature > 15°C → Hot/sunny image

    - Otherwise → Cold image

- Displays appropriate weather icons (Thunderstorm, WbSunny, AcUnit).

- Shows temperature, min/max, humidity, feels-like, and description.

## 🌐 API Usage

The app uses the OpenWeatherMap Current Weather Data API. The endpoint is:

```text
http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```

The API key is stored in .env and accessed via import.meta.env.VITE_API_KEY (Vite's environment variable syntax).

# 📦 Dependencies
| Package                 | Version |
|-------------------------|---------|
| react                   | ^18.2.0 |
| react-dom               | ^18.2.0 |
| @mui/material           | ^5.14.0 |
| @mui/icons-material     | ^5.14.0 |
| vite                    | ^5.0.0  |
| eslint                  | ^8.0.0  |


# 🚧 Future Improvements
- Add a loading spinner during API calls.

- Integrate geolocation to auto-detect user's city.

- Include a 5‑day forecast feature.

- Cache recent searches using local storage.

- Add unit toggle (°C/°F).

- Improve error messages for network failures.

# 📄 License
This project is open-source and available under the MIT License.

**Made with ❤️ by [Animesh Gupta]**
Feel free to reach out for any questions or suggestions!