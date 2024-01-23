import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ItemCounter from "../ItemCounter/ItemCounter";

const handleAdd = () => {};

function ItemListContainer({ title, stock }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Uñas 1</Card.Title>
          <Card.Text>Este es el primer modelo de uña</Card.Text>
          <ItemCounter stock={stock} />
        </Card.Body>
      </Card>
    </>
  );
}

export default ItemListContainer;
