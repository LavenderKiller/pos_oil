# Frontend point of sale for oil station
This project provide a react native application frontend architecture for the oil station serice.

## How it works
We have a react native application for building frontend mobile apps or web application.

The mini-app-template consists of three main folders:

```
├─ android/
├─ ios/
├─ apps/
│   ├─ feature/
├─ libs/
│   ├─ component/
```

- **android:** This folder is implement logic or ui and config for andoird only.
- **ios:** This folder is implement logic or ui and config for ios only.
- **libs:** The libs folder provide functions as the primary project for creating new features and components.

## Prerequisites
- Node.js
- Yarn

```bash
install command
```

## Getting Started
Getting Started
First, clone the repository and navigate to the project folder:
```bash
cd pos_oil
```

### Install the project dependencies:
```bash
yarn install
```

## For mobile app development

### Run the app
To start development server and run a simulator with option you specify (ios or android)
```bash
yarn android
yarn ios
yarn web
```

#### Run unit test
```bash
yarn test
````