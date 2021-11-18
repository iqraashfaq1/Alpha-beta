import React from 'react'
import { Button,Row,Col } from 'reactstrap';
import styles from './SectionTwo.module.scss';

const SectionTwo = ({pics}) => {
    return (
       
           

            <div className= {styles.main_container}>
             
                    <div className= {styles.inner_container}>
                    <img src={pics} alt="" />
                        <h1>Evan Fong</h1>
                        <Button>As</Button>
                        
                    </div>
                      
                
                    
            </div>
           
      
    )
}

export default SectionTwo
