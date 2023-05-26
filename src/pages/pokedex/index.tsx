import { Footer } from "../../components/footer/index";
import { Header } from "../../components/header/index";
import { Pokemoncard } from "../../components/pokemoncard/index";
import styles from "./styles.module.css";
import { usePokemon, typeColor } from '../../context/pokemon'
import Modal from 'react-modal';
import { useState } from "react";

 
const modalStyles = {
    content: {
        padding: '0px',
        borderRadius: '18px',
        maxWidth: '900px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
  };

const Pokedex = () => {
    const { pokemonList, searchValue, types, abilities,
        handleGetPrevPage, handleGetNextPage, handleChangeSearchValue,
        handleChangeTypeFilter, handleChangeAbilityFilter } = usePokemon()
    const [modalIsOpen, setIsOpen] = useState<boolean>(false)

    const [modalPokemon, setModalPokemon] = useState<any>({})

    const openModal = (pokemonData: any) => {
        console.log(pokemonData)
        setModalPokemon(pokemonData)
        setIsOpen(true);
      }

    
    const closeModal = () => {
        
        setIsOpen(false);
    }

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
                {pokemonList.map(pokemonData => <Pokemoncard pokemonData={pokemonData} onClick={() => openModal(pokemonData)} key={pokemonData.id}/>)}
                </div>

                <div className={styles.pagination}>
                    <button onClick={handleGetPrevPage}>❮</button>
                    <button onClick={handleGetNextPage} >❯</button>
                </div>
            </div>


            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyles}>
                <div className={styles.modalwrapper} style={{backgroundColor: modalPokemon?.backgroundColor}}>
                    <div className={styles.modalleft}>
                        <img src={modalPokemon?.sprite} />
                    </div>
                    <div className={styles.modalright}>
                        <div className={styles.modaltitle}>
                            <h1>{modalPokemon?.name}</h1>
                            <div>{modalPokemon?.exp}</div>
                        </div>
                        <div className={styles.modalabilities}>
                            <p>Abilities</p>
                            {modalPokemon && modalPokemon.abilities && modalPokemon.abilities.map(ab => <span>{ab} </span>)}
                        </div>
                        <div className={styles.modalhpxp}>
                            <div>
                                <p>Health Points</p>
                                <h6>{modalPokemon?.hp}</h6>
                                <div style={{backgroundColor: "green"}}></div>
                            </div>

                            <div>
                                <p>Experience</p>
                                <h6>{modalPokemon?.exp}</h6>
                                <div style={{backgroundColor: "yellow"}}></div>
                            </div>

                        </div>
                        <div className={styles.modalattr}>
                            <div>
                                <div>{modalPokemon?.defense}</div>
                                <p>Defense</p>
                            </div>

                            <div>
                                <div>{modalPokemon?.attack}</div>
                                <p>Attack</p>
                            </div>

                            <div>
                                <div>{modalPokemon?.spAttack}</div>
                                <p>Sp Attack</p>
                            </div>

                            <div>
                                <div>{modalPokemon?.spDefense}</div>
                                <p>Sp Defense</p>
                            </div>
                        </div>


                    </div>
                </div>
            </Modal>
        <Footer/>
        </div>
    );
}
 
export default Pokedex;