import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Checkout = () => {
    const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();
    return (
        <div className="purchase">
            <div>
                <h2> Thank for purchasing our products</h2>
            </div>
            <div className="boxPurchase">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return (
                            <div key={product.id}>
                                <h4>{product.productName}: ${product.price}</h4>
                            </div>
                        );
                    }
                })}
            </div>
            <div>
                <p> Subtotal: ${totalAmount} </p>
            </div>
            <button
                onClick={() => {
                    checkout();
                    navigate("/");
                }}
            >
                {" "}
                Done{" "}
            </button>
            {/* <h1> Now you just got scammed!!!!!!! </h1> */}
        </div>
    )
};