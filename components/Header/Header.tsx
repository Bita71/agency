import React from 'react';
import Logo from "../Logo/Logo";
import Container from "../Container/Container";
import styles from './header.module.scss';
import Nav from "../Nav/Nav";
import Button from "../Button/Button";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <Logo/>
                <Nav/>
                <Button className={styles.button}>CONTACT</Button>
            </Container>
        </header>
    );
};

export default Header;