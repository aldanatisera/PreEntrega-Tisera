import Cart from "../../assets/cart.svg";
import Image from "react-bootstrap/Image";
import "./CartWidget.css";

function CartWidget() {
  return (
    <>
      <Image src={Cart} rounded />
      <span className="cart-number">5</span>
    </>
  );
}

export default CartWidget;
