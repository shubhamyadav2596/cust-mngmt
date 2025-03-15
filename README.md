## Project Overview
This is a customer management application built with React, Redux Toolkit, and likely uses a JSON server for the backend API. The application allows users to:

- View a list of customers
- Add new customers
- Delete existing customers


## Architecture
### Frontend
- React : UI library
- Redux Toolkit : State management
- React Router : Navigation (inferred from the Sidebar component)
- Tailwind CSS : Styling (inferred from class names in the Sidebar)
- HeroIcons React : Icon library

### Backend
- Appears to use a REST API at http://localhost:3000/customers
- Likely using JSON Server or a similar lightweight API


## Key Components
### State Management
The application uses Redux Toolkit for state management:

- customerSlice.js : Manages customer data with the following features:
  - fetchCustomers : Retrieves all customers from the API
  - addCustomer : Creates a new customer
  - deleteCustomer : Removes a customer by ID
  - State includes customers array, loading status, and error handling

### UI Components
- Sidebar.jsx : Navigation component that:
  - Provides links to different sections of the app
  - Can be collapsed/expanded
  - Contains links to Customers and Statistics pages


## API Endpoints
The application interacts with the following API endpoints:

- GET http://localhost:3000/customers : Fetch all customers
- POST http://localhost:3000/customers : Create a new customer
- DELETE http://localhost:3000/customers/:id : Delete a customer by ID


## Getting Started
To run this application locally:

1. Ensure the backend API is running at http://localhost:3000
2. Start the React application

## Installation
### Clone the repository
- git clone <repository-url>
- cd customer mngmt app

### Install frontend dependencies
- npm install

### Setting up JSON Server
- Install JSON Server globally (if not already installed)
- run json-server --watch db.json --port 3000

### Start the development server
- npm run dev

