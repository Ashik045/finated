import React from 'react'
import style from './formheader.module.scss'

const FormHeader = ({header}) => {
  return (
    <div className={style.register_page_main_head}>
            <h1>{header}</h1>
            <div className={style.contact_bottom_btm}></div>
            <hr className={style.contact_bottom_hr} />
    </div>
  )
}

export default FormHeader