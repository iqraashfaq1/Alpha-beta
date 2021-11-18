import React from 'react'
import { Button } from 'reactstrap'
import styles from './SectionFive.module.scss'

const SectionFive = () => {
    return (
        <div className= {styles.main_container}>
            <div className= {styles.first_container}>
                <img src="/Assets/Images/SectionFive/img6.png" alt="image" />
                <p>This NFT Platform is Brought to you By <span>Mintdropz</span> <br /> <br />
                     Mintdropz empowers creators to launch thier own NFT’s on their own <br /> Platform with NFT’s, Merch, Content, Community, and more!</p>
            
            </div>
            <hr />
            <div className= {styles.second_container}>
                <input type ="email" placeholder="Enter your email"/>
                <Button>Subscribe</Button>
            </div>
            <hr />
        </div>
    )
}

export default SectionFive
