Contact List App

This is a simple Contact List App built using React. The app demonstrates basic CRUD (Create, Read, Update, Delete) operations using the API provided by JSONPlaceholder.
Features

    Fetch Contacts: Retrieves a list of contacts from the API and displays them in the app.
    Add Contact: Allows users to add a new contact. This action sends a POST request to the API and updates the app's state with the new contact.
    Update Contact: Enables editing of a contact's details. Sends a PUT request to the API and updates the state accordingly.
    Delete Contact: Removes a contact from the list. Sends a DELETE request to the API and updates the state to reflect the change.

Important Notes:

    API requests (POST, PUT, DELETE) are dummy calls, and no actual data is saved or modified on the server. The responses are simulated for demonstration purposes.
    The contact list is managed in the React state.

Getting Started with Create React App

This project was bootstrapped with Create React App.
Available Scripts

In the project directory, you can run:
npm start

Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.
npm test

Launches the test runner in the interactive watch mode.
See the section about running tests for more information.
npm run build

Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.
npm run eject

Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

At this point, you're on your own.
Learn More

You can learn more in the Create React App documentation.

To learn React, check out the React documentation.
Running the App

    Clone the repository:

git clone <repository-url>
cd contact-list

Install dependencies:

npm install

Start the development server:

    npm start

    Open http://localhost:3000 in your browser to view the app.

Folder Structure

    src/: Contains the app's source code.
    src/App.js: Main app component where features are implemented.
    src/index.js: Entry point of the React app.