import Link from 'next/link'
import React from 'react'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Newsletter from '../../components/Newsletter/Newsletter'
import PageHeader from '../../components/PageHeader/PageHeader'
import Pagination from '../../components/Pagination/Pagination'
import blog1 from '../../images/blog1.jpg'
import blog2 from '../../images/blog2.jpg'
import blog3 from '../../images/blog3.jpg'
import blog4 from '../../images/blog4.jpg'
import blog5 from '../../images/blog5.jpg'
import style from '../../styles/article.module.scss'

const articleDetail = [
    {
        id: 1,
        image: blog1,
        author: 'Aguilera Snea',
        title: 'Established fact and readeren will distracted the readable content.',
        createdAt: '2 June, 2021',
    },
    {
        id: 2,
        image: blog2,
        author: 'Devid Hyou',
        title: 'It long established fact that reader will distracted the readable.',
        createdAt: '22 Jan, 2020',
    },
    {
        id: 3,
        image: blog3,
        author: 'Julia Deo',
        title: 'Certified Safety Professional With Manufacturing and Construction.',
        createdAt: '2 Jan, 2022',
    },
    {
        id: 4,
        image: blog4,
        author: 'Loi Yang',
        title: 'Strategic Minded Executive Committed to Building Successful.',
        createdAt: '11 Dec, 2018',
    },
    {
        id: 5,
        image: blog5,
        author: 'Devid Bombal',
        title: 'It long established fact that reader will distracted the readable.',
        createdAt: '22 Jan, 2020',
    },
]



const index = () => {
    
    const categoryDetail = [
        {
            id: 1,
            text: 'Accounting/Finance (201)'
        },
        {
            id: 2,
            text: 'Education/Training (201)'
        },
        {
            id: 3,
            text: 'Health & Fitness (69)'
        },
        {
            id: 4,
            text: 'Production/Opration (132)'
        },
        {
            id: 5,
            text: 'Design/Creative (91)'
        },
        {
            id: 6,
            text: 'Engineer/Architects (191)'
        },
        {
            id: 7,
            text: 'Telecomunication (400)'
        },
        {
            id: 8,
            text: 'Marketing/Sales (333)'
        },
    ]
    

  return (
    <div className={style.article_page}>
        <Navbar />
        <PageHeader title="Recent Articles" />

        <div className={style.article_page_main}>
            <div className={style.article_page_left}>
                <div className={style.left_category}>
                        <h2>Popular Category</h2>
                        <div className={style.left_category_btm}></div>
                        <div className={style.left_category_btns}>
                            {categoryDetail.map((btns) => {
                                return <Link href="/jobs" key={btns.id}>
                                    <button>{btns.text}</button>
                                </Link>
                            })}
                        </div>
                    </div>
            </div>

            <ArticleCard articleDetail={articleDetail} />
        </div>
            <Pagination />

        <Newsletter />
        <Footer />
    </div>
  )
}

export default index