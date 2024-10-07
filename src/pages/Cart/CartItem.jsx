import { useEffect, useState } from "react";
import { useContext } from "react";
import { CartContext, SetCartContext } from "../../providers/CartContext.jsx";

import Counter from "../../components/Counter/Counter.jsx";
import Button from "../../components/Button/Button.jsx";

import styles from "./Cart.module.css";

function CartItem({ cartItem }) {
	const [counter, setCounter] = useState(cartItem.quantity);
	const { cart } = useContext(CartContext);
	const { setCart } = useContext(SetCartContext);

	function updateCartItem() {
		if (counter > 0) {
			const updatedCart = cart.map((item) => (item.item.id === cartItem.item.id ? { ...item, quantity: counter } : item));
			setCart(updatedCart);
		} else {
			const updatedCart = cart.filter((item) => item !== cartItem);
			setCart(updatedCart);
		}
	}

	return (
		<li className={styles.card}>
			<div className={styles.cardImg}>
				<img src={cartItem.item.images[0]} alt='Product image' width='200' height='200' />
			</div>

			<div className={styles.cardContent}>
				<h4 className={styles.productBrand}>{cartItem.item.brand}</h4>
				<h3 className={styles.productTitle}>{cartItem.item.title}</h3>
				<div className={styles.priceTag}>
					<span className={styles.discountedPrice}>
						{cartItem.item.price}$<span className={styles.originalPrice}> {cartItem.item.originalPrice}$</span>
					</span>

					<span className={styles.discountTag}>{Math.round(cartItem.item.discountPercentage)}%</span>
				</div>

				<h4>Quantity:</h4>
				<div className={styles.btnDiv}>
					<Counter counter={counter} setCounter={setCounter} />
					<Button text={"Save"} onClick={updateCartItem} />
				</div>
			</div>
		</li>
	);
}

export default CartItem;
