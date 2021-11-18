import React from 'react'
import { Button } from 'reactstrap'
import styles from './SectionThree.module.scss';
const SectionThree = () => {
    return (
        <div className= {styles.main_container}>
            <div className= {styles.btn_container}>
            <Button>Buy Token</Button>
            </div>
           
        
            <div className= {styles.first_container}>
            <h1>
            Meet The Cast Behind Alpha Betas 
            </h1>
            <p>Learn More About The Show on the about page </p>
            </div>
            <div  className= {styles.btn_container}>
            <Button>Buy Token</Button>
            </div>
            <div  className= {styles.img_container}>
                <img src="/Assets/Images/SectionThree/img3.png" alt="" />
            </div>
            <div className= {styles.text_container} >
                <h1>
                The Exclusive Alpha Betas NFT Collection
                </h1>
                <p>
                In Alpha Betas, video games are powering the world thanks to a massive, top-secret CIA program. The show follows an elite virtual strike force of four top gamers as they drop into the virtual realms of video games to fix potentially world-ending issues. Known as the Alpha Team, these four willfully reckless and dangerously arrogant guys are the tip of a five-hundred billion dollar US Government spear sent to be heroes in high-octane pixelated worlds.
                </p>
               
            </div>
            <div className= {styles.btnn_container}>
                    <Button className= {styles.btn1_container}>View Collection</Button>
                  <Button className= {styles.btn2_container}> Discord</Button>
                    </div>
        </div>
    )
}

export default SectionThree
