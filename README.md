# How to Startup Assessment Task

In other to get started with the project, the following steps below will guide you.

## Pull project into your local machine
Run ``git clone repo-url`` to clone this repository into your local environment

Here is a list of all dependencies installed
- clsx
- framer-motion
- graphql-request
- next
- react-dom
- tailwind-merge
- zustand

Here is a list of all dev dependencies installed
- @types/node
- @types/react
- @types/react-dom
- autoprefixer
- eslint
- eslint-config-next
- postcss
- prettier
- prettier-plugin-tailwindcss
- tailwindcss
- typescript

## Update .env file
In other for the graphql endpoint to work, you will need to at the graphql url to the .env file. Create a .env file in the root folder of your working directory and and the code below

```code
NEXT_PUBLIC_API_URL=https://medtrack-mock-api.onrender.com/graphql
```

## Startup development server
The frontend application has been containerized, meaning it runs in a container so all you need to do now is to start the container and all dependencies required for the frontend to function will be installed into the container.
```bash
sudo ./bin/run.sh
```

## Deep dive into what ``Dockerfile.dev`` is doing line by line
- ``FROM node:21-alpine3.18`` provides a node.js runtime upon which the frontend can run in.

- ``WORKDIR /app`` creates a working directory for the frontend app where all of the frontend files will be placed

- ``COPY package.json ./COPY tsconfig.json ./`` copies package.json and tsconfig.json into the container. These are the only files needed for us to install dependencies for the frontend app.

- ``RUN npm install`` installs all dependencies inside the package.json file

- ``COPY . .`` copies all other files in the frontend working directory into the container working directory

- ``EXPOSE 3000`` exposes the port 3000 inside the container, that the frontend can be assessed from

- ``CMD ["npm", "run", "dev"]`` start the development server

## The docker-compose.yml file

- This file creates the container and passes the environment variables required for the frontend app to run in the container. 
- It also sets an outside port that we can access the frontend-app from using our browser
- Also creates volumes and bind-mounts that are mounted into the container for easy development by the developer

## Available Pages to access

* `/` -> home page

* `/encounter` -> encounter page

* `/encounter/care-plan` -> care plan page (This is one of the useful pages in this assessment task)

* `/encounter/care-plan/care-plan-action` -> (Care Plan action page, the 2nd useful page)

