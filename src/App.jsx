import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ItemList from "./Components/ItemList";
import ItemDetail from "./Components/ItemDetail";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<ItemList />} />
          <Route path="/item/:itemId" element={<ItemDetail />} />
          <Route>Error 404. Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
