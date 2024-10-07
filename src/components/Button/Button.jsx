import styles from "./Button.module.css";

function Button({ children, text, onClick, id, disabled }) {
	return (
		<button id={id} className={styles.button} onClick={onClick} disabled={disabled}>
			{children}
			{text}
		</button>
	);
}

export default Button;
