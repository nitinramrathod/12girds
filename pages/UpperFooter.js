import styles from "../styles/UpperFooter.module.css"

const UpperFooter = () => {
    return (<>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />

            {/* google fonts and logo */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
     



        <div className={styles.container}>
            <div className={styles.box}>
                <div className="container d-flex flex-column">
                    <p className={styles.text} data-aos='fade-up'>
                        Let’s Meet Up!
                    </p>
                    <h2 className={styles.headline} data-aos='fade-up'>
                        Looking for a website or SEO?
                    </h2>
                    <button className={styles.btn} data-aos='fade-up'>Schedule a Meet &#8599;</button>

                </div>

            </div>

        </div>

    </>);
}

export default UpperFooter;