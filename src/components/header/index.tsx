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
			<header>
        <div className={styles.header}>
          <img className={styles.logo} src={logo} alt="Logo principal do sistema"/>
          <nav className={styles.nav}>
            <Link className={styles.menu} to="/">
              Home
              <div className={styles.underline}/>  
            </Link>  
            <Link className={styles.menu} to="/pokedex">
              Pokedex
              <div className={styles.underline}/>
            </Link> 
            <Link className={styles.menu} to="/legendaries">
              Lengendaries
              <div className={styles.underline}/>
            </Link>  
            <Link className={styles.menu} to="https://pokeapi.co/docs/v2">
              Documentation
              <div className={styles.underline}/>
            </Link>
          </nav>

          
          <AiOutlineMenu className={styles.icon}/>
        </div>


        {/* <div className={styles.modal}>

        </div> */}
			</header>
		</MenuContextProvider>
	);
};