import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <>
      <NavBar></NavBar>

      <Container>
        <ItemListContainer greetings={"¡Bienvenidos!"}></ItemListContainer>
      </Container>
    </>
  );
}

export default App;
