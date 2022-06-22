import React, {useMemo, useState} from 'react';
import styles from './catalog.module.scss'
import CatalogCategories, {Category} from "./CatalogCategories/CatalogCategories";
import Container from "../Container/Container";
import CatalogList from "./CatalogList/CatalogList";
import {IPost} from "./CatalogCard/CatalogCard";
import Button from "../Button/Button";

const defaultPosts: IPost[] = [{image: '1.jpg', category: Category['design'], title: 'SOFA'},
    {image: '2.jpg', category: Category['branding'], title: 'KeyBoard'},
    {image: '3.jpg', category: Category['illustration'], title: 'Work Media'},
    {image: '4.jpg', category: Category['motion'], title: 'Work Media'},
    {image: '5.jpg', category: Category['design'], title: 'Abstract'},
    {image: '6.jpg', category: Category['branding'], title: 'HandP'},
    {image: '7.jpg', category: Category['motion'], title: 'Architect'},
    {image: '8.jpg', category: Category['design'], title: 'CalC'},
    {image: '9.jpg', category: Category['branding'], title: 'Sport'},]

const Catalog = () => {
    const [posts, setPosts] = useState<IPost[]>(defaultPosts)
    const [category, setCategory] = useState(Category['all'])
    const handleChangeCategory = (category: Category) => {
        setCategory(category)
    }

    const filteredList = useMemo(() => {
        if (category === 'all') {
            return posts
        }

        return posts.filter((item) => item.category === category)
    }, [category, posts])

    const loadMore = () => {
        const page = Math.ceil(posts.length / 9) + 1
        let newPosts;
        if (category == 'all') {
            newPosts = defaultPosts.map((item) => ({...item, title: `${item.title} ${page}`}));
        } else {
            newPosts = defaultPosts.map((item) => ({...item, category: category, title: `${item.title} ${page}`}))
        }
        setPosts([...posts, ...newPosts])
    }

    const deletePost = (post: IPost) => {
        setPosts(posts.filter((item) => item !== post))
    }

    return (
        <section>
            <Container className={styles.container}>
                <CatalogCategories
                    active={category}
                    changeCategory={handleChangeCategory}
                />
                <CatalogList deletePost={deletePost} list={filteredList} changeCategory={handleChangeCategory}/>
                <Button onClick={loadMore} className={styles.button}>LOAD MORE</Button>
            </Container>
        </section>
    );
};

export default Catalog;