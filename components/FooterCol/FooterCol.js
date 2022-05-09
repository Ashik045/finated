import Link from 'next/link'
import React from 'react'
import style from './footercol.module.scss'

const FooterCol = ({footerDetail, header}) => {
  return (
    <div className={style.foote_col}>
      <h2>{header}</h2>
      {footerDetail.map((item) => {
        return <Link key={item.id} href={item.to}>
          <p  className={style.foote_col_item}>{item.link}</p>
        </Link>
      })}
    </div>
  )
}

export default FooterCol