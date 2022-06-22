import React, {useState} from 'react';
import styles from './catalogcard.module.scss'
import {Category} from "../CatalogCategories/CatalogCategories";
import classNames from "classnames";

export interface IPost {
    category: Category;
    title: string;
    image: string;
}

interface ICatalogCardProps {
    post: IPost;
    changeCategory: (category: Category) => void
    deletePost: (post: IPost) => void
}

const CatalogCard = ({post, changeCategory, deletePost}: ICatalogCardProps) => {
    const [active, setActive] = useState(false);
    const formatCategory = post.category.slice(0, 1).toUpperCase() + post.category.slice(1)
    const handleClickCard = () => setActive(!active)
    const handleClickCategory = () => changeCategory(post.category)
    const handleDelete = () => deletePost(post)
    return (
        <article
            onClick={handleClickCard}
            className={classNames(styles.card, {[styles.active]: active})}
            style={{backgroundImage: `url(/asset/images/posts/${post.image})`}}
        >
            {active && <button onClick={handleDelete} className={styles.delete}>Delete</button>}
            <button className={styles.category} onClick={handleClickCategory}>{formatCategory}</button>
            <h2 className={styles.title}>{post.title}</h2>
        </article>
    );
};

export default CatalogCard;