import styles from "../styles/LowerFooter.module.css"

function LowerFooter() {
    return (<>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        {/* google fonts and logo */}
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <section className={styles.LowerFooterWraper}>
            <div className="container px-4 px-md-0">
                <div className="row d-flex ">
                  
                    <div className="col-12 col-md-3 order-md-2 d-flex justify-content-center justify-content-md-end">
                        <div className={styles.termConWraper}>
                            <p className={styles.termCon}>Privacy policy </p>
                            <p className={styles.termCon}> Terms of use</p>
                        </div>

                    </div>
                    <div className="col-12 col-md-9 d-flex justify-content-center justify-content-sm-start order-md-1 ">
                        <p className={styles.copyright}>
                            12Grids is a brand of Tantragyan Technologies Pvt Ltd which is a company registered in India. © 2021 All Rights Reserved.
                        </p>

                    </div>
                    
                </div>
            </div>
        </section>


    </>)
}

export default LowerFooter