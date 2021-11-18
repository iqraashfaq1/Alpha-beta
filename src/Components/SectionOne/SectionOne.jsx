import React from 'react'
import { Row,Col ,Button} from 'reactstrap'
import styles from './SectionOne.module.scss';


const SectionOne = () => {
    return (
        <div className= {styles.main_container}>
            <Row  className= {`${styles.main_div} gx-0`}>
                <Col md={6} sm={12}>
                    <div  className= {styles.text_container}>
                    <h1>Alpha Betas</h1>
                    <p>
                    In Alpha Betas, video games are powering the world thanks to a massive, top-secret CIA program. The show follows an elite virtual strike force of four top gamers as they drop into the virtual realms of video games to fix potentially world-ending issues. Known as the Alpha Team, these four willfully reckless and dangerously arrogant guys are the tip of a five-hundred billion dollar US Government spear sent to be heroes in high-octane pixelated worlds.
                    </p>
                    
                    <div className= {styles.btn_container}>
                    <Button className= {styles.btn1_container}>View Collection</Button>
                  <Button className= {styles.btn2_container}> Discord</Button>
                    </div>
                    </div>
                     </Col>
                <Col md={6} sm={12}><img src="/Assets/Images/SectionOne/leftImage.png" alt="" /></Col>
            </Row>
        </div>
    )
}

export default SectionOne
