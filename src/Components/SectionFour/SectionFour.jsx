import React from 'react'
import styles from './SectionFour.module.scss';
import {Row ,Col} from "reactstrap"
const SectionFour = () => {
    return (
        <div  className= {styles.main_container}>
            <Row className= {`${styles.main_div} gx-0`}>
                <Col md={6} xs={12}>
                    <div className= {styles.img_container}>
                    <img src="/Assets/Images/SectionFour/img4.png" alt="Image"/>
                    </div>
                    
                </Col>
                <Col md={6} xs={12}>
                    <div className= {styles.text_container}>
                        <img src="/Assets/Images/SectionFour/img5.png" alt="icon" />
                    <h1>
                    About Alpha Betas
                    </h1>
                    <p>In Alpha Betas, video games are powering the world thanks to a massive, top-secret CIA program. The show follows an elite virtual strike force of four top gamers as they drop into the virtual realms of video games to fix potentially world-ending issues. Known as the Alpha Team, these four willfully reckless and dangerously arrogant guys are the tip of a five-hundred billion dollar US Government spear sent to be heroes in high-octane pixelated worlds. </p>
                    </div>

                </Col>
            </Row>
        </div>
    )
}

export default SectionFour
