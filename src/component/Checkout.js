import React from "react";
import "./Checkout.css";
import AddBanner from "../images/add-banner.jpg";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img className="checkout_add" src={AddBanner} alt="Amazon add banner" />

        <div>
          <h2 className="checkout_title">Your shopping Basket</h2>
          <CheckoutProduct
            id="112343"
            title="This is a test, abc xyz ijk gbghgjhjkhkjg hgjhgjhkjhjkh hgjhkjkljkljkhjk hgjhkjkhhjghj vhghjkj i am a danis iqbal from patna bihar - 14"
            image="https://m.media-amazon.com/images/I/81RHHnGydgL._AC_UY218_.jpg"
            price={199.99}
            rating={5}
          />
          <CheckoutProduct
            id="112343"
            title="This is a test, abc xyz ijk"
            image="https://m.media-amazon.com/images/I/81RHHnGydgL._AC_UY218_.jpg"
            price={199.99}
            rating={5}
          />

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
