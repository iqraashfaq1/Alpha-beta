import React , {useState} from 'react'
import styles from './Header.module.scss';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
  } from 'reactstrap';
  import './Override.scss';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
        <div>
              <Navbar color="light" light expand="md"  className={styles.main_nav}>
        <NavbarBrand href="/" className={styles.logo_container}>
        
          <img src="/Assets/Images/Header/logo.png" alt="logo" className={styles.logo}/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav  className={`${styles.nav_menu} mr-auto`} >
            <NavItem className={styles.nav_item}>
              <NavLink>Home</NavLink>
            </NavItem>
            <NavItem className={styles.nav_item}>
              <NavLink>Episodes</NavLink>
            </NavItem>
            <NavItem className={styles.nav_item}>
              <NavLink>Buy Now</NavLink>
            </NavItem>
            <NavItem className={styles.nav_item}>
              <NavLink>About</NavLink>
            </NavItem>
            <NavItem className={styles.nav_item}>
              <NavLink>FAQ</NavLink>
            </NavItem>
          
          </Nav>
        
          <Button className={styles.proj_btn1}> Sign In  </Button>
        
        <Button className={styles.proj_btn2}> Sign Up  </Button>
         
         
        </Collapse>
    
      </Navbar>
    
        </div>
    )
}

export default Header
