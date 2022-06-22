import React from 'react';
import styles from './container.module.scss'
import classNames from "classnames";

interface IContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container = ({children, className}: IContainerProps) => {
    return (
        <div className={classNames(styles.container, className)}>
            {children}
        </div>
    );
};

export default Container;