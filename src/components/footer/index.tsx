import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export const Footer = () => {

	return (
		<div className={styles.footer}>
      <p>Make with ❤️ for the PokéSpartans team Platzi Master</p>
      <Link className={styles.link} to="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUTbmV2ZXIgZ29ubmEgZ2l2ZSB1cA%3D%3D">
        Our Team
      </Link>
    </div>
	);
};