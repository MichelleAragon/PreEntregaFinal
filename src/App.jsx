import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ItemListContainer from "./Pages/ItemListContainer";
import ItemDetailContainer from "./Pages/ItemDetailContainer";
import Home from "./Pages/Home";
import NavBar from "./components/NavBar/NavBar";
import Shop from "./Pages/Shop";
import "./App.css";
import { LogIn } from "./components/LogIn/LogIn";




const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Category/:id" element={<ItemListContainer />} />
        <Route path="/Item/:id" element={<ItemDetailContainer />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Login" element={<LogIn />} />
      </Routes>
    </Router>
  );
};

export default App;
