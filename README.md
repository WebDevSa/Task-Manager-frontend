# Task Manager App
This is a simple Task Manager application built with the MERN stack (MongoDB, Express, React, Node.js).
Which has the following features: 
->Add-User can add new tasks.
->Update-User can select and edit the tasks added.
->Delete-User can delete the task.
->View Task list-Shows the list of all the tasks added with its Unique ID.

## Dependencies
Here are the main dependencies and technologies used in this project:

### Frontend (React):
-[React](https://reactjs.org/): A JavaScript library for building user interfaces.
-[React Router](https://reactrouter.com/): For client-side routing in the React application.
-[axios](https://github.com/axios/axios): A promise-based HTTP client for making API requests.

#### Backend (Node.js and Express):
- [Node.js](https://nodejs.org/): A JavaScript runtime for server-side development.
- [Express.js](https://expressjs.com/): A web application framework for Node.js.
- [MongoDB](https://www.mongodb.com/): A NoSQL database used for data storage.
- [Mongoose](https://mongoosejs.com/): An Object Data Modeling (ODM) library for MongoDB and Node.js.
- [dotenv](https://www.npmjs.com/package/dotenv): For managing environment variables and configuration.

##### API Endpoints:

=>Get All Tasks

URL: /
HTTP Method: GET
Description: Retrieves a list of all tasks.

=> Save All Tasks

URL: '/save'
HTTP Method: POST
Description: Retrieves a list of all tasks.

=> Update/Edit Tasks

URL: '/update'
HTTP Method: PUT
Description: Updates an existing task by ID.

=> Delete Tasks

URL: '/delete'
HTTP Method: DELETE
Description: Deletes a task by ID.

###### Database Schema
Task Collection
Field: text
Type: String
Description: The text description of the task.
Required: Yes

##### Deployment
You can access the application using the below url.
