# Nice Link

A simple and efficient URL shortener built with React, NestJS, and Turso (SQLite).

![Nice Link Logo](https://nice-link.netlify.app/favicon.svg)

## 📚 Table of Contents

- [About the Project](#about-the-project)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

## 👨‍🚀 About the Project

Nice Link allows users to shorten long URLs and easily manage them. The project is built with a modern tech stack and provides a robust backend with NestJS and Turso (SQLite), along with a responsive frontend using React.

![Nice Link main page](https://adrian-palacios.netlify.app/projects/nice-link.webp)

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind, JavaScript
- **Backend**: NestJS
- **Database**: Turso (SQLite)
- **Deployment**: Netlify (frontend), Vercel (backend), Docker, Kubernetes (optional)

## 🚀 Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js (>=14.x)
- npm or yarn
- Docker (optional for deployment)

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/AdrianPalacios03/NiceLink.git
   ```

2. Install NPM packages for both the frontend and backend

   ```sh
   cd url-shortener/backend
   npm install
   cd ../frontend
   npm install
   ```

### Running the App

1. Set up environment variables in `.env` file for both frontend and backend

   #### Backend `.env`

   ```
   TURSO_DATABASE_URL=your_turso_database_url
   TURSO_AUTH_TOKEN=your_turso_auth_token
   ```

2. Start the backend server

   ```sh
   cd backend
   npm run start:dev
   ```

3. Start the frontend server

   ```sh
   cd frontend
   npm start
   ```

## 📦 Usage

### Creating a Short URL

Make a POST request to the root endpoint with the original URL.

```sh
curl -X POST http://localhost:3000/ -H "Content-Type: application/json" -d '{"originalUrl": "https://example.com"}'
```

### Accessing a Short URL

Access the short URL by navigating to `http://localhost:3000/shortUrl`.

## ✌️ Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🔑 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📧 Contact

Adrián Palacios - [portfolio](https://adrian-palacios.netlify.app/en)

## 💻 Acknowledgements

- [NestJS](https://nestjs.com/)
- [React](https://reactjs.org/)
- [Turso (SQLite)](https://turso.tech/)
