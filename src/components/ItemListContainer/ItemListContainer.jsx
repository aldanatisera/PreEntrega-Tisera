import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ItemCounter from "../ItemCounter/ItemCounter";
function ItemListContainer({ title, stock }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Motorola</Card.Title>
          <Card.Text>Motorola</Card.Text>
          <Button variant="primary">Add cart</Button>
          <ItemCounter stock={stock} />
        </Card.Body>
      </Card>
    </>
  );
}

export default ItemListContainer;
