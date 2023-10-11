import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import ItemListContainer from "./Pages/ItemListContainer";
import ItemDetailContainer from "./Pages/ItemDetailContainer";
import Home from "./Pages/Home";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";



const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Category/:id" element={<ItemListContainer />} />
        <Route path="/Item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
};

export default App;
