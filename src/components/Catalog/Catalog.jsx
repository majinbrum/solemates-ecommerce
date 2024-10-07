import { Link } from "react-router-dom";

import styles from "./Catalog.module.css";
import IconCart from "../icons/IconCart";

import { useContext } from "react";
import { CartContext, SetCartContext } from "../../providers/CartContext.jsx";
import { addToCart } from "../../components/addToCart.js";

function Catalog({ list }) {
	// global state
	const { setCart } = useContext(SetCartContext);
	const { cart } = useContext(CartContext);

	return (
		<ul className={styles.catalog}>
			{list.map((item) => (
				<li key={item.id}>
					<div className={styles["catalog-product"]}>
						<Link to={`product/${item.id}`} style={{ all: "unset" }}>
							<div className={styles.productThumbnail}>
								<img src={item.thumbnail} alt='Product thumbnail' width='300' heigth='300' loading='lazy' />
							</div>
						</Link>
						<h4 className={styles.productBrand}>{item.brand}</h4>
						<h3 className={styles.productTitle}>{item.title}</h3>
						<div className={styles.tags}>
							{item.tags.map((tag, index) => (
								<h5 key={index}>{tag}</h5>
							))}
						</div>
						<div className={styles.add}>
							<div className={styles.price}>
								<h4 className={styles.discountedPrice}>{item.price}$</h4>
								<h4 className={styles.discountTag}>{item.discountPercentage}%</h4>
							</div>

							{/* <Link to={`product/${item.id}`}>Details</Link> */}
							<button className={styles.addButton} onClick={() => addToCart(1, item, cart, setCart)}>
								<IconCart fill={"var(--dark)"} />
							</button>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
}

export default Catalog;
