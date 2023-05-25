import { Footer } from "../../components/footer/index";
import { Header } from "../../components/header/index";
import styles from "./styles.module.css";


interface PokedexProps {
    
}
 
const Pokedex = () => {
    return (
        <div className={styles.page}>
        <Header/>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>800 <b>Pokemons</b> for you to choose your favorite</h1>
                <input type="text" className={styles.search} placeholder="Encuentra tu pokemon"/>
                <div className={styles.filters}>
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                    </select>
                    <select name="cars" id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                    </select>
                </div>
                <div className={styles.pokemons}>
                    <div className={styles.pokemon}>
                        <div className={styles.left}>
                            <h6 className={styles.name}>Pyroar</h6>
                            <div className={styles.status}>
                                <div>
                                    <div className={styles.value}>491</div>
                                    <p>Attack</p>
                                </div>
                                <div>
                                    <div className={styles.value}>491</div>
                                    <p>Defense</p>
                                </div>
                            </div>
                            <div className={styles.types}>
                                <small>Grass</small>
                                <small>Poison</small>
                            </div>
                        </div>
                        <div className={styles.right}></div>
                    </div>
                </div>
            </div>
        <Footer/>
        </div>
    );
}
 
export default Pokedex;