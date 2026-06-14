import { Route, Routes } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import About from './pages/About/About';
import BuyNow from './pages/BuyNow/BuyNow';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Cart from './pages/cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import ComingSoon from './pages/ComingSoon/ComingSoon';
import Contact from './pages/Contact/Contact';
import FAQ from './pages/FAQ/FAQ';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Orders from './pages/Orders/Orders';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Register from './pages/Register/Register';
import Terms from './pages/Terms/Terms';
import TrackOrder from './pages/TrackOrder/TrackOrder';
import Wishlist from './pages/Wishlist/Wishlist';
import AdminLayout from './layouts/AdminLayout';
import Analytics from './admin/Analytics';
import CouponsAdmin from './admin/CouponsAdmin';
import Dashboard from './admin/Dashboard';
import OrdersAdmin from './admin/OrdersAdmin';
import ProductsAdmin from './admin/ProductsAdmin';
import ReviewsAdmin from './admin/ReviewsAdmin';
import UsersAdmin from './admin/UsersAdmin';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/buy-now" element={<BuyNow />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route
            path="/admin"
            element={
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/analytics"
            element={
              <AdminLayout>
                <Analytics />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/products"
            element={
              <AdminLayout>
                <ProductsAdmin />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/orders"
            element={
              <AdminLayout>
                <OrdersAdmin />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/users"
            element={
              <AdminLayout>
                <UsersAdmin />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/coupons"
            element={
              <AdminLayout>
                <CouponsAdmin />
              </AdminLayout>
            }
          />
          <Route
            path="/admin/reviews"
            element={
              <AdminLayout>
                <ReviewsAdmin />
              </AdminLayout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </div>
  );
};

export default App;
