import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./app/layout/Layout";
import HomePage from "./app/pages/HomePage";
import WorkshopsPage from "./app/pages/WorkshopPage";
import ProductDetailPage from "./app/pages/ProductDetailPage";
import ShoppingCartPage from "./app/pages/ShoppingCar";
import AboutUsPage from "./app/pages/AboutUs";


function App() {
  return (
    <BrowserRouter basename={"/skincare"}>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<HomePage />} />
          <Route path="/workshops" element={<WorkshopsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/shoppingcart" element={<ShoppingCartPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
