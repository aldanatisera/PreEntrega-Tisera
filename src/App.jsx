import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Products from "./components/Products/Products";
import Container from "react-bootstrap/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer title={"Listado de productos"} />}
          />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
