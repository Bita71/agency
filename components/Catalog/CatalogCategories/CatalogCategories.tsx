import React from 'react';
import {generateRandomIndex} from "../../../utils/ts/generateRandomIndex";
import classNames from "classnames";
import styles from './catalogcategories.module.scss'
import Select from "../../Select/Select";

export enum Category {
    all = 'all',
    design = 'design',
    branding = 'branding',
    illustration = 'illustration',
    motion = 'motion',
}

interface IItem {
    label: string;
    value: Category
}

const list: IItem[] = [
    {
        label: 'Show All',
        value: Category['all'],
    },
    {
        label: 'Design',
        value: Category['design'],
    },
    {
        label: 'Branding',
        value: Category['branding'],
    },
    {
        label: 'Illustration',
        value: Category['illustration'],
    },
    {
        label: 'Motion',
        value: Category['motion'],
    }
]

interface ICatalogCategoriesProps {
    className?: string;
    active: Category;
    changeCategory: (category: Category) => void;
}

const CatalogCategories = ({className, active, changeCategory}: ICatalogCategoriesProps) => {
    const activeOption = list.find(item => item.value === active)
    const handleChange = ({value, label}: IItem) => changeCategory(value)
    return (
        <>
            <ul className={classNames(styles.list, className)}>
                {list.map(({label, value}) => {
                    const isActive = active === value;
                    const handleClick = () => changeCategory(value)
                    return (
                        <li className={styles.item} key={generateRandomIndex()}>
                            <button
                                disabled={isActive}
                                className={classNames(styles.button, {[styles.active]: isActive})}
                                onClick={handleClick}
                            >
                                {label}
                            </button>
                        </li>
                    )
                })}
            </ul>
            <label className={styles.select}>
                <Select
                    id='category-select'
                    instanceId='category-select'
                    options={list}
                    activeOption={activeOption}
                    onChange={handleChange}
                    defaultValue={list[0]}
                />
            </label>
        </>
    );
};

export default CatalogCategories;