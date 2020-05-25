This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
# Profanity Check - WebUI
This repository is one of 2 compositions:

 1. [WebUI - written in ReactJS & Node.js](https://github.com/daanney/profanity-check-ui)
 2. [REST API - written in Java & spring-boot](https://github.com/daanney/profanity-check-app)


## Introduction
This project uses ReactJS as Frontend and supports 2 running modes. 
In `dev mode` it uses react-scripts to run and in `production mode` it will be powered through an express-server. The server mainly acts as static content delivery and proxy to call the backend API.

### Features
The react app currently serves 2 main features.

#### Client Notes Mock
An example client note is displayed on the users dashboard, shows attached documents and a form to upload new documents. Document uploads are sent to the backend API.

#### Maintaining Banned Words/Phrases
For flexibility and showcase purpose, the user can maintain the list of banned words on the WebUI. Existing records can be deleted and new ones can be created. The data is maintained in the backend and exposes API for such maintenance actions.

### Proxy usage 
The ReactJS proxy is configured to send `/api` requests to http://localhost:5000. Depending on the environment, different behavior is provided.

#### prod
The express server is started on port 5000, serves the react build files and proxies through the api calls to `API_URL`.

#### dev
The express server is *not* started, react runs in development mode (The default setting of the spring app listens on port 5000).


## Installation
Use the node package manager to install and setup the project:
	
    git clone git@github.com:daanney/profanity-check-ui.git 
    cd profanity-check-ui
    npm install

> **Note**
The express server only runs in production mode, where it is looking for an environment variable **`API_URL`**. If the variable is not set, the currently running backend powered in my AWS account on Elasticbeanstalk is used by default.


## Usage
In order to run the app locally, use the following command to start:

    npm run dev

A browser should open automatically, displaying the page. If not, the default url is: http://localhost:3000/
> If you wish to connect to the AWS backend from your local running WebUI, change the "proxy" property in the client/package.json file to the url http://profanity-check.eu-central-1.elasticbeanstalk.com


## Deployment 
The deployment can be done manually or using an automated pipeline connecting to this repository.

### Manual deployment
Run npm run build to generate the production build of the react app, then copy the following as artifacts and upload them to the root directory of your webserver running node:

    client/build/**/*
    package*.json
    server.js

### Automated deployment
In order to setup automated deployments with AWS CodePipeline, the buildpec.yml located in this repository can be used. Following high-level steps can be used to setup the environment:

 1. Fork the Github repository
 2. In AWS, create an Elastic Beanstalk application, using Node.js
 3. Create a new CodePipeline, specifying a name and default settings
 4. Select Github as Source Provider, selecting the forked repository and master branch
 5. Select AWS CodeBuild as build provider, select a build project (or create new)
 6. Select AWS Elastic Beanstalk as deploy provider and select the previously created Elastic Beanstalk application

> Make sure to set an environment variable `API_URL=http://profanity-check.eu-central-1.elasticbeanstalk.com` in the Elastic Beanstalk ui-app. The URL can be the one mentioned above or your own, if you have deployed the repository from https://github.com/daanney/profanity-check-app

##
> Written with [StackEdit](https://stackedit.io/).