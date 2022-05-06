import React from 'react'
import style from './footercol.module.scss'

const FooterCol = ({footerDetail, header}) => {
  return (
    <div className={style.foote_col}>
      <h2>{header}</h2>
      {footerDetail.map((item) => {
        return <p key={item.id} className={style.foote_col_item}>{item.link}</p>
      })}
    </div>
  )
}

export default FooterCol