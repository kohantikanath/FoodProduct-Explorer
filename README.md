# Food Product Explorer

This project is a React application that allows users to explore food products using the Open Food Facts API. Users can search for products by name or barcode, filter products by category, and sort products by name or nutrition grade.

## Method Used to Solve the Problem

1. **Project Setup**: 
   - Initialized the project using Vite for a fast development environment.
   - Configured ESLint for code quality and consistency.
   - Integrated Tailwind CSS for styling.

2. **Components**:
   - **SearchBar**: Allows users to search for products by name or barcode.
   - **CategoryFilter**: Fetches and displays categories from the Open Food Facts API, allowing users to filter products by category.
   - **SortOptions**: Provides sorting options for products by name or nutrition grade.
   - **ProductList**: Displays a list of products with pagination.
   - **ProductDetail**: Shows detailed information about a selected product.

3. **API Integration**:
   - Used Axios to fetch data from the Open Food Facts API.
   - Implemented useEffect hooks to fetch data on component mount and state changes.

4. **Routing**:
   - Used React Router for navigation between the product list and product detail pages.

## Time Taken to Complete the Assignment

The assignment was completed in approximately 1 day, including setup, development, testing, and documentation.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/food-product-explorer.git
   cd food-product-explorer

2. Install dependencies:
    ```sh
    npm install
    or
    yarn install

### Running the Application

1. Start the development server:
    ```sh
    npm run dev
    or
    yarn dev

2. Open your browser and navigate to http://localhost:3000

### Building for Production

1. To create a production build, run:
    ```sh
    npm run build
    or
    yarn build


### Dependencies

- React
- React DOM
- React Router DOM
- Axios
- Tailwind CSS
- ESLint
- Vite