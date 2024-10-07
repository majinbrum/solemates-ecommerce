export function addToCart(counter, product, cart, setCart) {
	if (counter !== 0) {
		console.log(product);
		const item = cart.find((item) => item.item.id === product.id);
		if (item) {
			const updatedCart = cart.map((item) => (item.item.id === product.id ? { ...item, quantity: item.quantity + counter } : item));
			setCart(updatedCart);
		} else {
			setCart((prevCart) => [...prevCart, { item: product, quantity: counter }]);
		}
	}
}
