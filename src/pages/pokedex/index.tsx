import { Footer } from "../../components/footer/index";
import { Header } from "../../components/header/index";
import { Pokemoncard } from "../../components/pokemoncard/index";
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
                    <Pokemoncard/>
                    <Pokemoncard/>
                    <Pokemoncard/>
                    <Pokemoncard/>
                    <Pokemoncard/>
                    <Pokemoncard/>
                </div>
            </div>
        <Footer/>
        </div>
    );
}
 
export default Pokedex;