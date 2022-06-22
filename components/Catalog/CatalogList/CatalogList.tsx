import React from 'react';
import CatalogCard, {IPost} from "../CatalogCard/CatalogCard";
import {Category} from "../CatalogCategories/CatalogCategories";
import {generateRandomIndex} from "../../../utils/ts/generateRandomIndex";
import styles from './cataloglist.module.scss';

interface ICatalogListProps {
    list: IPost[];
    changeCategory: (category: Category) => void
    deletePost: (post: IPost) => void
}

const CatalogList = ({list, changeCategory, deletePost}: ICatalogListProps) => {
    return (
        <ul className={styles.list}>
            {list.map((post) =>
                <li key={generateRandomIndex()}>
                    <CatalogCard deletePost={deletePost} post={post} changeCategory={changeCategory}/>
                </li>)}
        </ul>
    );
};

export default CatalogList;