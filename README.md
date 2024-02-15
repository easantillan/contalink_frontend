# Contalink Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.3.

## Description
  
  This is a simple frontend application that allows users to pull the invoices from the Rails API [API Repo](https://github.com/easantillan/contalink_api). The application is paginated and allows the user to filter the invoices by date.


## Getting Started

### Prerequisites
  - Node 18.19.0 or higher
  - Angular CLI 17.1.3


### Installation

1. Clone the repo
2. Install the dependencies
   ```sh
   npm install
   ```
3. Verify that the API is running in the PORT 3000, if you want to run the API in a different PORT you need to change the url in this file `src/app/invoices/invoices.service.ts`
4. Run the server
   ```sh
   ng serve
   ```
   Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
