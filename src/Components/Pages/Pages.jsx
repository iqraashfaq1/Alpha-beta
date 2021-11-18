import React from 'react'
import styles from './Pages.module.scss';
import SectionOne from '../SectionOne/SectionOne'
import SectionTwo from '../SectionTwo/SectionTwo'
import {Row,Col} from "reactstrap"
import SectionThree from '../SectionThree/SectionThree';
import SectionFour from '../SectionFour/SectionFour';
import SectionFive from '../SectionFive/SectionFive';


const pics =[
    "/Assets/Images/SectionTwo/pic1.png",
    "/Assets/Images/SectionTwo/pic6.png",
    "/Assets/Images/SectionTwo/pic3.png",
    "/Assets/Images/SectionTwo/pic5.png",
    "/Assets/Images/SectionTwo/pic5.png",
    "/Assets/Images/SectionTwo/pic6.png",

] 


const Pages = () => {
    return (
        <div>
            <SectionOne/>
            <div className= {styles.first_container}>
            <h1>
            Meet The Cast Behind Alpha Betas 
            </h1>
            <p>Learn More About The Show on the about page </p>
            </div>
            <div className= {styles.second_container}>
<Row className= {`${styles.main_div} gx-0`}>
{ 

pics.map(function(item,index){

    return (
        <Col md={4} sm={12} >
<SectionTwo key={index} pics={pics[index]} />
        </Col>
 
    )
})
}
</Row>
    

</div>
<SectionThree/>
<SectionFour/>
<SectionFive/>
        </div>
    )
}

export default Pages
