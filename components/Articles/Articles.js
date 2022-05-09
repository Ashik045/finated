import Link from 'next/link'
import React from 'react'
import ArticleCard from '../ArticleCard/ArticleCard'
import SectionHeader from '../SectionHeader/SectionHeader'
import style from './articles.module.scss'

const Articles = ({articleDetail, articleDetai2}) => {
  return (
    <div className={style.articles}>
        <SectionHeader title="Recent News Articles" text="Recent blogs & Articles about our trusted site. People can get more knowledge with this article."/>

        <div className={style.articles_main}>
            <ArticleCard articleDetail={articleDetail} />

            {articleDetai2 && (
                <div className={style.articles_main_right}>
                    {articleDetai2?.map((detail) => {
                        return (
                            <div key={detail.id}>
                            <div  className={style.articles_main_right_blog}>
                                <h4><span style={{color: 'rgb(114, 112, 112)', marginRight: '5px'}}>By </span> {detail.author}</h4>
                                <Link href="/articleDetail">
                                    <h2>{detail.title}</h2>
                                </Link>
                                
                                <div className={style.article_card_bottom}>
                                    <p>{detail.createdAt}</p>
                                    <p>10 min read</p>
                                </div>
                            </div>
                            {detail.hr && <hr style={{color: 'rgb(230, 227, 227)'}} />}
                        
                        </div>
                        )
                    })}
                </div>
            )}
        </div>
    </div>
  )
}

export default Articles