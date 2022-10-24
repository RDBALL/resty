# RESTy API Tester

## Code 401d48 lab 26-29

## Author: Robert Ball

### built upon the starter code located [Seattle Code Javascript-401d48](https://github.com/codefellows/seattle-code-javascript-401d48/tree/main/class-26/lab/starter-code)

---

### Problem Domain

### Phase 1 Requirements

* Today, we begin the first of a 4-Phase build of the RESTy application, written in React. In this first phase, our goal is to setup the basic scaffolding of the application, with intent being to add more functionality to the system as we go. This initial build sets up the file structure so that we can progressively build this application in a scalable manner

<!-- Deployed production server: [Heroku - rb-ac lab09 API](https://rb-ac-lab-09.herokuapp.com/) -->

---
Requirements:

Refactor the RESTy application as follows:

* Convert all child components of App.js from classes to functions
  * The App component serves as the container for all sub-components of this application.
  * Leave this component as a Class.
  * Make sure all base styles for App are included in a .scss imported within App.js.
  * Ensure that the Header, Footer, Results and Form components are imported using ES6 import syntax.
* Use .scss files to style each component
  * Each of the components use their own .scss file for styling.
* Core application functionality should remain unchanged:
  * The `<Form>` component should:
  * Call a function on submit that updates the `<App/>` component via a function sent down as a prop so that the app can process the form values.
  * The `<Results/>` component should show mock API results.

---

Documentation:

![UML lab11](./public/assets/lab26UML.jpg)

---

## Phase 2 -

---

## Phase 3 -

---

Dependencies

```JSON
{
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-jsonschema-form": "^1.8.1",
    "react-scripts": "5.0.1",
    "sass": "^1.55.0",
    "web-vitals": "^2.1.4"
}
```

Setup

* npx create-react-app on your local machine
* delete the src folder and the package.json file from your local machine.
* copy the src and package.json from this repo into your local React app
* install required dependencies with npm i
