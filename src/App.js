import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Products from "./components/products";
import Login from "./components/login";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Products />
            </>
          } />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;