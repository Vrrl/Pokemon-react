import { Footer } from "../../components/footer/index";
import { Header } from "../../components/header/index";
import styles from "./styles.module.css";
import pikachuImg from '../../assets/pikachu_home.png'



interface HomeProps {
    
}
 
const Home = () => {
    return (
        <div>
            <div className={styles.page}>
            <Header/>
                <div className={styles.content}>
                    <div className={styles.msg}>
                        <h1><b>Find</b> all your favorite <b>Pokemon</b></h1>
                        <p>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
                        <button>See Pokemons</button>
                    </div>
                    <div className={styles.img}>
                        <img src={pikachuImg}></img>
                    </div>
                </div>
            <Footer/>
            </div>
        </div>
    );
}
 
export default Home;