import styles from './styles.module.css'

export const Loader = () => {
    return (
        <div className={styles.main}>
            <div className={styles.load}></div>
        </div>
    )
}