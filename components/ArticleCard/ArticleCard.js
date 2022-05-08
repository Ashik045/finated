import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from './articleCard.module.scss'

const ArticleCard = ({articleDetail}) => {
  return (
    <div className={style.article_cards}>
        {articleDetail.map((detail) => {
            return (
                <div key={detail.id} className={style.article_card}>
                <Link href={`/article/${detail.id}`}>
                    <Image src={detail.image} alt="article" className={style.article_card_img} height={350} width={500}/>
                </Link>
                    <h4><span style={{color: 'rgb(114, 112, 112)', marginRight: '5px'}}>By </span> {detail.author}</h4>
                    <Link href={`/article/${detail.id}`}>
                        <h2>{detail.title}</h2>
                    </Link>
                    
                    <div className={style.article_card_bottom}>
                        <p>{detail.createdAt}</p>
                        <p>10 min read</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default ArticleCard