   // src/App.jsx
   import React from 'react';
   import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
   import ProductList from './components/ProductList';
   import ProductDetail from './components/ProductDetail';

   function App() {
     return (
       <Router>
         <Routes>
           <Route path="/" element={<ProductList />} />
           <Route path="/product/:barcode" element={<ProductDetail />} />
         </Routes>
       </Router>
     );
   }

   export default App;