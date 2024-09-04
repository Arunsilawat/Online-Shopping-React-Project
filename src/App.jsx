import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import CartProduct from "./Pages/CartProduct";
import CheckOut from "./Pages/CheckOut";
import PaymentComplete from "./Pages/PaymentComplete";
import SearchProduct from "./Pages/SearchProduct";
import ProductDisplay from "./Pages/ProductDisplay";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Kids from "./Pages/Kids";
import WishList from "./Pages/WishList";


const App = () => {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Layout/>}>
               <Route index element={<Home/>}/>
               <Route path="/home" element={<Home/>}/>
               <Route path="/cartproduct" element={<CartProduct/>}/>
               <Route path="/checkout" element={<CheckOut/>}/>
               <Route path="/paymentcom" element={<PaymentComplete/>}/>
               <Route path="/searchpro" element={<SearchProduct/>}/>
               <Route path="/prodisplay" element={<ProductDisplay/>}/>
               <Route path="/men's" element={<Men/>}/>
               <Route path="/women's" element={<Women/>}/>
               <Route path="/kid's" element={<Kids/>}/>
               <Route path="wishlist" element={<WishList/>}/>
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   )
}
export default App;