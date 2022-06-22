import React from 'react';
import styles from './intro.module.scss'
import Container from "../Container/Container";

const Intro = () => {
    return (
        <section className={styles.intro}>
            <Container className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Portfolio</h1>
                    <p className={styles.text}>Agency provides a full service range including technical skills, design,
                        business understanding.</p>
                </div>
            </Container>
        </section>
    );
};

export default Intro;