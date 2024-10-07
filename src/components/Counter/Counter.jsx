import IconPlus from "../../components/icons/IconPlus.jsx";
import IconMinus from "../../components/icons/IconMinus.jsx";
import Button from "../../components/Button/Button.jsx";

import styles from "./Counter.module.css";

function Counter(props) {
	const { counter, setCounter } = props;

	function handleCounter(e) {
		const id = e.currentTarget.id;
		id === "plus" ? setCounter(counter + 1) : setCounter(counter - 1);
	}

	return (
		<div className={styles.counter}>
			<Button id='minus' onClick={handleCounter} disabled={counter < 1}>
				<IconMinus />
			</Button>
			<span>{counter}</span>
			<Button id='plus' onClick={handleCounter}>
				<IconPlus />
			</Button>
		</div>
	);
}

export default Counter;
