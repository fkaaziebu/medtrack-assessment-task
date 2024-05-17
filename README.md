# How to Startup Assessment Task

In other to get started with the project, the following steps below will guide you.

## Pull project into your local machine
Run git clone repo-url to clone this repository into your local environment

## Install dependencies
Install the dependencies required to startup this application using the command below
```bash
npm install
```

## Update .env file
In other for the graphql endpoint to work, you will need to at the graphql url to the .env file. Create a .env file in the root folder of your working directory and and the code below

```code
NEXT_PUBLIC_API_URL=https://medtrack-mock-api.onrender.com/graphql
```

## Startup development server
You are ready to go now. Just run the last command to start viewing the project in a browser
```code
PORT=5000 npm run dev
```

You can choose to remove the port value of which next.js will simply use the default configured port which is port 3000.

Task
[x] Remember to remove unused imports