import React from 'react'
import Image from 'next/image'

const WorkCards = (props) => {

    return (
        <div className={`col-sm-12  col-md-6 col-text ${props.cardNo % 2 === 0 ? 'second-col' : 'first-col'}`}>
            <div>


                <h3 className='img-headline-text' data-aos='fade-up'>Website {props.cardNo}</h3>
                <a href='#' className="image-box" data-aos='fade-up'>
                    <Image className='product-img'
                        src="/ProjectsLogo/rir-listing.webp"
                        alt="Picture of the author"
                        width={532}
                        height={408}
                    />
                    <div className="product-name">

                        <div className="hoverMe">
                            <Image src="/ProjectsLogo/rir.webp" alt="Logo" width={300} height={225} />
                        </div>

                    </div>
                </a>
                <p className='img-bottom-text' data-aos='fade-up'>Reimagining the digital identity of India’s Power Electronics giant.</p>
            </div>
        </div>


    )
}

export default WorkCards