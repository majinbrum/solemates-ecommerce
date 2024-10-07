import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import styles from "./Default.module.css";

function Default() {
	return (
		<>
			<div className={styles.container}>
				<Navbar />
				<Outlet />
			</div>
			<div className={styles.attribution}>
				Challenge by{" "}
				<a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
					Frontend Mentor
				</a>
				. Coded by <a href='#'>Bruna Alamia</a>.
			</div>
		</>
	);
}

export default Default;
