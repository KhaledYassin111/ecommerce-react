import TopHeader from "./component/header/TopHeader";
import BtmHeader from "./component/header/BtmHeader";
import Home from "./page/home/Home";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./page/home/productDetails/ProductDetails";
import CartProvider from "./component/context/CartContext";
import Cart from "./page/home/cart/Cart";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./component/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./page/home/CategoryPage/CategoryPage";
import SearchResults from "./page/home/SearchResults";
import Favorites from "./page/home/favorites/Favorites";
import { AuthProvider } from "./component/context/AuthContext";
import About from "./page/about/About";
import Accessories from "./page/accessories/Accessories";
import Blog from "./page/blog/Blog";
import Contact from "./page/contact/Contact";
import Login from "./page/auth/Login";
import Logout from "./page/auth/Logout";

function App() {
  return (
    <CartProvider>
      <AuthProvider>
        <ScrollToTop />
        <header><TopHeader /><BtmHeader /></header>
        <Toaster position="bottom-right" toastOptions={{ style: { background: '#e9e9e9', borderRadius: '5px', padding: '14px' } }} />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </AnimatePresence>
      </AuthProvider>
    </CartProvider>
  );
}

export default App;
