import { Footer } from "../../components/footer/index";
import { Header } from "../../components/header/index";
import styles from "./styles.module.css";
import pikachuImg from '../../assets/pikachu_home.png'
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div className={styles.page}>
        <Header/>
            <div className={styles.content}>
                <div className={styles.msg}>
                    <h1><b>Find</b> all your favorite <b>Pokemon</b></h1>
                    <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
                    <Link to='/pokedex'>
                        <button>See Pokemons</button>
                    </Link>
                </div>
                <div className={styles.img}>
                    <img src={pikachuImg}></img>
                </div>
            </div>
        <Footer/>
        </div>
    );
}
 
export default Home;