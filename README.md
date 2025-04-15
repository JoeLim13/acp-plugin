# ACP Plugin

A simple Node.js application with Express server.

## Prerequisites

- Node.js 18.x or higher
- Docker (optional)

## Installation

```bash
npm install
```

## Running the Application

### Using Node.js directly:

```bash
npm start
```

### Using Docker:

```bash
# Build the image
docker build -t acp-plugin .

# Run the container
docker run -p 3000:3000 acp-plugin
```

The application will be available at http://localhost:3000

## Testing

To run the tests:

```bash
npm test
```

## CI/CD

This project includes GitHub Actions workflows that:

1. Run tests on every push and pull request
2. Build and test Docker image
3. Runs on Ubuntu latest with Node.js 18.x

## API Endpoints

- GET `/`: Returns a "Hello World!" message
