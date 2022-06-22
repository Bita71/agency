import React from 'react';
import {generateRandomIndex} from "../../utils/ts/generateRandomIndex";
import Link from "../Link/Link";
import styles from './nav.module.scss'

const list = [
    {
        text: 'About',
        href: '/about',
    },
    {
        text: 'Services',
        href: '/services',
    },
    {
        text: 'Pricing',
        href: '/pricing',
    },
    {
        text: 'Blog',
        href: '/blog',
    }
]

const Nav = () => {
    return (
        <nav>
            <ul className={styles.list}>
                {list.map(({href, text}) =>
                    (<li className={styles.item} key={generateRandomIndex()}>
                        <Link className={styles.link} href={href}>{text}</Link>
                    </li>))}
            </ul>
        </nav>
    );
};

export default Nav;