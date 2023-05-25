import { useRouteError } from "react-router-dom";
import styles from "./styles.module.css";
import rocketTeamImg from '../../assets/rocket_team.png'

import { Link } from "react-router-dom";

interface ErrorProps {
    data: any;
    status: number;
    statusText: string;
    message?: string;
}
 
const Error = () => {
    const error = useRouteError() as ErrorProps
    console.log(error)
    return (
        <section className={styles.section}>
            <p className={styles.number}>{error.status}</p>
            <img src={rocketTeamImg} className={styles.img} alt="" />
            <p className={styles.message}><i>The rocket team</i> has won this time.</p>
            <Link to="/">
                <button className={styles.button}>Return</button>
            </Link>
        </section>
    );
}
 
export default Error;