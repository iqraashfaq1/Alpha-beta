import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className= {styles.main_container}>
            <div className= {styles.text_container}>
            <p>The Sunny Leone Collection | Powered <br /> by Mintdropz</p>
            </div>
           <div className= {styles.img_container}>
           <img src="/Assets/Images/Footer/icon1.png" alt="icon" />
            <img src="/Assets/Images/Footer/icon2.png" alt="icon" />
            <img src="/Assets/Images/Footer/icon3.png" alt="icon" />
            <img src="/Assets/Images/Footer/icon4.png" alt="icon" />
            <img src="/Assets/Images/Footer/icon5.png" alt="icon" />

           </div>

           
        </div>
    )
}

export default Footer
