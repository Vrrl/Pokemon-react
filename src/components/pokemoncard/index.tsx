import styles from "./styles.module.css";
import { PokemonData, typeColor } from '../../context/pokemon'

interface Props {
  pokemonData: PokemonData
  // handleClick(): void
}

export const Pokemoncard = ({pokemonData}: Props) => {

  return (
    <div className={styles.pokemon}>
      <div className={styles.left}>
        <h6 className={styles.name}>{pokemonData.name}</h6>
        <div className={styles.status}>
          <div>
            <div className={styles.value}>{pokemonData.attack}</div>
            <p>Attack</p>
          </div>
          <div>
            <div className={styles.value}>{pokemonData.defense}</div>
            <p>Defense</p>
          </div>
        </div>
        <div className={styles.types}>
          {
            pokemonData.types.map((type, i) => (
              <small className={i === 0 ? styles.type : styles.typeMargin}
              style={{backgroundColor: typeColor[type]}}>{type}</small>
            ))
          }
        </div>
      </div>
      <div className={styles.right} style={{background: pokemonData.backgroundColor}}>
        <img src={pokemonData.sprite}/>
      </div>
    </div>
  );
};