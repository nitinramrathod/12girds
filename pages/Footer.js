import styles from "../styles/Footer.module.css"
import Head from 'next/head'
import Script from "next/script";

const Footer = () => {
    return (<>


        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />


        {/* google fonts and logo */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        <section className={styles.footerContainer}>
            <div className="container px-4 px-sm-0">

                <div className="row">
                    <div className="col-sm-12 col col-md-6">
                        <div className={styles.nrWraper}>
                            <p className={styles.tel}>+91 96641 85801</p>
                            <h3 className={styles.brand}>12GRIDS</h3>
                            <p className={styles.add}>202, Jai Estate, Mumbai. India - 421203.</p>
                            <h2 className={styles.handlers}>
                                <i className="fa-brands fa fa-twitter"></i>
                                <i className="fa-brands fa-linkedin-in"></i>
                                <i className="fa-brands fa-facebook-f"></i>
                            </h2>
                            <hr className={styles.line} />

                        </div>

                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className={styles.footerNav}>
                            <a className={styles.navLink} href="/">Work</a>
                            <a className={styles.navLink} href="/">About</a>
                            <a className={styles.navLink} href="/">Insight</a>
                            <a className={styles.navLink} href="/">Contact</a>
                        </div>


                    </div>
                </div>
                <div className="row"></div>
            </div>
        </section>

        <Script src="https://kit.fontawesome.com/ec03c39ff5.js" crossorigin="anonymous"></Script>
    </>);
}

export default Footer;