import logo from "../../assets/logo.svg";
import styles from "./styles.module.css";
import { AiOutlineMenu } from "react-icons/ai"
import useMenuContext from "../../hooks/useMenuContext";
import { Link } from "react-router-dom";
import { MenuContextProvider } from "../../context/menu";

export const Header = () => {

	const {switchBoll} = useMenuContext();

	return (
		<MenuContextProvider>
			<header className={styles.header_background}>
        <div className={styles.header}>
          <img className={styles.logo} src={logo} alt="Logo principal do sistema"/>
          <AiOutlineMenu className={styles.icon} onClick={()=> switchBoll()}/>
          <nav className={styles.nav}>
            <Link className={styles.menu} to="/">
              Home
              <div className={styles.underline}/>  
            </Link>  
            <Link className={styles.menu} to="/">
              Pokedex
              <div className={styles.underline}/>
            </Link> 
            <Link className={styles.menu} to="/">
              Lengendaries
              <div className={styles.underline}/>
            </Link>  
            <Link className={styles.menu} to="https://pokeapi.co/docs/v2">
              Documentation
              <div className={styles.underline}/>
            </Link>
          </nav>
        </div>

			</header>
		</MenuContextProvider>
	);
};