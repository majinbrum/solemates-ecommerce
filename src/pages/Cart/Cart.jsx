import { useState, useEffect } from "react";
import styles from "./Cart.module.css";

import { useContext } from "react";
import { CartContext, SetCartContext } from "../../providers/CartContext.jsx";

import CartItem from "./CartItem.jsx";

function Cart() {
	// global state
	const { cart } = useContext(CartContext);

	const [cartAmount, setCartAmout] = useState(0);

	useEffect(() => {
		const cartItemPrices = cart.map((cartItem) => cartItem.item.price * cartItem.quantity);
		let cartTotal = 0;
		cartItemPrices.forEach((cartItemPrice) => (cartTotal += cartItemPrice));
		setCartAmout(cartTotal.toFixed(2));
	}, [cart]);

	return (
		<>
			<main className={styles.cart}>
				<h1>Cart</h1>
				{cart.length === 0 && <h2>There are no products in the cart yet.</h2>}

				{cart.length > 0 && (
					<>
						<h2>Your shopping list ({cart.length})</h2>
						<ul>
							{cart.map((cartItem) => {
								return <CartItem key={cartItem.item.id} cartItem={cartItem} />;
							})}
						</ul>
						<div className={styles.cartTotal}>
							<h2>Your total</h2>
							<h3>{cartAmount}$</h3>
						</div>
					</>
				)}
			</main>
		</>
	);
}

export default Cart;
