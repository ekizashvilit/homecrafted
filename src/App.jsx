import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Home,
  About,
  Cart,
  Products,
  SingleProduct,
  Checkout,
  Error,
  Private,
  AuthWrapper,
} from './pages';
import { Navbar, Sidebar, Footer } from './components';

function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route
            path="/checkout"
            element={
              <Private>
                <Checkout />
              </Private>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
