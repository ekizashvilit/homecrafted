import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ProductsProvider } from './context/products_context.jsx';
import { FilterProvider } from './context/filter_context.jsx';
import { CartProvider } from './context/cart_context.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

// DOMAIN - dev-tavdtsbl4lprrlxw.us.auth0.com
// ID - UnlzL1x12vuyAScqru7t7qjJDZthwoEy

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-tavdtsbl4lprrlxw.us.auth0.com"
    clientId="UnlzL1x12vuyAScqru7t7qjJDZthwoEy"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </Auth0Provider>
);
