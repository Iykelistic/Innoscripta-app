
# News Aggregator

A React-based news aggregator application that fetches articles from multiple news sources including NewsAPI, The Guardian, NY Times, and GNews.

## Features
- Search articles by keyword.
- Filter articles by category and date.
- Select and toggle between multiple news sources.
- Responsive design using Bootstrap.

---

## Prerequisites
- [Docker](https://www.docker.com/get-started) installed on your system (optional for running in Docker).
- [Node.js](https://nodejs.org/) installed (for local development).
- API keys for:
  - [NewsAPI](https://newsapi.org/)
  - [The Guardian](https://open-platform.theguardian.com/)
  - [NY Times](https://developer.nytimes.com/)
  - [GNews](https://gnews.io/)

---

## Running the Application

### 1. Clone the Repository
```bash
git clone repository_url
cd news-aggregator
```

### 2. Add Environment Variables
Create a `.env` file in the root directory and add your API keys:
```env
REACT_APP_NEWSAPI_KEY=your_newsapi_key
REACT_APP_GUARDIAN_KEY=your_guardian_key
REACT_APP_NYT_KEY=your_nyt_key
REACT_APP_GNEWS_KEY=your_gnews_key
```
Replace `your_newsapi_key`, `your_guardian_key`, `your_nyt_key`, and `your_gnews_key` with the API keys you obtained from the respective services.

---

### Running with Docker

#### 1. Build and Start the Docker Container
```bash
docker-compose up --build
```

#### 2. Access the Application
Once the container is running, open your browser and navigate to:
```
http://localhost:3000
```

---

### Running Locally (Without Docker)

#### 1. Install Dependencies
Ensure you have Node.js installed. Then, run:
```bash
npm install
```

#### 2. Start the Application
Run the following command to start the development server:
```bash
npm start
```

#### 3. Access the Application
Once the development server is running, open your browser and navigate to:
```
http://localhost:3000
```

---

## Project Structure
```
src/
├── api/                 # API integration logic
├── components/          # Reusable React components
├── hooks/               # Custom hooks
├── pages/               # Pages for routing
├── styles/              # Custom styles (if needed)
├── App.js               # Main App component
└── index.js             # Entry point
```

---

## Technologies Used
- **React.js**: Frontend library for building the user interface.
- **Bootstrap**: UI framework for responsive design.
- **Axios**: HTTP client for API requests.
- **Docker**: Containerization for deployment.
- **Docker Compose**: Simplifies multi-container Docker applications.

---

## Troubleshooting
1. **Missing API Keys**: Ensure the `.env` file contains valid API keys.
2. **Port Already in Use**: Change the `ports` value in the `docker-compose.yml` file if `3000` is occupied.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Acknowledgements
- NewsAPI, The Guardian, NY Times, and GNews for providing the APIs used in this application.

```