# Web App - Sales Management

## Description

This project is a web application for sales management, focused on displaying orders and detailed information about sellers. It allows users to view orders filtered by country and seller, as well as display detailed information about sellers, including top-selling products, sales by country, and total sales.

## Technologies Used

- **Front-End:**
  - React
  - Styled Components
  - Axios

## Features

### 1. Orders Overview
The application allows viewing an orders table with the following features:
- **Filtering:** Filter orders by seller and by country.
- **Sorting:** Sort the orders table by different criteria such as `Order ID`, `Product`, `Price`, `Seller`, and `Country`.
- **Pagination:** Navigate through different pages of orders using pagination buttons.

### 2. Sellers Overview
- **Top Sellers:** Displays a list of top sellers, including total sales and a medal representing their ranking position.
- **Details Modal:** Clicking on a seller opens a modal showing detailed information such as:
  - **Sales by Country:** Displayed in a pie chart format (PizzaGraphic).
  - **Totals:** Total sales, number of sales, and average ticket.
  - **Top-Selling Products:** A list of the seller's top-selling products.

### 3. Info Page
A page that presents information about the technologies used in the project.

## Project Structure

- **src/**
  - **common/**: Reusable components like graphics and styled selects.
    - `PizzaGraphic.js`: Component that renders a pie chart using `styled-components`.
    - `StyledSelect.js`: Styled select component with an icon.
  - **components/**
    - **ordersOverview/**: Contains components related to displaying and filtering orders.
      - `OrdersOverview.js`: Main component that manages the display and filtering of orders.
      - `Pagination.js`: Component for navigating between pages.
      - `StyledTable.js`: Component that renders the orders table.
    - **sellerModal/**: Components used to display seller details in a modal.
      - `SellerModal.js`: Main component that manages and displays seller details.
      - `CountrySales.js`, `SalesTotals.js`, `BestSellingProducts.js`: Auxiliary components used in the modal to display charts and sales lists.
    - **sellersOverview/**: Contains components related to displaying sellers.
      - `SellersOverview.js`: Main component that displays top sellers.
      - `SellerCard.js`: Component that displays a card with seller information.
    - **Menu.js**: Component that renders the main navigation menu.
  - **context/**
    - `ModalContext.js`: Context that manages the state of modals in the application.
  - **pages/**
    - `Home.js`: Main page that displays the overview of orders and sellers.
    - `Info.js`: Page that displays information about the project.
  - **services/**
    - `api.js`: File that centralizes HTTP requests to the backend API.
  - **styles/**: Global style files.
    - `GlobalStyles.js`: Global styles using `styled-components`.
    - `ResetStyles.js`: Reset of default browser styles.
  - **utils/**
    - `formatValue.js`: Utility function to format numerical values.

## Installation and Execution

### Prerequisites
- Node.js v14 or higher
- npm

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/plperera/front-development-test-rtb-house.git
   cd front-development-test-rtb-house
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment setup:**
   Rename the `.env.example` file to `.env` and configure the backend API URL.

4. **Run the application:**
   ```bash
   npm start
   ```

## Build Process

### Building the Application for Production

To build the application for production, follow these steps:

1. **Create the Production Build:**
   Run the following command to create an optimized production build of the application:
   ```bash
   npm run build
   ```
   This command will generate a `build/` directory containing the production-ready version of your app. This build is minified and the filenames include content hashes. Your app is now ready to be deployed.

2. **Install `serve` Globally:**
   To serve your production build locally, you can use a simple static server like `serve`. First, you need to install `serve` globally on your machine:
   ```bash
   npm install -g serve
   ```
   This will allow you to use the `serve` command from anywhere on your system.

3. **Serve the Production Build:**
   After the build is created, you can serve it locally to ensure everything works as expected. Run the following command:
   ```bash
   serve -s build
   ```
   - `-s` or `--single`: This option is used to serve a Single Page Application (SPA) like a React app. It ensures that all requests that do not match a file will be routed to `index.html`, which is essential for SPAs.
   - `build`: This specifies the directory containing the production build.

   The `serve` command will start a local server and provide a URL (e.g., `http://localhost:3000`) where you can view your production build in a browser.

### Summary

By following these steps, you create a production-ready version of your app, which can be served locally or deployed to a production server. Using `serve -s build` allows you to quickly verify that your production build works as expected before deploying it to a live environment.

## Author

- **Pedro Leoncio** - [GitHub](https://github.com/plperera)
