import React, {ButtonHTMLAttributes} from 'react';
import styles from "./button.module.scss";
import classNames from "classnames";

const Button = ({children, className, ...props}: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className={classNames(styles.button, className)} {...props}>{children}</button>
    );
};

export default Button;