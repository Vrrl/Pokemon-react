import { Footer } from "../../components/footer/index";
import { Header } from "../../components/header/index";
import { Pokemoncard } from "../../components/pokemoncard/index";
import styles from "./styles.module.css";
import { usePokemon } from '../../context/pokemon'


 
const Pokedex = () => {
    // @ts-ignore
    const {pokemonList, searchValue, types, abilities, handleGetPrevPage, handleGetNextPage, handleChangeSearchValue,handleChangeTypeFilter, handleChangeAbilityFilter} = usePokemon()

    return (
        <div className={styles.page}>
        <Header/>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>800 <b>Pokemons</b> for you to choose your favorite</h1>
                <input type="text" className={styles.search} placeholder="Encuentra tu pokemon"/>
                <div className={styles.filters}>
                    <select name="Tipos" id="Tipos">
                        <option disabled>Tipos</option>
                        {types.map(type => <option value="volvo">{type.name}</option>)}
                    </select>
                </div>
                <div className={styles.pokemons}>
                {pokemonList.map(pokemonData => <Pokemoncard pokemonData={pokemonData}/>)}
                </div>
            </div>
        <Footer/>
        </div>
    );
}
 
export default Pokedex;