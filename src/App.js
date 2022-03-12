import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./components/AddProduct";
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import UpdateProduct from "./components/UpdateProduct";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/products/add" element={<AddProduct />} />
          <Route
            exact
            path="/products/update/:id"
            element={<UpdateProduct />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
